export const registerUser = async (data: {
  email: string;
  password: string;
  phone: string;
  refid?: string;
}) => {
  try {
    const response = await fetch('https://nextfi.site:5000/api/v1/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (response.ok) {
      console.log(result)
      return result;
    } else {
      throw new Error(result.message);
    }
  } catch (error: any) {
    throw new Error(error.message || 'An error occurred during registration');
  }
};
export const loginUser = async (payload: { email?: string; phone?: string; password?: string; uid?: string, vcode?: string}) => {
  try {
    const response = await fetch('https://nextfi.site:5000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || 'Login failed');
    }
    console.log(result)
    return result;
  } catch (error: any) {
    throw new Error(error.message || 'An error occurred during login');
  }
};
export const verifyCode = async (payload: { email?: string; phone?: string; password?: string; uid?: string, vcode?: string}) => {
  try {
    const response = await fetch('https://nextfi.site:5000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || 'Login failed');
    }

    return result;
  } catch (error: any) {
    throw new Error(error.message || 'An error occurred during login');
  }
};
// export const sendPicture = async (file: File) => {
//   try {
//     const userData = JSON.parse(localStorage.getItem('userData') || '{}');

//     if (!userData.uid || (!userData.email && !userData.phone)) {
//       throw new Error('Missing required user data in localStorage');
//     }

//     // Создаем FormData
//     const formData = new FormData();
//     formData.append('file', file); // Добавляем файл
//     formData.append('email', userData.email || ''); // Добавляем email
//     formData.append('phone', userData.phone || ''); // Добавляем phone

//     const response = await fetch('https://nextfi.site:5000/api/v1/logo', {
//       method: 'POST',
//       body: formData,
//     });

//     const result = await response.json();

//     if (!response.ok) {
//       throw new Error(result.message || 'Upload failed');
//     }

//     console.log('Upload result:', result);
//     return result;
//   } catch (error: any) {
//     console.error('Upload error:', error.message);
//     throw new Error(error.message || 'An error occurred during upload');
//   }
// };

