'use client'
import { useTranslations } from 'next-intl'
import { useEffect, useMemo, useState } from 'react'
import clsx from 'clsx'
import { NextPage } from 'next'
import { Link } from '../../i18n/routing'
import { useThemeStore } from '../../store'
import { Logo_header } from '../ui/Logo_header'
import { Burger_profile } from './Burger_profile'
import Locale_Switcher from './Locale_Switcher'
import Theme_switch from './Theme_switch'
import { Navigation } from './Navigation'
import { BurgerIcon } from './BurgerIcon'
import { Platform_mode } from './Platform_mode'
import { A_Chat_mobile } from './A_Chat_mobile'
import { DropDown_menu } from './DropDown_menu'
import {
	ArrowDown,
	ChartPie,
	IdCard,
	Power,
	ShieldCheck,
	TabletSmartphone,
	User2,
} from 'lucide-react'
import { User } from '../ui/User'

interface Props {
	auth: boolean
}
export interface DropData {
	title: string
	key: string
	href: string
	verify?: () => void
	icon?: string | JSX.Element
}

const dropData2 = [
	{
		title: 'Overview',
		key: 'over',
		href: '/over',
		icon: <ChartPie strokeWidth={1} />,
	},
	{
		title: 'Profile',
		key: 'profile',
		href: '/profile',
		icon: <User2 strokeWidth={1} />,
	},
	{
		title: 'Security',
		key: 'security',
		href: '/security',
		icon: <ShieldCheck strokeWidth={1} />,
	},
	{
		title: 'Verification',
		key: 'verification',
		href: '/verify',
		icon: <IdCard strokeWidth={1} />,
	},
	{
		title: 'Authorized Devices',
		key: 'devices',
		href: '/devices',
		icon: <TabletSmartphone strokeWidth={1} />,
	},
	{
		title: 'Deposit',
		key: 'deposit',
		href: '/over',
		icon: <ArrowDown strokeWidth={1} />,
	},
	{
		title: 'Log out',
		key: 'out',
		href: '#',
		icon: <Power strokeWidth={1} />,
	},
]

export const ProfileHeader: NextPage<Props> = ({ auth = true }) => {
	const t = useTranslations('nav')
	const [show, setShow] = useState(true)
	const { theme, setVerifyState } = useThemeStore()
	const classChange = clsx('m_header__profile_menu', { active: !show })

	const dropData: DropData[] = useMemo(
		() => [
			{
				title: 'Assets',
				key: 'assets',
				href: '/assets',
				verify: () => setVerifyState(true),
			},
			{
				title: 'Swap',
				key: 'swap',
				href: '/swap',
				verify: () => setVerifyState(true),
			},
			{
				title: 'Withdrawal',
				key: 'withdrawal',
				href: '/withdrawal',
				verify: () => setVerifyState(true),
			},
			{
				title: 'Invest',
				key: 'invest',
				href: '/invest',
				verify: () => setVerifyState(true),
			},
			{
				title: 'Fee tier',
				key: 'fee',
				href: '/tier',
				verify: () => setVerifyState(true),
			},
			{
				title: 'Deposit',
				key: 'deposit',
				href: '/assets',
				verify: () => setVerifyState(true),
			},
		],
		[setVerifyState]
	)
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
				<a className='hidden xl:block' href=''>
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
								<div className='profile__header__icons hidden sm:flex items-center gap-[10px]'>
									<DropDown_menu
										data={dropData}
										defaultItem={'Assets'}
										triggerTitle='Assets'
									/>
									<DropDown_menu
										data={dropData2}
										defaultItem={
											<User2
											strokeWidth={1}
												className={'user'}
											/>
										}
									/>
									<div className='header__icons-item'>
										<Theme_switch />
									</div>
									<button className='header__icons-item'>
										<Locale_Switcher />
									</button>
									{/* <Confirmation_dialog
										title='Are you absolutelu sure?'
										content='This action cannot be undeone. You will be logged out from this device, but your account and data will remain intact on servers'
										titleTriger={<LogOut className=' min-w-[23px]' />}
										className='!border-0 w-[44px] !p-0 !px-0 hidden xl:block'
									/> */}
								</div>

								<div className='flex items-center sm:hidden gap-[5px] sm:gap-[18px]'>
									<a className='header__icons-item flex items-center' href='#'>
										<Theme_switch width={'35'} />
									</a>
									<button className='header__icons-item flex items-center'>
										<Locale_Switcher />
									</button>
									<div className='header__icons-item'>
										<A_Chat_mobile />
									</div>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</header>
	)
}
