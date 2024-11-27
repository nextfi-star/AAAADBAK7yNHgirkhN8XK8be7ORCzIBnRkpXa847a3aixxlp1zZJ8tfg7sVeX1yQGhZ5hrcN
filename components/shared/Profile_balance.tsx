'use client'
import { useEffect, useRef, useState } from 'react'
import { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { NextPage } from 'next'
import Eye from '../ui/Eye'
import StarsMobile from '../ui/StarsMobile'
import ArrowBracket from '../ui/ArrowBracket'
import { useThemeStore } from '../../store'
import { StartupIcon } from './StartupIcon'
import Chart from './Chart'
import { Avatar, Image, Spinner } from '@nextui-org/react'
import { Link } from '@/i18n/routing'
import { RefreshCw } from 'lucide-react'

export const Profile_balance: NextPage = () => {
	const { theme, verifyState } = useThemeStore()
	const [isActive, setIsActive] = useState<boolean>(true)
	const [show, setShow] = useState<boolean>(false)
	const swiperRef = useRef<SwiperType | null>(null)
	const handleSlideChange = (index: number) => {
		setIsActive(index === 0)
	}
	const handleCLick = () => {
		setShow(!show)
	}
	const [refresh, setRefresh] = useState<boolean>(false)
	const [isLoading, setIsLoading] = useState(false)
	const handleRefreshClick = async () => {
		setIsLoading(true) // Показать Spinner
		setTimeout(() => {
			setRefresh(!refresh) // Переключение состояния refresh
			setIsLoading(false) // Убрать Spinner
		}, 1000) // Симуляция задержки (например, запрос к API)
	}

	return (
		<section className='h-fit'>
			<div className='w-[212px] sm:hidden flex m-auto gap-[4px] justify-between rounded-[50px] h-[40px] bg-gray-200 !shadow-medium dark:!shadow-none'>
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

			<div className='profile__balance bg-[#fff] dark:bg-[#1e1e1e66] md:!shadow-medium md:dark:!shadow-none'>
				<div className='profile__balance_sides'>
					{/* Mobile */}
					{/* <Swiper
						className='blanace__swiper'
						slidesPerView={1}
						spaceBetween={24}
						onSlideChange={swiper => handleSlideChange(swiper.activeIndex)}
						onSwiper={swiper => {
							swiperRef.current = swiper
						}}
					>
						<SwiperSlide> */}
					{isLoading && <Spinner  className='min-w-[370px] min-h-[158px] '/>}
					{!isLoading && (
						<div className='w-full sm:hidden m-auto border border-[#adadad] border-solid gap-[10px] rounded-xl p-4 flex items-start justify-between'>
							<div className='flex flex-col'>
								<div className='flex justify-between items-center'>
									<div className='flex items-center gap-2'>
										<Image
											src={'/main/balance.svg'}
											width={44}
											height={44}
											alt='balance'
										/>
										<h4 className='text-blue-600 text-[21px] font-medium'>
											{refresh ? 'Bonus' : 'Balance'}
										</h4>
										<Eye />
									</div>
								</div>
								<div className='flex items-center gap-[8px]'>
									<p className='text-[23px] font-bold'>$000,000</p>
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
								<div className='flex items-center gap-2 text-blue-600 text-[14px]'>
									<p>Today $0,00 (0,00 %)</p>
								</div>
							</div>

							<div className='flex items-center gap-[10px]'>
								<span className='text-[12px] dark:text-[#EFEFEF] flex-shrink-0'>
									Flip Over
								</span>
								<RefreshCw
									strokeWidth={1}
									className='!w-full !max-w-[26px] p-[5px]'
									onClick={handleRefreshClick}
								/>
							</div>
						</div>
					)}
					{/* </SwiperSlide>

					</Swiper> */}

					<div className='profile_balance_side'>
						<div className='profile_balance_side_title'>
							<h4 className='profile_balance_side_main_text'>
								<Image
									src={'/main/balance.svg'}
									width={44}
									height={44}
									alt='bonus balance'
								/>{' '}
								Balance
							</h4>
							<Image src={'/main/eye_blue.svg'} alt='eye' />
						</div>
						<div className='flex items-center gap-[8px]'>
							<p className='text-[32px] font-bold'>$000,000,000</p>{' '}
							<select className='text-[16px] font-normal dark:text-[#FFFFFF] text-[#000]'>
								<option value=''>USDT</option>
								<option value=''>NextFi</option>
							</select>
						</div>
						<div className='profile_balance_side_statistic_block'>
							<p className='profile_balance_side_statistic_block_text !font-normal !text-[#205BC9]'>
								Today
								{'  '}
								<span className='font-normal'>$0,00 (0,00 %)</span>
							</p>
						</div>
					</div>

					<div className='profile_balance_side'>
						<div className='profile_balance_side_title'>
							<h4 className='profile_balance_side_main_text'>
								<Image
									src={'/main/bonusbalance.svg'}
									width={44}
									height={44}
									alt='bonus balance'
								/>
								Bonus
								<Image src={'/main/eye_blue.svg'} alt='eye' />
							</h4>
						</div>
						<div className='text-[32px] font-bold flex items-center gap-[8px]'>
							<p className='text-[32px] font-bold'>$000,000,000</p>{' '}
							<select className='text-[16px] font-normal bg-transparent dark:!bg-[#EFEFEF] dark:text-[#000000]'>
								<option
									value=''
									className='dark:text-[#000000] bg-[#EFEFEF] dark:!bg-[#EFEFEF]'
								>
									USDT
								</option>
								<option
									value=''
									className='dark:text-[#000000] bg-[#EFEFEF] dark:!bg-[#EFEFEF]'
								>
									NextFi
								</option>
							</select>
						</div>

						<div className='profile_balance_side_statistic_block'>
							<p className='profile_balance_side_statistic_block_text !font-normal !text-[#205BC9]'>
								Today
								{'  '}
								<span className='profile_balance_side_statistic_block_text !font-normal !text-[#205BC9]'>
									$0,00 (0,00 %)
								</span>
							</p>
						</div>
					</div>
				</div>

				<div className='flex w-full flex-col items-center gap-[40px] '>
					{verifyState && (
						<>
							<div className='w-full  flex sm:hidden items-center justify-center gap-[25px]'>
								<Link
									href='#'
									className='flex flex-col items-center text-[14px]'
								>
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
								<Link
									href='/swap'
									className='flex flex-col items-center text-[14px]'
								>
									<Avatar
										src='/header_icons/profile_burger/swap.svg'
										className='flex-shrink-0 bg-transparent'
										size='lg'
									/>
									Swap
								</Link>
								<Link
									href='/invest'
									className='flex flex-col items-center text-[14px]'
								>
									<Avatar
										src='/header_icons/profile_burger/commission.svg'
										className='flex-shrink-0 bg-transparent'
										size='lg'
									/>
									Investment
								</Link>
							</div>
							<div className='w-full hidden sm:flex items-center justify-center sm:justify-start gap-[10px]'>
								<Link
									href='#'
									className='flex flex-col items-center text-[14px] text-[#0c0c0c] dark:text-[#ffffff] w-full max-w-[156px] border-1 !border-[#4d4d4d] dark:!border-[#4d4d4d] border-solid rounded-[50px] px-[10px] !bg-transparent'
								>
									Deposit
								</Link>
								<Link
									href='/withdrawal'
									className='flex flex-col items-center text-[14px] text-[#0c0c0c] dark:text-[#ffffff] w-full max-w-[156px] border-1 !border-[#4d4d4d] dark:!border-[#4d4d4d] border-solid rounded-[50px] px-[10px] !bg-transparent'
								>
									Withdrawal
								</Link>
								<Link
									href='/swap'
									className='flex flex-col items-center text-[14px] text-[#0c0c0c] dark:text-[#ffffff] w-full max-w-[156px] border-1 !border-[#4d4d4d] dark:!border-[#4d4d4d] border-solid rounded-[50px] px-[10px] !bg-transparent'
								>
									Swap
								</Link>
								<Link
									href='/invest'
									className='flex flex-col items-center text-[14px] text-[#0c0c0c] dark:text-[#ffffff] w-full max-w-[156px] border-1 !border-[#4d4d4d] dark:!border-[#4d4d4d] border-solid rounded-[50px] px-[10px] !bg-transparent'
								>
									Investment
								</Link>
							</div>
						</>
					)}

					<span
						className='flex items-center gap-[10px] cursor-pointer'
						onClick={handleCLick}
					>
						<ArrowBracket
							className={`min-w-[40px] transition-all duration-300`}
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
