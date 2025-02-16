'use client'

import { useInvestStore } from '@/hooks/useInvest'
import { useUserStore } from '@/hooks/useUserData'
import { useLocale } from 'next-intl'
import { useEffect, useState } from 'react'

const TestingCode = () => {
	const [coin, setCoin] = useState('TEST')
	const { invests, isLoading, fetchInvestHistory } = useInvestStore()
	const csrf = useUserStore(state => state.user?.csrf) || ''
	const locale = useLocale()
	useEffect(() => {
		if (csrf) {
			fetchInvestHistory(csrf, coin)
		}
	}, [csrf, coin])
	return (
		<div className='w-full min-h-screen'>
			<div className='container mx-auto px-2 flex flex-col'>
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
							{/* Можно добавить и другие валюты */}
						</select>
					</div>
					{invests ? (
						<div>
							{/* Здесь можно отрендерить данные инвестиций */}
							<pre>{JSON.stringify(invests, null, 2)}</pre>
						</div>
					) : (
						!isLoading && <p>Нет инвестиций</p>
					)}
				</div>
			</div>
		</div>
	)
}
export default TestingCode
