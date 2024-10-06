'use client'

import Image from 'next/image'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/pagination'

export const Mobile_swiper = () => {
	return (
		<div className='m-how__content'>
			<Swiper
				modules={[Pagination]}
				pagination={{ clickable: true }}
				slidesPerView={1}
				spaceBetween={24}
				loop={true}
				className='swiper how-swiper'
			>
				<div className='swiper-wrapper'>
					<SwiperSlide>
						<div className={`how__item big-item`}>
							<Image
								src={'/main/stars_max.svg'}
								width={200}
								height={200}
								alt='alt'
								priority
							/>
							<div className='how__item-content'>
								<span className='how__item-title'>Artificial Intelligence</span>
								<span className='how__item-text'>
									They are the primary tool for conducting transactions in
									thefinancial market and the key to earning income from
									investments in the NextFi token.
								</span>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className={`how__item`}>
							<Image
								src={'/main/icons_cube.svg'}
								width={136}
								height={136}
								alt='alt'
								priority
							/>
							<div className='how__item-content'>
								<span className='how__item-title'>Company Stocks</span>
								<span className='how__item-text'>
									Tracking successful promotions and ensuring financial security
									in trading on the market
								</span>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className={`how__item`}>
							<Image
								src={'/main/icons_bubbles.svg'}
								width={136}
								height={136}
								alt='alt'
								priority
							/>
							<div className='how__item-content'>
								<span className='how__item-title'>Precious Metals</span>
								<span className='how__item-text'>
									Constantly increasing assets and executing profitable
									transactions with them.
								</span>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className={`how__item`}>
							<Image
								src={'/main/stars_bank.svg'}
								width={136}
								height={136}
								alt='alt'
								priority
							/>
							<div className='how__item-content'>
								<span className='how__item-title'>Corporate Bonds</span>
								<span className='how__item-text'>
									Ownership of more than X bonds with regular updates and
									profitable financial transactions related to them.
								</span>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className={`how__item`}>
							<Image
								src={'/main/oin_selector.svg'}
								width={136}
								height={136}
								alt='alt'
								priority
							/>
							<div className='how__item-content'>
								<span className='how__item-title'>Oil Sector</span>
								<span className='how__item-text'>
								Smart and efficient trading of oil products in the eastern market.
								</span>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className={`how__item`}>
							<Image
								src={'/main/icons__invest.svg'}
								width={136}
								height={136}
								alt='alt'
								priority
							/>
							<div className='how__item-content'>
								<span className='how__item-title'>Innovative Startups</span>
								<span className='how__item-text'>
									Analysis and search for the most promising projects aimed at
									acquiring a stake and subsequent growth of dividends.
								</span>
							</div>
						</div>
					</SwiperSlide>
				</div>
			</Swiper>
		</div>
	)
}
