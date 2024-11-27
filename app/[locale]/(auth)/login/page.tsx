'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useParams, useRouter } from 'next/navigation'
import { loginUser, registerUser } from '@/utils/api'
import { Button } from '@nextui-org/button'
import { FormLogo } from '@/components/ui/FormLogo'
import { useThemeStore } from '@/store'
import Image from 'next/image'
import { Link } from '@/i18n/routing'

const schema = yup.object().shape({
	emailOrPhone: yup.string().required('Email or phone is required'),
	password: yup
		.string()
		.min(6, 'Password must be at least 6 characters')
		.required('Password is required'),
	agreeToTerms: yup.boolean().oneOf([true], 'You must agree to the terms'),
})

const LogIn = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		resolver: yupResolver(schema),
		mode: 'onChange',
	})
	const { theme, email, setEmail, phone, setPhone, modeToogle, mode } = useThemeStore()
	const [showPassword, setShowPassword] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [success, setSuccess] = useState<string | null>(null)
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
			refid: '',
		}
		setError(null)
		setSuccess(null)
		setIsLoading(true)

		try {
			const response = await registerUser(payload)
			console.log('Response:', response)
			console.log('Status:', response?.status || 'No status available')
			console.log(
				'\x1b[32m%s\x1b[0m',
				`login: ${email},\nphone: ${phone || ''},\npassword: ${data.password}`
			)
			setSuccess(response.message)
			setTimeout(() => {
				router.push(`/${locale}/verifycode`)
			}, 2000)
		} catch (err: any) {
			setError(err.message)
			console.log('\x1b[31m%s\x1b[0m', 'Error:', err.message)
			console.log('\x1b[34m%s\x1b[0m', 'Details:', err)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className='form__wrapper'>
			<div className='form__wrapper-title'>
				<FormLogo color={theme === 'dark' ? 'white' : '#3A3939'} />
			</div>

			<div className='switch-mode'>
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
						onChange={e =>
							mode === 'email'
								? setEmail(e.target.value)
								: setPhone(e.target.value)
						}
					/>
					{errors.emailOrPhone && (
						<p className='py-[5px]'>{errors.emailOrPhone.message}</p>
					)}
				</div>
				<div className='password__wrapper'>
					<input
						type={showPassword ? 'text' : 'password'}
						placeholder='Create a password'
						{...register('password')}
						id='pass'
					/>
					<span onClick={togglePasswordVisibility}>
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
						<p className='absolute text-danger'>{errors.password.message}</p>
					)}
				</div>

				<div className='privacy'>
					<label>
						<input type='checkbox' {...register('agreeToTerms')} />
						<span className='pl-[10px]'>
							I agree to the Terms of Service and Privacy Policy
						</span>
					</label>
					{errors.agreeToTerms && (
						<p className='error'>{errors.agreeToTerms.message}</p>
					)}
				</div>

				{error && (
					<p className='text-[#fff] p-4 bg-danger-50 rounded-[50px]'>{error}</p>
				)}

				<button
					type='submit'
					disabled={isLoading || !isValid}
					className={`submit-btn ${isValid ? 'valid' : ''}`}
				>
					{isLoading ? 'Log in...' : 'Log in'}
				</button>
			</form>

			<span className='forgot'>Forgot your password?</span>

			<div className='help login__help'>
				<p>
					<span />
					<b>Or</b>
					<span />
				</p>

				<button className='mobile__google'>
					<Image
						alt='Google icon'
						height={24}
						src='/form/Mobile_ Google.svg'
						width={24}
					/>
					Continue with Google
				</button>

				<Link className='help-signup' href='/signup'>
					Don't have an account? <span>Sign In</span>
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

export default LogIn
