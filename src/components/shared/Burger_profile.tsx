'use client'
import clsx from 'clsx'
import { useThemeStore } from '../../store'
import Image from 'next/image'
import ArrowBracket from '../ui/ArrowBracket'
import { useState } from 'react'
import { NextPage } from 'next'
import { ProfileBurger_info } from './ProfileBurger_info'
import { ProgileBurger_Tabsinfo } from './ProgileBurger_Tabsinfo'
import { ProfileBurger_menu_list } from './ProfileBurger_menu_list'
import { ProfileBurger_settigns } from './ProfileBurger_settigns'

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
	const classChange = clsx('m_header__profile_menu', { active: !show })
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
						<div
							className={`absolute top-[35px] left-[32px]`}
							onClick={handleClick}
						>
							<ArrowBracket
								color={theme === 'dark' ? 'white' : 'black'}
								width={25}
								height={25}
								className={'rotate-90 min-w-[25px] min-h-[25px]'}
							/>
						</div>
					) : (
						<div
							className={`absolute top-[35px] left-[32px]`}
							onClick={stepback}
						>
							<ArrowBracket
								color={theme === 'dark' ? 'white' : 'black'}
								width={25}
								height={25}
								className={'rotate-90 min-w-[25px] min-h-[25px]'}
							/>
						</div>
					)}

					<div className={`profile__burger-container `}>
						{showSection ? (
							<ProfileBurger_info
								username='username****gmail.com'
								setShowSection={setShowSection}
								showSection={showSection}
							/>
						) : (
							<ProfileBurger_settigns
								username='username****gmail.com'
								setShowSection={setShowSection}
								showSection={showSection}
							/>
						)}

						{showSection ? (
							<ProgileBurger_Tabsinfo
								handleShortcutClick={handleShortcutClick}
							/>
						) : (
							<ProfileBurger_menu_list
								handleTabClick={handleTabClick}
								activeTab={activeTab}
								showSection={showSection}
							/>
						)}
					</div>

					{showSection && (
						<footer className='profile__burger-footer'>
							<a href='#' className='flex items-center gap-[8px]'>
								<Image
									src={'/header_icons/profile_burger/info_icon.svg'}
									width={20}
									height={20}
									alt='question'
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
