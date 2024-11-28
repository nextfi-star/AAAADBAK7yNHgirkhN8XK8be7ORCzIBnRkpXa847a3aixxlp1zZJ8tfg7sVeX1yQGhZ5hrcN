// 'use client'
// import { useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup'
// import * as yup from 'yup'
// import { useParams, useRouter } from 'next/navigation'
// import { loginUser } from '@/utils/api'
// import { Button } from '@nextui-org/button'
// import { FormLogo } from '@/components/ui/FormLogo'
// import { useThemeStore } from '@/store'
// import Image from 'next/image'
// import { Link } from '@/i18n/routing'
// import { Spinner } from '@nextui-org/spinner'

// const schema = yup.object().shape({
// 	emailOrPhone: yup.string().required('Email or phone is required'),
// 	password: yup
// 		.string()
// 		.min(6, 'Password must be at least 6 characters')
// 		.required('Password is required'),
// 	agreeToTerms: yup.boolean().oneOf([true], 'You must agree to the terms'),
// })

// const LogIn = () => {
// 	const {
// 		register,
// 		handleSubmit,
// 		formState: { errors, isValid },
// 	} = useForm({
// 		resolver: yupResolver(schema),
// 		mode: 'onChange',
// 	})
// 	const { theme, email, setEmail, phone, setPhone, modeToogle, mode } =
// 		useThemeStore()
// 	const [showPassword, setShowPassword] = useState(false)
// 	const [isLoading, setIsLoading] = useState(false)
// 	const [success, setSuccess] = useState<string | null>(null)
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
// 		}

// 		setError(null)
// 		setIsLoading(true)

// 		try {
// 			const response = await loginUser(payload)
// 			if (response.response === 'success') {
// 				console.log(
// 					'\x1b[32m%s\x1b[0m',
// 					`login: ${data.emailOrPhone},\nphone: ${data.emailOrPhone || ''},\npassword: ${data.password}`
// 				)
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
// 				<FormLogo color={theme === 'dark' ? 'white' : '#3A3939'} />
// 			</div>

// 			<div className='switch-mode'>
// 				<Button
// 					className={mode === 'email' ? 'active' : ''}
// 					onClick={() => modeToogle('email')}
// 				>
// 					E-mail
// 				</Button>
// 				<Button
// 					className={mode === 'phone' ? 'active' : ''}
// 					onClick={() => modeToogle('phone')}
// 				>
// 					Phone number
// 				</Button>
// 			</div>

// 			<form onSubmit={handleSubmit(onSubmit)} className='form w-full'>
// 				<div className='w-full'>
// 					<input
// 						type={mode === 'email' ? 'email' : 'tel'}
// 						placeholder={mode === 'email' ? 'E-mail' : 'Phone number'}
// 						{...register('emailOrPhone')}
// 						id='login'
// 					/>
// 					{errors.emailOrPhone && <p>{errors.emailOrPhone.message}</p>}
// 				</div>
// 				<div className='w-full'>
// 					<input
// 						type='password'
// 						placeholder='Create a password'
// 						{...register('password')}
// 						id='pass'
// 					/>
// 					{errors.password && <p>{errors.password.message}</p>}
// 				</div>

// 				{error && <p className='text-danger'>{error}</p>}
// 				<button
// 					type='submit'
// 					disabled={isLoading || !isValid}
// 					className={`submit-btn ${isValid ? 'valid' : ''}`}
// 				>
// 					{isLoading ? <Spinner /> : 'Log in'}
// 				</button>
// 			</form>

// 			<span className='forgot'>Forgot your password?</span>

// 			<div className='help login__help'>
// 				<p>
// 					<span />
// 					<b>Or</b>
// 					<span />
// 				</p>

// 				<button className='mobile__google'>
// 					<Image
// 						alt='Google icon'
// 						height={24}
// 						src='/form/Mobile_ Google.svg'
// 						width={24}
// 					/>
// 					Continue with Google
// 				</button>

// 				<Link className='help-signup' href='/signup'>
// 					Don't have an account? <span>Sign In</span>
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

// export default LogIn
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useRouter, useParams } from 'next/navigation'
import { Button } from '@nextui-org/button'
import { useThemeStore } from '@/store'
import { Spinner } from '@nextui-org/spinner'
import { loginUser} from '@/utils/api'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { Logo_header } from '@/components/ui/Logo_header'

const schema = yup.object().shape({
	emailOrPhone: yup
		.string()
		.required('Email or phone is required')
		.test('is-valid-email-or-phone', 'Invalid email or phone', value => {
			const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
			const phoneRegex = /^[0-9]{7,15}$/
			return emailRegex.test(value) || phoneRegex.test(value)
		}),
	password: yup
		.string()
		.min(8, 'Password must be at least 8 characters')
		.max(64, 'Password must not exceed 64 characters')
		.required('Password is required'),
		vcode: yup
		.string()
		.required('Verification code is required')
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
	const { theme, mode, modeToogle } = useThemeStore()
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const router = useRouter()
	const params = useParams()
	const locale = params.locale || 'en'
	const togglePasswordVisibility = () => setShowPassword(prev => !prev)
	const onSubmit = async (data: any) => {
		const payload = {
			email: mode === 'email' ? data.emailOrPhone : '',
			phone: mode === 'phone' ? data.emailOrPhone : '',
			password: data.password,
			refid: data.refid || '',
			terms: 'yes',
			vcode: data.vcode || '',
		}
		setError(null)
		setIsLoading(true)
		try {
			const response = await loginUser(payload)
			if (response.response === 'success') {
				console.log(
					'\x1b[32m%s\x1b[0m',
					`login: ${data.emailOrPhone},\nphone: ${data.emailOrPhone || ''},\npassword: ${data.password}`
				)
				router.push(`/${locale}/over`)
			} else {
				setError(response.message)
			}
		} catch (err: any) {
			setError(err.message)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className='form__wrapper flex flex-col justify-between gap-[20px]'>
			<div className='form__wrapper-title'>
				<Logo_header  />
			</div>

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
					/>
					{errors.emailOrPhone && <p>{errors.emailOrPhone.message}</p>}
				</div>
				<div className='password__wrapper relative w-full'>
					<input
						type={showPassword ? 'text' : 'password'}
						placeholder='Create a password'
						{...register('password')}
						id='pass'
						className={`${errors.password ? '!outline-danger' : ''}`}
					/>
					<span className='absolute top-0 right-0' onClick={togglePasswordVisibility}>
						<img
							src={
								showPassword
									? '/form/Mobile_ visibility.svg'
									: '/form/Mobile_ visibility_off.svg'
							}
							alt='toggle visibility'
						/>
					</span>
					{errors.password && <p className='absolute'>{errors.password.message}</p>}
				</div>

				<input
						type={showPassword ? 'text' : 'password'}
						placeholder='Code'
						{...register('vcode')}
						id='pass'
						className={`${errors.password ? '!outline-danger' : ''}`}
					/>
		
				{error && <p className='text-danger'>{error}</p>}
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
				Don't have an account? <span>Sign in</span>
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
		</div>
	)
}

export default Login
