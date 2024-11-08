'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { NextPage } from 'next'
import { useRouter } from 'next/navigation'
import { Button } from '@nextui-org/button'
import { Link } from '@/i18n/routing'
import { FormLogo } from '@/components/ui/FormLogo'
import { useThemeStore } from '@/store'

const SignUp: NextPage = () => {
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
	const [referelOpen, setReferelOpen] = useState<boolean>(true)
	const [privacy, setPrivacy] = useState<boolean>(false)
	const [getAccess] = useState<boolean>(false)
	const router = useRouter()
	const btnAuth =
		mode === 'email'
			? email.length >= 4 && password.length >= 4 && privacy
			: !getAccess
				? phone.length >= 4 && password.length >= 4 && privacy
				: !getAccess

	useEffect(() => {
		initializeTheme()
	}, [initializeTheme])

	const selectedMode = (selected: string) => {
		modeToogle(selected)
	}
	const togglePasswordVisibility = () => {
		setShowPassword(prevState => !prevState)
	}
	const toogleReferal = () => {
		setReferelOpen(prevState => !prevState)
	}
	const tooglePrivacy = () => {
		setPrivacy(prevState => !prevState)
	}
	const handleInputOneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value)
	}
	const handleInputTwoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPhone(e.target.value)
	}
	const validatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value)
		console.log(password)
	}
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const res = await fetch('/api/signup', {
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
		<div className='form__wrapper'>
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

			<form className='form' onSubmit={handleSubmit}>
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
						placeholder='Create a password'
						type={showPassword ? 'text' : 'password'}
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

				<div className='referalID__wrapper'>
					<label className='referalID'>
						<p>Referral ID (optional)</p>
						<input
							className='checkbox'
							id='checkbox'
							type='checkbox'
							onChange={toogleReferal}
						/>
						<label className='checkbox-label' htmlFor='checkbox' />
					</label>

					{!referelOpen && (
						<input
							className='referal__input'
							id='referal'
							placeholder='UFRYXEEXDG'
							type='text'
						/>
					)}
				</div>

				<div className='privacy'>
					<label className='checkbox-label' htmlFor='checkbox-privacy'>
						<input
							checked={privacy}
							className='checkbox'
							id='checkbox-privacy'
							type='checkbox'
							onChange={tooglePrivacy}
						/>
						<span className='checkbox-view'>
							<svg
								className='checkbox-icon'
								viewBox='0 0 511.985 511.985'
								width='18'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0-15.862 15.862-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899 10.394 0 20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435z'
									fill={theme === 'dark' ? '#fff' : '#3A3939'}
								/>
							</svg>
						</span>
						<p>
							I have read and agree to <b>Nextfi's Terms of Services </b> and{' '}
							<b>Privacy Policy.</b>
						</p>
					</label>
				</div>

				<Link className={`${btnAuth && 'valid'}`} href={'/verifycode'}>
					Sign Up
				</Link>
			</form>

			<div className='help'>
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

				<Link className='help-signup' href='/login'>
					Already registered? <span>Log In</span>
				</Link>

				<div className='socials'>
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

export default SignUp
