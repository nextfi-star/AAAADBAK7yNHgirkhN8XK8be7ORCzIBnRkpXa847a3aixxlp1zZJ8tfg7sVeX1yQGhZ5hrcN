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
		tier: 'lvl 1',
		total: '< 100',
		assets: '< 100,000 / < 5,000,000',
		maker: '0.080%',
		taker: '0.100%',
		withdrawal: '0.100%',
	},
	{
		key: '12',
		tier: 'lvl 2',
		total: '> 100',
		assets: '< 100,000 / < 5,000,000',
		maker: '0.080%',
		taker: '0.100%',
		withdrawal: '0.100%',
	},
	{
		key: '13',
		tier: 'lvl 3',
		total: '> 200',
		assets: '< 100,000 / < 5,000,000',
		maker: '0.080%',
		taker: '0.100%',
		withdrawal: '0.100%',
	},
	{
		key: '14',
		tier: 'lvl 4',
		total: '> 500',
		assets: '< 100,000 / < 5,000,000',
		maker: '0.080%',
		taker: '0.100%',
		withdrawal: '0.100%',
	},
	{
		key: '15',
		tier: 'lvl 5',
		total: '> 1000',
		assets: `< 100,000 / < 5,000,000`,
		maker: '0.080%',
		taker: '0.100%',
		withdrawal: '0.100%',
	},
]
const columns = [
	{
		key: 'tier',
		label: 'Tier',
	},
	{
		key: 'total',
		label: 'Total holding',
	},
	{
		key: 'assets',
		label: 'Assets (USD) or Assets (USD)',
	},
	{
		key: 'maker',
		label: 'Maker fee',
	},
	{
		key: 'taker',
		label: 'Taker fee',
	},
	{
		key: 'withdrawal',
		label: '24h crypto withdrawal limit (USD)',
	},
]

const Tier: NextPage = () => {
	return (
		<div className='flex flex-col gap-[40px] w-full xl:-mt-[7.5rem]'>
			<Page_title title='My fee tier' />

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
