'use client'
import {
	Profile_balance,
	Profile_payments,
	Profile_verification,
} from '@/components/shared'
import Allocation from '@/components/shared/Allocation'
import Transaction from '@/components/shared/Transactions'
import { useCheckPathAssets } from '@/hooks/useCheckPathAssets'
import { useUserStore } from '@/hooks/useUserData'
import { useThemeStore } from '@/store/useChatStore'
import { useState } from 'react'

const Assets = () => {
	const { verifyState } = useThemeStore()
	const [verify, setVerify] = useState<boolean>(false)
	const user = useUserStore(state => state.user)
	const toggleActive = () => {
		setVerify(prev => !prev)
	}
	useCheckPathAssets()
	return (
		<>
			{verifyState && (
				<section className='profile'>
					<div className='profile__grid gap-[1.5rem] max-xl:grid max-xl:grid-cols-1'>
						<div className='flex mt-[-24px] flex-col w-full gap-[1.5rem]'>
							<hr />
							{user && user.verification === 1 ? (
								<Profile_balance />
							) : (
								<Profile_verification
									// toggleActive={toggleActive}
									verify={verify}
								/>
							)}

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
