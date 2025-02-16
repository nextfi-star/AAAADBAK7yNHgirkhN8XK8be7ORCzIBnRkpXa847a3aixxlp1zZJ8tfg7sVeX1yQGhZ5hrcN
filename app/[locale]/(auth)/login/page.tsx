'use client'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useRouter, useParams } from 'next/navigation'
import { Button } from '@nextui-org/button'
import { useThemeStore } from '@/store'
import { Spinner } from '@nextui-org/spinner'
import { loginUser } from '@/utils/api'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { Logo_header } from '@/components/ui/Logo_header'
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from '@/components/ui/input-otp'
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp'
import { useUserStore } from '@/hooks/useUserData'
const schema = yup.object().shape({
	emailOrPhone: yup
		.string()
		.required('Email or phone is required')
		.test('is-valid-email-or-phone', 'Invalid email or phone', value => {
			const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
			const phoneRegex = /^\+?[0-9]{7,15}$/
			return emailRegex.test(value) || phoneRegex.test(value)
		}),
	password: yup
		.string()
		.min(8, 'Password must be at least 8 characters')
		.max(64, 'Password must not exceed 64 characters')
		.required('Password is required'),
})

const Login = () => {
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

	useEffect(() => {
		const params = new URLSearchParams(window.location.search)
		const sessionError = params.get('error')
		if (sessionError === 'sessionExpired') {
			setError('User session expired. Please log in again.')
			setState(false)
		}
	}, [])

	const handleChange = () => {
		setshowVerifWindow(true)
		setIsSubmit(true)
		const timer = setTimeout(() => {
			setIsSubmit(true)
			setshowVerifWindow(false)
		}, 3000)
		return () => clearTimeout(timer)
	}
	const onSubmit = async (data: any) => {
		const payload = {
			email: mode === 'email' ? data.emailOrPhone : '',
			phone: mode === 'phone' ? data.emailOrPhone : '',
			password: data.password,
			vcode: vcode,
			refid: data.refid || '',
			terms: 'yes',
			uid: data.uid || '',
		};
	
		setError(null);
		setIsLoading(true);
	
		try {
			const response = await loginUser(payload);
			if (response.response === 'success') {
				const userData = response.data;
	
				if (!userData.uid || !userData.csrf) {
					throw new Error('Получены некорректные данные пользователя');
				}
				useUserStore.getState().setUser(userData);
				if (userData.csrf) {
					useUserStore.getState().setCsrf(userData.csrf);
				}
				localStorage.setItem('userData', JSON.stringify(userData));
				if (userData.csrf) {
					router.push(`/${locale}/over`);
				}
			} else {
				throw new Error(response.message || 'Ошибка авторизации');
			}
		} catch (err: any) {
			setError(err.message);
		} finally {
			setIsLoading(false);
		}
	};
	

	return (
		<div className='form__wrapper flex flex-col justify-between gap-[20px]'>
			<div className='form__wrapper-title'>
				<Logo_header />
			</div>

			{showVerifWindow ? (
				<div className='form__verify w-full '>
					<h2>
						Confirm your {mode === 'email' ? 'email address' : 'phone number'}
					</h2>
					<p>
						A 6-digit code has been sent to your{' '}
						{mode === 'email' ? (
							<span className='!text-[#205bc9]'>{email}</span>
						) : (
							<span className='!text-[#205bc9]'>+{phone}</span>
						)}
						. The verification code must be entered within 30 minutes.
					</p>
					<span>Enter code: </span>
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
						{error && <p className='text-danger'>{error}</p>}
						<Button
							onClick={handleChange}
							disabled={vcode.length < 6 || isSubmit}
							className={`next__btn ${
								vcode.length >= 6
									? '!bg-[#205bc9] !border-[#205bc9]'
									: '!bg-gray-600 !border-gray-600'
							}`}
						>
							{isSubmit ? <Spinner /> : 'Next'}
						</Button>
					</div>
					<span className='form__verify-resend'>Didn't receive the code?</span>
				</div>
			) : (
				<>
					<div className='switch-mode relative z-[9999]'>
						<Button
							className={mode === 'email' ? 'active' : ''}
							onClick={() => modeToogle('email')}
						>
							E-mail
						</Button>
						<Button
							className={mode === 'phone' ? 'active' : ''}
							onClick={() => modeToogle('phone')}
						>
							Phone number
						</Button>
					</div>
					<form onSubmit={handleSubmit(onSubmit)} className='form'>
						<div className='w-full'>
							<input
								type={mode === 'email' ? 'email' : 'tel'}
								placeholder={mode === 'email' ? 'E-mail' : 'Phone number'}
								{...register('emailOrPhone')}
								id='login'
								className={`${errors.emailOrPhone ? '!border-danger focus:!outline-danger ' : ''}`}
							/>
							{errors.emailOrPhone && (
								<p className='absolute text-danger pointer-events-none'>
									{errors.emailOrPhone.message}
								</p>
							)}
						</div>
						<div className='password__wrapper relative w-full'>
							<input
								type={showPassword ? 'text' : 'password'}
								placeholder='Enter a password'
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
							{errors.password && (
								<p className='absolute text-danger pointer-events-none'>
									{errors.password.message}
								</p>
							)}
						</div>

						<input
							type={showPassword ? 'text' : 'password'}
							placeholder='Code'
							id='vcode1'
							value={vcode}
							onChange={e => setVcode(e.target.value)}
							className={`hidden`}
						/>

						{error && (
							<p className='text-danger pointer-events-none'>{error}</p>
						)}
						<button
							type='submit'
							disabled={isLoading || !isValid}
							className={`submit-btn ${isValid ? 'valid' : ''}`}
						>
							{isLoading ? <Spinner /> : 'Log in'}
						</button>
					</form>

					<span className='forgot'>Forgot your password?</span>

					<div className='help login__help'>
						<p>
							<span />
							<b>Or</b>
							<span />
						</p>

						<button className='mobile__google !cursor-not-allowed' disabled>
							<Image
								alt='Google icon'
								height={24}
								src='/form/Mobile_ Google.svg'
								width={24}
							/>
							Continue with Google
						</button>

						<Link className='help-signup' href='/signup'>
							Don't have an account? <span>Sign up</span>
						</Link>

						<div className='socials login__social'>
							<span>join us on social networks</span>

							<div className='socials__icons'>
								<Image
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
								/>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	)
}

export default Login
