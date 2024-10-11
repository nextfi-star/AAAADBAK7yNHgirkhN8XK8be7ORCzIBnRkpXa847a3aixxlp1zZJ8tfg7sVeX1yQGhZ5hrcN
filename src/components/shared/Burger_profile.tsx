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

interface Props {
	handleClick: () => void
	show: boolean
	menuRef: any
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

	return (
		<div className='profile__wrapper' ref={menuRef}>
			<div className={`${listClass} profile__burger`}>
				<div className='px-[17px] pb-[39px] flex flex-col justify-between h-full relative'>
					<div className={`${classChange}`} onClick={handleClick}>
						<ArrowBracket
							color={theme === 'dark' ? 'white' : 'black'}
							width={25}
							height={25}
							className={'rotate-90'}
						/>
					</div>

					<div className={`profile__burger-container `}>
						<ProfileBurger_info
							username='username****gmail.com'
							setShowSection={setShowSection}
							showSection={showSection}
						/>

						{showSection ? (
							<ProgileBurger_Tabsinfo />
						) : (
							<ProfileBurger_menu_list showSection={showSection} />
						)}
					</div>

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
				</div>
				{showSection && (
					<Image
						src={'/header_icons/profile_burger/wave_dark.svg'}
						width={475}
						height={206}
						quality={100}
						priority
						alt={'profile'}
						className='profile__burger-bg'
					/>
				)}
			</div>
		</div>
	)
}
