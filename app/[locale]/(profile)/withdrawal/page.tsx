'use client'
import Withdrawal_faq from '@/components/shared/Withdrawal_faq'
import Withdrawal_steps from '@/components/shared/Withdrawal_steps'
import Withdrawal_table from '@/components/shared/Withdrawal_table'
import { NextPage } from 'next'

const Withdrawal: NextPage = () => {
	return (
		<section className='withdrawal -mt-[8rem] md:-mt-[4rem] lg:mt-[4.5rem] pb-[1.5rem]'>
			<h1 className='w-full text-center lg:text-left text-[32px] my-[30px] dark:text-[#EFEFEF]text-[#0c0c0c]'>Withdrawal</h1>
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
