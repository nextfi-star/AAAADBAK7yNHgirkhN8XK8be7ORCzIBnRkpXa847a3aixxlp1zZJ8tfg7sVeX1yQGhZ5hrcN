'use client'
import { Link } from '@/i18n/routing'
import { useThemeStore } from '@/store/useChatStore'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export const Balance_img = () => {
	const { theme } = useThemeStore()
	const t = useTranslations('landing')

	return (
		<>
			<div className='getstarted__big-content__item'>
				<div className='getstarted__image-wrapper'>
					<Image
						alt='balance'
						height={192}
						quality={100}
						src={
							theme === 'dark'
								? '/main/Card_finance.png'
								: '/main/getstarted-balance.png'
						}
						width={280}
					/>
				</div>
				<Link className='btn btn-blue btn-none' href='/signup'>
					{t('topBalan')}
				</Link>
			</div>

			<div className='getstarted__big-content__item'>
				<div className='getstarted__image-wrapper'>
					<Image
						alt='income'
						height={192}
						quality={100}
						src={
							theme === 'dark'
								? '/main/Card_finance-1.png'
								: '/main/getstarted-income.png'
						}
						width={280}
					/>
				</div>
				<Link className='btn btn-blue btn-none' href='/signup'>
					{t('withdMoney')}
				</Link>
			</div>
		</>
	)
}
