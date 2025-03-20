"use client";
import { Authicons } from "@/components/shared/Authicons";
import { Logo_header } from "@/components/ui/Logo_header";
import { SecIcon } from "@/components/ui/SecIcon";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useUserStore } from "@/hooks/useUserData";
import { Link } from "@/i18n/routing";
import { useThemeStore } from "@/store/useChatStore";
import { loginUser } from "@/utils/api";
import { Button } from "@heroui/button";
import { Spinner } from "@heroui/spinner";
import { yupResolver } from "@hookform/resolvers/yup";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const Login = () => {
<<<<<<< HEAD
  const user = useUserStore((state) => state.user);
  const t = useTranslations("auth");
  const schema = yup.object().shape({
    emailOrPhone: yup
      .string()
      .required(t("emailOrPhone"))
      .test("is-valid-email-or-phone", t("invalidEmorPhone"), (value) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const phoneRegex = /^\+?[0-9]{7,15}$/;
        return emailRegex.test(value) || phoneRegex.test(value);
      }),
    password: yup
      .string()
      .min(8, t("passwordMin"))
      .max(64, t("passwordMax"))
      .required(t("passwordReq")),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const [showPassword, setShowPassword] = useState(false);
  const {
    theme,
    mode,
    modeToogle,
    email,
    phone,
    showVerifWindow,
    setTwoFaActive,
    setshowVerifWindow,
  } = useThemeStore();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const params = useParams();
  const locale = params.locale || "en";
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const [vcode, setVcode] = useState<string>("");
  const [state, setState] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [typeError, setTypeError] = useState("");
=======
	const user = useUserStore(state => state.user)
	const t = useTranslations('auth')
	const schema = yup.object().shape({
		emailOrPhone: yup
			.string()
			.required(t('emailOrPhone'))
			.test('is-valid-email-or-phone', t('invalidEmorPhone'), value => {
				const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
				const phoneRegex = /^\+?[0-9]{7,15}$/
				return emailRegex.test(value) || phoneRegex.test(value)
			}),
		password: yup
			.string()
			.min(8, t('passwordMin'))
			.max(64, t('passwordMax'))
			.required(t('passwordReq')),
	})
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		resolver: yupResolver(schema),
		mode: 'onChange',
	})
	const [showPassword, setShowPassword] = useState(false)
	const {
		theme,
		mode,
		modeToogle,
		email,
		phone,
		showVerifWindow,
		setTwoFaActive,
		setshowVerifWindow,
	} = useThemeStore()
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const router = useRouter()
	const params = useParams()
	const locale = params.locale || 'en'
	const togglePasswordVisibility = () => setShowPassword(prev => !prev)
	const [vcode, setVcode] = useState<string>('')
	const [state, setState] = useState(false)
	const [isSubmit, setIsSubmit] = useState(false)
	const [typeError, setTypeError] = useState('')
	const [passwordError, setPasswordError] = useState('');
>>>>>>> origin/main

  useEffect(() => {
    if (typeof window !== undefined) {
      const params = new URLSearchParams(window.location.search);
      const sessionError = params.get("error");
      if (sessionError === "sessionExpired") {
        setError(t("userExpired"));
        setState(false);
      }
    }
  }, []);

  const handle2faLogin = async () => {
    try {
      const loginPayload =
        user?.lastAuthAction === "login"
          ? {
              email: user?.loginEmail,
              phone: user?.loginPhone,
              password: user?.loginPassword,
              "2fa_code": vcode,
            }
          : {
              email: user?.registerEmail,
              phone: user?.registerPhone,
              password: user?.registerPassword,
              "2fa_code": vcode,
            };

      console.log(loginPayload);
      const response = await loginUser(loginPayload);
      console.log(response);
      if (response.response === "success") {
        const userData = response.data;
        if (!userData.uid || !userData.csrf) {
          throw new Error("Получены некорректные данные пользователя");
        }
        useUserStore.getState().setUser(userData);
        if (userData.csrf) {
          useUserStore.getState().setCsrf(userData.csrf);
        }
        localStorage.setItem("userData", JSON.stringify(userData));

        useUserStore.getState().updateUser({ loginEmail: loginPayload?.email });
        useUserStore.getState().updateUser({ loginPhone: loginPayload?.phone });
        useUserStore
          .getState()
          .updateUser({ loginPassword: loginPayload?.password });
        useUserStore.getState().updateUser({ lastAuthAction: "login" });

        if (userData.csrf) {
          setshowVerifWindow(false);
          setIsSubmit(false);
          router.push(`/${locale}/over`);
        }
      } else if (response.requires_verif) {
        setshowVerifWindow(true);
        setIsSubmit(false);
      } else if (vcode.length === 0 && vcode.length < 6) {
        setshowVerifWindow(true);
        setIsSubmit(false);
      } else {
        throw new Error(response.message || "Ошибка авторизации");
      }
    } catch (err: any) {
      console.log(err.message);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(typeError);
  const handleChange = async () => {
    setIsSubmit(true);
    const timer = setTimeout(async () => {
      setIsSubmit(true);
      setshowVerifWindow(false);

      const loginPayload =
        user?.lastAuthAction === "login"
          ? {
              email: user?.loginEmail,
              phone: user?.loginPhone,
              password: user?.loginPassword,
              vcode: vcode,
            }
          : {
              email: user?.registerEmail,
              phone: user?.registerPhone,
              password: user?.registerPassword,
              vcode: vcode,
            };

      useUserStore.getState().updateUser({ loginEmail: loginPayload?.email });
      useUserStore.getState().updateUser({ loginPhone: loginPayload?.phone });
      useUserStore
        .getState()
        .updateUser({ loginPassword: loginPayload?.password });
      useUserStore.getState().updateUser({ loginVcode: loginPayload?.vcode });
      useUserStore.getState().updateUser({ lastAuthAction: "login" });

<<<<<<< HEAD
      try {
        console.log(loginPayload);
        const response = await loginUser(loginPayload);
        console.log(response);
        if (response.response === "success") {
          const userData = response.data;
          if (!userData.uid || !userData.csrf) {
            throw new Error("Получены некорректные данные пользователя");
          }
          setTwoFaActive(false);
          useUserStore.getState().setUser(userData);
          if (userData.csrf) {
            useUserStore.getState().setCsrf(userData.csrf);
          }
          localStorage.setItem("userData", JSON.stringify(userData));
=======
					if (userData.csrf) {
						setshowVerifWindow(false)
						setIsSubmit(false)
						router.push(`/${locale}/over`)
					}
				} else if (response.requires_verif) {
					setshowVerifWindow(true)
					setIsSubmit(false)
					setError(response.message)
				} else if (response.requires_2fa) {
					setshowVerifWindow(true)
					setIsSubmit(false)
					setTypeError('requires_2fa')
				} else if (vcode.length === 0 && vcode.length < 6) {
					setshowVerifWindow(true)
					setIsSubmit(false)
				} else {
					throw new Error(response.message || 'Ошибка авторизации')
				}
			} catch (err: any) {
				console.log(err.message)
				setError(err.message)
			} finally {
				setIsLoading(false)
			}
		}, 3000)
		return () => clearTimeout(timer)
	}
	const onSubmit = async (data: any) => {
		setPasswordError('');
		const payload = {
			email: mode === 'email' ? data.emailOrPhone : '',
			phone: mode === 'phone' ? data.emailOrPhone : '',
			password: data.password,
			vcode: vcode,
			refid: data.refid || '',
			terms: 'yes',
			uid: data.uid || '',
			'2fa_code': vcode,
		}
>>>>>>> origin/main

          if (userData.csrf) {
            setshowVerifWindow(false);
            setIsSubmit(false);
            router.push(`/${locale}/over`);
          }
        } else if (response.requires_verif) {
          setshowVerifWindow(true);
          setIsSubmit(false);
        } else if (response.requires_2fa) {
          setshowVerifWindow(true);
          setIsSubmit(false);
          setTypeError("requires_2fa");
        } else if (vcode.length === 0 && vcode.length < 6) {
          setshowVerifWindow(true);
          setIsSubmit(false);
        } else {
          throw new Error(response.message || "Ошибка авторизации");
        }
      } catch (err: any) {
        console.log(err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }, 3000);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    setTypeError("");
  }, [localStorage.getItem("profile-store")]);

  const onSubmit = async (data: any) => {
    const payload = {
      email: mode === "email" ? data.emailOrPhone : "",
      phone: mode === "phone" ? data.emailOrPhone : "",
      password: data.password,
      vcode: vcode,
      refid: data.refid || "",
      terms: "yes",
      uid: data.uid || "",
      "2fa_code": vcode,
    };

<<<<<<< HEAD
    useUserStore.getState().updateUser({ loginEmail: payload?.email });
    useUserStore.getState().updateUser({ loginPhone: payload?.phone });
    useUserStore.getState().updateUser({ loginPassword: payload?.password });
    useUserStore.getState().updateUser({ loginVcode: payload?.vcode });
    useUserStore.getState().updateUser({ lastAuthAction: "login" });

    setError(null);
    setIsLoading(true);

    try {
      const response = await loginUser(payload);
      console.log(response);
      if (response.requires_verif === true) {
        setTypeError("requires_verif");
        console.log(typeError);
      }
      if (response.requires_2fa === true) {
        setTypeError("requires_2fa");
        console.log(typeError);
      }
      if (response.response === "success") {
        const userData = response.data;
        setTwoFaActive(false);

        if (!userData.uid || !userData.csrf) {
          throw new Error("Получены некорректные данные пользователя");
        }
        useUserStore.getState().setUser(userData);
        useUserStore.getState().updateUser({ password: payload?.password });
        if (userData.csrf) {
          useUserStore.getState().setCsrf(userData.csrf);
        }
        localStorage.setItem("userData", JSON.stringify(userData));
        if (userData.csrf) {
          setshowVerifWindow(false);
          setIsSubmit(false);
          router.push(`/${locale}/over`);
        }
      } else if (response.requires_verif) {
        setshowVerifWindow(true);
        setIsSubmit(false);
      } else if (response.requires_2fa) {
        setshowVerifWindow(true);
        setIsSubmit(false);
        setTypeError("requires_2fa");
      } else if (vcode.length === 0 && vcode.length < 6) {
        setshowVerifWindow(true);
        setIsSubmit(false);
      } else {
        setIsSubmit(false);
        console.log(response);
        setError(response.message);
      }
    } catch (err: any) {
      console.log(err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(typeError);

  return (
    <div className="form__wrapper flex flex-col justify-between gap-[20px]">
      <div className="form__wrapper-title">
        <Logo_header />
      </div>
      {typeError === "requires_2fa" ? (
        <div className="form__verify w-full ">
          <h2>Enter the 2FA code</h2>
          <p>
            Enter the 6-digit two-factor authentication code. To get the code,
            check the 2fa app.
          </p>
          <span>{t("enterCd")}:</span>
          <div className="flex flex-col w-full justify-center items-center gap-[20px]">
            <InputOTP
              maxLength={6}
              pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
              value={vcode}
              onChange={(value) => setVcode(value)}
            >
              <InputOTPGroup>
                {Array.from({ length: 6 }).map((_, index) => (
                  <InputOTPSlot
                    key={index}
                    className="border-1 border-solid border-gray-500 text-[16px] p-[25px] text-[#0c0c0c] dark:text-[#ffffff]"
                    index={index}
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>
            {error && <p className="text-danger">{error}</p>}
            <Button
              onPress={handle2faLogin}
              disabled={vcode.length < 6 || isSubmit}
              className={`next__btn ${
                vcode.length >= 6
                  ? "!bg-[#205bc9] !border-[#205bc9]"
                  : "!bg-gray-600 !border-gray-600"
              }`}
            >
              {isSubmit ? <Spinner /> : t("next")}
            </Button>
          </div>
        </div>
      ) : showVerifWindow ? (
        <div className="form__verify w-full ">
          <h2>
            {t("confirmYour")}{" "}
            {mode === "email" ? t("emailAds") : t("phoneAds")}
          </h2>
          <p>
            {t("sixDigit")}{" "}
            {mode === "email" ? (
              <span className="!text-[#205bc9]">{email || "email"}</span>
            ) : (
              <span className="!text-[#205bc9]">+{phone || "phone"}</span>
            )}
            . {t("verifMust")}
          </p>
          <span>{t("enterCd")}:</span>
          <div className="flex flex-col w-full justify-center items-center gap-[20px]">
            <InputOTP
              maxLength={6}
              pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
              value={vcode}
              onChange={(value) => setVcode(value)}
            >
              <InputOTPGroup>
                {Array.from({ length: 6 }).map((_, index) => (
                  <InputOTPSlot
                    key={index}
                    className="border-1 border-solid border-gray-500 text-[16px] p-[25px] text-[#0c0c0c] dark:text-[#ffffff]"
                    index={index}
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>
            {error && <p className="text-danger">{error}</p>}
            <Button
              onPress={handleChange}
              disabled={vcode.length < 6 || isSubmit}
              className={`next__btn ${
                vcode.length >= 6
                  ? "!bg-[#205bc9] !border-[#205bc9]"
                  : "!bg-gray-600 !border-gray-600"
              }`}
            >
              {isSubmit ? <Spinner /> : t("next")}
            </Button>
          </div>
          <span className="form__verify-resend">
            {t("notRecieved")} <a href="">{t("email")}</a>
          </span>
        </div>
      ) : (
        <>
          <div className="switch-mode relative z-[9999]">
            <Button
              className={mode === "email" ? "active" : ""}
              onPress={() => modeToogle("email")}
            >
              {t("email")}
            </Button>
            <div className="cursor-not-allowed">
              <Button
                isDisabled={true}
                className={mode === "phone" ? "active" : ""}
                onPress={() => modeToogle("phone")}
              >
                {t("phone")}
              </Button>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className="w-full">
              <input
                type={mode === "email" ? "email" : "tel"}
                placeholder={mode === "email" ? t("email") : t("phone")}
                {...register("emailOrPhone")}
                id="login"
                className={`${errors.emailOrPhone ? "!border-danger focus:!outline-danger " : ""}`}
              />
              {errors.emailOrPhone && (
                <p className="text-danger pointer-events-none">
                  {errors.emailOrPhone.message}
                </p>
              )}
            </div>
            <div className="password__wrapper w-full">
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder={t("enterPass")}
                  {...register("password")}
                  id="pass"
                  className={`${errors.password ? "!border-danger focus:!outline-danger " : ""}`}
                />
                <span
                  className="absolute top-0 right-0"
                  onClick={togglePasswordVisibility}
                >
                  <img
                    src={
                      showPassword
                        ? "/form/Mobile_ visibility.svg"
                        : "/form/Mobile_ visibility_off.svg"
                    }
                    alt="toggle visibility"
                  />
                </span>
              </div>
              {errors.password && (
                <p className=" text-danger pointer-events-none">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* {error && (
							<p className='text-danger pointer-events-none'>{error}</p>
						)} */}
            <button
              type="submit"
              disabled={isLoading || !isValid}
              className={`submit-btn ${isValid ? "valid" : ""}`}
            >
              {isLoading ? <Spinner /> : t("login")}
            </button>
          </form>
=======
				if (!userData.uid || !userData.csrf) {
					throw new Error('Получены некорректные данные пользователя')
				}
				useUserStore.getState().setUser(userData)
				useUserStore.getState().updateUser({ password: payload?.password })
				if (userData.csrf) {
					useUserStore.getState().setCsrf(userData.csrf)
				}
				localStorage.setItem('userData', JSON.stringify(userData))
				if (userData.csrf) {
					setshowVerifWindow(false)
					setIsSubmit(false)
					router.push(`/${locale}/over`)
				}
			} else if (response.requires_verif) {
				setshowVerifWindow(true)
				setIsSubmit(false)
			} else if (response.requires_2fa) {
				setshowVerifWindow(true)
				setIsSubmit(false)
				setTypeError('requires_2fa')
			} else {
				setIsSubmit(false)
				console.log(response)
				setError(response.message)
				if (response.message === "Invalid user password"){
					setPasswordError(response.message)
				}
			}
		} catch (err: any) {
			console.log(err)
			setError(err.message)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className='form__wrapper flex flex-col justify-between gap-[20px]'>
			<div className='form__wrapper-title'>
				<Logo_header />
			</div>
			{typeError === 'requires_2fa' ? (
				<div className='form__verify w-full '>
				<h2>
				Enter the 2FA code
				</h2>
				<p>
				Enter the 6-digit two-factor authentication code. To get the code, check the 2fa app.
				</p>
				<span>{t('enterCd')}:</span>
				<div className='flex flex-col w-full justify-center items-center gap-[20px]'>
					<InputOTP
						maxLength={6}
						pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
						value={vcode}
						onChange={value => setVcode(value)}
					>
						<InputOTPGroup>
							{Array.from({ length: 6 }).map((_, index) => (
								<InputOTPSlot
									key={index}
									className='border-1 border-solid border-gray-500 text-[16px] p-[25px] text-[#0c0c0c] dark:text-[#ffffff]'
									index={index}
								/>
							))}
						</InputOTPGroup>
					</InputOTP>
					{error && <a className='text-danger'>{error}</a>}
					<Button
						onPress={handle2faLogin}
						disabled={vcode.length < 6 || isSubmit}
						className={`next__btn ${
							vcode.length >= 6
								? '!bg-[#205bc9] !border-[#205bc9]'
								: '!bg-gray-600 !border-gray-600'
						}`}
					>
						{isSubmit ? <Spinner /> : t('next')}
					</Button>
				</div>
			</div>
			) : typeError === 'requires_verif' || showVerifWindow ? (
				<div className='form__verify w-full '>
					<h2>
						{t('confirmYour')}{' '}
						{mode === 'email' ? t('emailAds') : t('phoneAds')}
					</h2>
					<p>
						{t('sixDigit')}{' '}
						{mode === 'email' ? (
							<span className='!text-[#205bc9]'>{email || 'email'}</span>
						) : (
							<span className='!text-[#205bc9]'>+{phone || 'phone'}</span>
						)}
						. {t('verifMust')}
					</p>
					<span>{t('enterCd')}:</span>
					<div className='flex flex-col w-full justify-center items-center gap-[20px]'>
						<InputOTP
							maxLength={6}
							pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
							value={vcode}
							onChange={value => setVcode(value)}
						>
							<InputOTPGroup>
								{Array.from({ length: 6 }).map((_, index) => (
									<InputOTPSlot
										key={index}
										className='border-1 border-solid border-gray-500 text-[16px] p-[25px] text-[#0c0c0c] dark:text-[#ffffff]'
										index={index}
									/>
								))}
							</InputOTPGroup>
						</InputOTP>
						{error && <a className='text-danger'>{error}</a>}
						<Button
							onPress={handleChange}
							disabled={vcode.length < 6 || isSubmit}
							className={`next__btn ${
								vcode.length >= 6
										? '!bg-[#205bc9] !border-[#205bc9]'
										: '!bg-gray-600 !border-gray-600'
								}`}
							>
							{isSubmit ? <Spinner /> : t('next')}
						</Button>
					</div>
					<span className='form__verify-resend'>
						{t('notRecieved')} <a href=''>{t('email')}</a>
					</span>
				</div>
			) : (
				<>
					<div className='switch-mode relative z-[9999]'>
						<Button
							className={mode === 'email' ? 'active' : ''}
							onPress={() => modeToogle('email')}
						>
							{t('email')}
						</Button>
						<div className='cursor-not-allowed'>
							<Button
								isDisabled={true}
								className={mode === 'phone' ? 'active' : ''}
								onPress={() => modeToogle('phone')}
							>
								{t('phone')}
							</Button>
						</div>
					</div>
					<form onSubmit={handleSubmit(onSubmit)} className='form'>
						<div className='w-full'>
							<input
								type={mode === 'email' ? 'email' : 'tel'}
								placeholder={mode === 'email' ? t('email') : t('phone')}
								{...register('emailOrPhone')}
								id='login'
								className={`${errors.emailOrPhone ? '!border-danger focus:!outline-danger ' : ''}`}
							/>
							{errors.emailOrPhone && (
								<p className='text-danger pointer-events-none'>
									{errors.emailOrPhone.message}
								</p>
							)}
						</div>
						<div className='password__wrapper w-full'>
							<div className='relative w-full'>
								<input
									type={showPassword ? 'text' : 'password'}
									placeholder={t('enterPass')}
									{...register('password')}
									id='pass'
									className={`${errors.password ? '!border-danger focus:!outline-danger ' : ''}`}
								/>
								<span
									className='absolute top-0 right-0'
									onClick={togglePasswordVisibility}
								>
									<img
										src={
											showPassword
												? '/form/Mobile_ visibility.svg'
												: '/form/Mobile_ visibility_off.svg'
										}
										alt='toggle visibility'
									/>
								</span>
							</div>
							{errors.password && (
								<p className='text-danger pointer-events-none'>
									{errors.password.message}
								</p>
							)}
						</div>

						{passwordError && (
							<p className='text-danger pointer-events-none' style={{margin: "-15px"}}>{passwordError}</p>
						)}
						<button
							type='submit'
							disabled={isLoading || !isValid}
							className={`submit-btn ${isValid ? 'valid' : ''}`}
						>
							{isLoading ? <Spinner /> : t('login')}
						</button>
					</form>
>>>>>>> origin/main

          <span className="forgot">{t("forgot")}</span>

          <div className="help login__help">
            <p>
              <span />
              <b>{t("or")}</b>
              <span />
            </p>

            <button
              className="mobile__google !cursor-not-allowed lock-btn"
              disabled={true}
            >
              <Image
                alt="Google icon"
                height={24}
                src="/form/Mobile_ Google.svg"
                width={24}
              />
              {t("googleAuth")}
              <SecIcon cls="lock min-w-[20px] lock" color="black" />
            </button>

            <Link className="help-signup" href="/signup">
              {t("dontHave")} <span>{t("signup")}</span>
            </Link>

            <div className="socials login__social">
              <span>{t("ourSocial")}</span>

              <div className="socials__icons">
                {/* <Image
									alt='Logo'
									height={48}
									quality={100}
									src={
										theme === 'dark'
											? '/form/icons_dark/Instagram_dark.svg'
											: '/form/icons_white/Instagram.svg'
									}
									width={48}
								/>
								<Image
									alt='Logo'
									height={48}
									quality={100}
									src={
										theme === 'dark'
											? '/form/icons_dark/Telegram_dark.svg'
											: '/form/icons_white/Telegram_white.svg'
									}
									width={48}
								/>
								<Image
									alt='Logo'
									height={48}
									quality={100}
									src={
										theme === 'dark'
											? '/form/icons_dark/Snapchat_dark.svg'
											: '/form/icons_white/Snapchat_white.svg'
									}
									width={48}
								/>
								<Image
									alt='Logo'
									height={48}
									quality={100}
									src={
										theme === 'dark'
											? '/form/icons_dark/Twitter_dark.svg'
											: '/form/icons_white/Twitter_white.svg'
									}
									width={48}
								/> */}
                {/* <Instagram
									strokeWidth={1}
									className='min-h-[30px] min-w-[30px]'
								/>
								<Facebook
									strokeWidth={1}
									className='min-h-[30px] min-w-[30px]'
								/>
								<Twitter
									strokeWidth={1}
									className='min-h-[30px] min-w-[30px]'
								/>
								<Send strokeWidth={1} className='min-h-[30px] min-w-[30px]' /> */}
                <Authicons />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
