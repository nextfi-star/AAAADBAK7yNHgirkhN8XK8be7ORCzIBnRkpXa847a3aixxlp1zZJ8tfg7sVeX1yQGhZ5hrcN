import { NextPage } from 'next'
import React from 'react'
import { Swap_FromTo_alert } from './Swap_FromTo_alert'
import { Input } from "@heroui/input"
type Status = {
	value: string
	label: string
	icon: string
	cryptoNumbers: string
	moreLess: string
}
const statusesFrom: Status[] = [
	{
		value: 'zero',
		cryptoNumbers: '0.00000079',
		moreLess: '<$0.01',
		label: 'ZRO',
		icon: '/payment_table/zro.svg',
	},
	{
		value: 'trx',
		cryptoNumbers: '0.00000079',
		moreLess: '<$0.01',
		label: 'TRX',
		icon: '/payment_table/trx.svg',
	},
	{
		value: 'usdt',
		cryptoNumbers: '0.00000079',
		moreLess: '<$0.01',
		label: 'USDT',
		icon: '/payment_table/teater.svg',
	},
	{
		value: 'xzroo',
		cryptoNumbers: '0.00000079',
		moreLess: '<$0.01',
		label: 'ZROO',
		icon: '/payment_table/zro.svg',
	},
	{
		value: 'xtrxx',
		cryptoNumbers: '0.00000079',
		moreLess: '<$0.01',
		label: 'TRXX',
		icon: '/payment_table/trx.svg',
	},
]
const Swap_from: NextPage = () => {
	return (
		<article className='bg-[#7676801F] flex flex-col md:gap-[23px] w-full p-[24px_23px_24px_23px] md:p-[24px_31px_24px_31px] rounded-[20px]'>
			<h1 className='block w-full text-[20px] md:text-[32px] font-medium leading-[40px]'>
				From
			</h1>
			<div className=' flex items-center gap-[10px] justify-between'>
				<Input
					type='text'
					variant='underlined'
					placeholder='Enter the amount'
					className='md:text-[20px] text-[#BDBDBD] font-medium'
					classNames={{
						inputWrapper: 'shadow-none',
					}}
				/>

				<div className='flex items-center'>
					<Swap_FromTo_alert statuses={statusesFrom} />
				</div>
			</div>
		</article>
	)
}

export default Swap_from
