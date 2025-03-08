'use client'
import { Profile_balance, Profile_payments } from '@/components/shared'
import Allocation from '@/components/shared/Allocation'
import Transaction from '@/components/shared/Transactions'
import { useCheckPathAssets } from '@/hooks/useCheckPathAssets'
import { useThemeStore } from '@/store/useChatStore'

const Assets = () => {
	const { verifyState } = useThemeStore()
	useCheckPathAssets()
	return (
		<>
			{verifyState && (
				<section className='profile'>
					<div className='profile__grid gap-[1.5rem] max-xl:grid max-xl:grid-cols-1'>
						<div className='flex  mt-[-24px] flex-col w-full gap-[1.5rem]'>
							<hr />
							<Profile_balance />
							<Profile_payments />
						</div>

						<div className='max-w-[1331px] flex flex-col gap-[1.5rem]'>
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
