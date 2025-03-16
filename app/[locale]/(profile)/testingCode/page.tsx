'use client'
import { Invest_confirmation } from '@/components/shared/Invest_confirmation'
import NotFoundItem from '@/components/shared/NotFoundItem'
import { Button } from '@/components/ui/button'
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
import { getInvestPackets, investAction } from '@/utils/api'
import { Avatar, Input } from '@heroui/react'
import { CheckCheck, ChevronDown } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useEffect, useMemo, useState } from 'react'

export type InvestPacket = {
	amount_limit: number
	coin: string
	id: number
	percent: number
	rtime: number
	// Добавляем поле packet, которое определяет тип пакета (например, число от 1 до 5)
	packet: number
}
// export type InvestData = {
// 	id: number
// 	name: string
// 	avatar: string
// 	value: string
// 	periodFrom: string
// 	periodTo: string
// }
export type PeriodData = {
	id: number
	name: string
	percent: string
}
export type CoinsData = {
	name: string
	val: string
}

interface Props {
	investData?: any
	periodData?: any
}

const Invest_steps = () => {
	const csrf = useUserStore((state) => state.user?.csrf)

	const investData = useMemo(
		() => [
			{
				id: 1,
				name: 'Company Stocks',
				avatar: '/main/invest/stocks.svg',
				value: 'stocks',
				periodFrom: '30',
				periodTo: '80',
			},
			{
				id: 3,
				name: 'Oil Sector',
				avatar: '/main/invest/oil.svg',
				value: 'oil',
				periodFrom: '30',
				periodTo: '80',
			},
			{
				id: 4,
				name: 'Precious metals',
				avatar: '/main/invest/metals.svg',
				value: 'metals',
				periodFrom: '30',
				periodTo: '80',
			},
			{
				id: 5,
				name: 'Innovative Startups',
				avatar: '/main/invest/innovative.svg',
				value: 'innovative',
				periodFrom: '30',
				periodTo: '80',
			},
		],
		[]
	)
	const periodData = useMemo(
		() => [
			{
				id: 1,
				name: '30',
				percent: '1.7',
			},
			{
				id: 2,
				name: '50',
				percent: '2.2',
			},
			{
				id: 3,
				name: '80',
				percent: '3.6',
			},
		],
		[]
	)
	const coins = useMemo(
		() => [
			{
				name: 'BTC',
				val: 'btc',
			},
			{
				name: 'ETH',
				val: 'eth',
			},
			{
				name: 'TRX',
				val: 'trx',
			},
			{
				name: 'LTC',
				val: 'ltc',
			},
			{
				name: 'USDT',
				val: 'usdt',
			},
			{
				name: 'TEST',
				val: 'test',
			},
		],
		[]
	)
	const t = useTranslations('invest')
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
	const [openCoin, setOpenCoin] = useState(false)
	const [inputStep2, setInputStep2] = useState<string>('')
	const [input3, setInput3] = useState('')
	// Здесь вместо selectedInvest (из investData) будем хранить выбранный инвест-пакет из API
	const [selectedInvestPacket, setSelectedInvestPacket] = useState<InvestPacket | null>(null)
	const [selectedPeriod, setSelectedPeriod] = useState<any | null>(null)
	const [selectedCoin, setSelectedCoin] = useState<any | null>(null)
	const [open, setOpen] = useState(false)
	const [openNetwork, setOpenNetwork] = useState(false)
	const [packets, setPackets] = useState<any>([])
	// DropCache оставляем как есть
	const DropCache = () => {
		setStep(1)
		setInputStep2('')
		setSelectedInvestPacket(null)
	}
	// Загружаем инвест-пакеты через API
	useEffect(() => {
		const fetchPackets = async () => {
			const result = await getInvestPackets()
			if (result.success) {
				console.log(result)
				setPackets(result.packets)
			} else {
				// можно вывести сообщение об ошибке
			}
		}
		fetchPackets()
	}, [])

	// Группировка пакетов по полю "packet" (например, 1..5)
	const groupedPackets = useMemo(() => {
		return packets.reduce((groups: { [key: number]: any }, pkt: any) => {
			const key = pkt.packet
			if (!groups[key]) {
				groups[key] = []
			}
			groups[key].push(pkt)
			return groups
		}, {})
	}, [packets])

	// Функция для форматирования времени (rtime) в читаемый формат, например, "3 дня"
	function formatDuration(seconds: number) {
		const days = Math.floor(seconds / 86400)
		const hours = Math.floor((seconds % 86400) / 3600)
		const minutes = Math.floor((seconds % 3600) / 60)
		const secs = seconds % 60

		const parts = []
		if (days) parts.push(`${days} ${getPlural(days, 'день', 'дня', 'дней')}`)
		if (hours) parts.push(`${hours} ${getPlural(hours, 'час', 'часа', 'часов')}`)
		if (minutes) parts.push(`${minutes} мин`)
		if (secs && parts.length === 0) {
			parts.push(`${secs} сек`)
		}
		return parts.join(' ')
	}
	function getPlural(value: number, one: string, few: string, many: string) {
		if (value % 100 >= 11 && value % 100 <= 14) {
			return many
		}
		switch (value % 10) {
			case 1:
				return one
			case 2:
			case 3:
			case 4:
				return few
			default:
				return many
		}
	}
	const handleSubmit = async (e: any) => {
		e.preventDefault()
	
		// Проверяем, что все обязательные поля заполнены
		if (!selectedInvestPacket || !selectedCoin || !input3) {
			console.log('Пожалуйста, заполните все обязательные поля')
			return
		}
	
		// Формируем payload для запроса
		const payload: any = {
			type: 'invest_create', // или 'invest_close', если требуется закрыть инвестицию
			coin: selectedCoin.name,
			amount: parseFloat(input3),
			csrf, // CSRF-токен из useUserStore
			// Используем данные выбранного пакета, чтобы передать корректные id
			id: selectedInvestPacket.id,
			packet: selectedInvestPacket.packet,
		}
	
		try {
			const result = await investAction(payload)
			if (result.success) {
				console.log('Инвестиция успешно создана/закрыта', result)
			} else {
				console.log(`Ошибка: ${result.message}`)
			}
		} catch (error: any) {
			console.log('Ошибка при выполнении запроса')
		}
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
								className={`text-[18px] font-bold xl:text-[24px] ${
									step === 1 ? 'text-[#0c0c0c] dark:text-white' : 'text-[#888888]'
								}`}
							>
								{t('sclInd')}
							</span>
						</div>

						{step >= 1 && (
							<div className={`id-1 flex flex-col gap-[31px] ml-[47px]`}>
								{/* Popover для выбора инвест-пакета, полученного через API */}
								<Popover open={openInvest} onOpenChange={setOpenInvest} modal={true}>
									<PopoverTrigger asChild>
										<Button
											variant='outline'
											size='sm'
											className='w-full h-[58px] rounded-[20px] max-w-[294px] sm:max-w-[962px] justify-start bg-[#7676801F] hover:bg-[#7676801F] text-[20px] font-medium'
										>
											{selectedInvestPacket ? (
												<div className='flex w-full justify-between gap-[8px] items-center'>
													<div className='flex items-center gap-[3px]'>
														{/* Здесь можно добавить аватар, если он есть в пакете */}
														<Avatar
															src='/default/avatar.svg'
															size='lg'
															classNames={{ base: 'bg-transparent' }}
														/>
														<p className='text-[20px] font-medium text-[#0c0c0c] dark:text-white'>
															{selectedInvestPacket.coin}
														</p>
													</div>
													<ChevronDown
														strokeWidth={1}
														color={theme === 'dark' ? 'white' : 'black'}
														className={`w-8 h-8 transition duration-300 ${!open ? 'rotate-[0deg]' : 'rotate-[180deg]'}`}
													/>
												</div>
											) : (
												<div className='flex w-full justify-between gap-[8px] items-center'>
													<p className='text-[20px] font-medium text-[#0c0c0c] dark:text-[#BDBDBD]'>
														{t('chooseInd')}
													</p>
													<ChevronDown
														strokeWidth={1}
														color={theme === 'dark' ? 'white' : 'black'}
														className={`w-8 h-8 transition duration-300 ${!open ? 'rotate-[0deg]' : 'rotate-[180deg]'}`}
													/>
												</div>
											)}
										</Button>
									</PopoverTrigger>
									<PopoverContent className='p-0 w-full shadow-none' side='bottom' align='start'>
										<Command className='bg-[#eee] dark:bg-[#19191A] w-[285px] md:w-[603px] lg:w-[799px] xl:w-[794px] 2xl:w-[962px]'>
											<CommandList className='bg-[#eee] dark:bg-[#19191A] px-[10px]'>
												<CommandEmpty>
													<NotFoundItem />
												</CommandEmpty>
												<CommandGroup>
													{Object.keys(groupedPackets).map((key) => {
														const group = groupedPackets[Number(key)]
														return (
															<div key={key}>
																{/* Заголовок группы */}
																<CommandItem disabled value={`group-${key}`}>
																	Пакет {key} ({formatDuration(group[0].rtime)})
																</CommandItem>
																{/* Список вариантов внутри группы */}
																{group.map((item: any) => (
																	<CommandItem
																		key={item.id}
																		value={item.coin}
																		onSelect={(value) => {
																			setSelectedInvestPacket(item)
																			// Если требуется, обновляем глобальное состояние:
																			setGlboalCompany(item)
																			setGlboalCompanyIcon(item)
																			setOpenInvest(false)
																			setStep(2)
																		}}
																		className='data-[selected=true]:!bg-[#7676801F]'
																	>
																		<div className='flex items-center justify-between w-full'>
																			<div className='flex items-center gap-[3px]'>
																				<Avatar
																					src='/default/avatar.svg'
																					size='lg'
																					classNames={{
																						base: 'bg-transparent',
																					}}
																				/>
																				<p className='md:text-[20px] w-fit text-[#205BC9]'>
																					{item.coin}
																				</p>
																			</div>
																			<p className='flex items-center gap-[5px] md:text-[20px] flex-shrink-0 dark:text-[#BDBDBD]'>
																				{formatDuration(item.rtime)}
																			</p>
																		</div>
																	</CommandItem>
																))}
															</div>
														)
													})}
												</CommandGroup>
											</CommandList>
										</Command>
									</PopoverContent>
								</Popover>
							</div>
						)}
					</div>

					{/* Остальные шаги выбора периода, монеты и ввода суммы остаются без изменений */}
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
								className={`text-[18px] font-bold xl:text-[24px] ${
									step === 2 ? 'text-[#0c0c0c] dark:text-white' : 'text-[#888888]'
								}`}
							>
								{t('invstPer')}
							</span>
						</div>

						{step >= 2 && (
							<div className='id-1 flex flex-col gap-[31px] ml-[47px]'>
								<div className='flex flex-col max-w-[294px] sm:max-w-[962px] gap-[15px] md:gap-[45px]'>
									<Popover open={openPeriod} onOpenChange={setOpenPeriod} modal={true}>
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
															className={`w-8 h-8 transition duration-300 ${!openNetwork ? 'rotate-[0deg]' : 'rotate-[180deg]'}`}
														/>
													</div>
												) : (
													<div className='flex w-full justify-between gap-[8px] items-center'>
														<p className='text-[20px] font-medium text-[#0c0c0c] dark:text-white'>
															{t('sclPer')}
														</p>
														<ChevronDown
															strokeWidth={1}
															color={theme === 'dark' ? 'white' : 'black'}
															className={`w-8 h-8 transition duration-300 ${!openNetwork ? 'rotate-[0deg]' : 'rotate-[180deg]'}`}
														/>
													</div>
												)}
											</Button>
										</PopoverTrigger>
										<PopoverContent className='p-0 w-full shadow-none' side='bottom' align='start'>
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
																className='data-[selected=true]:!bg-[#7676801F]'
															>
																<div className='flex items-center justify-between w-full px-[15px]'>
																	<div className='flex items-center gap-[3px]'>
																		<p className='text-[20px] text-[#205BC9] flex flex-col items-start'>
																			{period.name} {t('days')}
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
									<Popover open={openCoin} onOpenChange={setOpenCoin} modal={true}>
										<PopoverTrigger asChild>
											<Button
												variant='outline'
												size='lg'
												className='w-full h-[58px] rounded-[20px] justify-start bg-[#7676801F] hover:bg-[#7676801F]'
											>
												{selectedCoin ? (
													<div className='flex w-full justify-between gap-[8px] items-center'>
														<div className='flex items-center gap-[3px]'>
															<p className='text-[20px] font-medium text-[#0c0c0c] dark:text-white'>
																{selectedCoin.name}
															</p>
														</div>
														<ChevronDown
															strokeWidth={1}
															color={theme === 'dark' ? 'white' : 'black'}
															className={`w-8 h-8 transition duration-300 ${!openNetwork ? 'rotate-[0deg]' : 'rotate-[180deg]'}`}
														/>
													</div>
												) : (
													<div className='flex w-full justify-between gap-[8px] items-center'>
														<p className='text-[20px] font-medium text-[#0c0c0c] dark:text-white'>
															Select coin
														</p>
														<ChevronDown
															strokeWidth={1}
															color={theme === 'dark' ? 'white' : 'black'}
															className={`w-8 h-8 transition duration-300 ${!openNetwork ? 'rotate-[0deg]' : 'rotate-[180deg]'}`}
														/>
													</div>
												)}
											</Button>
										</PopoverTrigger>
										<PopoverContent className='p-0 w-full shadow-none' side='bottom' align='start'>
											<Command className='bg-[#eee] dark:bg-[#19191A] w-[285px] md:w-[603px] lg:w-[799px] xl:w-[794px] 2xl:w-[962px]'>
												<CommandList className='bg-[#eee] dark:bg-[#19191A] px-[10px]'>
													<CommandEmpty>
														<NotFoundItem />
													</CommandEmpty>
													<CommandGroup>
														{coins.map(coin => (
															<CommandItem
																key={coin.val}
																value={coin.name}
																onSelect={value => {
																	setSelectedCoin(
																		coins.find(
																			priority => priority.name === value
																		) || null
																	)
																	setOpenCoin(false)
																	setStep(3)
																}}
																className='data-[selected=true]:!bg-[#7676801F]'
															>
																<div className='flex items-center justify-between w-full px-[15px]'>
																	<div className='flex items-center gap-[3px]'>
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
								className={`text-[18px] font-bold xl:text-[24px] ${
									step === 3 ? 'text-[#0c0c0c] dark:text-white' : 'text-[#888888]'
								}`}
							>
								{t('setAmount')}
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
										{t('persFor')}: {selectedPeriod?.percent}%
									</span>
									<div className='flex flex-col gap-[10px] md:gap-0 items-start w-full '>
										<p className='text-[18px] font-bold flex items-center justify-between gap-[5px] text-[#3A3939] dark:text-[#888888] pb-[18px]'>
											{t('amountLimit')}: 250 - 7000 NextFi
										</p>
										<p className='flex items-center justify-between text-[20px] font-medium text-[#3A3939] dark:text-[#BDBDBD] w-full pr-[45px] pb-[44px]'>
											{t('amountInvst')}
											<span className='text-[20px] font-bold md:text-[32px]'>
												7050 NextFi
											</span>
										</p>
										<button className='text-[20px] font-bold text-[#205BC9] dark:text-white' onClick={handleSubmit}>Invest</button>
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
