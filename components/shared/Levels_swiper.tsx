'use client'
import { Scrollbar, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/pagination'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'



export const Levels_swiper = () => {
	const t = useTranslations('landing')	
	const sliderData = useMemo(() => [
		{
			percent: '4%',
			investmentTime: '30 ' + t('days'),
			buttonLink: '#',
			img: '/main/arrow_right.svg',
		},
		{
			percent: '7%',
			investmentTime: '50 ' + t('days'),
			buttonLink: '#',
			img: '/main/arrow_right.svg',
		},
		{
			percent: '14%',
			investmentTime: '80 ' + t('days'),
			buttonLink: '#',
			img: '/main/arrow_right.svg',
		},
	], [])
	return (
		<>
			<Swiper
				breakpoints={{
					320: {
						slidesPerView: 1,
						spaceBetween: 24,
					},
					993: {
						slidesPerView: 2,
						spaceBetween: 24,
					},
					1238: {
						slidesPerView: 3,
						spaceBetween: 24,
					},
				}}
				className='swiper-levels'
				modules={[Scrollbar, Pagination]}
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true, hide: false }}
				slidesPerView={3}
				spaceBetween={24}
			>
				<div className='swiper-wrapper'>
					{sliderData.map(slide => (
						<SwiperSlide key={slide.percent} className='levels-slide'>
							<div className='levels-slide__content'>
								<div className='levels-slide__content-main'>
									<span className='levels-percent'>{t('upTo')}</span>
								</div>
								<div className='levels-slide__content-main'>
									<span className='levels-percent'>{slide.percent}</span>
								</div>
								<div className='levels-slide__content-sub'>
									<span className='levels-time text-center'>
										{slide.investmentTime}
									</span>
								</div>
							</div>
							<a className='levels-slide__button' href={slide.buttonLink}>
								<Image
									priority
									alt={slide.img}
									height={40}
									quality={100}
									src={slide.img}
									width={40}
								/>
							</a>
						</SwiperSlide>
					))}
				</div>
			</Swiper>
		</>
	)
}
