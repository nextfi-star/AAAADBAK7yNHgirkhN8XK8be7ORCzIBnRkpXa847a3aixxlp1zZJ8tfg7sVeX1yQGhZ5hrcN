'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Link } from '../../../../i18n/routing'


export default function LogIn() {
	const [showPassword, setShowPassword] = useState(false)
	const [inputOne, setInputOne] = useState('')
	const [inputTwo, setInputTwo] = useState('')
	const [mode, setMode] = useState('email')
	const inputOneClass = inputOne.length <= 3 ? 'invalid' : ''
	const inputTwoClass = inputTwo.length <= 3 ? 'invalid' : ''
	const btnAuth = inputOne.length > 3 && inputTwo.length > 3 ? 'valid' : ''

	const modeToogle = selected => {
		setMode(selected)
	}
	const togglePasswordVisibility = () => {
		setShowPassword(prevState => !prevState)
	}
	const handleInputOneChange = e => {
		setInputOne(e.target.value)
	}
	const handleInputTwoChange = e => {
		setInputTwo(e.target.value)
	}

	return (
		<div className='form__wrapper login__wrapper'>
			<div className='form__wrapper-title'>
				<Image
					src={'/form/logo_form.svg'}
					className='mobile__logo'
					width={70}
					height={72}
					quality={100}
					priority
					alt='Logo'
				/>
				<h1>
					Welcome to <b>NextFi</b>
				</h1>
			</div>
			<div className='switch-mode'>
				<a
					href='#'
					className={mode === 'email' ? 'active' : ''}
					onClick={() => modeToogle('email')}
				>
					E-mail
				</a>
				<a
					href='#'
					className={mode === 'phone' ? 'active' : ''}
					onClick={() => modeToogle('phone')}
				>
					Phone number
				</a>
			</div>

			<form className='form login__form' onSubmit={e => e.preventDefault()}>
				<input
					type='text'
					placeholder={mode === 'email' ? 'E-mail' : 'Phone number'}
					onChange={handleInputOneChange}
					className={inputOneClass}
				/>

				<div className='password__wrapper'>
					<input
						type={showPassword ? 'text' : 'password'}
						placeholder='Password'
						onChange={handleInputTwoChange}
						className={inputTwoClass}
					/>

					<span onClick={togglePasswordVisibility}>
						<Image
							src={
								showPassword
									? '/form/Mobile_ visibility_off.svg'
									: '/form/Mobile_ visibility.svg'
							}
							width={44}
							height={44}
							alt={'eye'}
						/>
					</span>
				</div>

				<Link href={'/'} className={btnAuth}>Log In</Link>
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
							src={'/form/icons_dark/Instagram_dark.svg'}
							width={48}
							height={48}
							quality={100}
							alt='Logo'
						/>
						<Image
							src={'/form/icons_dark/Telegram_dark.svg'}
							width={48}
							height={48}
							quality={100}
							alt='Logo'
						/>
						<Image
							src={'/form/icons_dark/Snapchat_dark.svg'}
							width={48}
							height={48}
							quality={100}
							alt='Logo'
						/>
						<Image
							src={'/form/icons_dark/Twitter_dark.svg'}
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
