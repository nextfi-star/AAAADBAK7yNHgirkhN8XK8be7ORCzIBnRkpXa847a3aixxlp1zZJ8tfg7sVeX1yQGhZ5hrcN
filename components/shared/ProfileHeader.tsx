'use client'
import { useTranslations } from 'next-intl'
import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { NextPage } from 'next'

import { Link } from '../../i18n/routing'
import { User } from '../ui/User'
import { Download2 } from '../ui/download2'
import { useThemeStore } from '../../store'
import { Logo_header } from '../ui/Logo_header'
import { Chat } from '../ui/Chat'

import { Burger_profile } from './Burger_profile'
import Locale_Switcher from './Locale_Switcher'
import Theme_switch from './Theme_switch'
import { Navigation } from './Navigation'
import { BurgerIcon } from './BurgerIcon'
import { Platform_mode } from './Platform_mode'
import { Button } from '@nextui-org/button'

interface Props {
	auth: boolean
}
export const ProfileHeader: NextPage<Props> = ({ auth = true }) => {
	const t = useTranslations('nav')
	const [show, setShow] = useState(true)
	const menuRef = useRef(null)
	const { theme, setVerifyState } = useThemeStore()
	const classChange = clsx('m_header__profile_menu', { active: !show })

	const handleClick = () => {
		setShow(!show)
	}

	useEffect(() => {
		const header = document.querySelector('header')
		const handleScroll = () => {
			const yPosition = window.scrollY

			if (yPosition > 1) {
				header?.classList.add('box-shadow')
			} else {
				header?.classList.remove('box-shadow')
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<header className='header py-[1.5rem]' id='header'>
			<div className='flex justify-between items-center site-holder'>
				<a className='header__logo' href=''>
					<Logo_header />
				</a>
				<div className={`${classChange}`} onClick={handleClick}>
					<BurgerIcon color={theme === 'dark' ? 'white' : 'black'} />
				</div>

				<Platform_mode />

				<Burger_profile handleClick={handleClick} show={show} />

				<Navigation />

				<div className='header__actions'>
					<div className='header__buttons flex gap-[10px] sm:gap-[20px] items-center'>
						{!auth ? (
							<>
								<Link className='header__buttons-login' href='/login'>
									{t('LogIn')}
								</Link>
								<Link className='header__buttons-signup' href='/signup'>
									{t('SignUp')}
								</Link>{' '}
							</>
						) : (
							<>
								<div className='profile__header__icons hidden sm:flex items-center gap-[5px]'>
									<Link href={'/assets'} onClick={() => setVerifyState(true)}>
										Assets
									</Link>
									<Link
										className='user'
										href='/over'
										onClick={() => setVerifyState(false)}
									>
										<User
											className={'user'}
											color={theme === 'dark' ? 'white' : 'black'}
										/>
									</Link>
									<Link href='/'>
										<Download2 color={theme === 'dark' ? 'white' : 'black'} />
									</Link>
									<a className='header__icons-item' href='#'>
										<Theme_switch />
									</a>
									<button className='header__icons-item'>
										<Locale_Switcher />
									</button>
								</div>

								<div className='flex items-center sm:hidden gap-[5px] sm:gap-[18px]'>
									<a className='header__icons-item flex items-center' href='#'>
										<Theme_switch width={'35'} />
									</a>
									<button className='header__icons-item flex items-center'>
										<Locale_Switcher />
									</button>
									<button className='header__icons-item flex items-center'>
										<Chat
											color={theme === 'dark' ? 'white' : 'black'}
											height={30}
											width={20}
										/>
									</button>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</header>
	)
}
