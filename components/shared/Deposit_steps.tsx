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
import { useEffect, useMemo, useState } from 'react'
import QRCode from 'react-qr-code'
import { Button } from '../ui/button'
import NotFoundItem from './NotFoundItem'
import { useCoinStore } from '@/store/coinList'
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

const Deposit_steps = () => {
	const t = useTranslations('deposit')
	const user = useUserStore(state => state.user)
	const { coins, selectedCoin, loadCoins, setSelectedCoin } = useCoinStore()

	const cryptoData = useMemo(
		() => [
			{
				id: 1,
				name: 'TRX',
				avatar: '/payment_table/trx.svg',
				crypto: 'TRC20',
				cryptoNumbers: '0.00000079',
				moreLess: '<$0.01',
			},
			{
				id: 2,
				name: 'BTC',
				avatar: '/payment_table/zro.svg',
				crypto: 'ERC20',
				cryptoNumbers: '0.00000079',
				moreLess: '<$0.01',
			},
			{
				id: 3,
				name: 'ETH',
				avatar: '/payment_table/teater.svg',
				crypto: 'Bitcoin',
				cryptoNumbers: '0.00000079',
				moreLess: '<$0.01',
			},
			{
				id: 4,
				name: 'LTC',
				avatar: '/payment_table/teater.svg',
				crypto: 'BEP20',
				cryptoNumbers: '0.00000079',
				moreLess: '<$0.01',
			},
			{
				id: 5,
				name: 'TEST',
				avatar: '/payment_table/teater.svg',
				crypto: 'LTC',
				cryptoNumbers: '0.00000079',
				moreLess: '<$0.01',
			},
		],
		[]
	)
	const networkData = useMemo(
		() => [
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
			{
				id: 5,
				name: 'LTC',
				cryptoNumbers: '0.00000079',
				moreLess: '<$0.01',
			},
		],
		[]
	)
	const [selectedNetwork, setSelectedNetwork] = useState<NetworkData | null>(
		null
	)
	const { step, setStep, theme } = useThemeStore()
	const [open, setOpen] = useState(false)
	const [inputStep2, setInputStep2] = useState<string>('')
	const [selectedCrypto, setSelectedCrypto] = useState<CryptoData | null>(null)
	const [openNetwork, setOpenNetwork] = useState(false)
	const [error, setError] = useState('')
	const [depositAddress, setDepositAddress] = useState('')

	const handleGetDepositAddress = async () => {
		if (!user?.csrf || !selectedCoin || !selectedNetwork) {
			setError(t('errChoose'))
			return
		}
		setError('')
		const result = await getDepositAddress(
			user.csrf,
			selectedCoin.name,
			selectedNetwork.name
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
			console.log(selectedCoin)
			console.log(coins)
		}
	}, [user?.csrf, loadCoins])
	const getCoinImage = (coinName: string) =>
		`/coins/${coinName.toLowerCase()}.svg`
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
									{t('selectCrpt')}
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
													<div className='flex items-center gap-[3px]'>
														<Avatar
															src={`/crypto/${selectedCoin?.name?.toLowerCase()}.svg`}
														/>
														<p className='text-[18px] text-[#0c0c0c] dark:text-white'>
															{selectedCoin ? selectedCoin.name : t('setDestn')}
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
																	setOpen(false)
																	setStep(2)
																}}
																className='data-[selected=true]:!bg-[#7676801F]'
															>
																<div className='flex items-center justify-between w-full'>
																	<div className='flex items-center gap-[10px]'>
																		<Avatar src={`/crypto/${coin.name?.toLowerCase()}.svg`} />
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
									{inputStep2.length > 3 ? <CheckCheck /> : 3}
								</span>
								<span
									className={`text-[16px] xl:text-[24px] ${step === 3 ? 'text-[#0c0c0c] dark:text-white' : 'text-[#888888]'}`}
								>
									{t('setAmount')}
								</span>
							</div>
							{step === 3 && (
								<div className='flex flex-col gap-[15px] w-full ml-[47px] pr-[35px]'>
									<div className='flex flex-col gap-[10px] max-w-[294px] sm:max-w-[962px]'>
										<div className='flex flex-col gap-[10px] md:gap-0 items-start md:flex-row md:items-center md:justify-between w-full '>
											<div className='flex flex-col gap-[34px]'>
												<div className='flex flex-col gap-[.5rem]'>
													<span>{t('depositWarr')}</span>
													{!inputStep2 ? (
														<Spinner />
													) : (
														<div className='max-w-[250px] w-full'>
															{!depositAddress ? (
																<span className='block w-full'>
																	Нет доступных адресов
																</span>
															) : (
																<QRCode
																	size={150}
																	style={{
																		height: 'auto',
																		maxWidth: '119px',
																		width: '100%',
																	}}
																	value={depositAddress}
																	viewBox={`0 0 256 256`}
																/>
															)}
														</div>
													)}
													<Snippet
														symbol=''
														className='text-bold md:text-[20px] text-small capitalize bg-transparent px-0'
														classNames={{
															base: 'w-fit h-fit ',
															pre: 'overflow-x-auto px-[.5rem] py-[.4rem]',
														}}
													>
														{depositAddress || 'none'}
													</Snippet>
												</div>
												{error && (
													<span
														className={`text-[16px] xl:text-[20px] flex items-center bg-transparent outline hover:bg-[#0c0c0c] justify-center w-fit !py-[8px]  rounded-[50px] text-red-500`}
													>
														{error}
													</span>
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
