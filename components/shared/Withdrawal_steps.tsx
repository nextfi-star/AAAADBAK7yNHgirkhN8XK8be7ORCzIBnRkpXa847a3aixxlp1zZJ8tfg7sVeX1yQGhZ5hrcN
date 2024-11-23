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
import { Autocomplete, AutocompleteItem } from '@nextui-org/autocomplete'
import { Avatar } from '@nextui-org/react'
import { CheckCheck, ChevronDown } from 'lucide-react'
import { NextPage } from 'next'
import { useState } from 'react'
import { Button } from '../ui/button'
import NotFoundItem from './NotFoundItem'
import { Withdrawal_confirmation } from './Withdrawal_confirmation'

export type CryptoData = {
	id: number
	name: string
	crypto: string
	avatar: string
	cryptoNumbers: string
	moreLess: string
}
interface Props {
	cryptoData?: CryptoData[]
}
const cryptoData = [
	{
		id: 1,
		name: 'TRX',
		avatar: '/payment_table/trx.svg',
		crypto: 'TRON',
		cryptoNumbers: '0.00000079',
		moreLess: '<$0.01',
	},
	{
		id: 2,
		name: 'ZRO',
		avatar: '/payment_table/zro.svg',
		crypto: 'Zero layer',
		cryptoNumbers: '0.00000079',
		moreLess: '<$0.01',
	},
	{
		id: 3,
		name: 'USDT',
		avatar: '/payment_table/teater.svg',
		crypto: 'Tether',
		cryptoNumbers: '0.00000079',
		moreLess: '<$0.01',
	},
]
const networkData = [
	{
		id: 1,
		name: 'TRC20',
		cryptoNumbers: '0.00000079',
		moreLess: '<$0.01',
	},
	{
		id: 2,
		name: 'ERC20',
		cryptoNumbers: '0.00000079',
		moreLess: '<$0.01',
	},
	{
		id: 3,
		name: 'TRC20',
		cryptoNumbers: '0.00000079',
		moreLess: '<$0.01',
	},
	{
		id: 4,
		name: 'TRC20',
		cryptoNumbers: '0.00000079',
		moreLess: '<$0.01',
	},
	{
		id: 5,
		name: 'TRC20',
		cryptoNumbers: '0.00000079',
		moreLess: '<$0.01',
	},
	{
		id: 6,
		name: 'TRC20',
		cryptoNumbers: '0.00000079',
		moreLess: '<$0.01',
	},
	{
		id: 7,
		name: 'TRC20',
		cryptoNumbers: '0.00000079',
		moreLess: '<$0.01',
	},
	{
		id: 8,
		name: 'TRC20',
		cryptoNumbers: '0.00000079',
		moreLess: '<$0.01',
	},
	{
		id: 9,
		name: 'TRC20',
		cryptoNumbers: '0.00000079',
		moreLess: '<$0.01',
	},
	{
		id: 10,
		name: 'TRC20',
		cryptoNumbers: '0.00000079',
		moreLess: '<$0.01',
	},
]
const Withdrawal_steps: NextPage<Props> = () => {
	const { step, setStep, theme } = useThemeStore()
	const [open, setOpen] = useState(false)
	const [inputStep2, setInputStep2] = useState<string>('')
	const [input2Step2, setInput2Step2] = useState<string>('')
	const [input3, setInput3] = useState('')
	const [selectedCrypto, setSelectedCrypto] = useState<CryptoData | null>(null)
	const [inputValue, setInputValue] = useState('')

	const inputStep2Handler = (value: string) => {
		setInputStep2(value)
		setStep(3)
	}
	const input2Step2Handler = (e: any) => {
		setInput2Step2(e.target.value)
	}
	const DropCache = () => {
		setStep(1)
		setInputStep2('')
		setInput2Step2('')
		setSelectedCrypto(null)
	}
	return (
		<div className='shadow-lg dark:shadow-none rounded-[30px] p-[29px_16px] md:p-[29px]'>
			<div className='flex justify-start gap-[10px] w-full  pb-[1.5rem]'>
				<div className={'flex flex-col gap-[20px] w-full'}>
					<div
						className={`flex flex-col gap-[20px] md:gap-[89px] relative after:absolute after:content-[''] after:min-w-[1px] after:min-h-[90%] after:border after:border-dashed after:border-[#BDBDBD] after:left-[14px] after:bottom-[15px] after:top-[6px]`}
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
									className={`text-[16px] xl:text-[24px] ${step === 1 ? 'text-[#0c0c0c] dark:text-white' : 'text-[#888888]'}`}
								>
									Select crypto
								</span>
							</div>

							{step >= 1 && (
								<div className={`id-1 flex flex-col gap-[31px] ml-[47px]`}>
									<Popover open={open} onOpenChange={setOpen}>
										<PopoverTrigger asChild>
											<Button
												variant='outline'
												size='sm'
												className='w-full h-[48px] rounded-medium max-w-[294px] sm:max-w-[962px] justify-start bg-[#7676801F] hover:bg-[#7676801F]'
											>
												{selectedCrypto ? (
													<div className='flex w-full justify-between gap-[8px] items-center'>
														<div className='flex items-center gap-[3px]'>
															<Avatar src={selectedCrypto.avatar} />
															<p className='text-[16px] text-[#0c0c0c] dark:text-white'>
																{selectedCrypto.name}
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
														<p className='text-[16px] text-[#0c0c0c] dark:text-white'>
															Select crypto
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
														{cryptoData.map(status => (
															<CommandItem
																key={status.id}
																value={status.name}
																onSelect={value => {
																	setSelectedCrypto(
																		cryptoData.find(
																			priority => priority.name === value
																		) || null
																	)
																	setOpen(false)
																	setStep(2)
																}}
															>
																<div className='flex items-center justify-between w-full'>
																	<div className='flex items-center gap-[3px]'>
																		<Avatar src={status.avatar} />
																		<p className='text-[20px] text-[#205BC9] flex flex-col items-start'>
																			{status.name}
																			<span className='text-[14px] md:text-[20px] text-[#BDBDBD]'>
																				{status.name}
																			</span>
																		</p>
																	</div>
																	<p className='flex flex-col text-[20px]'>
																		{status.cryptoNumbers}
																		<span className='text-[14px] md:text-[20px] text-[#BDBDBD]'>
																			{status.moreLess}
																		</span>
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
									{inputStep2.length && input2Step2.length ? <CheckCheck /> : 2}
								</span>
								<span
									className={`text-[16px] xl:text-[24px] ${step === 2 ? 'text-[#0c0c0c] dark:text-white' : 'text-[#888888]'}`}
								>
									Set distination
								</span>
							</div>

							{step >= 2 && (
								<div className='id-1 flex flex-col gap-[31px] ml-[47px]'>
									<div className='flex flex-col max-w-[294px] sm:max-w-[962px] gap-[15px] md:gap-[45px]'>
										<Autocomplete
											defaultItems={networkData}
											aria-labelledby='Select network'
											placeholder='Select network'
											className='!bg-[#7676801F] !p-0 '
											onInputChange={inputStep2Handler}
											disableSelectorIconRotation
											listboxProps={{
												emptyContent: <NotFoundItem />,
											}}
											selectorIcon={
												<ChevronDown
													strokeWidth={1}
													color={theme === 'dark' ? 'white' : 'black'}
													className='w-8 h-8'
												/>
											}
											size='lg'
											classNames={{
												base: '!bg-[#7676801F], flex items-center rounded-medium h-[48px] !p-0',
												listboxWrapper:
													'!p-0 dark:!bg-[#19191A] overscroll-contain ',
												popoverContent: 'dark:bg-[#19191A] bg-[#EEEEEE]',
												listbox: 'py-0 gap-[20px]',
											}}
										>
											{networkData => (
												<AutocompleteItem
													key={networkData.id}
													textValue={networkData.name}
													className='p-0 dark:!bg-[#19191A]'
												>
													<div className='flex gap-2 items-center justify-between rounded-[4px]'>
														<div className='flex flex-col'>
															<span className='text-small text-[#205BC9]'>
																{networkData.name}
															</span>
														</div>
														<div className='flex flex-col items-end'>
															<span>{networkData.cryptoNumbers}</span>
															<span className='text-[#BDBDBD]'>
																{networkData.moreLess}
															</span>
														</div>
													</div>
												</AutocompleteItem>
											)}
										</Autocomplete>

										<input
											type='text'
											placeholder='Select address'
											className='px-3 text-[16px] !bg-[#7676801F] rounded-medium flex items-start h-[48px] justify-center'
											onChange={input2Step2Handler}
										/>
									</div>
								</div>
							)}
						</div>

						<div className='flex flex-col gap-[14px] relative z-[1]'>
							<div className='flex items-start gap-[15px] mb-[15px] md:mb-[15px]'>
								<span
									className={`text-white text-[18px] ${
										inputStep2.length > 3 && input2Step2.length > 3
											? 'bg-[#205BC9]'
											: 'bg-[#3A3939]'
									} rounded-[50%] min-w-[30px] min-h-[30px] flex items-center justify-center`}
								>
									{input3.length > 3 ? <CheckCheck /> : 3}
								</span>
								<span
									className={`text-[16px] xl:text-[24px] ${step === 3 ? 'text-[#0c0c0c] dark:text-white' : 'text-[#888888]'}`}
								>
									Set withdrawal amount
								</span>
							</div>
							{step >= 2 && (
								<div className='flex flex-col gap-[15px] w-full ml-[47px] pr-[35px]'>
									<div className='flex flex-col gap-[10px] max-w-[294px] sm:max-w-[962px]'>
										<input
											type='text'
											placeholder='Enter the amount'
											className='px-2 text-[16px] !bg-[#7676801F] rounded-medium flex items-start h-[48px] justify-center max-w-[962px]'
											onChange={e => setInput3(e.target.value)}
										/>
										<span className='text-[18px] font-bold text-[#888888]'>
											Transaction Fee <span>3.25 {selectedCrypto?.name}</span>
										</span>
										<div className='flex flex-col gap-[10px] md:gap-0 items-start md:flex-row md:items-center md:justify-between w-full '>
											<p className='text-[16px] font-medium md:text-[20px] flex items-center justify-between gap-[5px] text-[#3A3939] dark:text-[#BDBDBD]'>
												Amount Received:
											</p>
											<div className='flex items-center gap-[34px]'>
												<span className='text-[18px] xl:text-[25px] text-[#3A3939] dark:text-[#EFEFEF]'>
													111.25 {selectedCrypto?.name}
												</span>
												<Withdrawal_confirmation
													input3={input3}
													setInput3={setInput3}
													setInputStep2={setInputStep2}
													setInput2Step2={setInput2Step2}
													setSelectedCrypto={setSelectedCrypto}
													titleTrigger={'Withdrawal'}
													selectedCrypto={selectedCrypto}
												/>
											</div>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Withdrawal_steps
