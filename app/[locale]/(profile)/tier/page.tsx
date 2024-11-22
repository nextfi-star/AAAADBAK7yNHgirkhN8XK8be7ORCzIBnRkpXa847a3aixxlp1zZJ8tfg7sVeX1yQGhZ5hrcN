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
			<Page_title title='Levels Activity' />

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
				title='Regular users'
			/>
			<p className='text-[16px] sm:text-[20px] dark:text-[#D9D9D9]'>
				30-day trading volume (USD) is the total trading volume for the
				corresponding market
			</p>
			<div className='flex flex-col w-full'>
				<h5 className='text-[20px] font-bold'>About fii tier</h5>
				<p className='text-[20px] dark:text-[#EFEFEF]'>
					Our trading fees different for regular and VIP users. Regular users
					are categorized into tiers by their total holdings whereas VIP users
					are categorized by 30-day trading volume and asset balances. Tiers are
					updated daily.
				</p>
			</div>
		</div>
	)
}
export default Tier
