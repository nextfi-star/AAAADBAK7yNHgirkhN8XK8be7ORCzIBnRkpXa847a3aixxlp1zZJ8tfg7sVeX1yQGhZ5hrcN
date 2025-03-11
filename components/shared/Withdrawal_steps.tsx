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
import { useUserStore } from '@/hooks/useUserData'
import { useThemeStore } from '@/store/useChatStore'
import { getDepositAddress } from '@/utils/api'
import { Avatar, Snippet, Spinner } from '@heroui/react'
import { CheckCheck, ChevronDown } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { ChangeEvent, useEffect, useMemo, useState } from 'react'
import QRCode from 'react-qr-code'
import { Button } from '../ui/button'
import NotFoundItem from './NotFoundItem'
import { useCoinStore } from '@/store/coinList'
import { Withdrawal_confirmation } from './Withdrawal_confirmation'
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

const Withdrawal_steps = () => {
	const t = useTranslations('withdrawal')
	const user = useUserStore(state => state.user)
	const {
		coins,
		selectedCoin,
		loadCoins,
		setSelectedCoin,
		setSelectedNetwork,
		selectedNetwork,
	} = useCoinStore()
	const { step, setStep, theme } = useThemeStore()
	const [open, setOpen] = useState(false)
	const [inputStep2, setInputStep2] = useState<string>('')
	const [openNetwork, setOpenNetwork] = useState(false)
	const [error, setError] = useState('')
	const [amount, setAmount] = useState<string>('')
	const [depositAddress, setDepositAddress] = useState('')

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		let inputValue = e.target.value
		if (/^\d*\.?\d*$/.test(inputValue)) {
			if (inputValue === '0') {
				inputValue = '0.'
			}
			setAmount(inputValue)
		}
	}
	const isValidAmount = () => {
		const parsed = parseFloat(amount)
		return amount !== '' && !isNaN(parsed) && parsed > 0
	}
	const handleGetDepositAddress = async () => {
		if (!user?.csrf || !selectedCoin || !selectedNetwork) {
			setError(t('errChoose'))
			return
		}
		setError('')
		const result = await getDepositAddress(
			user.csrf,
			selectedCoin.name,
			selectedNetwork
		)
		if (result.success) {
			setDepositAddress(result.address)
		} else {
			setError(result.message)
		}
	}
	useEffect(() => {
		if (selectedCoin && selectedNetwork) {
			handleGetDepositAddress()
		}
	}, [selectedCoin, selectedNetwork])
	useEffect(() => {
		if (user?.csrf) {
			loadCoins(user.csrf)
		}
	}, [user?.csrf, loadCoins])
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
									{t('selectCrp')}
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
												<div className='flex w-full justify-between gap-[8px] items-center'>
													<div className='flex items-center gap-[10px]'>
														<Avatar
															src={`/crypto/${selectedCoin?.name?.toLowerCase() || 'btc'}.svg`}
														/>
														<p className='text-[18px] text-[#0c0c0c] dark:text-white'>
															{selectedCoin
																? selectedCoin.name
																: t('selectCrp')}
														</p>
													</div>
													<ChevronDown
														strokeWidth={1}
														color={theme === 'dark' ? 'white' : 'black'}
														className={`w-8 h-8 transition duration-300  
															${!open ? 'rotate-[0deg]' : 'rotate-[180deg]'}`}
													/>
												</div>
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
														{coins.map(coin => (
															<CommandItem
																key={coin.id}
																value={coin.name}
																onSelect={() => {
																	setSelectedCoin(coin)
																	setSelectedNetwork('')
																	setDepositAddress('')
																	setOpen(false)
																	setStep(2)
																}}
																className='data-[selected=true]:!bg-[#7676801F]'
															>
																<div className='flex items-center justify-between w-full'>
																	<div className='flex items-center gap-[10px]'>
																		<Avatar
																			src={`/crypto/${coin.name?.toLowerCase()}.svg`}
																		/>
																		<p className='text-[20px] text-[#205BC9] flex flex-col items-start'>
																			{coin.name}
																		</p>
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
									{t('setDestn')}
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
																	{selectedNetwork}
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
																{t('setDestn')}
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
															{selectedCoin?.network.map(status => (
																<CommandItem
																	key={status}
																	value={status}
																	className='data-[selected=true]:!bg-[#7676801F]'
																	onSelect={value => {
																		setSelectedNetwork(value)
																		setOpenNetwork(false)
																		setInputStep2(value)
																		setStep(3)
																	}}
																>
																	<div className='flex items-center justify-between rounded-[4px] w-full'>
																		<div className='flex flex-col'>
																			<span className='text-small text-[#205BC9]'>
																				{status}
																			</span>
																		</div>
																	</div>
																</CommandItem>
															))}
														</CommandGroup>
													</CommandList>
												</Command>
											</PopoverContent>
										</Popover>

										<input
											type='text'
											className='w-full h-[48px] rounded-medium max-w-[294px] sm:max-w-[962px] justify-start bg-[#7676801F] hover:bg-[#7676801F] px-3'
											placeholder={t('enterDeposAds')}
											value={depositAddress}
											onChange={e => setDepositAddress(e.target.value)}
										/>
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
									{inputStep2.length > 3 ? <CheckCheck /> : 3}
								</span>
								<span
									className={`text-[16px] xl:text-[24px] ${step === 3 ? 'text-[#0c0c0c] dark:text-white' : 'text-[#888888]'}`}
								>
									{t('setAmount')}
								</span>
							</div>
							{step >= 2 && (
								<div className='flex flex-col gap-[15px] w-full ml-[47px] pr-[35px]'>
									<div className='flex flex-col gap-[10px] max-w-[294px] sm:max-w-[962px]'>
										<input
											type='text'
											placeholder={t('enterAmount')}
											className='px-2 text-[16px] !bg-[#7676801F] rounded-medium flex items-start h-[48px] justify-center max-w-[962px]'
											value={amount}
											onChange={handleChange}
										/>
										<div className='flex flex-col gap-[10px] md:gap-0 items-start md:flex-row md:items-center md:justify-between w-full '>
											<p className='text-[16px] font-medium md:text-[20px] flex items-center justify-between gap-[5px] text-[#3A3939] dark:text-[#BDBDBD]'>
												{t('AmountReceived')}:
											</p>
											<div className='flex items-center gap-[34px]'>
												<span className='text-[18px] xl:text-[25px] text-[#3A3939] dark:text-[#EFEFEF] flex items-center w-full max-w-[300px] overflow-x-auto whitespace-nowrap'>
													{selectedCoin?.name} {amount}
												</span>
												{/* {!error ? (
													<Withdrawal_confirmation
														amount={amount}
														setAmount={setAmount}
														selectedCoin={selectedCoin}
														selectedNetwork={selectedNetwork}
														setInputStep2={setInputStep2}
														titleTrigger={'Withdrawal'}
														className='dark:shadow-none'
														inputStep2={inputStep2}
														depositAddress={depositAddress}
													/>
												) : (
													<p className='text-[16px] xl:text-[20px] text-danger-100'>
														{error}
													</p>
												)} */}
												<Withdrawal_confirmation
													amount={amount}
													setAmount={setAmount}
													isValidAmount={isValidAmount}
													selectedCoin={selectedCoin}
													selectedNetwork={selectedNetwork}
													setInputStep2={setInputStep2}
													titleTrigger={t('withdrawal')}
													className='dark:shadow-none'
													inputStep2={inputStep2}
													depositAddress={depositAddress}
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
