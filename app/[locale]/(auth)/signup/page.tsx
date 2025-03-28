"use client";
import { Logo_header } from "@/components/ui/Logo_header";
import { Link } from "@/i18n/routing";
import { useThemeStore } from "@/store/useChatStore";
import { registerUser } from "@/utils/api";
import { Button } from "@heroui/button";
import { Checkbox, Switch } from "@heroui/react";
import { Spinner } from "@heroui/spinner";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Authicons } from "@/components/shared/Authicons";
import { SecIcon } from "@/components/ui/SecIcon";
import { useUserStore } from "@/hooks/useUserData";

const SignUp = () => {
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
    agreeToTerms: yup.boolean().oneOf([true], t("errAgree")),
    refid: yup
      .string()
      .notRequired()
      .test(
        "is-valid-refid",
        t("invalidRef"),
        (value) => !value || /^[a-zA-Z0-9-]{6,15}$/.test(value)
      ),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const [isSelected, setIsSelected] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { theme, mode, modeToogle } = useThemeStore();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const params = useParams();
  const locale = params.locale || "en";
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const onSubmit = async (data: any) => {
    const payload = {
      email: mode === "email" ? data.emailOrPhone : "",
      phone: mode === "phone" ? data.emailOrPhone : "",
      password: data.password,
      refid: data.refid || "",
      terms: "yes",
    };
    setError(null);
    setIsLoading(true);
    try {
      const response = await registerUser(payload);
      if (response.response === "success") {
        useUserStore.getState().updateUser({ registerEmail: payload.email });
        useUserStore.getState().updateUser({ registerPhone: payload.phone });
        useUserStore
          .getState()
          .updateUser({ registerPassword: payload.password });
        useUserStore.getState().updateUser({ lastAuthAction: "register" });
        router.push(`/${locale}/login`);
      } else {
        setError(response.message);
      }
    } catch (err: any) {
      setError(err.message);
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="form__wrapper flex flex-col gap-[20px]">
      <div className="form__wrapper-title">
        <Logo_header />
      </div>
      <div className="switch-mode relative z-[9999]">
        <Button
          className={`${mode === "email" ? "active" : ""}`}
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
            disabled={isLoading}
            type={mode === "email" ? "email" : "tel"}
            placeholder={mode === "email" ? "E-mail" : "Phone number"}
            {...register("emailOrPhone")}
            id="login"
            className={` ${errors.emailOrPhone ? "!border-danger focus:!outline-danger " : ""}`}
          />
          {errors.emailOrPhone && (
            <p className=" text-danger pointer-events-none">
              {errors.emailOrPhone.message}
            </p>
          )}
        </div>
        <div className="password__wrapper w-full">
          <div className="w-full relative">
            <input
              disabled={isLoading}
              type={showPassword ? "text" : "password"}
              placeholder={t("enterPass")}
              {...register("password")}
              id="pass"
              className={` ${errors.password ? "!border-danger focus:!outline-danger " : ""}`}
            />
            <span
              className="absolute top-0 right-0"
              onClick={togglePasswordVisibility}
            >
              <Image
                width={30}
                height={30}
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
        <div className="referalID__wrapper">
          <label className="flex items-center justify-between">
            <span className="text-[20px] text-[#3A3939] dark:text-[#EFEFEF]">
              {t("refID")}
            </span>
            <Switch
              isSelected={isSelected}
              onValueChange={setIsSelected}
              classNames={{
                thumb: "bg-[#205BC9]",
                base: "max-w-[52px] w-full",
                label: "max-w-[52px] w-full",
                wrapper: "max-w-[52px] w-full",
              }}
            />
          </label>
          {isSelected && (
            <div className="relative">
              <input
                disabled={isLoading}
                type="text"
                placeholder="UFRYXEEXDG"
                {...register("refid")}
                id="referal"
                className={`!border-[#BDBDBD] dark:!border-[#888888] ${errors.emailOrPhone ? "!border-danger focus:!outline-danger " : ""}`}
              />
              {errors.refid && (
                <p className=" bottom-[-23px] text-warning pointer-events-none">
                  {errors.refid.message}
                </p>
              )}
            </div>
          )}
        </div>
        <div className="privacy relative">
          <label className="flex items-center gap-[5px] ">
            <Checkbox {...register("agreeToTerms")} />
            <p>
              {t("iRead1")}{" "}
              <span className="text-[#205BC9]">{t("iRead2")}</span>{" "}
              {t("iRead3")}{" "}
              <span className="text-[#205BC9]">{t("iRead4")}</span>.
            </p>
          </label>
          {errors.agreeToTerms && (
            <p className="text-warning !absolute bottom-[-17px] left-[30px] pointer-events-none">
              {errors.agreeToTerms.message}
            </p>
          )}
        </div>
        {error && <p className="text-danger ">{error}</p>}
        <button
          type="submit"
          disabled={isLoading || !isValid}
          className={`submit-btn ${isValid ? "valid" : ""}`}
        >
          {isLoading ? <Spinner color="current" /> : t("signup")}
        </button>
      </form>

      <div className="help login__help">
        <p>
          <span />
          <b>{t("or")}</b>
          <span />
        </p>

        <button
          className="mobile__google !cursor-not-allowed lock-btn"
          disabled
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

        <Link className="help-signup" href="/login">
          {t("haveAcc")} <span>{t("login")}</span>
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
            {/* <Instagram strokeWidth={1} className='min-h-[30px] min-w-[30px]' />
						<Facebook strokeWidth={1} className='min-h-[30px] min-w-[30px]' />
						<Twitter strokeWidth={1} className='min-h-[30px] min-w-[30px]' />
						<Send strokeWidth={1} className='min-h-[30px] min-w-[30px]' /> */}
            <Authicons />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;

// // ! OLD VERSION FROM GITHUB
// 'use client'

// import { useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup'
// import * as yup from 'yup'
// import { useRouter, useParams } from 'next/navigation'
// import { Button } from '@heroui/button'
// import { useThemeStore } from '@/store'
// import { Spinner } from '@heroui/spinner'
// import { registerUser } from '@/utils/api'
// import Image from 'next/image'
// import { Link } from '@/i18n/routing'
// import { Checkbox, Switch } from '@heroui/react'
// import { Logo_header } from '@/components/ui/Logo_header'

// const schema = yup.object().shape({
// 	emailOrPhone: yup
// 		.string()
// 		.required('Email or phone is required')
// 		.test('is-valid-email-or-phone', 'Invalid email or phone', value => {
// 			const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
// 			const phoneRegex = /^[0-9]{7,15}$/
// 			return emailRegex.test(value) || phoneRegex.test(value)
// 		}),
// 	password: yup
// 		.string()
// 		.min(8, 'Password must be at least 8 characters')
// 		.max(64, 'Password must not exceed 64 characters')
// 		.required('Password is required'),
// 	agreeToTerms: yup.boolean().oneOf([true], 'You must agree to the terms'),
// 	refid: yup
// 		.string()
// 		.notRequired()
// 		.test(
// 			'is-valid-refid',
// 			'Invalid referral ID',
// 			value => !value || /^[a-zA-Z0-9-]{6,15}$/.test(value)
// 		),
// })

// const SignUp = () => {
// 	const {
// 		register,
// 		handleSubmit,
// 		formState: { errors, isValid },
// 	} = useForm({
// 		resolver: yupResolver(schema),
// 		mode: 'onChange',
// 	})
// 	const [isSelected, setIsSelected] = useState(false)
// 	const [showPassword, setShowPassword] = useState(false)
// 	const { theme, mode, modeToogle, setPhone, setEmail, setshowVerifWindow } =
// 		useThemeStore()
// 	const [isLoading, setIsLoading] = useState(false)
// 	const [error, setError] = useState<string | null>(null)
// 	const router = useRouter()
// 	const params = useParams()
// 	const locale = params.locale || 'en'
// 	const togglePasswordVisibility = () => setShowPassword(prev => !prev)
// 	const onSubmit = async (data: any) => {
// 		const payload = {
// 			email: mode === 'email' ? data.emailOrPhone : '',
// 			phone: mode === 'phone' ? data.emailOrPhone : '',
// 			password: data.password,
// 			refid: data.refid || '',
// 			terms: 'yes',
// 		}
// 		setError(null)
// 		setIsLoading(true)
// 		try {
// 			const response = await registerUser(payload)
// 			if (response.response === 'success') {
// 				console.log(
// 					'\x1b[32m%s\x1b[0m',
// 					`login: ${data.emailOrPhone},\nphone: ${data.emailOrPhone || ''},\npassword: ${data.password},\nrefid: ${data.refid}`
// 				)
// 				setshowVerifWindow(true)
// 				router.push(`/${locale}/login`)
// 			} else {
// 				setError(response.message)
// 			}
// 		} catch (err: any) {
// 			setError(err.message)
// 		} finally {
// 			setIsLoading(false)
// 		}
// 	}

// 	return (
// 		<div className='form__wrapper flex flex-col gap-[20px]'>
// 			<div className='form__wrapper-title'>
// 				<Logo_header />
// 			</div>

// 			<div className='switch-mode relative z-[9999]'>
// 				<Button
// 					className={mode === 'email' ? 'active' : ''}
// 					onPress={() => modeToogle('email')}
// 				>
// 					E-mail
// 				</Button>
// 				<Button
// 					className={mode === 'phone' ? 'active' : ''}
// 					onPress={() => modeToogle('phone')}
// 				>
// 					Phone number
// 				</Button>
// 			</div>

// 			<form onSubmit={handleSubmit(onSubmit)} className='form'>
// 				<div className='w-full'>
// 					<input
// 						type={mode === 'email' ? 'email' : 'tel'}
// 						placeholder={mode === 'email' ? 'E-mail' : 'Phone number'}
// 						{...register('emailOrPhone')}
// 						onChange={e =>
// 							mode === 'email'
// 								? setEmail(e.target.value)
// 								: setPhone(e.target.value)
// 						}
// 						id='login'
// 						className={` ${errors.emailOrPhone ? '!border-danger focus:!outline-danger ' : ''}`}
// 					/>
// 					{errors.emailOrPhone && (
// 						<p className='absolute text-danger pointer-events-none'>
// 							{errors.emailOrPhone.message}
// 						</p>
// 					)}
// 				</div>
// 				<div className='password__wrapper relative w-full'>
// 					<input
// 						type={showPassword ? 'text' : 'password'}
// 						placeholder='Create a password'
// 						{...register('password')}
// 						id='pass'
// 						className={` ${errors.password ? '!border-danger focus:!outline-danger ' : ''}`}
// 					/>
// 					<span
// 						className='absolute top-0 right-0'
// 						onPress={togglePasswordVisibility}
// 					>
// 						<Image
// 							width={30}
// 							height={30}
// 							src={
// 								showPassword
// 									? '/form/Mobile_ visibility.svg'
// 									: '/form/Mobile_ visibility_off.svg'
// 							}
// 							alt='toggle visibility'
// 						/>
// 					</span>
// 					{errors.password && (
// 						<p className='absolute text-danger pointer-events-none'>
// 							{errors.password.message}
// 						</p>
// 					)}
// 				</div>
// 				<div className='referalID__wrapper'>
// 					<label className='flex items-center justify-between'>
// 						<span className='text-[20px] text-[#3A3939] dark:text-[#EFEFEF]'>
// 							Referral ID (optional)
// 						</span>
// 						<Switch
// 							isSelected={isSelected}
// 							onValueChange={setIsSelected}
// 							classNames={{
// 								thumb: 'bg-[#205BC9]',
// 								base: 'max-w-[52px] w-full',
// 								label: 'max-w-[52px] w-full',
// 								wrapper: 'max-w-[52px] w-full',
// 							}}
// 						/>
// 					</label>
// 					{isSelected && (
// 						<div className='relative'>
// 							<input
// 								type='text'
// 								placeholder='UFRYXEEXDG'
// 								{...register('refid')}
// 								id='referal'
// 								className={`!border-[#BDBDBD] dark:!border-[#888888] ${errors.emailOrPhone ? '!border-danger focus:!outline-danger ' : ''}`}
// 							/>
// 							{errors.refid && (
// 								<p className='absolute bottom-[-23px] text-warning pointer-events-none'>
// 									{errors.refid.message}
// 								</p>
// 							)}
// 						</div>
// 					)}
// 				</div>
// 				<div className='privacy relative'>
// 					<label className='flex items-center gap-[5px] '>
// 						<Checkbox {...register('agreeToTerms')} />
// 						<p>
// 							I have read and agree to{' '}
// 							<span className='text-[#205BC9]'>Nextfi's Terms of Services</span>{' '}
// 							and <span className='text-[#205BC9]'>Privacy Policy</span>.
// 						</p>
// 					</label>
// 					{errors.agreeToTerms && (
// 						<p className='text-warning !absolute bottom-[-17px] left-[30px] pointer-events-none'>
// 							{errors.agreeToTerms.message}
// 						</p>
// 					)}
// 				</div>
// 				{error && <p className='text-danger '>{error}</p>}
// 				<button
// 					type='submit'
// 					disabled={isLoading || !isValid}
// 					className={`submit-btn ${isValid ? 'valid' : ''}`}
// 				>
// 					{isLoading ? <Spinner color='current' /> : 'Sign Up'}
// 				</button>
// 			</form>

// 			<div className='help login__help'>
// 				<p>
// 					<span />
// 					<b>Or</b>
// 					<span />
// 				</p>

// 				<button className='mobile__google !cursor-not-allowed' disabled>
// 					<Image
// 						alt='Google icon'
// 						height={24}
// 						src='/form/Mobile_ Google.svg'
// 						width={24}
// 					/>
// 					Continue with Google
// 				</button>

// 				<Link className='help-signup' href='/login'>
// 					Already have an account? <span>Log in</span>
// 				</Link>

// 				<div className='socials login__social'>
// 					<span>join us on social networks</span>

// 					<div className='socials__icons'>
// 						<Image
// 							alt='Logo'
// 							height={48}
// 							quality={100}
// 							src={
// 								theme === 'dark'
// 									? '/form/icons_dark/Instagram_dark.svg'
// 									: '/form/icons_white/Instagram.svg'
// 							}
// 							width={48}
// 						/>
// 						<Image
// 							alt='Logo'
// 							height={48}
// 							quality={100}
// 							src={
// 								theme === 'dark'
// 									? '/form/icons_dark/Telegram_dark.svg'
// 									: '/form/icons_white/Telegram_white.svg'
// 							}
// 							width={48}
// 						/>
// 						<Image
// 							alt='Logo'
// 							height={48}
// 							quality={100}
// 							src={
// 								theme === 'dark'
// 									? '/form/icons_dark/Snapchat_dark.svg'
// 									: '/form/icons_white/Snapchat_white.svg'
// 							}
// 							width={48}
// 						/>
// 						<Image
// 							alt='Logo'
// 							height={48}
// 							quality={100}
// 							src={
// 								theme === 'dark'
// 									? '/form/icons_dark/Twitter_dark.svg'
// 									: '/form/icons_white/Twitter_white.svg'
// 							}
// 							width={48}
// 						/>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default SignUp
