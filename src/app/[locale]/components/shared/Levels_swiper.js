import React from 'react'
import { Scrollbar, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/pagination'
import Image from 'next/image'

const sliderData = [
	{
		percent: '5%',
		time: 'per month',
		text: 'Minimum amount X NextFi',
		subtext: 'Maximum amount X NextFi',
		investment: 'Investment term',
		investmentTime: '30 days',

		buttonLink: '#',
		img: '/main/arrow_right.svg',
	},
	{
		percent: '10%',
		time: 'per month',
		text: 'Minimum amount X NextFi',
		subtext: 'Maximum amount X NextFi',
		investment: 'Investment term',
		investmentTime: '30 days',

		buttonLink: '#',
		img: '/main/arrow_right.svg',
	},
	{
		percent: '15%',
		time: 'per month',
		text: 'Minimum amount X NextFi',
		subtext: 'Maximum amount X NextFi',
		investment: 'Investment term',
		investmentTime: '30 days',

		buttonLink: '#',
		img: '/main/arrow_right.svg',
	},
	{
		percent: '20%',
		time: 'per month',
		text: 'Minimum amount X NextFi',
		subtext: 'Maximum amount X NextFi',
		investment: 'Investment term',
		investmentTime: '30 days',

		buttonLink: '#',
		img: '/main/arrow_right.svg',
	},
	{
		percent: '25%',
		time: 'per month',
		text: 'Minimum amount X NextFi',
		subtext: 'Maximum amount X NextFi',
		investment: 'Investment term',
		investmentTime: '30 days',

		buttonLink: '#',
		img: '/main/arrow_right.svg',
	},
	{
		percent: '30%',
		time: 'per month',
		text: 'Minimum amount X NextFi',
		subtext: 'Maximum amount X NextFi',
		investment: 'Investment term',
		investmentTime: '30 days',
		buttonLink: '#',
		img: '/main/arrow_right.svg',
	},
	{
		percent: '35%',
		time: 'per month',
		text: 'Minimum amount X NextFi',
		subtext: 'Maximum amount X NextFi',
		investment: 'Investment term',
		investmentTime: '30 days',
		buttonLink: '#',
		img: '/main/arrow_right.svg',
	},
	{
		percent: '40%',
		time: 'per month',
		text: 'Minimum amount X NextFi',
		subtext: 'Maximum amount X NextFi',
		investment: 'Investment term',
		investmentTime: '30 days',
		buttonLink: '#',
		img: '/main/arrow_right.svg',
	},
]

export const Levels_swiper = () => {
	return (
		<>
			<Swiper
				modules={[Scrollbar, Pagination]}
				scrollbar={{ draggable: true, hide: false }}
				slidesPerView={3}
				spaceBetween={24}
				pagination={{ clickable: true }}
				className=' swiper-levels'
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
			>
				<div className='swiper-wrapper'>
					{sliderData.map(slide => (
						<SwiperSlide key={slide.percent} className='levels-slide'>
							<div className='levels-slide__content'>
								<div className='levels-slide__content-main'>
									<span className='levels-percent'>{slide.percent}</span>
									<span className='levels-time'>{slide.time}</span>
									<span className='levels-text'>{slide.text}</span>
									<span className='levels-text'>{slide.subtext}</span>
								</div>
								<div className='levels-slide__content-sub'>
									<span className='levels-slide__investment'>
										{slide.investment}
									</span>
									<span className='levels-slide__investment-time'>
										{slide.investmentTime}
									</span>
								</div>
							</div>
							<a href={slide.buttonLink} className='levels-slide__button'>
								<Image priority quality={100} src={slide.img} width={40} height={40} alt={slide.img} />
							</a>
						</SwiperSlide>
					))}
				</div>
			</Swiper>
		</>
	)
}
