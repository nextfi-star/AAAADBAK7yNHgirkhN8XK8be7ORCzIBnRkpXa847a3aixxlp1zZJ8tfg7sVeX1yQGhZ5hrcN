'use client'
import { useEffect } from 'react'
import { Download2 } from '../ui/download2'
import { User } from '../ui/User'
import { Navigation } from './Navigation'
import Theme_switch from './Theme_switch'
import { Burger } from './Burger'
import { useThemeStore } from '@/store'
import { Link } from '@/i18n/routing'
import { Logo_header } from '@/components/ui/Logo_header'
import { useUserStore } from '@/hooks/useUserData'
import { useTranslations } from 'next-intl'
import { LangSwitch } from '../ui/LangSwitch'

interface Props {
	auth?: boolean
}
export const Header = ({ auth = true }: Props) => {
	const { theme } = useThemeStore()
	const csrf = useUserStore(state => state.user?.csrf)
	useEffect(() => {
		const header = document.getElementById('header')
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

	const t = useTranslations('shared')
	return (
		<header className='initial_header' id='header'>
			<div className='site-holder'>
				<div
					className='header__content'
					data-aos='fade-down'
					data-aos-duration='1000'
				>
					{!auth && (
						<a className='header__logo' href=''>
							<Logo_header className='min-w-[123px]' />
						</a>
					)}

					{csrf && <Navigation />}

					<div className='header__actions'>
						<div className='header__buttons'>
							{!auth ? (
								<>
									<Link className='header__buttons-login !w-fit' href='/login'>
										{t('login')}
									</Link>
									<Link className='header__buttons-signup !w-fit' href='/signup'>
										{t('signup')}
									</Link>{' '}
								</>
							) : (
								<>
									<Link className='user' href='/'>
										<User
											className={'user'}
											color={theme === 'dark' ? 'white' : 'black'}
										/>
									</Link>
									<Link href='/'>
										<Download2 color={theme === 'dark' ? 'white' : 'black'} />
									</Link>
								</>
							)}

							<Burger csrf={csrf} />
						</div>

						<div className='header__icons'>
							<a className='header__icons-item' href='#'>
								<Theme_switch />
							</a>
							<div className='header__icons-item'>
								<LangSwitch />
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
