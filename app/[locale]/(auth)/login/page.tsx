'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { NextPage } from 'next'
import { useParams, useRouter } from 'next/navigation'
import { Button } from '@nextui-org/button'
import { Link } from '@/i18n/routing'
import { FormLogo } from '@/components/ui/FormLogo'
import { useThemeStore } from '@/store'

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
	const [login, setLogin] = useState('')
	const [getAccess] = useState<boolean>(false)
	const [errorMessage, setErrorMessage] = useState('')
	const router = useRouter()
	const params = useParams()
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
	const handleLogin = async () => {
		try {
			const body = {
				email: email,
				password: password,
			}
			console.log('Отправка данных:', body)
			const response = await fetch('/api/v1/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			})

			const data = await response.json()
			console.log('Ответ от API:', data)
			if (data.response === 'success') {
				router.push('/' + params.locale + '/over')
			} else {
				setErrorMessage(data.message)
			}
		} catch (error) {
			console.error('Ошибка авторизации:', error)
			setErrorMessage('Ошибка соединения с сервером.')
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
			<form
				className='form login__form'
				onSubmit={e => {
					e.preventDefault()
					handleLogin()
				}}
			>
				<input
					id='login'
					placeholder={mode === 'email' ? 'E-mail' : 'Phone number'}
					type={mode === 'email' ? 'text' : 'number'}
					onChange={
						mode === 'email' ? handleInputOneChange : handleInputTwoChange
					}
				/>
				<div className='password__wrapper'>
					<input
						id='pass'
						placeholder='Password'
						type='password'
						onChange={validatePassword}
					/>

					<span onClick={togglePasswordVisibility}>
						<Image
							alt={'eye'}
							height={44}
							src={
								!showPassword
									? '/form/Mobile_ visibility_off.svg'
									: '/form/Mobile_ visibility.svg'
							}
							width={44}
						/>
					</span>
				</div>
				<button className={`${btnAuth && 'valid'}`} type='submit'>
					Log In
				</button>

				{errorMessage && <p className='error'>{errorMessage}</p>}
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
