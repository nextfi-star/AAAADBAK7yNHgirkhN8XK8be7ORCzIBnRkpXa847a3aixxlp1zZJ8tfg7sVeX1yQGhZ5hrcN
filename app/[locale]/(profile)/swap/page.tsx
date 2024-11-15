'use client'
import { Swap_confirmation } from '@/components/shared/Swap_confirmation'
import Swap_faq from '@/components/shared/Swap_faq'
import Swap_from from '@/components/shared/Swap_from'
import { Swap_fromTo } from '@/components/shared/Swap_fromTo'
import Swap_To from '@/components/shared/Swap_To'
import { useThemeStore } from '@/store'
import { Divider } from '@nextui-org/divider'
import { Avatar, Image } from '@nextui-org/react'
import { ArrowDownUp } from 'lucide-react'
import { NextPage } from 'next'
import React from 'react'

interface Props {}

const Swap: NextPage<Props> = () => {
	const { theme, swapPoppover_1, swapPoppover_2 } = useThemeStore()

	return (
		<section className='mt-[-7rem] lg:mt-0 flex flex-col gap-[40px] w-full min-h-screen pb-[1.5rem]'>
			<article className='md:dark:bg-[#1e1e1e66] md:shadow-lg dark:shadow-none flex flex-col items-center gap-[19px] md:gap-[35px] w-full md:py-[51px] rounded-[30px]'>
				<h1 className='text-[30px] xl:text-[68px] font-bold xl:leading-[32px]'>
					Swap
				</h1>
				<div className='flex items-center justify-center w-full'>
					<span className='text-[14px] sm:text-[18px] text-[#888888]'>
						Zero swap Fee
					</span>
					<Divider
						className='mx-[5px] sm:mx-[16px] h-[21px] md:h-8 dark:bg-[#fff]'
						orientation='vertical'
					/>
					<span className='text-[14px] sm:text-[18px] text-[#888888]'>
						Lower limits
					</span>
					<Divider
						className='mx-[5px] sm:mx-[16px] h-[21px] md:h-8 dark:bg-[#fff]'
						orientation='vertical'
					/>
					<span className='text-[14px] sm:text-[18px] text-[#888888]'>
						Simple transactions
					</span>
				</div>
			</article>

			<div className='md:dark:bg-[#1e1e1e66] md:shadow-lg dark:shadow-none flex flex-col items-center gap-[15px] md:gap-[35px] w-full md:min-h-[871px] md:p-[46px_36px] rounded-[30px]'>
				<Swap_from />

				<div className='w-full flex items-center justify-between gap-[5px] md:px-[32px]'>
					<article className='flex flex-col items-start gap-[5px]'>
						<p className='flex items-start md:items-center gap-[13px] md:text-[20px]'>
							Available: 0.00000079 TRX
							<span className='text-[#205BC9]'>Deposit</span>
						</p>
						<div className='privacy max-w-[921px] flex flex-col 	 justify-center'>
							<label
								className='checkbox-label gap-[5px] md:gap-[18px] !items-center md:items-center'
								htmlFor='checkbox-privacy'
							>
								<input
									className='checkbox'
									id='checkbox-privacy'
									type='checkbox'
								/>
								<span className='checkbox-view !m-0'>
									<svg
										className='checkbox-icon max-w-[50px] md:max-w-[50px] max-h-[20px] md:max-h-[45px]'
										viewBox='0 0 511.985 511.985'
										width='18'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0-15.862 15.862-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899 10.394 0 20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435z'
											fill={theme === 'dark' ? '#fff' : '#3A3939'}
										/>
									</svg>
								</span>
								<p className='text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] text-left text-[#888888] leading-[1]'>
									Show zero balances
								</p>
							</label>
						</div>
					</article>
					<div className='rounded-full border-1 md:border-3 border-solid border-[#EFEFEF] p-[13px]'>
						<ArrowDownUp
							strokeWidth={1}
							className='w-full max-w-[36px] max-h-[36px]'
						/>
					</div>
				</div>

				<Swap_To />

				<div className='flex items-center gap-[5px]'>
					<span className='md:text-[20px] text-[#888888]'>Exchange rate:</span>
					<span className='md:text-[20px] text-[#888888]'>1 {swapPoppover_1} = </span>
					<span className='md:text-[20px] text-[#888888]'>6.05521141 {swapPoppover_2}</span>
				</div>

				<Swap_confirmation titleTrigger='Confirm'  />

				<div className='flex items-center gap-[30px] md:gap-[100px]'>
					<div className='flex flex-col items-center justify-between gap-[11px]'>
						<Image
							className='w-[60px] md:w-[100px]'
							src='/main/swap/zero_tier.svg'
							alt='Zero Tier'
						/>
						<span className='text-[16px] md:text-[20px]'>Zero Tier</span>
					</div>
					<div className='flex flex-col items-center justify-between gap-[11px]'>
						<Image
							className='w-[60px] md:w-[100px]'
							src='/main/swap/no_slippage.svg'
							alt='no_slippage'
						/>
						<span className='text-[16px] md:text-[20px]'>No slippage</span>
					</div>
					<div className='flex flex-col items-center justify-between gap-[11px]'>
						<Image
							className='w-[60px] md:w-[100px]'
							src='/main/swap/more_pairs.svg'
							alt='more_pairs'
						/>
						<span className='text-[16px] md:text-[20px]'>More pairs</span>
					</div>
				</div>
			</div>

			<div className='dark:bg-[#1e1e1e66] md:shadow-lg dark:shadow-none flex flex-col items-center gap-[35px] w-full p-[46px_16px] md:p-[46px_36px] rounded-[30px]'>
				<h1 className='block md:text-center w-full text-[24px] md:text-[32px] font-normal md:font-bold leading-[32px]'>
					FAQ
				</h1>

				<Swap_faq />
			</div>
		</section>
	)
}

export default Swap