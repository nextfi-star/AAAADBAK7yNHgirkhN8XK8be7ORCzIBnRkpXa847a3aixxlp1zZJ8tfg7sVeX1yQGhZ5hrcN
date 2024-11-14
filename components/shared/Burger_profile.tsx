'use client'
import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import { NextPage } from 'next'
import ArrowBracket from '../ui/ArrowBracket'
import { useThemeStore } from '../../store'
import { ProfileBurger_info } from './ProfileBurger_info'
import { ProgileBurger_Tabsinfo } from './ProgileBurger_Tabsinfo'
import { ProfileBurger_menu_list } from './ProfileBurger_menu_list'
import { ProfileBurger_settigns } from './ProfileBurger_settigns'
import { LogOut } from 'lucide-react'
import { Confirmation_dialog } from './Confirmation_dialog'

interface Props {
	handleClick: () => void
	show: boolean
	menuRef?: any
}

export const Burger_profile: NextPage<Props> = ({
	handleClick,
	show,
	menuRef,
}) => {
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
									className={'rotate-90 min-w-[25px] min-h-[25px]'}
									color={theme === 'dark' ? 'white' : 'black'}
									height={25}
									width={25}
								/>
							</div>
							<div className='absolute top-[35px] right-[32px]'>
								<Confirmation_dialog
									title='Are you absolutelu sure?'
									content='This action cannot be undeone. You will be logged out from this device, but your account and data will remain intact on servers'
									titleTriger={
										<LogOut className=' min-w-[23px] min-h-[23px]' />
									}
									className='!border-0 w-[44px] !p-0 !px-0'
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
									className={'rotate-90 min-w-[25px] min-h-[25px]'}
									color={theme === 'dark' ? 'white' : 'black'}
									height={25}
									width={25}
								/>
							</div>
							<div className='absolute top-[35px] right-[32px]'>
								<Confirmation_dialog
									title='Are you absolutelu sure?'
									content='This action cannot be undeone. You will be logged out from this device, but your account and data will remain intact on servers'
									titleTriger={
										<LogOut className=' min-w-[23px] min-h-[23px]' />
									}
									className='!border-0 w-[44px] !p-0 !px-0'
								/>
							</div>
						</>
					)}

					<div className={`profile__burger-container`}>
						{showSection ? (
							<ProfileBurger_info
								setShowSection={setShowSection}
								showSection={showSection}
								username='username****gmail.com'
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
								About NextFi
							</a>
							<a href=''>v6.88.0 {'>'}</a>
						</footer>
					)}
				</div>
			</div>
		</div>
	)
}
