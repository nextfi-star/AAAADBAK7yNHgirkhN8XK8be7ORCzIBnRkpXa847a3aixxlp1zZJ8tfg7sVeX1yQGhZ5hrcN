'use client'

import { useInvestStore } from '@/hooks/useInvest'
import { useUserStore } from '@/hooks/useUserData'
import { getUserBalance, getUserHistory } from '@/utils/api'
import { Spinner } from '@nextui-org/spinner'
import { useEffect, useState } from 'react'

const TestingCode = () => {
	const [coin, setCoin] = useState('TEST')
	const { user } = useUserStore()
	const [history, setHistory] = useState<any>(null)
	const [loading, setLoading] = useState(true)
	const [balance, setBalance] = useState<number | null>(null)
	const { invests, isLoading, fetchInvestHistory } = useInvestStore()
	const csrf = useUserStore(state => state.user?.csrf) || ''
	useEffect(() => {
		if (csrf) {
			fetchInvestHistory(csrf, coin)
			const fetchData = async () => {
				setLoading(true)
				const data = await getUserHistory(user.csrf)
				setHistory(data)
				setLoading(false)
			}
			fetchData()
		}
	}, [csrf, coin])

	if (loading) {
		return <Spinner />
	}

	return (
		<div className='w-full min-h-screen'>
			<div className='container mx-auto px-2 flex flex-col gap-4'>
				{/* <div className='flex flex-col gap-4'>
					<h1 className='text-[32px] font-bold w-full text-center lg:text-left'>
						INVEST COIN/ALL
					</h1>
					<div className='bg-teal-500 w-fit p-4'>
						<select
							className='bg-transparent text-[16px] font-medium'
							value={coin}
							onChange={e => setCoin(e.target.value)}
						>
							<option className='text-[12px] text-black' value='all'>
								ALL
							</option>
							<option className='text-[12px] text-black' value='TEST'>
								TEST
							</option>
						</select>
					</div>
					{invests ? (
						<div>
							<pre>{JSON.stringify(invests, null, 2)}</pre>
						</div>
					) : (
						!isLoading && <p>Нет инвестиций</p>
					)}
				</div> */}
				<div className='flex flex-col gap-4'>
					<h2 className='text-[32px] font-bold w-full text-center lg:text-left'>
						История транзакций
					</h2>
					<ul>
						{history.map((tx: any, index: any) => (
							<li key={tx.id || index} className='border-b py-2'>
								<p>
									<strong>Тип:</strong> {tx.type || '—'}
								</p>
								<p>
									<strong>Сумма:</strong> {tx.amount || '—'} Монета - {tx.coin || ''}
								</p>
								<p>
									<strong>ID:</strong> {tx.id || '—'}
								</p>
								<p>
									<strong>UID:</strong> {tx.uid || '—'}
								</p>
								<p>
									<strong>Время:</strong>{' '}
									{tx.time ? new Date(tx.time * 1000).toLocaleString() : '—'}
								</p>
							</li>
						))}
					</ul>
				</div>
				<div className='flex flex-col gap-4'>
					<h1 className='text-[32px] font-bold w-full text-center lg:text-left'>
						BALANCE
					</h1>
					<div className='bg-teal-500 w-fit p-4'>
						<select
							className='bg-transparent text-[16px] font-medium'
							value={coin}
							onChange={e => setCoin(e.target.value)}
						>
							<option className='text-[12px] text-black' value='all'>
								ALL
							</option>
							<option className='text-[12px] text-black' value='TEST'>
								TEST
							</option>
						</select>
					</div>
					<p>Balance: {balance || 0}</p>
				</div>
			</div>
		</div>
	)
}
export default TestingCode
