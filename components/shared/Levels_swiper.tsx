'use client'
import { Scrollbar, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/pagination'
import Image from 'next/image'

const sliderData = [
	{
		percent: '4%',
		time: 'in 30 days',
		text: 'Minimum amount X NextFi',
		subtext: 'Maximum amount X NextFi',
		investment: 'Investment term',
		investmentTime: '30 days',
		buttonLink: '#',
		img: '/main/arrow_right.svg',
	},
	{
		percent: '7%',
		time: 'in 30 days',
		text: 'Minimum amount X NextFi',
		subtext: 'Maximum amount X NextFi',
		investment: 'Investment term',
		investmentTime: '50 days',
		buttonLink: '#',
		img: '/main/arrow_right.svg',
	},
	{
		percent: '14%',
		time: 'in 30 days',
		investment: 'Investment term',
		investmentTime: '60 days',
		buttonLink: '#',
		img: '/main/arrow_right.svg',
	},
]

export const Levels_swiper = () => {
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
								<span className='levels-percent'>Up to</span>
								</div>
								<div className='levels-slide__content-main'>
									<span className='levels-percent'>{slide.percent}</span>
								</div>
								<div className='levels-slide__content-sub'>
									<span className='levels-time text-center'>{slide.time}</span>
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
