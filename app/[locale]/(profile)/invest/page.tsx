'use client'
import Invest_Faq from '@/components/shared/Invest_Faq'
import Invest_steps from '@/components/shared/Invest_steps'
import Invest_Table from '@/components/shared/Invest_Table'
import { Link } from '@/i18n/routing'
import { useThemeStore } from '@/store'
import { ChevronLeft, X } from 'lucide-react'
import { NextPage } from 'next'

const Invest: NextPage = () => {
	const { setConfirmStep, swapCheck, swapCheck2, setStep } = useThemeStore()
	const DropSteps = () => {
		setStep(1)
		setConfirmStep(1)
		swapCheck('')
		swapCheck2('')
	}
	return (
		<section className='invest -mt-[8rem] md:-mt-[4rem] lg:mt-[4.5rem] pb-[1.5rem] top-mobile'>
			<h1 className='hide-mobile w-full text-center lg:text-left text-[32px] my-[30px] dark:text-[#EFEFEF] text-[#0c0c0c]'>
				Investing
			</h1>
			<div className='show-mobile w-full flex items-center justify-between fixed top-[0] left-0 right-0 z-[200] px-[28px] py-[15px] bg-[#f9f9fa] dark:bg-[#0c0c0c]'>
				<Link href={'/assets'} onClick={DropSteps}>
					<ChevronLeft strokeWidth={1} className='w-[30px]' />
				</Link>
				<h1 className='w-full text-center lg:text-left text-[32px] dark:text-[#EFEFEF] text-[#0c0c0c]'>
				Investing
				</h1>
				<Link href={'/assets'} onClick={DropSteps}>
					<X className='w-[30px]' />
				</Link>
			</div>
			<div className='grid xl:grid-cols-[2fr_1fr] gap-[31px] mb-[33px]'>
				<div className=''>
					<Invest_steps />
				</div>
				<Invest_Faq />
			</div>
			<Invest_Table />
		</section>
	)
}

export default Invest