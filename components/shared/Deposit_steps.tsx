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
import { Avatar } from '@heroui/react'
import { CheckCheck, ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import NotFoundItem from './NotFoundItem'
import { Deposit_confirmation } from './Deposit_confirmation'
import { useUserStore } from '@/hooks/useUserData'
import { getDepositAddress } from '@/utils/api'

export type CryptoData = {
	id: number
	name: string
	crypto: string
	avatar: string
	cryptoNumbers: string
	moreLess: string
}
export type NetworkData = {
	id: number
	name: string
	cryptoNumbers: string
	moreLess: string
}
const cryptoData = [
	{
		id: 1,
		name: 'TRC20',
		avatar: '/payment_table/trx.svg',
		crypto: 'TRC20',
		cryptoNumbers: '0.00000079',
		moreLess: '<$0.01',
	},
	{
		id: 2,
		name: 'ERC20',
		avatar: '/payment_table/zro.svg',
		crypto: 'ERC20',
		cryptoNumbers: '0.00000079',
		moreLess: '<$0.01',
	},
	{
		id: 3,
		name: 'BTC',
		avatar: '/payment_table/teater.svg',
		crypto: 'Bitcoin',
		cryptoNumbers: '0.00000079',
		moreLess: '<$0.01',
	},
	{
		id: 4,
		name: 'BEP20',
		avatar: '/payment_table/teater.svg',
		crypto: 'BEP20',
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
		name: 'BTC',
		cryptoNumbers: '0.00000079',
		moreLess: '<$0.01',
	},
	{
		id: 4,
		name: 'BEP20',
		cryptoNumbers: '0.00000079',
		moreLess: '<$0.01',
	},
]
const Deposit_steps = () => {
	const [selectedNetwork, setSelectedNetwork] = useState<NetworkData | null>(
		null
	)
	const { step, setStep, theme } = useThemeStore()
	const [open, setOpen] = useState(false)
	const [inputStep2, setInputStep2] = useState<string>('')
	const [input2Step2, setInput2Step2] = useState<string>('')
	const [input3, setInput3] = useState('')
	const [selectedCrypto, setSelectedCrypto] = useState<CryptoData | null>(null)
	const [openNetwork, setOpenNetwork] = useState(false)
	const [error, setError] = useState('')
	const [depositAddress, setDepositAddress] = useState('')
	const user = useUserStore(state => state.user)
	const handleGetDepositAddress = async () => {
		if (!user?.csrf || !selectedCrypto || !selectedNetwork) {
			setError('Выберите криптовалюту и сеть!')
			return
		}

		setError('')
		const result = await getDepositAddress(
			user.csrf,
			selectedCrypto.name,
			selectedNetwork.name
		)
		if (result.success) {
			setDepositAddress(result.address)
			console.log(result)
		} else {
			setError(result.message)
		}
	}
	useEffect(() => {
		if (selectedCrypto && selectedNetwork) {
			handleGetDepositAddress()
		}
	}, [selectedCrypto, selectedNetwork])
	return (
		<div className=' dark:shadow-none rounded-[30px] p-[29px_16px] md:p-[29px]'>
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
									<Popover open={open} onOpenChange={setOpen} modal={true}>
										<PopoverTrigger asChild>
											<Button
												variant='outline'
												size='sm'
												className='w-full h-[48px] rounded-medium max-w-[294px] sm:max-w-[962px] justify-start bg-[#7676801F] hover:bg-[#7676801F] pl-[20px]'
											>
												{selectedCrypto ? (
													<div className='flex w-full justify-between gap-[8px] items-center'>
														<div className='flex items-center gap-[3px]'>
															<Avatar src={selectedCrypto.avatar} />
															<p className='text-[18px] text-[#0c0c0c] dark:text-white'>
																{selectedCrypto.name}
															</p>
														</div>
														<ChevronDown
															strokeWidth={1}
															color={theme === 'dark' ? 'white' : 'black'}
															className={`w-8 h-8 transition duration-300  
															${!open ? 'rotate-[0deg]' : 'rotate-[180deg]'}`}
														/>
													</div>
												) : (
													<div className='flex w-full justify-between gap-[8px] items-center'>
														<p className='text-[18px] text-[#0c0c0c] dark:text-white'>
															Select crypto
														</p>
														<ChevronDown
															strokeWidth={1}
															color={theme === 'dark' ? 'white' : 'black'}
															className={`w-8 h-8 transition duration-300  
																${!open ? 'rotate-[0deg]' : 'rotate-[180deg]'}`}
														/>
													</div>
												)}
											</Button>
										</PopoverTrigger>
										<PopoverContent
											className='p-0 w-full shadow-none'
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
																className='data-[selected=true]:!bg-[#7676801F]'
															>
																<div className='flex items-center justify-between w-full'>
																	<div className='flex items-center gap-[3px]'>
																		<Avatar src={status.avatar} />
																		<p className='text-[20px] text-[#205BC9] flex flex-col items-start'>
																			{status.name}
																			<span className='text-[20px] text-[#3A3939] dark:text-[#BDBDBD]'>
																				{status.name}
																			</span>
																		</p>
																	</div>
																	<p className='flex flex-col text-[20px]'>
																		{status.cryptoNumbers}
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
									{inputStep2.length ? <CheckCheck /> : 2}
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
										<Popover
											open={openNetwork}
											onOpenChange={setOpenNetwork}
											modal={true}
										>
											<PopoverTrigger asChild>
												<Button
													variant='outline'
													size='sm'
													className='w-full h-[48px] rounded-medium max-w-[294px] sm:max-w-[962px] justify-start bg-[#7676801F] hover:bg-[#7676801F]'
												>
													{selectedNetwork ? (
														<div className='flex w-full justify-between gap-[8px] items-center'>
															<div className='flex items-center gap-[3px] mb-[-5px]'>
																<p className='text-[16px] text-[#0c0c0c] dark:text-white'>
																	{selectedNetwork.name}
																</p>
															</div>
															<ChevronDown
																strokeWidth={1}
																color={theme === 'dark' ? 'white' : 'black'}
																className={`w-8 h-8 transition duration-300  
																${!openNetwork ? 'rotate-[0deg]' : 'rotate-[180deg]'}`}
															/>
														</div>
													) : (
														<div className='flex w-full justify-between gap-[8px] items-center mb-[-5px]'>
															<p className='text-[16px] text-[#0c0c0c] dark:text-white'>
																Select Network
															</p>
															<ChevronDown
																strokeWidth={1}
																color={theme === 'dark' ? 'white' : 'black'}
																className={`w-8 h-8 transition duration-300  
																${!openNetwork ? 'rotate-[0deg]' : 'rotate-[180deg]'}`}
															/>
														</div>
													)}
												</Button>
											</PopoverTrigger>
											<PopoverContent
												className='p-0 w-full shadow-none'
												side='bottom'
												align='start'
											>
												<Command className='bg-[#eee] dark:bg-[#19191A] w-[285px] md:w-[603px] lg:w-[799px] xl:w-[794px] 2xl:w-[962px]'>
													<CommandList className='bg-[#eee] dark:bg-[#19191A] px-[10px]'>
														<CommandEmpty>
															<NotFoundItem />
														</CommandEmpty>
														<CommandGroup>
															{networkData.map(status => (
																<CommandItem
																	key={status.id}
																	value={status.name}
																	className='data-[selected=true]:!bg-[#7676801F]'
																	onSelect={value => {
																		setSelectedNetwork(
																			networkData.find(
																				priority => priority.name === value
																			) || null
																		)
																		setOpenNetwork(false)
																		setInputStep2(value)
																		setStep(3)
																	}}
																>
																	<div className='flex items-center justify-between rounded-[4px] w-full'>
																		<div className='flex flex-col'>
																			<span className='text-small text-[#205BC9]'>
																				{status.name}
																			</span>
																		</div>
																		<div className='flex flex-col items-end'>
																			<span>{status.cryptoNumbers}</span>
																		</div>
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
										inputStep2.length > 3 ? 'bg-[#205BC9]' : 'bg-[#3A3939]'
									} rounded-[50%] min-w-[30px] min-h-[30px] flex items-center justify-center`}
								>
									{input3.length > 3 ? <CheckCheck /> : 3}
								</span>
								<span
									className={`text-[16px] xl:text-[24px] ${step === 3 ? 'text-[#0c0c0c] dark:text-white' : 'text-[#888888]'}`}
								>
									Set deposit amount
								</span>
							</div>
							{step === 3 && (
								<div className='flex flex-col gap-[15px] w-full ml-[47px] pr-[35px]'>
									<div className='flex flex-col gap-[10px] max-w-[294px] sm:max-w-[962px]'>
										<input
											type='text'
											placeholder='Enter the amount'
											className='px-[20px] text-[18px] !bg-[#7676801F] rounded-medium flex items-start h-[48px] justify-center max-w-[962px]'
											value={input3}
											disabled={step !== 3}
											onChange={e => {
												const value = e.target.value.replace(/[^0-9.]/g, '') 
												setInput3(value)
											}}
											onKeyDown={e => {
												if (
													e.key === ' ' ||
													(e.key === '.' && input3.includes('.'))
												) {
													e.preventDefault()
												}
											}}
										/>

										<span className='text-[18px] font-bold text-[#888888]'>
											Transaction Fee <span>3.25 {selectedCrypto?.name}</span>
										</span>
										<div className='flex flex-col gap-[10px] md:gap-0 items-start md:flex-row md:items-center md:justify-between w-full '>
											<p className='text-[16px] font-medium md:text-[20px] flex items-center justify-between gap-[5px] text-[#3A3939] dark:text-[#BDBDBD]'>
												Amount deposit:
											</p>
											<div className='flex items-center gap-[34px]'>
												<span className='text-[18px] xl:text-[25px] text-[#3A3939] dark:text-[#EFEFEF] max-w-[450px] overflow-x-auto'>
													{input3} {' '}
													{!depositAddress
														? selectedCrypto?.name
														: depositAddress}
												</span>
												{error ? (
													<Button
														className={`text-[16px] xl:text-[20px] flex items-center bg-transparent outline hover:bg-[#0c0c0c] justify-center w-fit !py-[8px]  rounded-[50px] text-red-500`}
													>
														{error}
													</Button>
												) : (
													<Deposit_confirmation
														input3={input3}
														setInput3={setInput3}
														setInputStep2={setInputStep2}
														inputStep2={inputStep2}
														setInput2Step2={setInput2Step2}
														handleGetDepositAddress={handleGetDepositAddress}
														setSelectedCrypto={setSelectedCrypto}
														titleTrigger={'Deposit'}
														selectedCrypto={selectedCrypto}
														depositAddress={depositAddress}
														error={error}
													/>
												)}
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

export default Deposit_steps
