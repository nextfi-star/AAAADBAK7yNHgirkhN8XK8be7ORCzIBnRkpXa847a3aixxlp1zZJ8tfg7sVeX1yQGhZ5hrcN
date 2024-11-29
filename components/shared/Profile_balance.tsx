'use client'
import { useRef, useState } from 'react'
import { Swiper as SwiperType } from 'swiper'
import { NextPage } from 'next'
import Eye from '../ui/Eye'
import ArrowBracket from '../ui/ArrowBracket'
import { useThemeStore } from '../../store'
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
		setIsLoading(true)
		setTimeout(() => {
			setRefresh(!refresh)
			setIsLoading(false)
		}, 2000)
	}

	return (
		<section className='h-fit'>
			<div className='profile__balance bg-[#fff] dark:bg-[#1e1e1e66] md:!shadow-medium md:dark:!shadow-none'>
				<div className='profile__balance_sides !pt-[40px]'>
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
					{isLoading && <Spinner className='min-w-[370px] min-h-[158px] ' />}
					{!isLoading && (
						<div className='w-full sm:hidden m-auto gap-[10px] rounded-xl p-4 flex items-start justify-between dark:bg-[#131313] dark:!shadow-none shadow-medium'>
							<div className='flex flex-col'>
								<div className='flex justify-between items-center'>
									<div className='flex items-center gap-2'>
										<Image
											src={
												refresh ? '/main/bonusbalance.svg' : '/main/balance.svg'
											}
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
									className='!w-full !max-w-[26px] min-w-[26px] p-[5px] cursor-pointer'
									onClick={handleRefreshClick}
								/>
							</div>
						</div>
					)}
					{/* </SwiperSlide>

					</Swiper> */}

					<div className='profile_balance_side'>
						<div className='flex flex-col gap-[10px]'>
							<div className='flex justify-between items-center'>
								<div className='flex items-center gap-2'>
									<Image
										src={'/main/balance.svg'}
										width={44}
										height={44}
										alt='balance'
									/>
									<h4 className='text-blue-600 text-[33px] font-medium'>
										Balance
									</h4>
									<Eye />
								</div>
							</div>
							<div className='flex items-center gap-[8px]'>
								<p className='text-[36px] font-bold'>$000,000</p>
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
								<p className='text-[19px]'>Today $0,00 (0,00 %)</p>
							</div>
						</div>
					</div>

					<div className='profile_balance_side'>
						<div className='flex flex-col gap-[10px]'>
							<div className='flex justify-between items-center'>
								<div className='flex items-center gap-2'>
									<Image
										src={'/main/bonusbalance.svg'}
										width={44}
										height={44}
										alt='balance'
									/>
									<h4 className='text-blue-600 text-[33px] font-medium'>
										Bonus
									</h4>
									<Eye />
								</div>
							</div>
							<div className='flex items-center gap-[8px]'>
								<p className='text-[36px] font-bold'>$000,000</p>
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
								<p className='text-[19px]'>Today $0,00 (0,00 %)</p>
							</div>
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
