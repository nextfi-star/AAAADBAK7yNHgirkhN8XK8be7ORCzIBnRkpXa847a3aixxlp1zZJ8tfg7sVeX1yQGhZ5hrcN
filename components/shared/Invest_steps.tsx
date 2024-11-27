'use client'
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandItem,
	CommandList,
} from '@/components/ui/command'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { useThemeStore } from '@/store'
import { Avatar, Input } from '@nextui-org/react'
import { CheckCheck, ChevronDown } from 'lucide-react'
import { NextPage } from 'next'
import { useState } from 'react'
import { Button } from '../ui/button'
import NotFoundItem from './NotFoundItem'
import { Invest_confirmation } from './Invest_confirmation'

export type InvestData = {
	id: number
	name: string
	avatar: string
	value: string
	periodFrom: string
	periodTo: string
}
export type PeriodData = {
	id: number
	name: string
	percent: string
}
interface Props {
	investData?: InvestData[]
	periodData?: PeriodData[]
}
const investData = [
	{
		id: 1,
		name: 'Company Stocks',
		avatar: '/main/invest/stocks.svg',
		value: 'stocks',
		periodFrom: '30',
		periodTo: '90',
	},
	{
		id: 3,
		name: 'Oil Sector',
		avatar: '/main/invest/oil.svg',
		value: 'oil',
		periodFrom: '30',
		periodTo: '90',
	},
	{
		id: 4,
		name: 'Precious metals',
		avatar: '/main/invest/metals.svg',
		value: 'metals',
		periodFrom: '30',
		periodTo: '90',
	},
	{
		id: 5,
		name: 'Innovative Startups',
		avatar: '/main/invest/innovative.svg',
		value: 'innovative',
		periodFrom: '30',
		periodTo: '90',
	},
]
const periodData = [
	{
		id: 1,
		name: '30',
		percent: '1.7',
	},
	{
		id: 2,
		name: '60',
		percent: '2.2',
	},
	{
		id: 3,
		name: '90',
		percent: '3.6',
	},
	{
		id: 4,
		name: '120',
		percent: '4.9',
	},
	{
		id: 5,
		name: '150',
		percent: '6.2',
	},
]
const Invest_steps: NextPage<Props> = () => {
	const {
		step,
		setStep,
		theme,
		setGlboalCompany,
		setGlboalCompanyIcon,
		setGlobalPeriod,
	} = useThemeStore()
	const [openInvest, setOpenInvest] = useState(false)
	const [openPeriod, setOpenPeriod] = useState(false)
	const [inputStep2, setInputStep2] = useState<string>('')
	const [input3, setInput3] = useState('')
	const [selectedInvest, setSelectedInvest] = useState<InvestData | null>(null)
	const [selectedPeriod, setSelectedPeriod] = useState<PeriodData | null>(null)

	const DropCache = () => {
		setStep(1)
		setInputStep2('')
		setSelectedInvest(null)
	}

	return (
		<div className='shadow-none dark:shadow-none rounded-[30px] p-[0px_16px_29px_16px] md:p-[0px_29px_29px_29px]'>
			<div className='flex justify-start gap-[10px] w-full pb-[1.5rem]'>
				<div
					className={`flex flex-col gap-[20px] md:gap-[89px] relative after:absolute after:content-[''] after:min-w-[1px] after:min-h-[90%] after:border after:border-dashed after:border-[#BDBDBD] after:left-[14px] after:bottom-[15px] after:top-[6px] w-full`}
				>
					<div className='flex flex-col gap-[14px] relative z-[1]'>
						<div className='flex items-center gap-[15px] mb-[15px] md:mb-[15px]'>
							<span
								className={`text-white text-[18px] ${
									step === 1 ? 'bg-[#205BC9]' : 'bg-[#3A3939]'
								} rounded-[50%] min-w-[30px] min-h-[30px] flex items-center justify-center`}
							>
								{step > 1 ? <CheckCheck /> : 1}
							</span>
							<span
								className={`text-[18px] font-bold xl:text-[24px] ${step === 1 ? 'text-[#0c0c0c] dark:text-white' : 'text-[#888888]'}`}
							>
								Select industry
							</span>
						</div>

						{step >= 1 && (
							<div className={`id-1 flex flex-col gap-[31px] ml-[47px]`}>
								<Popover open={openInvest} onOpenChange={setOpenInvest}>
									<PopoverTrigger asChild>
										<Button
											variant='outline'
											size='sm'
											className='w-full h-[58px] rounded-[20px] max-w-[294px] sm:max-w-[962px] justify-start bg-[#7676801F] hover:bg-[#7676801F] text-[20px] font-medium'
										>
											{selectedInvest ? (
												<div className='flex w-full justify-between gap-[8px] items-center'>
													<div className='flex items-center gap-[3px]'>
														<Avatar
															src={selectedInvest.avatar}
															size='lg'
															classNames={{
																base: 'bg-transparent',
															}}
														/>

														<p className='text-[20px] font-medium text-[#0c0c0c] dark:text-white'>
															{selectedInvest.name}
														</p>
													</div>
													<ChevronDown
														strokeWidth={1}
														color={theme === 'dark' ? 'white' : 'black'}
														className='w-8 h-8'
													/>
												</div>
											) : (
												<div className='flex w-full justify-between gap-[8px] items-center'>
													<p className='text-[20px] font-medium text-[#0c0c0c] dark:text-[#BDBDBD]'>
														Choose an industry
													</p>
													<ChevronDown
														strokeWidth={1}
														color={theme === 'dark' ? 'white' : 'black'}
														className='w-8 h-8'
													/>
												</div>
											)}
										</Button>
									</PopoverTrigger>
									<PopoverContent
										className='p-0 w-full'
										side='bottom'
										align='start'
									>
										<Command className='bg-[#eee] dark:bg-[#19191A]  w-[285px] md:w-[603px] lg:w-[799px] xl:w-[794px] 2xl:w-[962px]'>
											<CommandList className='bg-[#eee] dark:bg-[#19191A] px-[10px]'>
												<CommandEmpty>
													<NotFoundItem />
												</CommandEmpty>
												<CommandGroup>
													{investData.map(status => (
														<CommandItem
															key={status.id}
															value={status.name}
															onSelect={value => {
																setSelectedInvest(
																	investData.find(
																		priority => priority.name === value
																	) || null
																)
																setGlboalCompany(
																	investData.find(
																		priority => priority.name === value
																	) || null
																)
																setGlboalCompanyIcon(
																	investData.find(
																		priority => priority.name === value
																	) || null
																)
																setOpenInvest(false)
																setStep(2)
															}}
														>
															<div className='flex items-center justify-between w-full'>
																<div className='flex items-center gap-[3px]'>
																	<Avatar
																		src={status.avatar}
																		size='lg'
																		classNames={{
																			base: 'bg-transparent',
																		}}
																	/>
																	<p className='md:text-[20px] w-fit text-[#205BC9]'>
																		{status.name}
																	</p>
																</div>
																<p className='flex items-center gap-[5px] md:text-[20px] flex-shrink-0 dark:text-[#BDBDBD]'>
																	{status.periodFrom}
																	<span className='text-[14px] md:text-[20px] dark:text-[#BDBDBD]'>
																		-
																	</span>
																	{status.periodTo} days
																</p>
															</div>
														</CommandItem>
													))}
												</CommandGroup>
											</CommandList>
										</Command>
									</PopoverContent>
								</Popover>
							</div>
						)}
					</div>

					<div className='flex flex-col gap-[14px] relative z-[1]'>
						<div className='flex items-center gap-[15px] mb-[15px] md:mb-[15px]'>
							<span
								className={`text-white text-[18px] ${
									step === 2 ? 'bg-[#205BC9]' : 'bg-[#3A3939]'
								} rounded-[50%] min-w-[30px] min-h-[30px] flex items-center justify-center`}
							>
								{step > 2 ? <CheckCheck /> : 2}
							</span>
							<span
								className={`text-[18px] font-bold xl:text-[24px] ${step === 2 ? 'text-[#0c0c0c] dark:text-white' : 'text-[#888888]'}`}
							>
								Investment period
							</span>
						</div>

						{step >= 2 && (
							<div className='id-1 flex flex-col gap-[31px] ml-[47px]'>
								<div className='flex flex-col max-w-[294px] sm:max-w-[962px] gap-[15px] md:gap-[45px]'>
									<Popover open={openPeriod} onOpenChange={setOpenPeriod}>
										<PopoverTrigger asChild>
											<Button
												variant='outline'
												size='lg'
												className='w-full h-[58px] rounded-[20px] justify-start bg-[#7676801F] hover:bg-[#7676801F]'
											>
												{selectedPeriod ? (
													<div className='flex w-full justify-between gap-[8px] items-center'>
														<div className='flex items-center gap-[3px]'>
															<p className='text-[20px] font-medium text-[#0c0c0c] dark:text-white'>
																{selectedPeriod.name} 
															</p>
														</div>
														<ChevronDown
															strokeWidth={1}
															color={theme === 'dark' ? 'white' : 'black'}
															className='w-8 h-8'
														/>
													</div>
												) : (
													<div className='flex w-full justify-between gap-[8px] items-center'>
														<p className='text-[20px] font-medium text-[#0c0c0c] dark:text-white'>
															Select Period
														</p>
														<ChevronDown
															strokeWidth={1}
															color={theme === 'dark' ? 'white' : 'black'}
															className='w-8 h-8'
														/>
													</div>
												)}
											</Button>
										</PopoverTrigger>
										<PopoverContent
											className='p-0 w-full'
											side='bottom'
											align='start'
										>
											<Command className='bg-[#eee] dark:bg-[#19191A] w-[285px] md:w-[603px] lg:w-[799px] xl:w-[794px] 2xl:w-[962px]'>
												<CommandList className='bg-[#eee] dark:bg-[#19191A] px-[10px]'>
													<CommandEmpty>
														<NotFoundItem />
													</CommandEmpty>
													<CommandGroup>
														{periodData.map(period => (
															<CommandItem
																key={period.id}
																value={period.name}
																onSelect={value => {
																	setSelectedPeriod(
																		periodData.find(
																			priority => priority.name === value
																		) || null
																	)
																	setGlobalPeriod(
																		periodData.find(
																			priority => priority.name === value
																		) || null
																	)
																	setOpenPeriod(false)
																	setStep(3)
																}}
															>
																<div className='flex items-center justify-between w-full px-[15px]'>
																	<div className='flex items-center gap-[3px]'>
																		<p className='text-[20px] text-[#205BC9] flex flex-col items-start'>
																			{period.name}{' '}
																			days
																		</p>
																	</div>
																	<p className='flex items-center gap-[5px] text-[20px]'>
																		{period.percent}%
																	</p>
																</div>
															</CommandItem>
														))}
													</CommandGroup>
												</CommandList>
											</Command>
										</PopoverContent>
									</Popover>
								</div>
							</div>
						)}
					</div>

					<div className='flex flex-col gap-[14px] relative z-[1]'>
						<div className='flex items-start gap-[15px] mb-[15px] md:mb-[15px]'>
							<span
								className={`text-white text-[18px] ${
									step === 3 ? 'bg-[#205BC9]' : 'bg-[#3A3939]'
								} rounded-[50%] min-w-[30px] min-h-[30px] flex items-center justify-center`}
							>
								{input3.length > 3 ? <CheckCheck /> : 3}
							</span>
							<span
								className={`text-[18px] font-bold xl:text-[24px] ${step === 3 ? 'text-[#0c0c0c] dark:text-white' : 'text-[#888888]'}`}
							>
								Set amount
							</span>
						</div>
						{step >= 2 && (
							<div className='flex flex-col gap-[15px] w-full ml-[47px] pr-[35px]'>
								<div className='flex flex-col gap-[10px] w-full max-w-[294px] sm:max-w-[962px]'>
									<Input
										aria-labelledby='Enter the amount'
										placeholder='Enter the amount'
										type='text'
										classNames={{
											base: 'bg-tranparent ',
											inputWrapper:
												'bg-tranparent px-8 text-[16px] !bg-[#7676801F] h-[58px] rounded-[20px] flex items-start justify-center max-w-[962px]',
											input: 'text-[20px] font-medium',
										}}
										onChange={e => setInput3(e.target.value)}
									/>
									<span className='text-[18px]  font-bold text-[#888888]'>
										Percentage for the entire period: {selectedPeriod?.percent}%
									</span>
									<div className='flex flex-col gap-[10px] md:gap-0 items-start w-full '>
										<p className='text-[18px] font-bold flex items-center justify-between gap-[5px] text-[#3A3939] dark:text-[#888888] pb-[18px]'>
											Amount limits: 250 - 7000 NextFi
										</p>
										<p className='flex items-center justify-between text-[20px] font-medium text-[#3A3939] dark:text-[#BDBDBD] w-full pr-[45px] pb-[44px]'>
											Amount of investment
											<span className='text-[20px] font-bold md:text-[32px]'>
												7050 NextFi
											</span>
										</p>
										<Invest_confirmation
											className='!w-full dark:!shadow-none'
											input3={input3}
											setInput3={setInput3}
											setInputStep2={setInputStep2}
											setSelectedInvest={setSelectedInvest}
											titleTrigger={'Invest'}
											selectedInvest={selectedInvest}
										/>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Invest_steps
