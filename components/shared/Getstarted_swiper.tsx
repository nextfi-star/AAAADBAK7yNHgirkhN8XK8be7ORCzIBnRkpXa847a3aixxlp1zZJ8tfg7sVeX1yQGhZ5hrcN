'use client'
import { useThemeStore } from '@/store/useChatStore'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useMemo } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Getstarted_swiper = () => {
	const { theme } = useThemeStore()
	const t = useTranslations('landing')
	const data = useMemo(
		() => [
			{
				title: t('topBalan'),
				alt: 'balance',
				dark: '/main/Card_finance.png',
				light: '/main/getstarted-balance.png',
			},
			{
				title: t('withdMoney'),
				alt: 'income',
				dark: '/main/Card_finance-1.png',
				light: '/main/getstarted-income.png',
			},
		],
		[]
	)
	return (
		<Swiper
			autoplay={{
				delay: 2000,
				disableOnInteraction: false,
			}}
			className='getstarted-swiper'
			modules={[Autoplay]}
			slidesPerView={1}
			spaceBetween={24}
		>
			<div className='swiper-wrapper'>
				{data.map(slide => (
					<SwiperSlide key={slide.title}>
						<div className='getstarted__big-content__item'>
							<div className='getstarted__image-wrapper'>
								<Image
									alt={slide.alt}
									className='getstarted__image max-w-[240px]'
									height={400}
									quality={100}
									src={theme === 'dark' ? slide.dark : slide.light}
									width={400}
								/>
							</div>
							<a className='btn btn-blue btn-none' href=''>
								{slide.title}
							</a>
						</div>
					</SwiperSlide>
				))}
			</div>
		</Swiper>
	)
}
