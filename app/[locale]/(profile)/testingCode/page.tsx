'use client'

import { useInvestStore } from '@/hooks/useInvest'
import { useUserStore } from '@/hooks/useUserData'
import {  getUserBalance, getUserHistory } from '@/utils/api'
import { Spinner } from '@heroui/spinner'
import { useEffect, useMemo, useState } from 'react'
import { useCoinStore } from '@/store/coinList'

const TestingCode = () => {
	const [coin, setCoin] = useState('TEST')
	const user = useUserStore(state => state.user)
	const [profileData, setProfileData] = useState(user)
	const [history, setHistory] = useState<any>(null)
	const [loading, setLoading] = useState(true)
	const [balance, setBalance] = useState<number | null>(null)
	const { invests, isLoading, fetchInvestHistory } = useInvestStore()
	const csrf = useUserStore(state => state.user?.csrf) || ''
	const { coins, loadCoins } = useCoinStore()
	const [selectedCoin, setSelectedCoin] = useState<string>('')

	// Загружаем список монет при запуске
	useEffect(() => {
		if (user?.csrf) {
			loadCoins(user.csrf)
		}
	}, [user?.csrf, loadCoins])
	useEffect(() => {
		if (csrf) {
			fetchInvestHistory(csrf, coin)
			const fetchData = async () => {
				setLoading(true)
				const data = await getUserHistory(user.csrf)
				setHistory(data)
				setLoading(false)
			}
			const fetchBalance = async () => {
				try {
					const result = await getUserBalance(csrf, coin)
					if (result.response === 'success') {
						console.log(result)
					} else {
						setBalance(result)
					}
				} catch (err: any) {
					console.log(err.message)
				}
			}
			fetchBalance()
			fetchData()
		}
	}, [csrf, coin])
	useEffect(() => {
		setProfileData(user) // Автообновление данных при изменениях
	}, [user])
	const renderedData = useMemo(() => {
		if (!profileData) return <p>Loading...</p>

		return (
			<div className='p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg text-black'>
				<h2 className='text-xl font-semibold mb-4'>Profile Information</h2>
				<div className='space-y-2'>
					<p>
						<strong>Username:</strong> {profileData.username || 'N/A'}
					</p>
					<p>
						<strong>Email:</strong> {profileData.email || 'N/A'}
					</p>
					<p>
						<strong>Country:</strong> {profileData.country || 'N/A'}
					</p>
					<p>
						<strong>XP:</strong> {profileData.xp}
					</p>
					<p>
						<strong>2FA:</strong> {profileData['2fa'] ? 'Enabled' : 'Disabled'}
					</p>
					<p>
						<strong>Ref Code:</strong> {profileData.refcode || 'N/A'}
					</p>
					<p>
						<strong>Status:</strong>{' '}
						{profileData.status === 1 ? 'Active' : 'Inactive'}
					</p>
					<p>
						<strong>Verified:</strong> {profileData.verified ? 'Yes' : 'No'}
					</p>
				</div>
			</div>
		)
	}, [profileData])
	if (loading) {
		return (
			<div className='w-full min-h-screen'>
				<Spinner />
			</div>
		)
	}

	return (
		<div className='w-full min-h-screen'>
			<div className='container mx-auto px-2 flex flex-col gap-4'>
				<div className='flex flex-col gap-4'>
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
				</div>
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
									<strong>Сумма:</strong> {tx.amount || '—'} Монета -{' '}
									{tx.coin || ''}
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
					<p>Balance: {balance} $</p>
				</div>
				<div className='flex flex-col gap-4'>
					<h1>USER</h1>
					{renderedData}
				</div>
				<div className='flex flex-col gap-4'>
					<h1 className='text-[32px] font-bold w-full text-center lg:text-left'>
						OVERVIEW DATA
					</h1>
					{user?.overview &&
						user.overview.lvl.map((data: any) => (
							<div key={data.id}>
								<p>Enable - {data.enable}</p>
								<p>ID - {data.id}</p>
								<p>Name - {data.name}</p>
								<p>XP - {data.xp}xp</p>
							</div>
						))}
				</div>
				<div className='flex flex-col gap-4'>
					<h1 className='text-[32px] font-bold w-full text-center lg:text-left'>
						OVERVIEW PAYMENTS
					</h1>
					{user?.overview &&
						user.overview.payments.map((data: any) => (
							<div key={data.id}>
								<p>Amount - {data.amount}</p>
								<p>Coin - {data.coin}</p>
								<p>Type - {data.type}</p>
								<p>UID - {data.uid}</p>
								<p>Time - {data.time}</p>
							</div>
						))}
				</div>
				<div className='flex flex-col gap-4'>
					<h1 className='text-[32px] font-bold w-full text-center lg:text-left'>
						COIN LIST
					</h1>
					<div className='bg-teal-500 text-black w-fit p-4'>
						<select
							className='border p-2 rounded-md'
							value={selectedCoin}
							onChange={e => setSelectedCoin(e.target.value)}
						>
							<option value=''>Выберите монету</option>
							{coins.map(coin => (
								<option
									key={coin.name}
									value={coin.name}
									disabled={!coin.enable}
								>
									{coin.name} {coin.deposit ? '(Доступен для депозита)' : ''} {coin.type}
								</option>
							))}
						</select>

						{selectedCoin && <p className='mt-4'>Вы выбрали: {selectedCoin}</p>}
					</div>
				</div>
			</div>
		</div>
	)
}
export default TestingCode
