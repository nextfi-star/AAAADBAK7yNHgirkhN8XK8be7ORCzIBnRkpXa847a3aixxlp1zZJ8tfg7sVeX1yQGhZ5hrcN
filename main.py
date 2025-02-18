# Api URL: http://nextfi.io:5000/api/v1/
# Setup: pip install -r requirements.txt
# Run: /usr/bin/python3.12 main.py

# Импортируем необходимые модули
from flask import Flask, send_from_directory, jsonify, request
from flask_cors import CORS
from datetime import datetime
from pathlib import Path
from modules.exdb import exDB
import os, re, random, logging, hashlib, base64, json, time, signal
from smsaero import SmsAero, SmsAeroException
from apscheduler.schedulers.background import BackgroundScheduler
import traceback, requests, pyotp, qrcode, geoip2.database
from user_agents import parse
from io import BytesIO
import sendgrid
from sendgrid.helpers.mail import Mail, Email, To, Content

# Получение пути директориям
home_directory = os.path.expanduser("~")
logs_directory = os.path.join(home_directory, 'logs')
uploads_directory = os.path.join(home_directory, 'uploads')

# Создаем экземпляр приложения Flask
app = Flask(__name__, static_folder='static')

# Ограничение размера данных
app.config['MAX_CONTENT_LENGTH'] = 2 * 1024 * 1024  # 2MB max-limit

# Настройка загрузки файлов
app.config['UPLOAD_FOLDER'] = uploads_directory

# Включаем CORS защиту
CORS(app)  # Доступ для всех

# Создание директорий для (логов / файлов)
try:
    if not os.path.exists(logs_directory):
        os.makedirs(logs_directory)
    if not os.path.exists(uploads_directory):
        os.makedirs(uploads_directory)
except Exception as e:
    print(f"Failed to create logs directory: {str(e)}")
    exit(1)

# Настройка логирования
logging.basicConfig(
    filename=os.path.join(logs_directory, f'app_{datetime.now().strftime("%Y%m%d")}.log'),
    level=logging.INFO,
    datefmt='%Y-%m-%d %H:%M:%S',
    format='%(asctime)s - %(levelname)s - %(message)s'
)

# Загружаем конфиг файл
try:
    config_path = Path("settings/config.json")
    with config_path.open("r") as config_file:
        config = json.load(config_file)
    if config is None:
        logging.error("Configuration not loaded")
        raise
except Exception as e:
    logging.error(f"Failed to load config: {str(e)}")
    raise

# Создаем подключение к бд
def get_db_connection():
    db = None
    try:
        if not config:
            logging.error("Configuration not loaded")
            return None
        
        db = exDB(
            host=config.get('db', {}).get('host'),
            username=config.get('db', {}).get('username'),
            passwd=config.get('db', {}).get('password'),
            dbname=config.get('db', {}).get('database'),
            port=config.get('db', {}).get('port', False)
        )
        return db
    except Exception as e:
        logging.error(f"Database connection error: {str(e)}")
        if db:
            db.close()
        return None

# Защита от XSS атак
def sanitize_input(data, low=True):
    if not isinstance(data, str):
        return data
    
    data = re.sub(r'<[^>]*>', '', data)
    data = re.sub(r'[<>"\'/;\\]', '', data)
    data = ''.join(char for char in data if ord(char) >= 32)
    data = data.strip()
    
    # Fix Upper Letter Hack
    if low:
        data = data.lower()
    
    return data

# Подключаем БД стран
try:
    country_db = Path("settings/GeoLite2-Country.mmdb")
    reader = geoip2.database.Reader(country_db)
except Exception as e:
    logging.error(f"Failed to load GeoIP database: {str(e)}\n{traceback.format_exc()}")
    reader = None

# Получаем страну юзера
def get_country():
    ip_address = request.remote_addr
    try:
        response = reader.country(ip_address)
        country = response.country.name
        return str(country)
    except Exception as e:
        logging.error(f"Get country error: {str(e)}\n{traceback.format_exc()}")
        return "Unknown"

# Авто рестарт сервера
def restart_server():
    logging.info("Restarting server...")
    os.kill(os.getpid(), signal.SIGHUP)

# Выполняем задачу каждый день в 0:00
def schedule_restart():
    scheduler = BackgroundScheduler()
    scheduler.add_job(restart_server, 'cron', hour=0, minute=0)
    scheduler.start()

# Получаем данные сесии юзера
def get_user_session():
    try:
        ip_address = request.remote_addr
        user_agent_string = request.headers.get('User-Agent')
        user_agent = parse(user_agent_string)
        country = get_country()
        osb = user_agent.os.family
        device = user_agent.device.family
        browser = user_agent.browser.family
        return {"ip_address": ip_address, "user_agent": user_agent_string, "country": country, "os": osb, "device": device, "browser": browser}
    except Exception as e:
        logging.error(f"Get user session error: {str(e)}\n{traceback.format_exc()}")
        return None

# Получаем MD5 хеш файла
def get_file_md5(file):
    # Создаем объект хеширования
    md5_hash = hashlib.md5()
    
    # Читаем файл по частям
    for chunk in iter(lambda: file.read(4096), b""):
        md5_hash.update(chunk)
    
    # Возвращаем хеш в шестнадцатеричном формате
    return md5_hash.hexdigest()

# Генерируем код верификации (6 цифр)
def get_verif_code(length=6):
    verification_code = ''.join(random.choice('0123456789') for _ in range(length))
    return verification_code

# Фукция двойного хеширования MD5
def hash_key(txt):
    md5_hash = hashlib.md5()
    md5_hash.update(txt.encode('utf-8'))
    hash_value = md5_hash.hexdigest()
    first_8_chars = hash_value[:8]
    salt = config.get('main', {}).get('salt', '')
    two_md5_hash = hashlib.md5()
    two_md5_hash.update((hash_value + first_8_chars + salt).encode('utf-8'))
    return two_md5_hash.hexdigest()

# Генерируем CSRF токен
def generate_csrf_token():
    random_bytes = os.urandom(32)
    token_bytes = hashlib.sha256(random_bytes).digest()
    csrf_token = base64.urlsafe_b64encode(token_bytes).decode('utf-8')
    return csrf_token

# Генерируем 2FA - Secret Key
def generate_2fa_secret():
    return pyotp.random_base32()

# Проверяем 2FA код
def verify_2fa_code(secret, code):
    totp = pyotp.TOTP(secret)
    return totp.verify(code)

# Получаем 2FA QR-код
def get_2fa_qr(secret, email, issuer_name="NextFi"):
    # Создаем URI для TOTP
    totp = pyotp.TOTP(secret)
    provisioning_uri = totp.provisioning_uri(email, issuer_name=issuer_name)
    
    # Создаем QR код
    qr = qrcode.QRCode(version=1, error_correction=qrcode.constants.ERROR_CORRECT_L, box_size=10, border=4)
    qr.add_data(provisioning_uri)
    qr.make(fit=True)
    
    # Создаем изображение
    img = qr.make_image(fill_color="black", back_color="white")
    
    # Конвертируем изображение в base64
    buffered = BytesIO()
    img.save(buffered, format="PNG")
    img_str = base64.b64encode(buffered.getvalue()).decode()
    
    return f"data:image/png;base64,{img_str}"

# Генерируем User ID
def generate_uid():
    first_digit = random.choice('123456789')
    other_digits = ''.join(random.choices('0123456789', k=7))
    uid = first_digit + other_digits
    return uid

# Генерируем User Refferal Code
def get_ref_code(uid):  # Пример - UFRYXEEXDG
    # Словарь соответствия цифр буквам
    digit_to_letter = {
        '0': 'A', '1': 'B', '2': 'C', '3': 'D', '4': 'E',
        '5': 'F', '6': 'G', '7': 'H', '8': 'X', '9': 'U'
    }
    
    # Добавляем случайные цифры
    random_digits = ''.join(str(random.randint(0, 9)) for _ in range(2))
    uid = uid + random_digits
    
    # Преобразуем каждую цифру в букву
    ref_code = ''.join(digit_to_letter[digit] for digit in uid)
    return ref_code

# Отправка SMS
def send_sms(phone, message):
    try:
        sms = SmsAero(config.get('smsaero', {}).get('email'), config.get('smsaero', {}).get('key'))
        result = sms.send_sms(int(phone), str(message))
        return result
    except SmsAeroException as e:
        logging.error(f"Send SMS error: {str(e)}")

# Отправка сообщений с почты
def send_email(subject, message, recipient):
    try:
        # Инициализация клиента SendGrid
        sg = sendgrid.SendGridAPIClient(api_key=config.get('sendgrid', {}).get('api', ''))
        
        # Настройка параметров письма
        from_email = Email(config.get('sendgrid', {}).get('email', ''))  # Verifed email name
        to_email = To(recipient)
        content = Content("text/plain", message)
        
        # Создание объекта письма
        mail = Mail(from_email, to_email, subject, content)
        
        # Получение JSON-представления письма
        mail_json = mail.get()
        
        # Отправка запроса
        response = sg.client.mail.send.post(request_body=mail_json)
        
        # Проверка статуса отправки
        if response.status_code in [200, 201, 202]:
            return True
        else:
            logging.error(f"Failed to send email. Status code: {response.status_code}")
            return False
    
    except Exception as e:
        logging.error(f"Send email error: {str(e)}")
        return False

# Отправка вериф кода (почта / телефон)
def send_vcode(email, phone, verif_code):
    if email:
        result = send_email("NextFi Login", f"Your verification code is: {verif_code}", email)
    if phone:
        result = send_sms(phone, f'NextFi verification code is: {verif_code}')
    
    logging.info(f"Result: {str(result)}")
    return result

# Главная страница
@app.route('/', methods=['GET'])
def main_page():
    return jsonify({'response': 'success', 'message': 'Hello, world!'}), 200

# API страница
@app.route('/api', methods=['GET'])
def api_page():
    return jsonify({'response': 'success', 'message': 'Yep, its API!'}), 200

# Test API
@app.route('/api/v1', methods=['GET'])
def test_api_page():
    return jsonify({'response': 'success', 'message': 'Test API-123 [!@#$%^&*()_+]'}), 200

# Запрет на индексацию сайта (fix bot spam) | Иконка сайта (fix spam requests error)
@app.route('/robots.txt')
@app.route('/favicon.ico')
def static_from_root():
    return send_from_directory(app.static_folder, request.path[1:])

# Проверка работоспособности сервера
@app.route('/api/v1/ping', methods=['GET'])
def ping():
    return jsonify({'response': 'success', 'message': 'pong'}), 200

# Загрузка аватарки | Верификация
@app.route('/api/v1/verification', methods=['POST'])
@app.route('/api/v1/logo', methods=['POST'])
def upload_file():
    # Проверка Content-Type
    content_type = request.headers.get('Content-Type', '')
    if not content_type.startswith('multipart/form-data'):
        return jsonify({'response': 'error', 'message': 'Content-Type must be multipart/form-data'}), 400
    
    # Получение и валидация данных
    if request.form:
        csrf = sanitize_input(request.form.get('csrf', ''))
    else:
        return jsonify({'response': 'error', 'message': 'No data'}), 200
    
    # Если файла нет
    if 'file' not in request.files:
        return jsonify({'response': 'error', 'message': 'No data'}), 200
    else:
        try:
            # Получаем файл
            file = request.files['file']
            
            # Подключаем БД
            db = get_db_connection()
            if not db:
                logging.error("Database connection failed!")
                return jsonify({'response': 'error', 'message': 'Database connection failed'}), 200
            
            # Проверяем, существует ли пользователь + CSRF защита
            existing_user = None
            if csrf:
                existing_user = db.fetch_first('users', {'csrf': csrf})
                if len(csrf) != 44:
                    return jsonify({'response': 'error', 'message': 'Invalid access token length'}), 200
            
            if not existing_user:
                return jsonify({'response': 'error', 'message': 'User not found'}), 200
            else:
                csrf_user = str(existing_user['csrf'])
                if csrf_user != csrf:
                    return jsonify({'response': 'error', 'message': 'Invalid access token'}), 200
                
                # Проверка времени csrf токена (лимит 3 часа)
                current_timestamp = int(time.time())
                csrf_time = int(existing_user['time'])
                csrf_limit = 3 * 60 * 60
                if current_timestamp - csrf_time >= csrf_limit:
                    return jsonify({'response': 'error', 'message': 'Expired access token'}), 200
                
                # Если файл без имени
                if file.filename == '':
                    return jsonify({'response': 'error', 'message': 'Invalid file name'}), 200
                else:
                    # Проверяем размер файла
                    file_length = file.seek(0, os.SEEK_END)
                    file.seek(0)
                    if not (1024*4 <= file_length <= app.config['MAX_CONTENT_LENGTH']):  # Min: 4KB | Max: 2MB
                        # Разрешенные расширения файлов
                        ALLOWED_IMAGES = {'png', 'jpg', 'jpeg', 'webp'}
                        # Получаем расширение файла
                        _, extension = os.path.splitext(file.filename)
                        extension = re.sub(r'\.', '', extension).lower()
                        if len(extension) < 3 or len(extension) >= 5:
                            return jsonify({'response': 'error', 'message': 'Invalid file extension'}), 200
                        
                        if extension in ALLOWED_IMAGES:
                            # Формируем имя файла
                            filename = get_file_md5(file)[:10] + f".{extension}"
                            file_path = os.path.join(uploads_directory, filename)
                            file.seek(0)
                            
                            # Получаем тип отправки (logo | verif | file)
                            current_timestamp = int(time.time())
                            select = sanitize_input(request.form.get('type', ''))
                            file_id = sanitize_input(re.sub(r'\D', '', str(request.form.get('id', 0))))  # id - тип файла, 0 - лого, 1 - файл, 2... - вериф файлы (выбранный тип)
                            
                            # Выполняем выбранное действие (upload_logo / upload_verif / upload_file)
                            if select:
                                # Загрузка лого.
                                if select == 'upload_logo':
                                    # Обновляем БД
                                    db.update('users', {'id': existing_user['id']}, {'logo': str(filename), 'time': current_timestamp})
                                    logging.info(f"User logo updated: {str(filename)}")
                                    
                                    # Сохраняем историю действий
                                    file_id = 0
                                    db.insert('actions', {'uid': existing_user['uid'], 'type': 'upload_logo', 'time': current_timestamp, 'data': f'fid:{str(file_id)},file:{str(filename)},csrf:{str(csrf)}'})
                                
                                # Загрузка верифа.
                                if select == 'upload_verif':
                                    # Обновляем БД
                                    db.update('users', {'id': existing_user['id']}, {'vfiles': str(filename), 'verification': 1, 'time': current_timestamp})
                                    logging.info(f"User verif file uploaded: {str(filename)}")
                                    
                                    # Сохраняем историю действий
                                    db.insert('actions', {'uid': existing_user['uid'], 'type': 'upload_verif', 'time': current_timestamp, 'data': f'fid:{str(file_id)},file:{str(filename)},csrf:{str(csrf)}'})
                                
                                # Загрузка файлов.
                                if select == 'upload_file':
                                    # Обновляем БД
                                    db.update('users', {'id': existing_user['id']}, {'time': current_timestamp})
                                    logging.info(f"User file uploaded: {str(filename)}")
                                    
                                    # Сохраняем историю действий
                                    file_id = 1
                                    db.insert('actions', {'uid': existing_user['uid'], 'type': 'upload_file', 'time': current_timestamp, 'data': f'fid:{str(file_id)},file:{str(filename)},csrf:{str(csrf)}'})
                            
                            # Проверяем, существует ли файл (хеш) / Загружаем
                            if not os.path.exists(file_path):
                                file.save(file_path)
                            
                            return jsonify({'response': 'success', 'message': 'User file successfully updated'}), 200
                        else:
                            return jsonify({'response': 'error', 'message': 'Invalid file extension'}), 200
                    else:
                        return jsonify({'response': 'error', 'message': 'Invalid file size'}), 200
        except Exception as e:
            logging.error(f"Upload user file error: {str(e)}\n{traceback.format_exc()}")
            return jsonify({'response': 'error', 'message': 'Internal Server Error'}), 500
        finally:
            db.close()

# Генерируем новый вериф код
@app.route('/api/v1/reverif', methods=['POST'])
def reverif():
    # Проверка заголовка Content-Type
    if not request.is_json:
        return jsonify({'response': 'error', 'message': 'Content-Type must be application/json'}), 400
    
    # Получение и валидация данных
    data = request.get_json()
    if data is None:
        return jsonify({'response': 'error', 'message': 'No JSON data provided'}), 200
    
    if data:
        email = sanitize_input(data.get('email', ''))
        phone = sanitize_input(re.sub(r'\D', '', data.get('phone', '')))
        
        # Ищем юзера и выдаем новый код
        try:
            # Подключаем БД
            db = get_db_connection()
            if not db:
                logging.error("Database connection failed!")
                return jsonify({'response': 'error', 'message': 'Database connection failed'}), 200
            
            # Проверяем, существует ли пользователь
            existing_user = None
            if email:
                existing_user = db.fetch_first('users', {'email': email})
            
            if phone:
                existing_user = db.fetch_first('users', {'phone': phone})
            
            if not existing_user:
                return jsonify({'response': 'error', 'message': 'User not registered'}), 200
            else:
                # Проверяем верификацию
                verified = existing_user.get('verified', 0)
                if verified == 0:  # Доделать! В будущем проверять по 'action', для других проверок кода.
                    # verif_code = get_verif_code()  # Доделать!
                    verif_code = '321321'  # Тестовый вериф код
                    current_timestamp = int(time.time())
                    vcode = hash_key(verif_code)
                    db.update('users', {'id': existing_user['id']}, {'vcode': vcode, 'time': current_timestamp})
                    
                    logging.info(f"Regen verif code: {str(verif_code)}")
                    # send_vcode(existing_user['email'], existing_user['phone'], verif_code)
                    
                    # Сохраняем историю действий
                    db.insert('actions', {'uid': existing_user['uid'], 'type': 'reverif', 'time': current_timestamp, 'data': f'email:{str(email)},phone:{str(phone)},vcode:{str(vcode)}'})
                    
                    return jsonify({'response': 'error', 'message': 'Resend verification code', 'requires_verif': True}), 200
                else:
                    return jsonify({'response': 'error', 'message': 'User already verifed', 'requires_verif': False}), 200
        except Exception as e:
            logging.error(f"Resend verif error: {str(e)}\n{traceback.format_exc()}")
            return jsonify({'response': 'error', 'message': 'Internal Server Error'}), 500
        finally:
            db.close()
    else:
        return jsonify({'response': 'error', 'message': 'No data'}), 200

# Включаем 2FA
@app.route('/api/v1/enable_2fa', methods=['POST'])
def enable_2fa():
    # Проверка заголовка Content-Type
    if not request.is_json:
        return jsonify({'response': 'error', 'message': 'Content-Type must be application/json'}), 400
    
    # Получение и валидация данных
    data = request.get_json()
    if data is None:
        return jsonify({'response': 'error', 'message': 'No JSON data provided'}), 200
    csrf = sanitize_input(data.get('csrf', ''), False)
    
    try:
        # Подключаем БД
        db = get_db_connection()
        if not db:
            logging.error("Database connection failed!")
            return jsonify({'response': 'error', 'message': 'Database connection failed'}), 200
        
        # Проверяем, существует ли пользователь + CSRF защита
        existing_user = None
        if csrf:
            existing_user = db.fetch_first('users', {'csrf': csrf})
            if len(csrf) != 44:
                return jsonify({'response': 'error', 'message': 'Invalid access token length'}), 200
        
        if not existing_user:
            return jsonify({'response': 'error', 'message': 'User not found'}), 200
        else:
            csrf_user = str(existing_user['csrf'])
            if csrf_user != csrf:
                return jsonify({'response': 'error', 'message': 'Invalid access token'}), 200
            
            # Проверяем, не включено ли уже 2FA
            if existing_user.get('2fa', ''):
                return jsonify({'response': 'error', 'message': '2FA already enabled'}), 200
            
            # Генерируем секретный ключ
            secret = generate_2fa_secret()
            
            # Создаем URI для QR-кода
            email = existing_user.get('email', '')
            if not email:
                return jsonify({'response': 'error', 'message': 'User not have email'}), 200
            qr = get_2fa_qr(secret, email)
            
            # Сохраняем секретный ключ в БД (временно, до подтверждения)
            current_timestamp = int(time.time())
            db.update('users', {'id': existing_user['id']}, {'2fa_temp': secret, 'time': current_timestamp})
            
            # Сохраняем историю действий
            db.insert('actions', {'uid': existing_user['uid'], 'type': 'enable_2fa', 'time': current_timestamp, 'data': f'csrf:{str(csrf)}'})
            
            return jsonify({'response': 'success', 'message': '2FA initialization successful', 'data': {'secret': secret, 'qr': qr}, 'requires_2fa': True}), 200
    except Exception as e:
        logging.error(f"Enable 2FA error: {str(e)}\n{traceback.format_exc()}")
        return jsonify({'response': 'error', 'message': 'Internal Server Error'}), 500
    finally:
        db.close()

# Проверяем 2FA
@app.route('/api/v1/verify_2fa', methods=['POST'])
def verify_2fa():
    # Проверка заголовка Content-Type
    if not request.is_json:
        return jsonify({'response': 'error', 'message': 'Content-Type must be application/json'}), 400
    
    # Получение и валидация данных
    data = request.get_json()
    if data is None:
        return jsonify({'response': 'error', 'message': 'No JSON data provided'}), 200
    csrf = sanitize_input(data.get('csrf', ''), False)
    tfa_code = sanitize_input(re.sub(r'\D', '', data.get('2fa_code', '')))
    
    try:
        # Подключаем БД
        db = get_db_connection()
        if not db:
            logging.error("Database connection failed!")
            return jsonify({'response': 'error', 'message': 'Database connection failed'}), 200
        
        # Проверяем, существует ли пользователь + CSRF защита
        existing_user = None
        if csrf:
            existing_user = db.fetch_first('users', {'csrf': csrf})
            if len(csrf) != 44:
                return jsonify({'response': 'error', 'message': 'Invalid access token length'}), 200
        
        if not existing_user:
            return jsonify({'response': 'error', 'message': 'User not found'}), 200
        else:
            csrf_user = str(existing_user['csrf'])
            if csrf_user != csrf:
                return jsonify({'response': 'error', 'message': 'Invalid access token'}), 200
            
            # Получаем временный секретный ключ
            secret = existing_user.get('2fa_temp')
            if not secret:
                return jsonify({'response': 'error', 'message': '2FA not initialized'}), 200
            
            # Проверяем код
            if len(tfa_code) != 6:
                return jsonify({'response': 'error', 'message': 'Invalid 2FA code', 'requires_2fa': True}), 200
            if verify_2fa_code(secret, tfa_code):
                # Активируем 2FA
                current_timestamp = int(time.time())
                db.update('users', {'id': existing_user['id']}, {'2fa': secret, '2fa_temp': '', 'time': current_timestamp})
                
                # Сохраняем историю действий
                db.insert('actions', {'uid': existing_user['uid'], 'type': 'verify_2fa', 'time': current_timestamp, 'data': f'csrf:{str(csrf)}'})
                
                return jsonify({'response': 'success', 'message': '2FA enabled successfully', 'requires_2fa': False}), 200
            else:
                return jsonify({'response': 'error', 'message': 'Invalid 2FA code', 'requires_2fa': True}), 200
    except Exception as e:
        logging.error(f"Verify 2FA error: {str(e)}\n{traceback.format_exc()}")
        return jsonify({'response': 'error', 'message': 'Internal Server Error'}), 500
    finally:
        db.close()

# Отключаем 2FA
@app.route('/api/v1/disable_2fa', methods=['POST'])
def disable_2fa():
    # Проверка заголовка Content-Type
    if not request.is_json:
        return jsonify({'response': 'error', 'message': 'Content-Type must be application/json'}), 400
    
    # Получение и валидация данных
    data = request.get_json()
    if data is None:
        return jsonify({'response': 'error', 'message': 'No JSON data provided'}), 200
    csrf = sanitize_input(data.get('csrf', ''), False)
    tfa_code = sanitize_input(re.sub(r'\D', '', data.get('2fa_code', '')))
    
    try:
        # Подключаем БД
        db = get_db_connection()
        if not db:
            logging.error("Database connection failed!")
            return jsonify({'response': 'error', 'message': 'Database connection failed'}), 200
        
        # Проверяем, существует ли пользователь + CSRF защита
        existing_user = None
        if csrf:
            existing_user = db.fetch_first('users', {'csrf': csrf})
            if len(csrf) != 44:
                return jsonify({'response': 'error', 'message': 'Invalid access token length'}), 200
        
        if not existing_user:
            return jsonify({'response': 'error', 'message': 'User not found'}), 200
        else:
            if existing_user['2fa']:
                # Проверяем последний код перед отключением
                if len(tfa_code) != 6:
                    return jsonify({'response': 'error', 'message': 'Invalid 2FA code', 'requires_2fa': True}), 200
                if verify_2fa_code(existing_user['2fa'], tfa_code):
                    current_timestamp = int(time.time())
                    db.update('users', {'id': existing_user['id']}, {'2fa': '', '2fa_temp': '', 'time': current_timestamp})
                    
                    # Сохраняем историю действий
                    db.insert('actions', {'uid': existing_user['uid'], 'type': 'disable_2fa', 'time': current_timestamp, 'data': f'csrf:{str(csrf)}'})
                    
                    return jsonify({'response': 'success', 'message': '2FA disabled successfully', 'requires_2fa': False}), 200
                else:
                    return jsonify({'response': 'error', 'message': 'Invalid 2FA code', 'requires_2fa': True}), 200
            else:
                return jsonify({'response': 'error', 'message': '2FA not enabled', 'False': True}), 200
    except Exception as e:
        logging.error(f"Disable 2FA error: {str(e)}\n{traceback.format_exc()}")
        return jsonify({'response': 'error', 'message': 'Internal Server Error'}), 500
    finally:
        db.close()

# Разлогин
@app.route('/api/v1/logout', methods=['POST'])
def logout():
    # Проверка заголовка Content-Type
    if not request.is_json:
        return jsonify({'response': 'error', 'message': 'Content-Type must be application/json'}), 400
    
    # Получение и валидация данных
    data = request.get_json()
    if data is None:
        return jsonify({'response': 'error', 'message': 'No JSON data provided'}), 200
    csrf = sanitize_input(data.get('csrf', ''), False)
    full = sanitize_input(data.get('full', ''))
    
    try:
        # Подключаем БД
        db = get_db_connection()
        if not db:
            logging.error("Database connection failed!")
            return jsonify({'response': 'error', 'message': 'Database connection failed'}), 200
        
        # Проверяем, существует ли пользователь + CSRF защита
        existing_user = None
        if csrf:
            existing_user = db.fetch_first('users', {'csrf': csrf})
            if len(csrf) != 44:
                return jsonify({'response': 'error', 'message': 'Invalid access token length'}), 200
        
        if not existing_user:
            return jsonify({'response': 'error', 'message': 'User not found'}), 200
        else:
            # Закрываем: current session
            current_timestamp = int(time.time())
            db.update('users', {'id': existing_user['id']}, {'csrf': '', 'time': current_timestamp})
            
            # Обновляем сессию
            session = get_user_session()
            user_sessions = None
            if session:
                session_data = {
                    'uid': existing_user['uid'],
                    'ip_address': session.get('ip_address', ''),
                    'user_agent': session.get('user_agent', ''),
                    'country': session.get('ip_address', ''),
                    'os': session.get('os', ''),
                    'device': session.get('device', ''),  # Other
                    'browser': session.get('browser', ''),
                    'status': 0
                }
            if full:
                # Закрываем: all sessions
                user_sessions = db.fetch_first('sessions', {'uid': existing_user['uid'], 'status': 0})
                if user_sessions:
                    db.update('sessions', {'id': existing_user['uid'], 'status': 0}, {'status': 1})
                
                # Сохраняем историю действий
                db.insert('actions', {'uid': existing_user['uid'], 'type': 'logout_all', 'time': current_timestamp, 'data': f'csrf:{str(csrf)}'})
                
                return jsonify({'response': 'success', 'message': 'All devices successfully log out', 'requires_login': True}), 200    
            else:
                user_sessions = db.fetch_first('sessions', session_data)
                if user_sessions:
                    db.update('sessions', session_data, {'status': 1})
                
                # Сохраняем историю действий
                db.insert('actions', {'uid': existing_user['uid'], 'type': 'logout_user', 'time': current_timestamp, 'data': f'csrf:{str(csrf)}'})
                
                # Отнимаем 10.5 TEST монет за выход
                balance_act(existing_user['uid'], 'logout_sanction', 'TEST', 10.5)
                
                return jsonify({'response': 'success', 'message': 'User successfully log out', 'requires_login': True}), 200
    except Exception as e:
        logging.error(f"Log out error: {str(e)}\n{traceback.format_exc()}")
        return jsonify({'response': 'error', 'message': 'Internal Server Error'}), 500
    finally:
        db.close()

# Изменение: (password / email / phone)
@app.route('/api/v1/change', methods=['POST'])
def change_user_data():
    # Проверка заголовка Content-Type
    if not request.is_json:
        return jsonify({'response': 'error', 'message': 'Content-Type must be application/json'}), 400
    
    # Получение и валидация данных
    data = request.get_json()
    if data is None:
        return jsonify({'response': 'error', 'message': 'No JSON data provided'}), 200
    email = sanitize_input(data.get('email', ''))
    password = sanitize_input(data.get('password', ''), False)
    phone = sanitize_input(re.sub(r'\D', '', data.get('phone', '')))
    csrf = sanitize_input(data.get('csrf', ''), False)
    vcode = sanitize_input(re.sub(r'\D', '', data.get('vcode', '')))
    tfa_code = sanitize_input(re.sub(r'\D', '', data.get('2fa_code', '')))
    select = sanitize_input(data.get('type', ''))
    protect = sanitize_input(re.sub(r'\D', '', data.get('protect', '')))  # Доделать! # Запрет вывода на 24 часа (0 или 1)
    
    # Подключаем БД
    db = get_db_connection()
    if not db:
        logging.error("Database connection failed!")
        return jsonify({'response': 'error', 'message': 'Database connection failed'}), 200
    
    try:
        # Подключаем БД
        db = get_db_connection()
        if not db:
            logging.error("Database connection failed!")
            return jsonify({'response': 'error', 'message': 'Database connection failed'}), 200
        
        # Проверяем, существует ли пользователь + CSRF защита
        existing_user = None
        if csrf:
            existing_user = db.fetch_first('users', {'csrf': csrf})
            if len(csrf) != 44:
                return jsonify({'response': 'error', 'message': 'Invalid access token length'}), 200
        
        if not existing_user:
            return jsonify({'response': 'error', 'message': 'User not found'}), 200
        else:
            # Получаем текущее время
            current_timestamp = int(time.time())
            
            # Проверяем 2FA
            if existing_user['2fa']:
                if len(tfa_code) != 6:
                    return jsonify({'response': 'error', 'message': 'Invalid 2FA code', 'requires_2fa': True}), 200
                if not verify_2fa_code(existing_user['2fa'], tfa_code):
                    return jsonify({'response': 'error', 'message': 'Invalid 2FA code', 'requires_2fa': True}), 200
            
            # Проверяем vcode
            if not vcode:
                return jsonify({'response': 'error', 'message': 'Invalid verification code', 'requires_verif': True}), 200
            else:
                encrypted_vcode = existing_user.get('vcode', '')
                
                # Если код никогда не создавался
                if not encrypted_vcode:
                    return jsonify({'response': 'error', 'message': 'Invalid verification code', 'requires_verif': True}), 200
                else:
                    # Проверка времени верификации (лимит 30 минут)
                    verification_time = existing_user.get('time', 0)
                    verification_limit = 30 * 60  # 30 минут = 1800 секунд
                    if current_timestamp - verification_time >= verification_limit:
                        # verif_code = get_verif_code()  # Доделать!
                        verif_code = '321321'  # Тестовый вериф код
                        db.update('users', {'id': existing_user['id']}, {'vcode': hash_key(verif_code), 'time': current_timestamp})
                        
                        logging.info(f"Regen verif code: {str(verif_code)}")
                        # send_vcode(existing_user['email'], existing_user['phone'], verif_code)
                        return jsonify({'response': 'error', 'message': 'Verification code expired', 'requires_verif': True}), 200
                    
                    # Проверка вериф кода
                    if hash_key(vcode) == encrypted_vcode:
                        # Устанавливаем verified=1 для пользователя
                        db.update('users', {'id': existing_user['id']}, {'verified': 1, 'time': current_timestamp})
                        
                        # Обновляем данные пользователя
                        existing_user['verified'] = 1
                    else:
                        return jsonify({'response': 'error', 'message': 'Invalid verification code', 'requires_verif': True}), 200
            
            # Выполняем выбранное действие (change_phone / change_email / change_passw)
            if select:                
                # Смена телефона.
                if select == 'change_phone':
                    if phone:
                        if len(phone) <= 7 or len(phone) >= 15:
                            return jsonify({'response': 'error', 'message': 'Invalid phone number'}), 200
                        
                        db.update('users', {'id': existing_user['id']}, {'phone': phone, 'time': current_timestamp})
                        return jsonify({'response': 'success', 'message': 'User phone successfully changed'}), 200
                    else:
                        return jsonify({'response': 'error', 'message': 'No phone number'}), 200
                
                # Смена почты.
                if select == 'change_email':
                    if email:
                        if not '@' in email and not '.' in email:
                            return jsonify({'response': 'error', 'message': 'Bad email'}), 200
                        
                        db.update('users', {'id': existing_user['id']}, {'email': email, 'time': current_timestamp})
                        return jsonify({'response': 'success', 'message': 'User email successfully changed'}), 200
                    else:
                        return jsonify({'response': 'error', 'message': 'No email'}), 200
                
                # Смена пароля.
                if select == 'change_passw':
                    if password:
                        if len(password) < 8:
                            return jsonify({'response': 'error', 'message': 'Bad password'}), 200
                        if len(password) > 64:
                            return jsonify({'response': 'error', 'message': 'Bad password'}), 200
                        
                        db.update('users', {'id': existing_user['id']}, {'password': password, 'time': current_timestamp})
                        return jsonify({'response': 'success', 'message': 'User password successfully changed'}), 200
                    else:
                        return jsonify({'response': 'error', 'message': 'No password'}), 200
                return jsonify({'response': 'error', 'message': 'Invalid action'}), 200
            else:
                return jsonify({'response': 'error', 'message': 'Please select action'}), 200
    except Exception as e:
        logging.error(f"Сhange user data error: {str(e)}\n{traceback.format_exc()}")
        return jsonify({'response': 'error', 'message': 'Internal Server Error'}), 500
    finally:
        db.close()

# Resend вериф кода (кнопка получить код)
@app.route('/api/v1/resend', methods=['POST'])
def resend():
    # Проверка заголовка Content-Type
    if not request.is_json:
        return jsonify({'response': 'error', 'message': 'Content-Type must be application/json'}), 400
    
    # Получение и валидация данных
    data = request.get_json()
    if data is None:
        return jsonify({'response': 'error', 'message': 'No JSON data provided'}), 200
    csrf = sanitize_input(data.get('csrf', ''), False)
    
    try:
        # Подключаем БД
        db = get_db_connection()
        if not db:
            logging.error("Database connection failed!")
            return jsonify({'response': 'error', 'message': 'Database connection failed'}), 200
        
        # Проверяем, существует ли пользователь + CSRF защита
        existing_user = None
        if csrf:
            existing_user = db.fetch_first('users', {'csrf': csrf})
            if len(csrf) != 44:
                return jsonify({'response': 'error', 'message': 'Invalid access token length'}), 200
        
        if not existing_user:
            return jsonify({'response': 'error', 'message': 'User not found'}), 200
        else:
            # Получаем текущее время
            current_timestamp = int(time.time())
            
            # verif_code = get_verif_code()  # Доделать!
            verif_code = '321321'  # Тестовый вериф код
            db.update('users', {'id': existing_user['id']}, {'vcode': hash_key(verif_code), 'time': current_timestamp})
            
            # Сохраняем историю действий
            db.insert('actions', {'uid': existing_user['uid'], 'type': 'resend', 'time': current_timestamp, 'data': f'csrf:{str(csrf)}'})
            logging.info(f"Regen verif code: {str(verif_code)}")
            
            # send_vcode(existing_user['email'], existing_user['phone'], verif_code)
            return jsonify({'response': 'success', 'message': 'Verification code successfully changed', 'requires_verif': True}), 200
    except Exception as e:
        logging.error(f"Resend verif code error: {str(e)}\n{traceback.format_exc()}")
        return jsonify({'response': 'error', 'message': 'Internal Server Error'}), 500
    finally:
        db.close()

# Заморозка / Закрытие аккаунта
@app.route('/api/v1/goodbye', methods=['POST'])
def goodbye():
    # Проверка заголовка Content-Type
    if not request.is_json:
        return jsonify({'response': 'error', 'message': 'Content-Type must be application/json'}), 400
    
    # Получение и валидация данных
    data = request.get_json()
    if data is None:
        return jsonify({'response': 'error', 'message': 'No JSON data provided'}), 200
    csrf = sanitize_input(data.get('csrf', ''), False)
    select = sanitize_input(data.get('type', ''))
    
    try:
        # Подключаем БД
        db = get_db_connection()
        if not db:
            logging.error("Database connection failed!")
            return jsonify({'response': 'error', 'message': 'Database connection failed'}), 200
        
        # Проверяем, существует ли пользователь + CSRF защита
        existing_user = None
        if csrf:
            existing_user = db.fetch_first('users', {'csrf': csrf})
            if len(csrf) != 44:
                return jsonify({'response': 'error', 'message': 'Invalid access token length'}), 200
        
        if not existing_user:
            return jsonify({'response': 'error', 'message': 'User not found'}), 200
        else:
            if select:
                current_timestamp = int(time.time())
                if select == 'freeze':
                    db.update('users', {'id': existing_user['id']}, {'csrf': '', 'time': current_timestamp, 'status': 1})
                    db.insert('actions', {'uid': existing_user['uid'], 'type': 'freeze', 'time': current_timestamp, 'data': f'csrf:{str(csrf)}'})  # Сохраняем историю действий
                if select == 'close':
                    db.update('users', {'id': existing_user['id']}, {'csrf': '', 'time': current_timestamp, 'status': 2})
                    db.insert('actions', {'uid': existing_user['uid'], 'type': 'close', 'time': current_timestamp, 'data': f'csrf:{str(csrf)}'})  # Сохраняем историю действий
                
                # Закрываем: all sessions
                user_sessions = db.fetch_all('sessions', {'uid': existing_user['uid'], 'status': 0})
                if user_sessions:
                    for session in user_sessions:
                        db.update('sessions', {'id': session['id'], 'status': 0}, {'status': 1})
                return jsonify({'response': 'error', 'message': 'Invalid action'}), 200
            else:
                return jsonify({'response': 'error', 'message': 'Please select action'}), 200
    except Exception as e:
        logging.error(f"Goodbye user error: {str(e)}\n{traceback.format_exc()}")
        return jsonify({'response': 'error', 'message': 'Internal Server Error'}), 500
    finally:
        db.close()

# Получаем список сессий
@app.route('/api/v1/devices', methods=['POST'])
def get_auth_devices():
    # Проверка заголовка Content-Type
    if not request.is_json:
        return jsonify({'response': 'error', 'message': 'Content-Type must be application/json'}), 400
    
    # Получение и валидация данных
    data = request.get_json()
    if data is None:
        return jsonify({'response': 'error', 'message': 'No JSON data provided'}), 200
    csrf = sanitize_input(data.get('csrf', ''), False)
    
    try:
        # Подключаем БД
        db = get_db_connection()
        if not db:
            logging.error("Database connection failed!")
            return jsonify({'response': 'error', 'message': 'Database connection failed'}), 200
        
        # Проверяем, существует ли пользователь + CSRF защита
        existing_user = None
        if csrf:
            existing_user = db.fetch_first('users', {'csrf': csrf})
            if len(csrf) != 44:
                return jsonify({'response': 'error', 'message': 'Invalid access token length'}), 200
        
        if not existing_user:
            return jsonify({'response': 'error', 'message': 'User not found'}), 200
        else:
            # Получаем сессии пользователя
            try:
                user_sessions = db.fetch_all('sessions', {'uid': existing_user['uid'], 'status': 0})
            except Exception as e:
                logging.error(f"Error fetching user sessions: {str(e)}")
                user_sessions = None
            
            # Проверяем результат
            if user_sessions is not None and user_sessions:
                return jsonify({'response': 'success', 'message': 'Get authorized devices list', 'data': user_sessions}), 200
            else:
                return jsonify({'response': 'success', 'message': 'No authorized devices', 'data': ''}), 200
    except Exception as e:
        logging.error(f"Get auth devices error: {str(e)}\n{traceback.format_exc()}")
        return jsonify({'response': 'error', 'message': 'Internal Server Error'}), 500
    finally:
        db.close()

# Получение баланса / истории транзакций юзера
@app.route('/api/v1/history', methods=['POST'])
def history():
    # Проверка заголовка Content-Type
    if not request.is_json:
        return jsonify({'response': 'error', 'message': 'Content-Type must be application/json'}), 400
    
    # Получение и валидация данных
    data = request.get_json()
    if data is None:
        return jsonify({'response': 'error', 'message': 'No JSON data provided'}), 200
    if data:
        select = sanitize_input(data.get('type', ''))
        coin = sanitize_input(data.get('coin', ''))
        csrf = sanitize_input(data.get('csrf', ''), False)
        
        try:
            # Подключаем БД
            db = get_db_connection()
            if not db:
                logging.error("Database connection failed!")
                return jsonify({'response': 'error', 'message': 'Database connection failed'}), 200
            
            # Проверяем, существует ли пользователь + CSRF защита
            existing_user = None
            if csrf:
                existing_user = db.fetch_first('users', {'csrf': csrf})
                if len(csrf) != 44:
                    return jsonify({'response': 'error', 'message': 'Invalid access token length'}), 200
            
            if not existing_user:
                return jsonify({'response': 'error', 'message': 'User not found'}), 200
            else:
                user_data = {}
                valid_types = ['register_bonus', 'invest_deposit', 'balance_deposit', 'user_receive',
                               'logout_sanction', 'invest_withdraw', 'balance_withdraw', 'user_send']
                valid_coins = ['TEST']  # все допустимые монеты
                
                query = {'uid': existing_user['uid']}
                if select == 'all' or select == '':
                    user_data = db.fetch_all('txs', query)
                
                elif select == 'invest_all':
                    query['type'] = 'invest'
                    user_data = db.fetch_all('txs', query)
                
                elif select == 'tx_all':
                    query['type'] = 'tx'
                    user_data = db.fetch_all('txs', query)
                
                elif select == 'coin' and coin in valid_coins:
                    query['coin'] = coin
                    user_data = db.fetch_all('txs', query)
                
                elif select == 'invest' and coin in valid_coins:
                    query.update({'coin': coin, 'type': 'invest'})
                    user_data = db.fetch_all('txs', query)
                
                elif select == 'type' and type in valid_types:
                    query['type'] = type
                    user_data = db.fetch_all('txs', query)
                
                elif select == 'coin_type' and coin in valid_coins and type in valid_types:
                    query.update({'coin': coin, 'type': type})
                    user_data = db.fetch_all('txs', query)
                return jsonify({'response': 'success', 'data': user_data}), 200
        except Exception as e:
            logging.error(f"Get user tx history error: {str(e)}\n{traceback.format_exc()}")
            return jsonify({'response': 'error', 'message': 'Internal Server Error'}), 500
        finally:
            db.close()
    else:
        return jsonify({'response': 'error', 'message': 'No data'}), 200

# Добавить / отнять баланс - юзера
def balance_act(uid, action, coin, amount):
    try:
        # Проверяем поля
        if not all([uid, action, coin, amount]):
            logging.error("Empty fields!")
            return False
        
        # Подключаем БД
        db = get_db_connection()
        if not db:
            logging.error("Database connection failed!")
            return False
        
        # Проверяем, существует ли пользователь
        existing_user = None
        existing_user = db.fetch_first('users', {'uid': uid})
        
        if not existing_user:
            return False
        else:
            current_timestamp = int(time.time())
            sid = 0
            
            db.insert('txs', {'uid': existing_user['uid'], 'coin': coin, 'amount': amount, 'type': action, 'sid': sid, 'time': current_timestamp, 'adata': ''})
            db.insert('actions', {'uid': existing_user['uid'], 'type': 'balance_act', 'time': current_timestamp, 'data': f'coin:{str(coin)},amount:{str(amount)},type:{str(action)},sid:{str(sid)}'})
            return True
    except Exception as e:
        logging.error(f"Add user balance error: {str(e)}\n{traceback.format_exc()}")
        return False
    finally:
        db.close()

# Получение списка монет
@app.route('/api/v1/coin_list', methods=['POST'])
def get_coin_list():
    # Проверка заголовка Content-Type
    if not request.is_json:
        return jsonify({'response': 'error', 'message': 'Content-Type must be application/json'}), 400
    
    # Получение и валидация данных
    data = request.get_json()
    if data is None:
        return jsonify({'response': 'error', 'message': 'No JSON data provided'}), 200
    try:
        # Подключаем БД
        db = get_db_connection()
        if not db:
            logging.error("Database connection failed!")
            return False
        
        # Получаем статус монет
        coin_list = None
        coin_list = db.fetch_all('coins', {'enable': 1})
        # coins: name, type, enable, deposit, withdraw
        
        if coin_list is None:
            return jsonify({'response': 'success', 'data': ''}), 200
        else:
            return jsonify({'response': 'success', 'data': coin_list}), 200
    except Exception as e:
        logging.error(f"Get coin list error: {str(e)}\n{traceback.format_exc()}")
        return False
    finally:
        db.close()

# Получение/подсчет текущего баланса юзера
@app.route('/api/v1/user_balance', methods=['POST'])
def get_user_balance():
    # Проверка заголовка Content-Type
    if not request.is_json:
        return jsonify({'response': 'error', 'message': 'Content-Type must be application/json'}), 400
    
    # Получение и валидация данных
    data = request.get_json()
    if data is None:
        return jsonify({'response': 'error', 'message': 'No JSON data provided'}), 200
    if data:
        coin = sanitize_input(data.get('coin', ''))
        csrf = sanitize_input(data.get('csrf', ''), False)
        
        # Проверяем поля
        if not all([csrf, coin]):
            logging.error("Empty fields!")
            return jsonify({'response': 'error', 'message': 'Missing required fields'}), 200
        
        try:
            # Подключаем БД
            db = get_db_connection()
            if not db:
                logging.error("Database connection failed!")
                return False
            
            # Проверяем, существует ли пользователь + CSRF защита
            existing_user = None
            if csrf:
                existing_user = db.fetch_first('users', {'csrf': csrf})
                if len(csrf) != 44:
                    return jsonify({'response': 'error', 'message': 'Invalid access token length'}), 200
            
            if not existing_user:
                return jsonify({'response': 'error', 'message': 'User not found'}), 200
            else:
                # Получаем список транзакций
                transactions = None
                transactions = db.fetch_all('txs', {'uid': existing_user['uid'], 'coin': coin})
                user_balance = 0
                
                if not transactions:
                    return jsonify({'response': 'success', 'balance': user_balance}), 200
                else:
                    for tx in transactions:
                        amount = float(tx['amount'])
                        
                        # Типы операций, которые увеличивают баланс
                        if tx['type'] in ['register_bonus', 'invest_deposit', 'balance_deposit', 'user_receive']:
                            user_balance += amount
                        
                        # Типы операций, которые уменьшают баланс
                        elif tx['type'] in ['logout_sanction', 'invest_withdraw', 'balance_withdraw', 'user_send']:
                            user_balance -= amount
                    
                    return jsonify({'response': 'success', 'balance': user_balance}), 200
        except Exception as e:
            logging.error(f"Get user balance error: {str(e)}\n{traceback.format_exc()}")
            return False
        finally:
            db.close()
    else:
        return jsonify({'response': 'error', 'message': 'No data'}), 200

# Получение инвест данных монеты/всех
@app.route('/api/v1/invest_history', methods=['POST'])
def get_invest_list():
    # Проверка заголовка Content-Type
    if not request.is_json:
        return jsonify({'response': 'error', 'message': 'Content-Type must be application/json'}), 400
    
    # Получение и валидация данных
    data = request.get_json()
    if data is None:
        return jsonify({'response': 'error', 'message': 'No JSON data provided'}), 200
    if data:
        coin = sanitize_input(data.get('coin', ''))
        csrf = sanitize_input(data.get('csrf', ''), False)
        
        try:
            # Проверяем поля
            if not all([csrf, coin]):
                logging.error("Empty fields!")
                return jsonify({'response': 'error', 'message': 'Missing required fields'}), 200
            
            # Подключаем БД
            db = get_db_connection()
            if not db:
                logging.error("Database connection failed!")
                return False
            
            # Проверяем, существует ли пользователь + CSRF защита
            existing_user = None
            if csrf:
                existing_user = db.fetch_first('users', {'csrf': csrf})
                if len(csrf) != 44:
                    return jsonify({'response': 'error', 'message': 'Invalid access token length'}), 200
            
            if not existing_user:
                return jsonify({'response': 'error', 'message': 'User not found'}), 200
            else:
                # Получаем список юзер инвестов
                user_invests = None
                user_invests = db.fetch_all('invests', {'uid': existing_user['uid'], 'coin': coin})
                
                if not user_invests:
                    return jsonify({'response': 'success', 'data': ''}), 200
                else:
                    return jsonify({'response': 'success', 'data': user_invests}), 200
        except Exception as e:
            logging.error(f"Get user invests error: {str(e)}\n{traceback.format_exc()}")
            return False
        finally:
            db.close()
    else:
        return jsonify({'response': 'error', 'message': 'No data'}), 200

# Авторизация пользователя
@app.route('/api/v1/login', methods=['POST'])
def login():
    # Проверка заголовка Content-Type
    if not request.is_json:
        return jsonify({'response': 'error', 'message': 'Content-Type must be application/json'}), 400
    
    # Получение и валидация данных
    data = request.get_json()
    if data is None:
        return jsonify({'response': 'error', 'message': 'No JSON data provided'}), 200
    
    # Добавить: валидацию входных данных (логина)!
    if data:
        email = sanitize_input(data.get('email', ''))
        password = sanitize_input(data.get('password', ''), False)
        phone = sanitize_input(re.sub(r'\D', '', data.get('phone', '')))
        vcode = sanitize_input(re.sub(r'\D', '', data.get('vcode', '')))
        tfa_code = sanitize_input(re.sub(r'\D', '', data.get('2fa_code', '')))
        
        # Подключаем БД
        db = get_db_connection()
        if not db:
            logging.error("Database connection failed!")
            return jsonify({'response': 'error', 'message': 'Database connection failed'}), 200
        
        try:
            # Проверяем, существует ли пользователь
            existing_user = None
            if email:
                existing_user = db.fetch_first('users', {'email': email})
            
            if phone:
                existing_user = db.fetch_first('users', {'phone': phone})
            
            if not existing_user:
                return jsonify({'response': 'error', 'message': 'User not registered'}), 200
            else:
                # Получаем текущее время (в секундах)
                current_timestamp = int(time.time())
                
                # Проверяем статус аккаунта
                status = existing_user.get('status', 0)
                if status == 1:  # Разморозка аккаунта
                    db.update('users', {'id': existing_user['id']}, {'time': current_timestamp, 'status': 0})
                if status == 2:
                    return jsonify({'response': 'error', 'message': 'User closed'}), 200
                if status == 3:
                    return jsonify({'response': 'error', 'message': 'User banned'}), 200
                
                # Проверяем пароль
                if not password or hash_key(password) != existing_user.get('password', ''):
                    return jsonify({'response': 'error', 'message': 'Invalid user password'}), 200
                
                # Проверяем верификацию
                verified = existing_user.get('verified', 0)
                if verified == 0:
                    if not vcode:
                        return jsonify({'response': 'error', 'message': 'Invalid verification code', 'requires_verif': True}), 200
                    else:
                        encrypted_vcode = existing_user.get('vcode', '')
                        
                        # Если код никогда не создавался
                        if not encrypted_vcode:
                            return jsonify({'response': 'error', 'message': 'Invalid verification code', 'requires_verif': True}), 200
                        else:
                            # Проверка времени верификации (лимит 30 минут)
                            verification_time = existing_user.get('time', 0)
                            verification_limit = 30 * 60  # 30 минут = 1800 секунд
                            if current_timestamp - verification_time >= verification_limit:
                                # verif_code = get_verif_code()  # Доделать!
                                verif_code = '321321'  # Тестовый вериф код
                                db.update('users', {'id': existing_user['id']}, {'vcode': hash_key(verif_code), 'time': current_timestamp})
                                
                                logging.info(f"Regen verif code: {str(verif_code)}")
                                # send_vcode(existing_user['email'], existing_user['phone'], verif_code)
                                return jsonify({'response': 'error', 'message': 'Verification code expired', 'requires_verif': True}), 200
                            
                            # Проверка вериф кода
                            if hash_key(vcode) == encrypted_vcode:
                                # Устанавливаем verified=1 для пользователя
                                db.update('users', {'id': existing_user['id']}, {'verified': 1, 'time': current_timestamp})
                                
                                # Обновляем данные пользователя
                                existing_user['verified'] = 1
                            else:
                                return jsonify({'response': 'error', 'message': 'Invalid verification code', 'requires_verif': True}), 200
                
                # Доп проверка верификации (для безопасности)
                verified = existing_user.get('verified', 0)
                if verified == 1:
                    # Проверяем 2FA
                    if existing_user['2fa']:
                        if len(tfa_code) != 6:
                            return jsonify({'response': 'error', 'message': 'Invalid 2FA code', 'requires_2fa': True}), 200
                        if not verify_2fa_code(existing_user['2fa'], tfa_code):
                            return jsonify({'response': 'error', 'message': 'Invalid 2FA code', 'requires_2fa': True}), 200
                    
                    # Выдаем временный csrf токен
                    csrf = generate_csrf_token()
                    db.update('users', {'uid': existing_user['uid']}, {'csrf': csrf, 'time': current_timestamp})
                    
                    # Главная страница юзера: Overview (news & payments)
                    # news = db.fetch_all('news')
                    # payments = {"name": "Company Stocks", "amount": "$120", "percent": "+0.5%", "total": "1000.15", "status": 1}  # db.fetch_all('payments', {'uid': existing_user['uid']})
                    overview = {
                        'news': '',
                        'payments': ''  # Доделать!!! json: type, amount, percent, total, time
                    }  # Доделать!!! Выбор: industry
                    
                    # Показ логотипа юзера
                    logo = existing_user.get('logo', '')
                    logo64 = ''
                    if logo:
                        logo_path = Path(uploads_directory) / logo
                        if logo_path.exists():
                            with open(logo_path, 'rb') as image_file:
                                logo64 = base64.b64encode(image_file.read()).decode('utf-8')
                    
                    # Публичная выдача данных юзера
                    two_fa_enabled = 0 if not existing_user.get('2fa') else 1
                    user_login_data = {  # Личный Кабинет: (Overview / Profile / Security / Verification / Authorized Devices)
                        'uid': existing_user.get('uid', 0),
                        'username': existing_user.get('username', ''),
                        'email': existing_user.get('email', ''),
                        'phone': existing_user.get('phone', ''),
                        'refid': existing_user.get('refid', ''),
                        'refcode': existing_user.get('refcode', ''),
                        'verified': existing_user.get('verified', 0),
                        'country': existing_user.get('country', 'Unknown'),
                        'xp': existing_user.get('xp', 0),
                        'status': existing_user.get('status', 0),
                        'verification': existing_user.get('verification', 0),
                        'csrf': csrf,
                        '2fa': two_fa_enabled,
                        'overview': overview,
                        'logo': logo64
                    }
                    
                    # Обновляем сессию
                    session = get_user_session()
                    user_sessions = None
                    if session:
                        session_data = {
                            'uid': existing_user.get('uid', 0),
                            'ip_address': session.get('ip_address', ''),
                            'user_agent': session.get('user_agent', ''),
                            'country': session.get('country', ''),
                            'os': session.get('os', ''),
                            'device': session.get('device', ''),  # Other
                            'browser': session.get('browser', ''),
                            'status': 0
                        }
                        user_sessions = db.fetch_first('sessions', session_data)
                        session_data['sid'] = generate_uid()
                        if not user_sessions:
                            db.insert('sessions', session_data)
                        else:
                            session_data['sid'] = user_sessions['sid']
                    
                    # Сохраняем историю действий
                    if status == 1:  # Разморозка аккаунта
                        db.insert('actions', {'uid': existing_user['uid'], 'type': 'activate', 'time': current_timestamp, 'data': f"sid:{session_data['sid']},csrf:{str(csrf)}"})
                    db.insert('actions', {'uid': existing_user['uid'], 'type': 'login', 'time': current_timestamp, 'data': f"sid:{session_data['sid']},csrf:{str(csrf)}"})
                    
                    return jsonify({'response': 'success', 'message': 'Login successful', 'data': user_login_data}), 200
                else:
                    return jsonify({'response': 'error', 'message': 'Verification not completed', 'requires_verif': True}), 200
        except Exception as e:
            logging.error(f"Login error: {str(e)}\n{traceback.format_exc()}")
            return jsonify({'response': 'error', 'message': 'Internal Server Error'}), 500
        finally:
            db.close()
    else:
        return jsonify({'response': 'error', 'message': 'No data'}), 200

# Регистрация нового пользователя
@app.route('/api/v1/register', methods=['POST'])
def register():
    # Проверка заголовка Content-Type
    if not request.is_json:
        return jsonify({'response': 'error', 'message': 'Content-Type must be application/json'}), 400
    
    # Получение и валидация данных
    data = request.get_json()
    if data is None:
        return jsonify({'response': 'error', 'message': 'No JSON data provided'}), 200
    
    # Добавить: валидацию входных данных (реги)!
    if data:
        email = sanitize_input(data.get('email', ''))
        password = sanitize_input(data.get('password', ''), False)
        refid = sanitize_input(re.sub(r'[^a-zA-Z0-9-]', '', data.get('refid', '')), False)  # Пример: UFRYXEEXDG
        phone = sanitize_input(re.sub(r'\D', '', data.get('phone', '')))
        
        # Подключаем БД
        db = get_db_connection()
        if not db:
            logging.error("Database connection failed!")
            return jsonify({'response': 'error', 'message': 'Database connection failed'}), 400
        
        try:
            # Проверяем, существует ли пользователь
            existing_user_email = None
            existing_user_phone = None
            if email:
                existing_user_email = db.fetch_first('users', {'email': email})
            if phone:
                existing_user_phone = db.fetch_first('users', {'phone': phone})
            
            if existing_user_email or existing_user_phone:
                if existing_user_email:
                    logging.info(f"User already exists: {str(email)}")
                if existing_user_phone:
                    logging.info(f"User already exists: +{str(phone)}") 
                
                return jsonify({'response': 'error', 'message': 'User already exists'}), 200
            
            # Проверка введенных данных            
            if not email and not phone:
                return jsonify({'response': 'error', 'message': 'Bad data'}), 200
            if email and phone:
                return jsonify({'response': 'error', 'message': 'Bad data'}), 200
            if phone:
                if len(phone) <= 7 or len(phone) >= 15:
                    logging.info(f"Invalid phone number: {str(phone)}")
                    return jsonify({'response': 'error', 'message': 'Invalid phone number'}), 200
            if email:
                if not '@' in email and not '.' in email:
                    return jsonify({'response': 'error', 'message': 'Bad email'}), 200
            if not password:
                return jsonify({'response': 'error', 'message': 'Bad password'}), 200
            else:
                if len(password) < 8:
                    return jsonify({'response': 'error', 'message': 'Bad password'}), 200
                if len(password) > 64:
                    return jsonify({'response': 'error', 'message': 'Bad password'}), 200
            
            # Создаем нового пользователя
            # Добавить: больше данных юзеру + безопасность!
            # verif_code = get_verif_code()  # Доделать!
            verif_code = '123123'  # Тестовый вериф код
            uid = generate_uid()
            refcode = get_ref_code(uid)
            country = get_country()
            current_timestamp = int(time.time())
            user_data = {
                'uid': uid,
                'username': 'User',  # test_123
                'email': email,
                'phone': phone,
                'refid': refid,
                'refcode': refcode,  # Реф Код Юзера
                'password': hash_key(password),  # Юзер Пароль
                'vcode': hash_key(verif_code),  # Код Входа
                'verified': 0,  # Верификация По Коду
                'verification': 0,  # Верификация По Докам | 0 - нету, 1 - на модерации, 2 - прошел, 3 - отклонен
                'vfiles': '',  # Файлы Верификации
                'country': country,  # Определяем по IP
                'logo': '',  # user.png
                'xp': 0, # опыт - который определяет твой level
                'status': 0,  # 0 - обычный акк, 1 - заморожен, 2 - (закрыт / удален), 3 - забанен
                '2fa': '',  # пусто - отключена, ключ - включена
                '2fa_temp': '',  # Временный 2FA ключ (до подтверждения / потом удалить из памяти)
                'csrf': '',  # Ключ к действиям юзера после логина
                'time': current_timestamp  # Время юзера (Онлайн)
            }
            
            # Обновляем сессию
            session = get_user_session()
            user_sessions = None
            if session:
                session_data = {
                    'uid': uid,
                    'ip_address': session.get('ip_address', ''),
                    'user_agent': session.get('user_agent', ''),
                    'country': session.get('country', ''),
                    'os': session.get('os', ''),
                    'device': session.get('device', ''),  # Other
                    'browser': session.get('browser', ''),
                    'status': 0
                }
                user_sessions = db.fetch_first('sessions', session_data)
                session_data['sid'] = generate_uid()
                if not user_sessions:
                    db.insert('sessions', session_data)
                else:
                    session_data['sid'] = user_sessions['sid']
            
            # Вставляем в БД
            logging.info(f"Add in 'users' table: {str(user_data)}")
            user_id = db.insert('users', user_data)
            if user_id:
                if email:
                    logging.info(f"User registered: {str(email)}")
                if phone:
                    logging.info(f"User registered: {str(phone)}")
                
                # Сохраняем историю действий
                logging.info(f"Send verif code: {str(verif_code)}")
                db.insert('actions', {'uid': user_data['uid'], 'type': 'register', 'time': current_timestamp, 'data': f"sid:{session_data['sid']}"})
                
                if email: # В финале добавить везде отправку email вериф кода
                    send_vcode(email, phone, verif_code)
                
                # Добавляем 100.025 TEST монет
                balance_act(user_data['uid'], 'register_bonus', 'TEST', 100.025)
                
                return jsonify({'response': 'success', 'message': 'User successfully registered'}), 200
            else:
                logging.info(f"User registration failed: {str(user_data)}")
                return jsonify({'response': 'error', 'message': 'User registration failed'}), 200
        except Exception as e:
            logging.error(f"Register error: {str(e)}\n{traceback.format_exc()}")
            return jsonify({'response': 'error', 'message': 'Internal Server Error'}), 500
        finally:
            db.close()
    else:
        return jsonify({'response': 'error', 'message': 'No data'}), 200

# Обработчик ошибки 404
@app.errorhandler(404)
def not_found(error):
    logging.error(f"Not Found: {str(error)}")
    return jsonify({'response': 'error', 'message': 'Not Found'}), 404

# Обработчик ошибки 405
@app.errorhandler(405)
def method_not_allowed(error):
    logging.error(f"Method Not Allowed: {str(error)}")
    return jsonify({'response': 'error', 'message': 'Method Not Allowed'}), 405

# Обработчик ошибки 429 (превышение лимита запросов)
@app.errorhandler(429)
def ratelimit_handler(error):
    logging.error(f"Rate limit exceeded: {str(error)}")
    return jsonify({'response': 'error', 'message': 'Rate limit exceeded'}), 429

# Обработчик ошибки 500
@app.errorhandler(500)
def internal_error(error):
    logging.error(f"Internal server error: {str(error)}")
    return jsonify({'response': 'error', 'message': 'Internal Server Error'}), 500

# Обработчик ошибки OSError
@app.errorhandler(OSError)
def os_error(error):
    logging.error(f"OSError: {str(error)}")
    return jsonify({'response': 'error', 'message': 'Internal Server Error'}), 500

# Обработка всех других Exception
@app.errorhandler(Exception)
def handle_general_error(error):
    logging.error(f"ExceptionError: {str(error)}")
    return jsonify({'response': 'error', 'message': 'Internal Server Error'}), 500

# Защита от взлома
@app.before_request
def validate_request():
    if request.method not in ['GET', 'POST', 'OPTIONS']:
        return jsonify({'response': 'error', 'message': 'Method not allowed'}), 405
    
    if not request.headers.get('User-Agent'):
        return jsonify({'response': 'error', 'message': 'Bad request'}), 400

# Основной код программы
if __name__ == '__main__':
    schedule_restart()  # Авто-рестарт
    # Проверяем наличие SSL сертификата
    ssl = None
    crt_path = Path("settings/local.crt")
    key_path = Path("settings/local.key")
    if crt_path.exists() and key_path.exists():
        ssl = (crt_path, key_path)
    
    # Сервер доступен на всех IP-адресах, на порту 5000, с включенным режимом отладки
    if config.get('main', {}).get('mode', '') == 'production':  # debug / production
        app.run(host="0.0.0.0", port=5000, debug=False, ssl_context=ssl)
    else:
        app.run(host="0.0.0.0", port=5000, debug=True, ssl_context=ssl)