import ArrowBracket from '../ui/ArrowBracket'
import { useThemeStore } from '../../store'
import Image from 'next/image'

export const ProfileBurger_info = ({
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
			onClick={handleClick}
		>
			<div
				className={`${
					!showSection
						? 'flex flex-col items-center'
						: 'flex items-center gap-[12px] '
				}`}
			>
				<div
					className={
						!showSection
							? `relative rounded-full md:min-h-[152px] min-h-[80px] md:min-w-[152px] min-w-[80px] overflow-hidden mb-[10px] z-10 cursor-pointer`
							: 'relative rounded-full min-h-[64px] min-w-[64px] overflow-hidden z-10 cursor-pointer'
					}
				>
					<Image
						src={'/main/avatar.png'}
						width={!showSection ? 152 : 63}
						height={!showSection ? 152 : 63}
						alt={'avatar'}
						className='absolute bottom-[0] left-[50%] translate-x-[-50%] object-cover w-full'
					/>
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
