'use client'
import Image from 'next/image'
import { useThemeStore } from '../../store'

export const Balance_img = () => {
	const { theme } = useThemeStore()
	return (
		<>
			<div className='getstarted__big-content__item'>
				<div className='getstarted__image-wrapper'>
					<Image
						width={280}
						height={192}
						src={
							theme === 'dark'
								? '/main/Card_finance.png'
								: '/main/getstarted-balance.png'
						}
						alt='balance'
						quality={100}
					/>
				</div>
				<a href='#' className='btn btn-blue btn-none'>
					Top up your balance
				</a>
			</div>

			<div className='getstarted__big-content__item'>
				<div className='getstarted__image-wrapper'>
					<Image
						width={280}
						height={192}
						src={
							theme === 'dark'
								? '/main/Card_finance-1.png'
								: '/main/getstarted-income.png'
						}
						alt='income'
						quality={100}
					/>
				</div>
				<a href='#' className='btn btn-blue btn-none'>
					Withdraw money
				</a>
			</div>

			<div className='getstarted__big-content__image'>
				<Image
					width={396}
					height={396}
					src={
						theme === 'dark'
							? '/main/investment_dark.png'
							: '/main/getstarted-stats.png'
					}
					alt='stats'
					className='stats__image w-auto'
					quality={100}
				/>
			</div>
		</>
	)
}
