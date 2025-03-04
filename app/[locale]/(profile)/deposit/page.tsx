'use client'
import Deposit_faq from '@/components/shared/Deposit_faq'
import Deposit_steps from '@/components/shared/Deposit_steps'
import Deposit_table from '@/components/shared/Deposit_table'
import Deposit_table_mobile from '@/components/shared/Deposit_table_mobile'
import { Link } from '@/i18n/routing'
import { useThemeStore } from '@/store'
import { ChevronLeft, X } from 'lucide-react'
import { useTranslations } from 'next-intl'

const Deposit = () => {
	const t = useTranslations('deposit')
	const { setConfirmStep, swapCheck, swapCheck2, setStep } = useThemeStore()
	const DropSteps = () => {
		setStep(1)
		setConfirmStep(1)
		swapCheck('')
		swapCheck2('')
	}
	return (
		<section className='spec -mt-[5rem] md:-mt-[4rem] lg:mt-[4.5rem] pb-[1.5rem] top-mobile'>
			<h1 className='hide-mobile w-full text-center lg:text-left text-[32px] my-[30px] dark:text-[#EFEFEF] text-[#0c0c0c]'>
				{t('deposit')}
			</h1>
			<div className='show-mobile flex items-center justify-between fixed top-[0] left-0 right-0 z-[200] px-[28px] py-[15px] bg-[#f9f9fa] dark:bg-[#0c0c0c]'>
				<Link href={'/assets'} onClick={DropSteps}>
					<ChevronLeft strokeWidth={1} className='w-[30px]' />
				</Link>
				<h1 className='w-full text-center lg:text-left text-[32px] dark:text-[#EFEFEF] text-[#0c0c0c]'>
					Deposit
				</h1>
				<Link href={'/assets'} onClick={DropSteps}>
					<X className='w-[30px]' />
				</Link>
			</div>
			<div className='grid xl:grid-cols-[2fr_1fr] gap-[31px] mb-[33px]'>
				<div className=''>
					<Deposit_steps />
				</div>
				<Deposit_faq />
			</div>

			<div className='hidden lg:block'>
				<Deposit_table />
			</div>
			<div className='block lg:hidden'>
				<Deposit_table_mobile />
			</div>
		</section>
	)
}

export default Deposit
