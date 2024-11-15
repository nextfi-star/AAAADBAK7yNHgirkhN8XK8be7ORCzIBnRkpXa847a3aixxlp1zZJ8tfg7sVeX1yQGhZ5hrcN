'use client'
import { NextPage } from 'next'
import { useThemeStore } from '@/store'
import { Profile_balance, Profile_payments } from '@/components/shared'
import Allocation from '@/components/shared/Allocation'
import Transaction from '@/components/shared/Transactions'

const Assets: NextPage = () => {
	const { verifyState } = useThemeStore()

	return (
		<>
			{verifyState && (
				<section className='profile'>
					<div className='profile__grid gap-[24px] max-xl:grid max-xl:grid-cols-1'>
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
