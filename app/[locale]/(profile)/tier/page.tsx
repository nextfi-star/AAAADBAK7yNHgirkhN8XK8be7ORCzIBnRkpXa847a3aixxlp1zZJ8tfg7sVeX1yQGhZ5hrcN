'use client'
import { Page_title } from '@/components/shared/Page_title'
import Tier_initData from '@/components/shared/Tier_initData'
import Tier_table_regUsers from '@/components/shared/Tier_table_regUsers'
import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'

export type Rows = typeof rows
export type Columns = typeof columns
const rows = [
  {
    key: '1',
    tier: 'Beginner',
    total: '0 experience',
    assets: '10 points',
    maker: 'No bonuses',
    taker: '10% of referral experience',
    withdrawal: 'None',
  },
  {
    key: '2',
    tier: 'Investor',
    total: '10 experience',
    assets: '10 points',
    maker: '+1% to profitability',
    taker: '10% of referral experience',
    withdrawal: 'None',
  },
  {
    key: '3',
    tier: 'Advanced Investor',
    total: '30 experience',
    assets: '10 points',
    maker: '+1% to profitability',
    taker: '10% of referral experience',
    withdrawal: '-1% fee for early withdrawal',
  },
  {
    key: '4',
    tier: 'Experienced Investor',
    total: '60 experience',
    assets: '10 points',
    maker: '+1.5% to profitability',
    taker: '10% of referral experience',
    withdrawal: 'Partial withdrawal (up to 20%)',
  },
  {
    key: '5',
    tier: 'Expert',
    total: '100 experience',
    assets: '10 points',
    maker: '+2% to profitability',
    taker: '10% of referral experience',
    withdrawal: '-2% fee for early withdrawal, -20% investment term for specific asset types',
  },
  {
    key: '6',
    tier: 'VIP',
    total: '150 experience',
    assets: '10 points',
    maker: '+2% to profitability',
    taker: '10% of referral experience',
    withdrawal: 'No fee for early withdrawal, -30% investment term for any assets',
  },
];
const columns = [
  {
    key: 'tier',
    label: 'Tier',
  },
  {
    key: 'total',
    label: 'Required experience',
  },
  {
    key: 'assets',
    label: 'Points for successful investment',
  },
  {
    key: 'maker',
    label: 'Bonuses',
  },
  {
    key: 'taker',
    label: 'Referral bonuses',
  },
  {
    key: 'withdrawal',
    label: 'Withdrawal features',
  },
];

const Tier: NextPage = () => {
	return (
		<div className='flex flex-col gap-[40px] w-full -mt-[7.5rem] xl:-mt-[0]'>
			<Page_title title='Levels Activity' className='!my-0'/>

			<article className='rounded-[30px] sm:shadow-xl dark:shadow-none sm:dark:bg-[#181818] p-[44px_0px] md:p-[44px_26px] xl:p-[44px] w-full flex flex-col xl:flex-row items-center justify-between gap-[40px] xl:gap-[146px]'>
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
				columns={columns}
				rows={rows}
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
