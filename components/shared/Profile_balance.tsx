'use client'
import { useRef, useState } from 'react'
import { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { NextPage } from 'next'
import Eye from '../ui/Eye'
import StarsMobile from '../ui/StarsMobile'
import Stonks from '../ui/Stonks'
import ArrowBracket from '../ui/ArrowBracket'
import { useThemeStore } from '../../store'
import { StartupIcon } from './StartupIcon'
import Chart from './Chart'
import { Avatar } from '@nextui-org/react'
import { Link } from '@/i18n/routing'

export const Profile_balance: NextPage = () => {
	const { theme } = useThemeStore()
	const [isActive, setIsActive] = useState<boolean>(true)
	const [show, setShow] = useState<boolean>(false)
	const swiperRef = useRef<SwiperType | null>(null)
	const handleSlideChange = (index: number) => {
		setIsActive(index === 0)
	}
	const handleCLick = () => {
		setShow(!show)
	}

	return (
		<section className=''>
			<div className='w-[212px] sm:hidden flex m-auto gap-[4px] justify-between rounded-[50px] h-[40px] bg-gray-200 mb-[30px]'>
				<button
					className={`w-[104px] transition duration-300 ${
						isActive ? 'bg-[#205BC9] text-white' : 'text-[#205BC9]'
					} text-[18px] rounded-[50px] font-medium`}
					onClick={() => swiperRef.current?.slideTo(0)}
				>
					Balance
				</button>
				<button
					className={`w-[104px] transition duration-300 ${
						!isActive ? 'bg-[#205BC9] text-white' : 'text-[#205BC9]'
					} text-[18px] rounded-[50px] font-medium`}
					onClick={() => swiperRef.current?.slideTo(1)}
				>
					Bonus
				</button>
			</div>

			<div className='profile__balance !shadow-lg'>
				<div className='profile__balance_sides'>
					{/* Mobile */}
					<Swiper
						className='blanace__swiper'
						slidesPerView={1}
						spaceBetween={24}
						onSlideChange={swiper => handleSlideChange(swiper.activeIndex)}
						onSwiper={swiper => {
							swiperRef.current = swiper
						}}
					>
						<SwiperSlide>
							<div className='w-full sm:hidden m-auto border border-[#adadad] border-solid gap-[10px] rounded-xl p-4 flex flex-col'>
								<div className='flex justify-between items-center'>
									<div className='flex items-center gap-2'>
										<StartupIcon width={44} />
										<h4 className='text-blue-600 text-[14px] md:text-[20px] font-semibold'>
											Balance
										</h4>
									</div>
									<div>
										<select className='bg-transparent text-[16px] font-medium'>
											<option
												className='text-[12px] max-w-[1px] text-black'
												value='USDT'
											>
												USDT
											</option>
											<option
												className='text-[12px] max-w-[1px] text-black'
												value='NextFi'
											>
												NextFi
											</option>
										</select>
									</div>
								</div>

								<div className='flex items-center gap-[8px]'>
									<p className='text-[24px] font-bold'>$000,000</p>
									<Eye />
								</div>

								<div className='flex items-center gap-2 text-blue-600 text-[14px]'>
									<p>Today $0,00 (0,00 %)</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='w-full sm:hidden m-auto border border-[#adadad] border-solid gap-[10px] rounded-xl p-4 flex flex-col'>
								<div className='flex justify-between items-center'>
									<div className='flex items-center gap-2'>
										<StartupIcon width={44} />
										<h4 className='text-blue-600  text-[14px] md:text-[19px] font-semibold'>
											Bonus Balance
										</h4>
									</div>
									<div className='flex items-center'>
										<select className='bg-transparent text-[16px] font-medium'>
											<option
												className='text-[12px] max-w-[1px] text-black'
												value='USDT'
											>
												USDT
											</option>
											<option
												className='text-[12px] max-w-[1px] text-black'
												value='NextFi'
											>
												NextFi
											</option>
										</select>
									</div>
								</div>

								<div className='flex items-center gap-[8px]'>
									<p className='text-[24px] font-bold'>$000,000</p>
									<Eye />
								</div>

								<div className='flex items-center gap-2 text-blue-600 text-[14px]'>
									<p>Today $0,00 (0,00 %)</p>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>

					<div className='profile_balance_side'>
						<div className='profile_balance_side_title'>
							<h4 className='profile_balance_side_main_text'>
								<StarsMobile width='65' /> Balance
							</h4>
							<p className='profile_balance_side_cost_text'>
								<select>
									<option value=''>USDT</option>
									<option value=''>NextFi</option>
								</select>
							</p>
						</div>
						<p className='profile_balance_side_money'>
							$000,000,000 <Eye />
						</p>
						<div className='profile_balance_side_statistic_block'>
							<Stonks />
							<p className='profile_balance_side_statistic_block_text'>
								Today $0,00 (0,00 %)
							</p>
						</div>
					</div>

					<div className='profile_balance_side'>
						<div className='profile_balance_side_title'>
							<h4 className='profile_balance_side_main_text'>
								<StarsMobile width='65' /> Bonus Balance
							</h4>
							<p className='profile_balance_side_cost_text'>
								<select>
									<option value=''>USDT</option>
									<option value=''>NextFi</option>
								</select>
							</p>
						</div>
						<p className='profile_balance_side_money'>
							$000,000,000 <Eye />
						</p>

						<div className='profile_balance_side_statistic_block'>
							<Stonks />
							<p className='profile_balance_side_statistic_block_text'>
								Today $0,00 (0,00 %)
							</p>
						</div>
					</div>
				</div>

				<div className='flex w-full flex-col md:flex-row justify-between gap-[40px] md:pr-[70px]'>
        <div className='md:max-w-[70%] w-full flex items-center justify-between'>
					<Link href='#' className='flex flex-col items-center text-[14px]'>
						<Avatar
							src='/header_icons/profile_burger/deposit.svg'
							className='flex-shrink-0 bg-transparent'
							size='lg'
						/>
						Deposit
					</Link>
					<Link
						href='/withdrawal'
						className='flex flex-col items-center text-[14px]'
					>
						<Avatar
							src='/header_icons/profile_burger/deposit.svg'
							className='flex-shrink-0 bg-transparent'
							size='lg'
						/>
						Withdrawal
					</Link>
					<Link href='#' className='flex flex-col items-center text-[14px]'>
						<Avatar
							src='/header_icons/profile_burger/swap.svg'
							className='flex-shrink-0 bg-transparent'
							size='lg'
						/>
						Swap
					</Link>
					<Link href='#' className='flex flex-col items-center text-[14px]'>
						<Avatar
							src='/header_icons/profile_burger/commission.svg'
							className='flex-shrink-0 bg-transparent'
							size='lg'
						/>
						Investment
					</Link>
				</div>

				<span
					className='flex items-center gap-[10px] cursor-pointer'
					onClick={handleCLick}
				>
					Chart
					<ArrowBracket
						className={`min-w-[20px] ${!show ? 'rotate-[-90deg]' : 'rotate-[0deg]'} transition-all duration-300`}
						color={theme === 'dark' ? 'white' : '#0c0c0c'}
					/>
				</span>
        </div>

				<div
					className={`overflow-hidden ${!show ? 'max-h-[0]' : 'max-h-[450px] '} transition-all duration-300`}
				>
					<Chart />
				</div>
			</div>
		</section>
	)
}
