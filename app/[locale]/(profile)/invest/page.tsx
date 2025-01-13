'use client'
import { Invest_card } from '@/components/shared/Invest_card'
import { Invest_Faq } from '@/components/shared/Invest_Faq'
import Invest_steps from '@/components/shared/Invest_steps'
import Invest_Table from '@/components/shared/Invest_Table'
import { Page_title } from '@/components/shared/Page_title'
import { SkeletonCard_invest } from '@/components/ui/skeleton/SkeletonCard_invest'
import { useThemeStore } from '@/store'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Invest_table_mobile from '@/components/shared/Invest_table_mobile'

const Invest = () => {
	const { setConfirmStep, swapCheck, swapCheck2, setStep } = useThemeStore()
	const DropSteps = () => {
		setStep(1)
		setConfirmStep(1)
		swapCheck('')
		swapCheck2('')
	}
	const [isLoaded, setLoaded] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoaded(!isLoaded)
			clearTimeout(timer)
		}, 3000)
	}, [])
	return (
		<section className='invest -mt-[8rem] md:-mt-[4rem] lg:mt-[4.5rem] pb-[1.5rem] top-mobile'  data-aos="fade-up">
			<Page_title title='Investing' DropSteps={DropSteps} />
			<div className='grid xl:grid-cols-[2fr_1fr] gap-[31px] mb-[33px]'>
				<div className=''>
					<Invest_steps />
				</div>
				<div className='flex flex-col gap-[16px] w-full items-center xl:items-end'>
					{!isLoaded ? <SkeletonCard_invest /> : <Invest_card />}
				</div>
			</div>

			<div className='grid grid-cols-1 2xl:grid-cols-[2fr_1fr] gap-[31px]'>
				<div className='block lg:hidden'>
					<Invest_table_mobile />
				</div>
				<div className='hidden lg:block'>
					<Invest_Table />
				</div>
				<div className='mt-[3px]'>
					<Invest_Faq />
				</div>
			</div>
		</section>
	)
}

export default Invest
