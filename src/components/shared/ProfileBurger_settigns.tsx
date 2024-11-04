'use client'
import ArrowBracket from '../ui/ArrowBracket'
import { useThemeStore } from '../../store'
import Image from 'next/image'
import { ChangeAvatar } from '../ui/ChangeAvatar'
import { NextPage } from 'next'

interface Props {
	username: string
	setShowSection: (value: boolean) => void
	showSection: boolean
}
export const ProfileBurger_settigns: NextPage<Props> = ({
	username,
	setShowSection,
	showSection,
}) => {
	const { theme } = useThemeStore()
	const handleClick = () => {
		setShowSection(!showSection)
	}
	return (
		<section
			className={showSection ? `profile__burger-info` : 'flex justify-center'}
		>
			<div
				className='flex flex-col items-center gap-[10px] w-full relative mb-[20px]'
			>
				{!showSection && (
					<span className='-mt-[60px] mb-[40px] text-[24px] font-bold'>
						User Center
					</span>
				)}
				<div
					className={
						!showSection
							? `relative md:min-h-[152px] min-h-[80px] md:min-w-[152px] min-w-[80px] z-10 cursor-pointer`
							: 'relative min-h-[64px] min-w-[64px] z-10 cursor-pointer'
					}
				>
					<Image
						src={'/main/avatar_noface.png'}
						width={!showSection ? 100 : 63}
						height={!showSection ? 100 : 63}
						alt={'avatar'}
						className='absolute bottom-[0] left-[50%] -translate-x-[50%] object-contain rounded-full min-w-[60px]'
					/>
					<div className='absolute -bottom-[5px] right-[-13px] sm:right-[13px] max-w-[40px]'>
						<ChangeAvatar />
					</div>
				</div>

				<div className='flex flex-col'>
					<h5 className='text-[18px]'>{username} </h5>
					{showSection && <span className='text-[14px]'>Profile Settings</span>}
				</div>
			</div>
			{showSection && (
				<ArrowBracket
					color={theme === 'dark' ? 'white' : 'black'}
					width={25}
					height={25}
					className={'-rotate-90'}
				/>
			)}
		</section>
	)
}
