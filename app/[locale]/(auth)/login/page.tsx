'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { FormLogo } from '@/components/ui/FormLogo'
import { NextPage } from 'next'
import { useRouter } from 'next/navigation'
import { useThemeStore } from '@/store'
import { Button } from '@nextui-org/button'

const LogIn: NextPage = () => {
	const {
		initializeTheme,
		theme,
		mode,
		modeToogle,
		setEmail,
		email,
		setPhone,
		phone,
		setPassword,
		password,
	} = useThemeStore()
	const [showPassword, setShowPassword] = useState<boolean>(false)
	const [getAccess] = useState<boolean>(false)
	const [errorMessage, setErrorMessage] = useState('')
	const router = useRouter()
	useEffect(() => {
		initializeTheme()
	}, [initializeTheme])
	const btnAuth =
		mode === 'email'
			? email.length >= 4 && password.length >= 4
			: !getAccess
			? phone.length >= 4 && password.length >= 4
			: !getAccess

	const selectedMode = (selected: string) => {
		modeToogle(selected)
	}
	const togglePasswordVisibility = () => {
		setShowPassword(prevState => !prevState)
	}
	const handleInputOneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value)
	}
	const handleInputTwoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPhone(e.target.value)
	}
	const validatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value)
	}
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const res = await fetch('/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password }),
		})
		const data = await res.json()

		if (res.status === 200) {
			console.log('Login successful', data)
			router.push('/en/over')
		} else {
			console.error('Login failed', data)
		}
	}
	return (
		<div className='form__wrapper '>
			<div className='form__wrapper-title'>
				<FormLogo color={theme === 'dark' ? 'white' : '#3A3939'} />
			</div>
			<div className='switch-mode'>
				<Button
					className={mode === 'email' ? 'active' : ''}
					onClick={() => selectedMode('email')}
				>
					E-mail
				</Button>
				<Button
					className={mode === 'phone' ? 'active' : ''}
					onClick={() => selectedMode('phone')}
				>
					Phone number
				</Button>
			</div>
			<form className='form login__form' onSubmit={handleSubmit}>
				<input
					type={mode === 'email' ? 'text' : 'number'}
					placeholder={mode === 'email' ? 'E-mail' : 'Phone number'}
					onChange={
						mode === 'email' ? handleInputOneChange : handleInputTwoChange
					}
					id='login'
				/>

				<div className='password__wrapper'>
					<input
						type='password'
						placeholder='Password'
						id='pass'
						onChange={validatePassword}
					/>

					<span onClick={togglePasswordVisibility}>
						<Image
							src={
								!showPassword
									? '/form/Mobile_ visibility_off.svg'
									: '/form/Mobile_ visibility.svg'
							}
							width={44}
							height={44}
							alt={'eye'}
						/>
					</span>
				</div>
				<Link href={'/verifycode'} className={`${btnAuth && 'valid'}`}>
					Log In
				</Link>
				<Button type='submit'>POST</Button>
				{errorMessage && <p className='error'>{errorMessage}</p>}
			</form>

			<span className='forgot'>Forgot your password?</span>

			<div className='help login__help'>
				<p>
					<span></span>
					<b>Or</b>
					<span></span>
				</p>

				<button className='mobile__google'>
					<Image
						src='/form/Mobile_ Google.svg'
						width={24}
						height={24}
						alt='Google icon'
					/>
					Continue with Google
				</button>

				<Link href='/signup' className='help-signup'>
					Don't have an account? <span>Sign In</span>
				</Link>

				<div className='socials login__social'>
					<span>join us on social networks</span>

					<div className='socials__icons'>
						<Image
							src={
								theme === 'dark'
									? '/form/icons_dark/Instagram_dark.svg'
									: '/form/icons_white/Instagram.svg'
							}
							width={48}
							height={48}
							quality={100}
							alt='Logo'
						/>
						<Image
							src={
								theme === 'dark'
									? '/form/icons_dark/Telegram_dark.svg'
									: '/form/icons_white/Telegram_white.svg'
							}
							width={48}
							height={48}
							quality={100}
							alt='Logo'
						/>
						<Image
							src={
								theme === 'dark'
									? '/form/icons_dark/Snapchat_dark.svg'
									: '/form/icons_white/Snapchat_white.svg'
							}
							width={48}
							height={48}
							quality={100}
							alt='Logo'
						/>
						<Image
							src={
								theme === 'dark'
									? '/form/icons_dark/Twitter_dark.svg'
									: '/form/icons_white/Twitter_white.svg'
							}
							width={48}
							height={48}
							quality={100}
							alt='Logo'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
export default LogIn
