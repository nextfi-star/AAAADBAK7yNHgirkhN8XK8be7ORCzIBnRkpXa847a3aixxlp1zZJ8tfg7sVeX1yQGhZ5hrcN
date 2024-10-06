'use client'
import React from 'react'
import Image from 'next/image'
import { useThemeStore } from '../../../../store'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

const data = [
	{
		title: 'Top up your balance',
		alt: 'balance',
		dark: '/main/Card_finance.png',
		light: '/main/getstarted-balance.png',
	},
	{
		title: 'Withdraw money',
		alt: 'income',
		dark: '/main/Card_finance-1.png',
		light: '/main/getstarted-income.png',
	},
]
export const Getstarted_swiper = () => {
	const { theme } = useThemeStore()

	return (
		<Swiper
			slidesPerView={1}
			spaceBetween={24}
			autoplay={{
				delay: 2000,
				disableOnInteraction: false,
			}}
			modules={[Autoplay]}
			className='getstarted-swiper'
		>
			<div className='swiper-wrapper'>
				{data.map(slide => (
					<SwiperSlide key={slide.title}>
						<div className='getstarted__big-content__item'>
							<div className='getstarted__image-wrapper'>
								<Image
									width={400}
									height={400}
									src={theme === 'dark' ? slide.dark : slide.light}
									alt={slide.alt}
									quality={100}
									className='getstarted__image'
								/>
							</div>
							<a href='' className='btn btn-blue btn-none'>
								{slide.title}
							</a>
						</div>
					</SwiperSlide>
				))}
			</div>
		</Swiper>
	)
}
