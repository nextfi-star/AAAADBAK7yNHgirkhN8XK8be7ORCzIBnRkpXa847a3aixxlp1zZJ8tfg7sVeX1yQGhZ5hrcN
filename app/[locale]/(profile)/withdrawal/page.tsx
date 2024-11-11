'use client'
import Withdrawal_faq from '@/components/shared/Withdrawal_faq'
import Withdrawal_steps from '@/components/shared/Withdrawal_steps'
import Withdrawal_table from '@/components/shared/Withdrawal_table'
import { NextPage } from 'next'

const Withdrawal: NextPage = () => {
	return (
		<section className='withdrawal -mt-[6rem] md:mt-0 pb-[1.5rem]'>
			<div className='grid xl:grid-cols-[2fr_1fr] gap-[31px] mb-[33px]'>
				<div className=''>
					<Withdrawal_steps />
				</div>

				<Withdrawal_faq />
			</div>
			<Withdrawal_table />
		</section>
	)
}

export default Withdrawal
