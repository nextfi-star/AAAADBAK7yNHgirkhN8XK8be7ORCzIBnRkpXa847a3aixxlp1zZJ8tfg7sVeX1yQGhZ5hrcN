'use client'
import { useThemeStore } from '@/store'
import clsx from 'clsx'
import { LogOut } from 'lucide-react'
import { NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import { ProfileBurger_info, ProgileBurger_Tabsinfo } from '.'
import ArrowBracket from '../ui/ArrowBracket'
import { ProfileBurger_menu_list } from './ProfileBurger_menu_list'
import { ProfileBurger_settigns } from './ProfileBurger_settigns'
import { Logout_confirmation } from './Logout_confirmation'
import { useTranslations } from 'next-intl'

interface Props {
	handleClick: () => void
	show: boolean
}

export const Burger_profile: NextPage<Props> = ({ handleClick, show }) => {
	const t = useTranslations('burger')	
	const listClass = clsx('m_header__profile', { active: !show })
	const [showSection, setShowSection] = useState<boolean>(true)
	const { theme } = useThemeStore()
	const stepback = () => {
		setShowSection(!showSection)
	}
	const [activeTab, setActiveTab] = useState<string>('Profile')
	const handleShortcutClick = (tab: string) => {
		setShowSection(false)
		setActiveTab(tab)
	}
	const handleTabClick = (tab: string) => {
		setActiveTab(tab)
	}

	return (
		<div className='profile__wrapper'>
			<div className={`${listClass} profile__burger`}>
				<div className='px-[17px] pb-[39px] flex flex-col justify-between h-full relative'>
					{showSection ? (
						<>
							<div
								className={`absolute top-[35px] left-[32px]`}
								onClick={handleClick}
							>
								<ArrowBracket
									className={
										'rotate-90 min-w-[25px] min-h-[25px] cursor-pointer'
									}
									color={theme === 'dark' ? 'white' : 'black'}
									height={25}
									width={25}
								/>
							</div>
							<div className='absolute top-[35px] right-[13px]'>
								<Logout_confirmation
									title={t('sure')}
									content={t('unDone')}
									titleTriger={
										<LogOut className=' min-w-[23px] min-h-[23px]' />
									}
									className='!border-none !outline-0 w-[44px] !p-0 !px-0 cursor-pointer'
								/>
							</div>
						</>
					) : (
						<>
							<div
								className={`absolute top-[35px] left-[32px]`}
								onClick={stepback}
							>
								<ArrowBracket
									className={
										'rotate-90 min-w-[25px] min-h-[25px] cursor-pointer'
									}
									color={theme === 'dark' ? 'white' : 'black'}
									height={25}
									width={25}
								/>
							</div>
							<div className='absolute top-[35px] right-[13px] z-[100]'>
								<Logout_confirmation
									title={t('sure')}
									content={t('unDone')}
									titleTriger={
										<LogOut className=' min-w-[23px] min-h-[23px]' />
									}
									className='!border-none !outline-0 w-[44px] !p-0 !px-0 cursor-pointer'
								/>
							</div>
						</>
					)}

					<div className={`profile__burger-container select-none`}>
						{showSection ? (
							<ProfileBurger_info
								setShowSection={setShowSection}
								showSection={showSection}
							/>
						) : (
							<ProfileBurger_settigns
								setShowSection={setShowSection}
								showSection={showSection}
								username='username****gmail.com'
							/>
						)}

						{showSection ? (
							<ProgileBurger_Tabsinfo
								handleShortcutClick={handleShortcutClick}
							/>
						) : (
							<ProfileBurger_menu_list
								activeTab={activeTab}
								handleTabClick={handleTabClick}
								showSection={showSection}
							/>
						)}
					</div>

					{showSection && (
						<footer className='profile__burger-footer'>
							<a className='flex items-center gap-[8px]' href='#'>
								<Image
									alt='question'
									height={20}
									src={'/header_icons/profile_burger/info_icon.svg'}
									width={20}
								/>
								{t('aboutNextfi')}
							</a>
							<a href=''>v6.88.0 {'>'}</a>
						</footer>
					)}
				</div>
			</div>
		</div>
	)
}
