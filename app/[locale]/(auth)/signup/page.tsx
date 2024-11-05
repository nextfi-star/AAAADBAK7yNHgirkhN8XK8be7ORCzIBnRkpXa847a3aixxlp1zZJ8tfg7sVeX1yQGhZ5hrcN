'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { FormLogo } from '@/components/ui/FormLogo'
import { NextPage } from 'next'
import { useRouter } from 'next/navigation'
import { useThemeStore } from '@/store'
import { Button } from '@nextui-org/button'

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
					type={mode === 'email' ? 'text' : 'number'}
					placeholder={mode === 'email' ? 'E-mail' : 'Phone number'}
					onChange={
						mode === 'email' ? handleInputOneChange : handleInputTwoChange
					}
					id='login'
				/>

				<div className='password__wrapper'>
					<input
						type={showPassword ? 'text' : 'password'}
						placeholder='Create a password'
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

				<div className='referalID__wrapper'>
					<label className='referalID'>
						<p>Referral ID (optional)</p>
						<input
							onChange={toogleReferal}
							type='checkbox'
							id='checkbox'
							className='checkbox'
						/>
						<label htmlFor='checkbox' className='checkbox-label'></label>
					</label>

					{!referelOpen && (
						<input
							className='referal__input'
							type='text'
							placeholder='UFRYXEEXDG'
							id='referal'
						/>
					)}
				</div>

				<div className='privacy'>
					<label htmlFor='checkbox-privacy' className='checkbox-label'>
						<input
							onChange={tooglePrivacy}
							checked={privacy}
							type='checkbox'
							id='checkbox-privacy'
							className='checkbox'
						/>
						<span className='checkbox-view'>
							<svg
								className='checkbox-icon'
								xmlns='http://www.w3.org/2000/svg'
								width='18'
								viewBox='0 0 511.985 511.985'
							>
								<path
									fill={theme === 'dark' ? '#fff' : '#3A3939'}
									d='M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0-15.862 15.862-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899 10.394 0 20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435z'
								/>
							</svg>
						</span>
						<p>
							I have read and agree to <b>Nextfi's Terms of Services </b> and{' '}
							<b>Privacy Policy.</b>
						</p>
					</label>
				</div>

				<Button type='submit'>POST</Button>
				<Link href={'/verifycode'} className={`${btnAuth && 'valid'}`}>
					Sign Up
				</Link>
			</form>

			<div className='help'>
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

				<Link href='/login' className='help-signup'>
					Already registered? <span>Log In</span>
				</Link>

				<div className='socials'>
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
export default SignUp
