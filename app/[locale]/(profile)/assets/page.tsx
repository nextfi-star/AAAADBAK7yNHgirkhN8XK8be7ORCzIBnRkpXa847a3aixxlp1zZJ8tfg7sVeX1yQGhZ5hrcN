'use client'
import { NextPage } from 'next'
import { useThemeStore } from '@/store'
import { Profile_balance, Profile_payments } from '@/components/shared'
import Allocation from '@/components/shared/Allocation'
import Transaction from '@/components/shared/Transactions'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const Assets: NextPage = () => {
	const { verifyState, setVerifyState } = useThemeStore()
	const pathname = usePathname();

	useEffect(() => {
		if(pathname === '/assets') {
			setVerifyState(false)
		} else {
			setVerifyState(true)
		}
		}, [pathname])
	return (
		<>
			{verifyState && (
				<section className='profile'>
					<div className='profile__grid gap-[14px] max-xl:grid max-xl:grid-cols-1'>
						<div>
							<hr />
							<Profile_balance />
							<Profile_payments />
						</div>

						<div className='max-w-[1331px]'>
							<Allocation />
							<Transaction />
						</div>
					</div>
				</section>
			)}
		</>
	)
}

export default Assets
