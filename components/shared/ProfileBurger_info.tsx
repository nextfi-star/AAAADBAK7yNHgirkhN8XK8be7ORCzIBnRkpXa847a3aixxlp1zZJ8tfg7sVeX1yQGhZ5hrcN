'use client'
import ArrowBracket from '../ui/ArrowBracket'
import { useThemeStore } from '../../store'
import Image from 'next/image'
import { ChangeAvatar } from '../ui/ChangeAvatar'
import { NextPage } from 'next'

interface Props {
	username: string
	setShowSection: (val: boolean) => void
	showSection: boolean
}
export const ProfileBurger_info: NextPage<Props> = ({
	username,
	setShowSection,
	showSection,
}) => {
	const { theme } = useThemeStore()
	const handleClick = () => {
		setShowSection(!showSection)
	}
	return (
		<section className={`profile__burger-info`} onClick={handleClick}>
			<div
				onClick={e => e.stopPropagation()}
				className={`flex items-center gap-[20px]`}
			>
				<div
					className={'relative min-h-[64px] min-w-[64px] z-10 cursor-pointer'}
				>
					<Image
						src={'/main/avatar_noface.png'}
						width={!showSection ? 100 : 63}
						height={!showSection ? 100 : 63}
						alt={'avatar'}
						className='absolute bottom-[0] left-[50%] -translate-x-[50%] object-contain rounded-full min-w-[60px]'
					/>
				</div>

				<div className='flex flex-col'>
					<h5 className='text-[18px]'>{username} </h5>
					{showSection && <span className='text-[14px]'>Profile Settings</span>}
				</div>
			</div>
			{showSection && (
				<div onClick={handleClick}>
					<ArrowBracket
						color={theme === 'dark' ? 'white' : 'black'}
						width={25}
						height={25}
						className={'-rotate-90'}
					/>
				</div>
			)}
		</section>
	)
}
