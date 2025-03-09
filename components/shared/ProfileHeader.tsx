'use client'
import { Logout } from '@/hooks/Logout'
import { useUserStore } from '@/hooks/useUserData'
import { Link } from '@/i18n/routing'
import { useThemeStore } from '@/store/useChatStore'
import clsx from 'clsx'
import {
	ArrowDown,
	BriefcaseBusiness,
	ChartBarDecreasing,
	ChartPie,
	CircleArrowDown,
	IdCard,
	Power,
	Repeat,
	ShieldCheck,
	TabletSmartphone,
	TrendingUp,
	User2,
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import { LangSwitch } from '../ui/LangSwitch'
import { Logo_header } from '../ui/Logo_header'
import { A_Chat_mobile } from './A_Chat_mobile'
import { Burger_profile } from './Burger_profile'
import { BurgerIcon } from './BurgerIcon'
import { DropDown_menu } from './DropDown_menu'
import { Navigation } from './Navigation'
import { Platform_mode } from './Platform_mode'
import Theme_switch from './Theme_switch'

interface Props {
	auth: boolean
}

export interface DropData {
	title: string
	key: string
	href: string
	verify?: () => void
	logout?: () => void
	icon?: string | JSX.Element
}

export const ProfileHeader = ({ auth = true }: Props) => {
	const [show, setShow] = useState(true)
	const { theme, setVerifyState } = useThemeStore()
	const classChange = clsx('m_header__profile_menu', { active: !show })
	const csrf = useUserStore(state => state.user?.csrf)
	const router = useRouter()
	const locale = useParams()?.locale || 'en'
	const t = useTranslations('shared')
	const dropData: DropData[] = useMemo(
		() => [
			{
				title: t('assets'),
				key: 'assets',
				href: '/assets',
				icon: <BriefcaseBusiness strokeWidth={1} />,
				verify: () => setVerifyState(true),
			},
			{
				title: t('swap'),
				key: 'swap',
				href: '#',
				icon: <Repeat strokeWidth={1} />,
				verify: () => setVerifyState(true),
			},
			{
				title: t('withdrawal'),
				key: 'withdrawal',
				href: '/withdrawal',
				icon: <CircleArrowDown strokeWidth={1} />,
				verify: () => setVerifyState(true),
			},
			{
				title: t('investment'),
				key: 'invest',
				href: '/invest',
				icon: <TrendingUp strokeWidth={1} />,
				verify: () => setVerifyState(true),
			},
			{
				title: t('levels'),
				key: 'levels',
				href: '/tier',
				icon: <ChartBarDecreasing strokeWidth={1} />,
				verify: () => setVerifyState(true),
			},
			{
				title: t('deposit'),
				key: 'deposit',
				href: '/deposit',
				icon: <ArrowDown strokeWidth={1} />,
				verify: () => setVerifyState(true),
			},
		],
		[setVerifyState]
	)
	const dropData2: DropData[] = useMemo(
		() => [
			{
				title: t('overview'),
				key: 'over',
				href: '/over',
				icon: <ChartPie strokeWidth={1} />,
				verify: () => setVerifyState(false),
			},
			{
				title: t('profile'),
				key: 'profile',
				href: '/profile',
				icon: <User2 strokeWidth={1} />,
				verify: () => setVerifyState(false),
			},
			{
				title: t('security'),
				key: 'security',
				href: '/security',
				icon: <ShieldCheck strokeWidth={1} />,
				verify: () => setVerifyState(false),
			},
			{
				title: t('verification'),
				key: 'verification',
				href: '/verify',
				icon: <IdCard strokeWidth={1} />,
				verify: () => setVerifyState(false),
			},
			{
				title: t('authorized'),
				key: 'devices',
				href: '/devices',
				icon: <TabletSmartphone strokeWidth={1} />,
				verify: () => setVerifyState(false),
			},
			{
				title: t('deposit'),
				key: 'deposit',
				href: '/deposit',
				icon: <ArrowDown strokeWidth={1} />,
				verify: () => setVerifyState(true),
			},
			{
				title: t('investment'),
				key: 'invest',
				href: '#',
				icon: <TrendingUp strokeWidth={1} />,
				verify: () => setVerifyState(true),
			},
			{
				title: t('logout'),
				key: 'out',
				href: '#',
				icon: <Power strokeWidth={1} />,
				verify: () => setVerifyState(false),
				logout: () => Logout(csrf, router, locale),
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
				<div className='flex items-center gap-[40px]'>
					<a className='hidden xl:block' href=''>
						<Logo_header className='min-w-[123px] -mt-[20px]' />
					</a>
					<div className={`${classChange}`} onClick={handleClick}>
						<BurgerIcon color={theme === 'dark' ? 'white' : 'black'} />
					</div>
					<Platform_mode />
					<Burger_profile handleClick={handleClick} show={show} />
				</div>

				<Navigation />

				<div className='header__actions'>
					<div className='header__buttons flex gap-[10px] sm:gap-[20px] items-center'>
						{!auth ? (
							<>
								<Link className='header__buttons-login' href='/login'>
									{t('login')}
								</Link>
								<Link className='header__buttons-signup' href='/signup'>
									{t('signup')}
								</Link>{' '}
							</>
						) : (
							<>
								<div className='profile__header__icons hidden sm:flex items-center gap-[20px]'>
									<DropDown_menu
										hasProfile={false}
										data={dropData}
										defaultItem={t('assets')}
										triggerTitle='Assets'
									/>
									<DropDown_menu
										hasProfile={true}
										data={dropData2}
										defaultItem={<User2 strokeWidth={1} className={'user'} />}
									/>

									<div className='header__icons-item'>
										<Theme_switch />
									</div>
									<div className='header__icons-item'>
										<LangSwitch />
									</div>
								</div>

								<div className='flex items-center sm:hidden gap-[5px] sm:gap-[18px]'>
									<a className='header__icons-item flex items-center' href='#'>
										<Theme_switch width={'35'} />
									</a>
									<div className='header__icons-item flex items-center'>
										<LangSwitch />
									</div>
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
