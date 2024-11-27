'use client'
import { useThemeStore } from '@/store'
import { Button } from '@nextui-org/button'
import Image from 'next/image'
import { useState } from 'react'
import { Invest_progressBar } from './Invest_progressBar'
import { NextPage } from 'next'
import { Divider } from '@nextui-org/divider'
import { X } from 'lucide-react'
import { Checkbox } from './Checkbox'
import NotFoundItem from './NotFoundItem'
import { SkeletonCard_invest } from '../ui/skeleton/SkeletonCard_invest'

interface Props {
	selectedCompany?: string
	selectedIcon?: string
	selectedPeriod?: string
	selectedPercent?: string
}
export const Invest_card: NextPage<Props> = () => {
	const { globalCompany, globalCompanyIcon, globalPeriod } = useThemeStore()
	const [state, setState] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [change, setChange] = useState(false)

	const handleChange = () => {
		setIsLoading(true)
		setTimeout(() => {
			setChange(!change)
			setIsLoading(false)
		}, 800)
	}

	return (
		<>
			{!globalCompany && !globalCompanyIcon && !globalPeriod ? (
				<div className='bg-[#fff] shadow-medium dark:shadow-none dark:bg-[#1E1E1E66] rounded-[30px] min-h-[360px]  max-w-[650px] w-full flex justify-center items-center'>
					<NotFoundItem
						content='No records found'
						subContent='Get started with your investment transaction '
					/>
				</div>
			) : (
				<>
					{isLoading ? (
						<SkeletonCard_invest />
					) : change ? (
						<div className='bg-[#fff] shadow-medium dark:shadow-none dark:bg-[#1E1E1E66] rounded-[30px] min-h-[360px]  max-w-[650px] w-full'>
							<div className='p-[18px_23px] flex w-full flex-col sm:flex-row items-center justify-between'>
								<div className='flex items-center'>
									<Image
										src='/main/invest/stocks.svg'
										width={60}
										height={60}
										alt='icon'
									/>
									<p className='text-[20px] text-[#3A3939] dark:text-[#eeeeee] font-medium'>
										{globalCompany?.name}
									</p>
								</div>
								<Invest_progressBar progress={50} />
							</div>

							<div className='flex flex-col gap-[13px] items-center px-[12px] sm:px-[18px] py-[28px]'>
								<div className='w-full flex items-center justify-between gap-[10px]'>
									<p className='text-[16px] sm:text-[20px] text-[#888888] font-medium'>
										Amount of investment: 7000 NextFi
									</p>
									<p className='sm:text-[20px] text-[#888888] font-medium'>
										Period: {globalPeriod?.name} days
									</p>
								</div>

								<div className='w-full flex items-center justify-between pb-[23px]'>
									<p className='text-[14px] sm:text-[20px] text-[#888888] font-medium'>
										Remaining period: {globalCompany?.periodFrom}-
										{globalCompany?.periodTo} days
									</p>
									<p className='text-[14px] flex-shrink-0 sm:text-[20px] text-[#888888] font-medium'>
										Percent: {globalPeriod?.percent}%
									</p>
								</div>

								<div className='w-full flex items-center justify-between pb-[23px]'>
									<p className='sm:text-[20px] text-[#888888] font-medium'>
										Amount at the moment
									</p>
								<p className='sm:text-[32px] text-[#888888] font-bold'>
										7517 NextFi
									</p>
								</div>

								<div className='flex flex-col sm:gap-[15px] gap-[20px] sm:flex-row items-center justify-between w-full sm:mb-[20px]'>
									<Checkbox
										forBox={'checkbox-privacy'}
										content={'I confirm the early withdrawal with percent'}
									/>
									<Button
										className='max-w-[188px] w-full p-[8px_4px] text-white bg-[#205BC9] rounded-[50px]'
										onClick={handleChange}
									>
										Withdraw funds
									</Button>
								</div>
							</div>
						</div>
					) : (
						<div className='bg-[#fff] shadow-medium dark:shadow-none dark:bg-[#1E1E1E66] rounded-[30px] min-h-[360px] max-w-[650px] w-full x'>
							<div className='p-[18px_41px] flex w-full flex-row items-center justify-between'>
								<h1 className='text-[18px] sm:text-[24px] font-medium dark:text-[rgb(239,239,239)]'>
									Early receipt of funds
								</h1>
								<X size={32} strokeWidth={2} />
							</div>
							<Divider orientation='horizontal' />
							<div className='flex flex-col gap-[13px] items-center px-[12px] sm:px-[18px] py-[27px]'>
								<div className='flex items-center gap-[2px]'>
									<Image
										src={globalCompanyIcon?.avatar ?? '/main/invest/stocks.svg'}
										width={60}
										height={60}
										alt='icon'
									/>
									<p className='text-[19px] sm:text-[20px] text-[#3A3939] dark:text-[#eeeeee] font-medium'>
										{globalCompany?.name ?? 'Company Stocks'}
									</p>
								</div>

								<div className='w-full flex items-center justify-between'>
									<p className='text-[16px] sm:text-[20px] text-[#888888] font-medium'>
										Percentage of early withdrawal
									</p>
									<p className='text-[20px] text-[#888888] font-medium'>
										{globalPeriod?.percent}%
									</p>
								</div>

								<div className='w-full flex items-center justify-between pb-[23px]'>
									<p className='text-[16px] sm:text-[20px] text-[#888888] font-medium'>
										Amount to be received
									</p>
									<p className='text-[20px] sm:text-[32px] text-[#888888] font-bold'>
										7389 NextFi
									</p>
								</div>

								<div className='flex flex-col gap-[20px] sm:gap-[10px] sm:flex-row items-center justify-between w-full'>
									<Checkbox
										forBox={'checkbox-privacy2'}
										content={'I confirm that the withdrawal will take 24 hours'}
									/>
									<Button
										className='max-w-[188px] w-full p-[8px_4px] text-white bg-[#205BC9] rounded-[50px]'
										onClick={handleChange}
									>
										Confirm
									</Button>
								</div>
							</div>
							<Divider orientation='horizontal' className='mb-[37px]' />
						</div>
					)}
				</>
			)}

			{globalCompany && globalCompanyIcon && globalPeriod && (
				<>
					{!state && (
						<div className='bg-[#fff] shadow-medium dark:shadow-none dark:bg-[#1E1E1E66] rounded-[30px] min-h-[360px] max-w-[650px] w-full'>
							<div className='p-[18px_41px]'>
								<h1 className='text-[18px] sm:text-[24px] font-medium dark:text-[rgb(239,239,239)]'>
									Transaction processing
								</h1>
							</div>
							<Divider orientation='horizontal' />
							<div className='flex flex-col gap-[13px] items-center px-[12px] sm:px-[18px] py-[27px]'>
								<div className='flex items-center gap-[2px]'>
									<Image
										src={globalCompanyIcon?.avatar ?? '/main/invest/stocks.svg'}
										width={60}
										height={60}
										alt='icon'
									/>
									<p className='text-[19px] sm:text-[20px] text-[#3A3939] dark:text-[#eeeeee] font-medium'>
										{globalCompany?.name ?? 'Company Stocks'}
									</p>
								</div>

								<Invest_progressBar progress={50} />

								<div className='w-full flex items-center justify-between'>
									<p className='text-[16px] sm:text-[20px] text-[#888888] font-medium'>
										Percentage of early withdrawal
									</p>
									<p className='text-[20px] text-[#888888] font-medium'>
										{globalPeriod?.percent}%
									</p>
								</div>

								<div className='w-full flex items-center justify-between pb-[23px]'>
									<p className='text-[16px] sm:text-[20px] text-[#888888] font-medium'>
										Amount to be received
									</p>
									<p className='text-[20px] sm:text-[32px] text-[#888888] font-bold'>
										7389 NextFi
									</p>
								</div>

								<Button className='max-w-[188px] w-full p-[8px_4px] bg-[#29292B] text-white rounded-[50px]'
								disabled
								>
									Get
								</Button>
							</div>
							<Divider orientation='horizontal' className='mb-[37px]' />
						</div>
					)}
				</>
			)}
		</>
	)
}
