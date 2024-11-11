'use client'
import { Autocomplete, AutocompleteItem } from '@nextui-org/autocomplete'
import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import { Avatar, Image } from '@nextui-org/react'
import { CheckCheck } from 'lucide-react'
import { NextPage } from 'next'
import { useState } from 'react'

const dataCrypto = [
	{
		label: 'TRON',
		value: 'TRX',
	},
	{
		label: 'USDT',
		value: 'USDT',
	},
	{
		label: 'ZRO',
		value: 'ZRO',
	},
]
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
const Withdrawal_steps: NextPage = () => {
	const [step, setStep] = useState<number>(1)

	return (
		<div className='shadow-lg dark:shadow-none dark:bg-[#181818] rounded-[30px] p-[29px_16px] md:p-[29px]'>
			<div className='flex justify-start gap-[10px] w-full overflow-x-hidden pb-[1.5rem]'>
				<div className={'flex flex-col gap-[20px] w-full'}>
					<div
						className={`flex flex-col gap-[20px] md:gap-[89px] relative after:absolute after:content-[''] after:min-w-[1px] after:min-h-[90%] after:border after:border-dashed after:border-[#BDBDBD] after:left-[14px] after:bottom-[15px] after:top-[6px]`}
					>
						<div className='flex flex-col gap-[14px] relative z-[1]'>
							<div className='flex items-center gap-[15px] mb-[20px] md:mb-[44px]'>
								<span
									className={`text-white text-[18px] ${
										step === 1 ? 'bg-[#205BC9]' : 'bg-[#64718a]'
									} rounded-[50%] min-w-[30px] min-h-[30px] flex items-center justify-center`}
								>
									{step > 1 ? <CheckCheck /> : 1}
								</span>
								<span className='text-[16px] xl:text-[24px]'>
									Select crypto
								</span>
							</div>

							{step === 1 && (
								<div
									className={`flex flex-col gap-[31px] w-full ml-[47px] pr-[35px]`}
								>
									<Autocomplete
										defaultItems={cryptoData}
										variant='underlined'
										label='Select crypto'
										placeholder='Select a user'
										labelPlacement='inside'
										className='rounded-[4px] md:border-1 md:border-solid  border-[#606060] max-w-[94%]'
									>
										{cryptoData => (
											<AutocompleteItem
												key={cryptoData.id}
												textValue={cryptoData.name}
											>
												<div className='flex gap-2 items-center justify-between'>
													<div className='flex gap-1 items-center'>
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

									<Button
										className='text-[16px] xl:text-[20px] flex items-center justify-center max-w-[108px] px-[40px] xl:px-[80px] h-8 xl:h-14'
										onClick={() => setStep(prev => (prev = 2))}
									>
										Next
									</Button>
								</div>
							)}
						</div>

						<div className='flex flex-col gap-[14px] relative z-[1]'>
							<div className='flex items-center gap-[15px] mb-[20px] md:mb-[44px]'>
								<span
									className={`text-white text-[18px] ${
										step === 2 ? 'bg-[#205BC9]' : 'bg-[#64718a]'
									} rounded-[50%] min-w-[30px] min-h-[30px] flex items-center justify-center`}
								>
									{step > 2 ? <CheckCheck /> : 2}
								</span>
								<span className='text-[16px] xl:text-[24px]'>
									Set distination
								</span>
							</div>

							{step === 2 && (
								<div className='flex flex-col gap-[31px] ml-[47px]'>
									<div className='flex flex-col gap-[15px] md:gap-[65px]'>
										<Autocomplete
											label='Network'
											placeholder='Select network'
											variant='underlined'
											labelPlacement='inside'
											className='rounded-[4px] md:border-1 md:border-solid  border-[#606060] max-w-[94%]'
											defaultItems={dataCrypto}
										>
											{item => (
												<AutocompleteItem key={item.value}>
													{item.value}
												</AutocompleteItem>
											)}
										</Autocomplete>

										<Autocomplete
											label='Address'
											placeholder='Select address'
											defaultItems={dataCrypto}
											variant='underlined'
											className='rounded-[4px] md:border-1 md:border-solid  border-[#606060] max-w-[94%]'
										>
											{item => (
												<AutocompleteItem key={item.value}>
													{item.value}
												</AutocompleteItem>
											)}
										</Autocomplete>
									</div>

									<div className='flex items-center gap-[10px]'>
										<Button
											className='text-[16px] xl:text-[20px] flex items-center justify-center max-w-[108px] px-[40px] xl:px-[80px] h-8 xl:h-14'
											onClick={() => setStep(prev => (prev = 1))}
										>
											Back
										</Button>
										<Button
											className='text-[16px] xl:text-[20px] flex items-center justify-center max-w-[108px] px-[40px] xl:px-[80px] h-8 xl:h-14'
											onClick={() => setStep(prev => (prev = 3))}
										>
											Next
										</Button>
									</div>
								</div>
							)}
						</div>

						<div className='flex flex-col gap-[14px] relative z-[1] max-w-[94%]'>
							<div className='flex items-start gap-[15px] md:mb-[44px]'>
								<span
									className={`text-white text-[18px] ${
										step === 3 ? 'bg-[#205BC9]' : 'bg-[#64718a]'
									} rounded-[50%] min-w-[30px] min-h-[30px] flex items-center justify-center`}
								>
									{step > 3 ? <CheckCheck /> : 3}
								</span>
								<span className='text-[16px] xl:text-[24px]'>
									Set withdrawal amount
								</span>
							</div>
							{step === 3 && (
								<div className='flex flex-col gap-[15px] w-full ml-[47px] pr-[35px]'>
									<div className='flex flex-col gap-[16px] w-full'>
										<Input
											type='text'
											placeholder='Enter the amount'
											variant='underlined'
											className='rounded-[4px] md:border-1 md:border-solid  border-[#606060]'
										/>
										<span className='text-[14px] md:text-[18px] text-[#888888]'>
											Transaction Fee: <span>3.25 TRX</span>
										</span>
										<div className='flex flex-col gap-[10px] md:gap-0 items-start md:flex-row md:items-center md:justify-between w-full'>
											<span className='text-[#BDBDBD] text-[14px] md:text-[20px]'>
												Amount Received
											</span>
											<div className='flex items-center gap-[34px]'>
												<p className='text-[14px] lg:text-[32px]'>111.25 TRX</p>
												<Button className='bg-[#205BC9] text-white text-[14px] lg:text-[20px] rounded-[50px] !p-[2px_15px] '>
													Withdrawal
												</Button>
											</div>
										</div>
									</div>

									<div className='flex items-center gap-[10px] bg-transparent mt-[10px]'>
										<Button
											className='text-[16px] xl:text-[20px] flex items-center justify-center max-w-[108px] px-[40px] xl:px-[80px] h-8 xl:h-14'
											onClick={() => setStep(prev => (prev = 2))}
										>
											Back
										</Button>
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
