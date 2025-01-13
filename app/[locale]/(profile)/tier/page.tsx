'use client'
import { Page_title } from '@/components/shared/Page_title'
import Tier_initData from '@/components/shared/Tier_initData'
import Tier_table_regUsers from '@/components/shared/Tier_table_regUsers'
import Image from 'next/image'
import React from 'react'

const Tier = () => {
	return (
		<div className='flex flex-col gap-[40px] w-full -mt-[7.5rem] md:-mt-[0]' data-aos="fade-up">
			<Page_title title='Levels Activity' className='!my-0'/>

			<article className='rounded-[30px] sm:shadow-medium dark:!shadow-none sm:dark:bg-[#181818] p-[44px_0px] md:p-[44px_26px] xl:p-[44px] w-full flex flex-col xl:flex-row items-center justify-between gap-[40px] xl:gap-[146px]'>
				<div className='flex flex-col sm:flex-row items-center gap-[31px]'>
					<Image
						width={152}
						height={152}
						alt='Level'
						src={'/main/tier/LVL.svg'}
						priority
					/>
					<div className='flex flex-col items-center sm:items-start gap-[5px]'>
						<h1 className='text-[32px] font-medium'>LVL 1</h1>
						<span className='text-[20px] dark:text-[#BDBDBD] text-[#0c0c0c]'>
							use***@gmail.com
						</span>
					</div>
				</div>

				<Tier_initData />
			</article>

			<Tier_table_regUsers
				title='Levels and their description'
			/>
			<div className='flex flex-col w-full'>
				<h5 className='text-[20px] font-bold'>Getting partial experience</h5>
				<p className='text-[20px] dark:text-[#EFEFEF]'>
        Users who withdraw investments ahead of time receive a partial experience proportional to the percentage they have already earned. For example, if a user has earned 50% of the possible income, then they will receive 50% of the total experience (5 points instead of 10).
				</p>
			</div>
		</div>
	)
}
export default Tier
