import { useUserStore } from '@/hooks/useUserData'
import { User } from '@/types'
import { getDepositHistory, getWithdrawHistory } from '@/utils/api'
import { Chip, ChipProps } from '@heroui/react'
import { useTranslations } from 'next-intl'
import { useEffect, useMemo, useState } from 'react'

const statusColorMap: Record<string, ChipProps['color']> = {
	1: 'success',
	2: 'danger',
	0: 'warning',
}

const Transaction = () => {
	const t = useTranslations('transaction')
	const [transac, setTransac] = useState<User[]>([])
	const [transac2, setTransac2] = useState<User[]>([])
	const csrf = useUserStore(state => state.user?.csrf)

	const fetchDeposits = async () => {
		if (!csrf) return
		const result = await getDepositHistory(csrf)

		if (result.error) {
			setTransac([])
		} else {
			setTransac(result.data || [])
		}
	}
	const fetchHistory = async () => {
		if (!csrf) return
		const result = await getWithdrawHistory(csrf)
		if (result.error) {
			setTransac2([])
		} else {
			setTransac2(result.data || [])
		}
	}
	useEffect(() => {
		if (csrf) {
			fetchDeposits()
			fetchHistory()
			const intervalId = setInterval(() => {
				fetchHistory()
				fetchDeposits()
			}, 20000)
			return () => clearInterval(intervalId)
		}
	}, [csrf])

	const data = useMemo(
		() => [
			{
				name: t('transfer'),
				id: 1,
				cell: (
					<span className='flex items-center gap-[5px] text-[14px] dark:text-white text-[#0c0c0c]'>
						08/07/24,{' '}
						<span className='text-[14px] dark:text-white text-[#0c0c0c]'>
							14:55:39
						</span>
					</span>
				),
				symbol: '+',
				money: '+112 USDT',
			},
			{
				name: t('transfer'),
				id: 122239745679182,
				cell: (
					<span className='flex items-center gap-[5px] text-[14px] dark:text-white text-[#0c0c0c]'>
						08/07/24,{' '}
						<span className='text-[14px] dark:text-white text-[#0c0c0c]'>
							14:55:39
						</span>
					</span>
				),
				symbol: '+',
				money: '+112 USDT',
			},
			{
				name: t('transfer'),
				id: 1837461894657,
				cell: (
					<span className='flex items-center gap-[5px] text-[14px] dark:text-white text-[#0c0c0c]'>
						08/07/24,{' '}
						<span className='text-[14px] dark:text-white text-[#0c0c0c]'>
							14:55:39
						</span>
					</span>
				),
				symbol: '+',
				money: '+112 USDT',
			},
			{
				name: t('transfer'),
				id: 14,
				cell: (
					<span className='flex items-center gap-[5px] text-[14px] dark:text-white text-[#0c0c0c]'>
						08/07/24,{' '}
						<span className='text-[14px] dark:text-white text-[#0c0c0c]'>
							14:55:39
						</span>
					</span>
				),
				symbol: '+',
				money: '+112 USDT',
			},
		],
		[]
	)
	return (
		<section className='dark:!bg-[#1e1e1e66] bg-white !shadow-medium dark:!shadow-none rounded-[30px] p-[27px_40px] flex flex-col gap-[20px] min-h-[690px] max-h-[690px] overflow-y-auto'>
			<h3 className='text-[14px] md:text-[20px] 2xl:text-[25px] w-full'>
				{t('recent')}
			</h3>
			<div className='flex flex-col gap-[10px] max-h-[690px] overflow-y-auto'>
				{transac &&
					transac.map(item => (
						<div key={item.id}>
							<div className='flex items-center w-full justify-between'>
								<div className='flex flex-col gap-[5px] items-start'>
									<h5 className='text-[14px] md:text-[20px] 2xl:text-[23px]'>
										Deposit <br />
										{item.coin}{' '}
										<span className='text-[14px]'>
											{' '}
											{new Date(Number(item.time) * 1000).toLocaleDateString(
												'en-GB'
											)}
										</span>
									</h5>
								</div>
								<span className='text-success text-[14px] md:text-[20px] 2xl:text-[23px]'>
									+{item.amount} {item.coin}
								</span>{' '}
							</div>
							<span className='min-h-[1px] w-full bg-white block' />
						</div>
					))}
				{transac2 &&
					transac2.map(item => (
						<div key={item.id}>
							<div className='flex items-center w-full justify-between'>
								<div className='flex flex-col gap-[5px] items-start'>
									<h5 className='text-[14px] md:text-[20px] 2xl:text-[23px]'>
										Withdraw
										<br />
										{item.coin}{' '}
										<span className='text-[14px]'>
											{' '}
											{new Date(Number(item.time) * 1000).toLocaleDateString(
												'en-GB'
											)}
										</span>
									</h5>
								</div>
								<span className='text-danger text-[14px] 2xl:text-[20px]'>
									-{item.amount} {item.coin}
								</span>
							</div>
							<span className='min-h-[1px] w-full bg-white block' />
						</div>
					))}
			</div>
		</section>
	)
}

export default Transaction
