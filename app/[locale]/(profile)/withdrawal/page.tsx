import { Dropsteps } from '@/components/shared/Dropsteps'
import Withdrawal_faq from '@/components/shared/Withdrawal_faq'
import Withdrawal_steps from '@/components/shared/Withdrawal_steps'
import Withdrawal_table from '@/components/shared/Withdrawal_table'
import Withdrawal_table_mobile from '@/components/shared/Withdrawal_table_mobile'

const Withdrawal = () => {
	return (
		<section className='spec -mt-[5rem] md:-mt-[4rem] lg:mt-[4.5rem] pb-[1.5rem] top-mobile'>
			<h1 className='hide-mobile w-full text-center lg:text-left text-[32px] my-[30px] dark:text-[#EFEFEF] text-[#0c0c0c]'>
				Withdrawal
			</h1>
			<Dropsteps />
			<div className='grid xl:grid-cols-[2fr_1fr] gap-[31px] mb-[33px]'>
				<div className=''>
					<Withdrawal_steps />
				</div>
				<Withdrawal_faq />
			</div>
			<div className='block lg:hidden'>
				<Withdrawal_table_mobile />
			</div>

			<div className='hidden lg:block'>
				<Withdrawal_table />
			</div>
		</section>
	)
}

export default Withdrawal
