'use client'
import { useUserStore } from '@/hooks/useUserData'
import { Link } from '@/i18n/routing'
import { Avatar, Image, Spinner } from '@heroui/react'
import { RefreshCw } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { useThemeStore } from '../../store/useChatStore'
import ArrowBracket from '../ui/ArrowBracket'
import Eye from '../ui/Eye'
import Chart from './Chart'
import { getUserBalance } from '@/utils/api'

export const Profile_balance = () => {
	const { theme, verifyState } = useThemeStore()
	const [show, setShow] = useState<boolean>(false)
	const t = useTranslations('overview')
	const handleCLick = () => {
		setShow(!show)
	}
	const [refresh, setRefresh] = useState<boolean>(false)
	const [isLoading, setIsLoading] = useState(false)
	const handleRefreshClick = async () => {
		setIsLoading(true)
		setTimeout(() => {
			setRefresh(!refresh)
			setIsLoading(false)
		}, 2000)
	}
	const [balance, setBalance] = useState<number | null>(null)
	const user = useUserStore(state => state.user)
	
	useEffect(() => {
		if (!user.csrf) return
		const fetchBalance = async () => {
			const totalValue = await getUserBalance(user.csrf)
			if (totalValue !== null) {
				setBalance(totalValue)
			} else {
				console.log('Ошибка загрузки данных')
			}
		}
		fetchBalance()
	}, [user.csrf])

	const formattedBalance =
		balance !== null
			? new Intl.NumberFormat('ru-RU', {
					style: 'currency',
					currency: 'USD',
					maximumFractionDigits: 2,
				}).format(balance)
			: '0'

	return (
		<section className='h-fit'>
			<div className='profile__balance bg-[#fff] dark:bg-[#1e1e1e66] md:!shadow-medium md:dark:!shadow-none'>
				<div className='profile__balance_sides !pt-[40px]'>
					<div className='w-full min-h-[159px] sm:hidden m-auto gap-[10px] rounded-xl p-4 flex items-start justify-between dark:bg-[#131313] dark:!shadow-none shadow-medium relative'>
						{isLoading ? (
							<Spinner className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
						) : (
							<>
								<div className='flex flex-col'>
									<div className='flex justify-between items-center'>
										<div className='flex items-center gap-2'>
											<Image
												src={
													refresh ? '/main/balance.svg' : '/main/balance.svg' // bonus
												}
												width={44}
												height={44}
												alt='balance'
											/>
											<h4 className='text-blue-600 text-[21px] font-medium'>
												{refresh ? t('balance') : t('balance')}
											</h4>
											{/* bonus */}
											<Eye />
										</div>
									</div>
									<div className='flex items-center gap-[8px]'>
										<p className='text-[23px] font-bold'>
											{' '}
											{`${formattedBalance || '0'} $`}
										</p>
										{/* <select
											className='bg-transparent text-[16px] font-medium'
											onChange={e => setCoin(e.target.value)}
										> */}
										{/* <option
												className='text-[12px] max-w-[1px] text-black'
												value='TEST'
											> */}
										{/* TEST */}
										{/* </option> */}
										{/* </select> */}
									</div>
									<div className='flex items-center gap-2 text-blue-600 text-[14px]'>
										{/* <p>{t('today')} $0,00 (0,00 %)</p> */}
									</div>
								</div>
								<div className='flex items-center gap-[10px]'>
									<span className='text-[12px] dark:text-[#EFEFEF] flex-shrink-0'>
										{t('flipOver')}
									</span>
									<RefreshCw
										strokeWidth={1}
										className='!w-full !max-w-[26px] min-w-[26px] p-[5px] cursor-pointer'
										onClick={handleRefreshClick}
									/>
								</div>
							</>
						)}
					</div>
					{/* PC */}
					<div className='profile_balance_side'>
						<div className='flex flex-col gap-[10px]'>
							<div className='flex justify-between items-center'>
								<div className='flex items-center gap-2'>
									<Image
										src={'/main/balance.svg'}
										width={44}
										height={44}
										alt='balance'
									/>
									<h4 className='text-blue-600 text-[33px] font-medium'>
										{t('balance')}
									</h4>
									<Eye />
								</div>
							</div>
							<div className='flex items-center gap-[8px]'>
								<p className='text-[36px] font-bold'>{formattedBalance || '0$'}</p>
								{/* <select
									className='bg-transparent text-[16px] font-medium'
									onChange={e => setCoin(e.target.value)}
								> */}
								{/* <option
										className='text-[12px] max-w-[1px] text-black'
										value='TEST'
									> */}
								{/* TEST */}
								{/* </option> */}
								{/* </select> */}
							</div>
							<div className='flex items-center gap-2 text-blue-600 text-[14px]'>
								{/* <p className='text-[19px]'>{t('today')} $0,00 (0,00 %)</p> */}
							</div>
						</div>
					</div>
					{/* PC */}
					<div className='profile_balance_side'>
						<div className='flex flex-col gap-[10px]'>
							<div className='flex justify-between items-center'>
								<div className='flex items-center gap-2'>
									<Image
										src={'/main/bonusbalance.svg'}
										width={44}
										height={44}
										alt='balance'
									/>
									<h4 className='text-blue-600 text-[33px] font-medium'>
										{t('bonus')}
									</h4>
									<Eye />
								</div>
							</div>
							<div className='flex items-center gap-[8px]'>
								<p className='text-[36px] font-bold'>
									{' '}
									{/* {`${balance || '0'} $`}{' '} */}
									0.00$
								</p>
								{/* <select
									className='bg-transparent text-[16px] font-medium'
									// onChange={e => setCoin(e.target.value)}
								> */}
								{/* <option
										className='text-[12px] max-w-[1px] text-black'
										value='TEST'
									> */}
								{/* TEST */}
								{/* </option>
								</select> */}
							</div>
							<div className='flex items-center gap-2 text-blue-600 text-[14px]'>
								{/* <p className='text-[19px]'>{t('today')} $0,00 (0,00 %)</p> */}
							</div>
						</div>
					</div>
				</div>

				<div className='flex w-full flex-col items-center gap-[40px] '>
					{verifyState && (
						<>
							<div className='w-full  flex sm:hidden items-center justify-center gap-[25px]'>
								<Link
									href='#'
									className='flex flex-col items-center text-[14px]'
								>
									<Avatar
										src='/header_icons/profile_burger/deposit.svg'
										className='flex-shrink-0 bg-transparent'
										size='lg'
									/>
									{t('deposit')}
								</Link>
								<Link
									href='/withdrawal'
									className='flex flex-col items-center text-[14px]'
								>
									<Avatar
										src='/header_icons/profile_burger/deposit.svg'
										className='flex-shrink-0 bg-transparent'
										size='lg'
									/>
									{t('withdrawal')}
								</Link>
								<Link
									href='#'
									className='flex flex-col items-center text-[14px]'
								>
									<Avatar
										src='/header_icons/profile_burger/swap.svg'
										className='flex-shrink-0 bg-transparent'
										size='lg'
									/>
									{t('swap')}
								</Link>
								<Link
									href='/invest'
									className='flex flex-col items-center text-[14px]'
								>
									<Avatar
										src='/header_icons/profile_burger/commission.svg'
										className='flex-shrink-0 bg-transparent'
										size='lg'
									/>
									{t('invest')}
								</Link>
							</div>
							<div className='w-full hidden sm:flex items-center justify-center sm:justify-start gap-[10px]'>
								<Link
									href='/deposit'
									className='flex flex-col items-center text-[14px] text-[#0c0c0c] dark:text-[#ffffff] w-full max-w-[156px] border-1 !border-[#4d4d4d] dark:!border-[#4d4d4d] border-solid rounded-[50px] px-[10px] !bg-transparent'
								>
									{t('deposit')}
								</Link>
								<Link
									href='/withdrawal'
									className='flex flex-col items-center text-[14px] text-[#0c0c0c] dark:text-[#ffffff] w-full max-w-[156px] border-1 !border-[#4d4d4d] dark:!border-[#4d4d4d] border-solid rounded-[50px] px-[10px] !bg-transparent'
								>
									{t('withdrawal')}
								</Link>
								<Link
									href='#'
									className='flex flex-col items-center text-[14px] text-[#0c0c0c] dark:text-[#ffffff] w-full max-w-[156px] border-1 !border-[#4d4d4d] dark:!border-[#4d4d4d] border-solid rounded-[50px] px-[10px] !bg-transparent'
								>
									{t('swap')}
								</Link>
								<Link
									href='/invest'
									className='flex flex-col items-center text-[14px] text-[#0c0c0c] dark:text-[#ffffff] w-full max-w-[156px] border-1 !border-[#4d4d4d] dark:!border-[#4d4d4d] border-solid rounded-[50px] px-[10px] !bg-transparent'
								>
									{t('invest')}
								</Link>
							</div>
						</>
					)}
					<span
						className='flex items-center gap-[10px] cursor-pointer'
						onClick={handleCLick}
					>
						<ArrowBracket
							className={`min-w-[40px] transition-all duration-300`}
							color={theme === 'dark' ? 'white' : '#0c0c0c'}
						/>
					</span>
				</div>

				<div
					className={`overflow-hidden ${!show ? 'max-h-[0]' : 'max-h-[450px] '} transition-all duration-300`}
				>
					<Chart />
				</div>
			</div>
		</section>
	)
}
