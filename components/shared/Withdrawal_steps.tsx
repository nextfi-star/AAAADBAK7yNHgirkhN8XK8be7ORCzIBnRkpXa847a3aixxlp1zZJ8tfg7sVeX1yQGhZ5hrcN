'use client'
import { Autocomplete, AutocompleteItem } from '@nextui-org/autocomplete'
import { Input } from '@nextui-org/input'
import { Avatar } from '@nextui-org/react'
import { CheckCheck } from 'lucide-react'
import { NextPage } from 'next'
import { useState } from 'react'
import { useThemeStore } from '@/store'
import { Withdrawal_confirmation } from './Withdrawal_confirmation'

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
	{
		id: 4,
		name: 'USDT',
		avatar: '/payment_table/teater.svg',
		crypto: 'Tether',
		cryptoNumbers: '0.00000079',
		moreLess: '<$0.01',
	},
	{
		id: 35,
		name: 'USDT',
		avatar: '/payment_table/teater.svg',
		crypto: 'Tether',
		cryptoNumbers: '0.00000079',
		moreLess: '<$0.01',
	},
	{
		id: 36,
		name: 'USDT',
		avatar: '/payment_table/teater.svg',
		crypto: 'Tether',
		cryptoNumbers: '0.00000079',
		moreLess: '<$0.01',
	},
	{
		id: 37,
		name: 'USDT',
		avatar: '/payment_table/teater.svg',
		crypto: 'Tether',
		cryptoNumbers: '0.00000079',
		moreLess: '<$0.01',
	},
	{
		id: 38,
		name: 'USDT',
		avatar: '/payment_table/teater.svg',
		crypto: 'Tether',
		cryptoNumbers: '0.00000079',
		moreLess: '<$0.01',
	},
	{
		id: 39,
		name: 'USDT',
		avatar: '/payment_table/teater.svg',
		crypto: 'Tether',
		cryptoNumbers: '0.00000079',
		moreLess: '<$0.01',
	},
	{
		id: 399,
		name: 'USDT',
		avatar: '/payment_table/teater.svg',
		crypto: 'Tether',
		cryptoNumbers: '0.00000079',
		moreLess: '<$0.01',
	},
	{
		id: 312,
		name: 'USDT',
		avatar: '/payment_table/teater.svg',
		crypto: 'Tether',
		cryptoNumbers: '0.00000079',
		moreLess: '<$0.01',
	},
	{
		id: 3123,
		name: 'USDT',
		avatar: '/payment_table/teater.svg',
		crypto: 'Tether',
		cryptoNumbers: '0.00000079',
		moreLess: '<$0.01',
	},
	{
		id: 31234,
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
const Withdrawal_steps: NextPage = () => {
	const { step, setStep } = useThemeStore()
	// const [step, setStep] = useState<number>(1)
	const [inputStep2, setInputStep2] = useState<string>('')
	const [input2Step2, setInput2Step2] = useState<string>('')
	const [input3, setInput3] = useState('')
	const [selectedCrypto, setSelectedCrypto] = useState<{
		name: string
		avatar: string
	} | null>(null)
	const [inputValue, setInputValue] = useState('')
	const handleSelectionChange = (selectedId: React.Key | null) => {
		if (selectedId === null) return
		const selectedItem = cryptoData.find(item => item.id === Number(selectedId))
		if (selectedItem) {
			setSelectedCrypto({
				name: selectedItem.name,
				avatar: selectedItem.avatar,
			})
		}
	}
	const handleInputChange = (value: string) => {
		if (selectedCrypto?.name || selectedCrypto?.avatar) {
			// setStep(prev => (prev = 2))
			setStep(2)
		}
		setInputValue(value)
	}
	const inputStep2Handler = (value: string) => {
		setInputStep2(value)
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
							<div className='flex items-center gap-[15px] mb-[20px] md:mb-[44px]'>
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
									<Autocomplete
										defaultItems={cryptoData}
										aria-labelledby='Select crypto'
										placeholder='Select crypto'
										onSelectionChange={handleSelectionChange}
										onInputChange={handleInputChange}
										startContent={<Avatar className='w-[60px]' src={'/payment_table/trx.svg'} />}
										size='lg'
										className='!bg-[#7676801F]'
										classNames={{
											base: '!bg-[#7676801F] rounded-[4px] flex items-center rounded-medium',
											listboxWrapper:
												'!p-0 dark:!bg-[#19191A] overscroll-contain',
											popoverContent: 'dark:bg-[#19191A]',
											listbox: 'py-0',
										}}
									>
										{cryptoData => (
											<AutocompleteItem
												key={cryptoData.id}
												textValue={cryptoData.name}
												className='p-0 dark:!bg-[#19191A]'
											>
												<div className='flex gap-2 items-center justify-between rounded-[4px]'>
													<div className='flex gap-1 items-center px-[10px]'>
														<Avatar
															alt={cryptoData.name}
															className='flex-shrink-0'
															size='sm'
															src={cryptoData.avatar}
														/>
														<div className='flex flex-col'>
															<span className='text-small text-[#205BC9]'>
																{cryptoData.name}
															</span>
															<span className='text-tiny text-default-400'>
																{cryptoData.crypto}
															</span>
														</div>
													</div>
													<div className='flex flex-col items-end'>
														<span>{cryptoData.cryptoNumbers}</span>
														<span className='text-[#BDBDBD]'>
															{cryptoData.moreLess}
														</span>
													</div>
												</div>
											</AutocompleteItem>
										)}
									</Autocomplete>
								</div>
							)}
							{/* {step > 1 && (
								<div className='ml-[47px]'>
									{selectedCrypto && (
										<div className='pb-[5px] max-w-[294px] sm:max-w-[962px] h-[48px] flex items-center gap-2 bg-[#7676801F] p-[5px] pl-[10px] rounded-medium'>
											<Avatar
												src={selectedCrypto.avatar}
												alt={selectedCrypto.name}
												size='md'
												className='max-w-[40px]'
											/>
											<span className='text-lg text-[#3A3939] dark:text-[#BDBDBD]'>
												{inputValue}
											</span>
										</div>
									)}
								</div>
							)} */}
						</div>

						<div className='flex flex-col gap-[14px] relative z-[1]'>
							<div className='flex items-center gap-[15px] mb-[20px] md:mb-[44px]'>
								<span
									className={`text-white text-[18px] ${
										step === 2 ? 'bg-[#205BC9]' : 'bg-[#3A3939]'
									} rounded-[50%] min-w-[30px] min-h-[30px] flex items-center justify-center`}
								>
									{step > 2 ? <CheckCheck /> : 2}
								</span>
								<span
									className={`text-[16px] xl:text-[24px] ${step === 2 ? 'text-[#0c0c0c] dark:text-white' : 'text-[#888888]'}`}
								>
									Set distination
								</span>
							</div>

							{step === 2 && (
								<div className='id-1 flex flex-col gap-[31px] ml-[47px]'>
									<div className='flex flex-col max-w-[294px] sm:max-w-[962px] gap-[15px] md:gap-[45px]'>
										<Autocomplete
											defaultItems={networkData}
											aria-labelledby='Select network'
											placeholder='Select network'
											className='!bg-[#7676801F] !p-0 '
											onInputChange={inputStep2Handler}
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
											className='px-2 text-[16px] !bg-[#7676801F] rounded-medium flex items-start h-[48px] justify-center'
											onChange={input2Step2Handler}
										/>
									</div>
								</div>
							)}
							{step > 2 && (
								<div className='ml-[47px]'>
									{inputStep2 && input2Step2 && (
										<div className='pb-[5px] max-w-[294px] sm:max-w-[962px] flex flex-col items-start gap-2'>
											<span className='text-[16px] text-[#3A3939] dark:text-[#BDBDBD] bg-[#7676801F] rounded-medium w-full h-[48px] flex items-center px-2'>
												{inputStep2}
											</span>
											<span className='text-[16px] text-[#3A3939] dark:text-[#BDBDBD] bg-[#7676801F] rounded-medium w-full h-[48px] flex items-center px-2'>
												{input2Step2}
											</span>
										</div>
									)}
								</div>
							)}
						</div>

						<div className='flex flex-col gap-[14px] relative z-[1]'>
							<div className='flex items-start gap-[15px] md:mb-[44px]'>
								<span
									className={`text-white text-[18px] ${
										step === 3 ? 'bg-[#205BC9]' : 'bg-[#3A3939]'
									} rounded-[50%] min-w-[30px] min-h-[30px] flex items-center justify-center`}
								>
									{step > 3 ? <CheckCheck /> : 3}
								</span>
								<span
									className={`text-[16px] xl:text-[24px] ${step === 3 ? 'text-[#0c0c0c] dark:text-white' : 'text-[#888888]'}`}
								>
									Set withdrawal amount
								</span>
							</div>
							{step > 1 && (
								<div className='flex flex-col gap-[15px] w-full ml-[47px] pr-[35px]'>
									<div className='flex flex-col gap-[16px] max-w-[294px] sm:max-w-[962px]'>
										<input
											type='text'
											placeholder='Enter the amount'
											className='px-2 text-[16px] !bg-[#7676801F] rounded-medium flex items-start h-[48px] justify-center max-w-[962px]'
											onChange={e => setInput3(e.target.value)}
										/>
										<span className='text-[14px] md:text-[18px] text-[#888888]'>
											Transaction Fee: <span>3.25 {inputValue}</span>
										</span>
										<div className='flex flex-col gap-[10px] md:gap-0 items-start md:flex-row md:items-center md:justify-between w-full '>
											<p className=' text-[14px] md:text-[20px] flex items-center justify-between gap-[5px] text-[#3A3939] dark:text-[#BDBDBD]'>
												Amount Received:
												<span className='text-[14px] md:text-[18px] xl:text-[25px] text-[#3A3939] dark:text-[#EFEFEF]'>
													111.25 {inputValue}
												</span>
											</p>
											<div className='flex items-center gap-[34px]'>
												<Withdrawal_confirmation
													input3={input3}
													setInput3={setInput3}
													titleTrigger={'Withdrawal'}
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
