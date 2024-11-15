import { NextPage } from 'next'
import React from 'react'
import { Swap_fromTo } from './Swap_fromTo'
import { useThemeStore } from '@/store'
import { Swap_ToFrom } from './Swap_ToFrom'
type Status = {
	value: string
	label: string
	icon: string
	cryptoNumbers: string
	moreLess: string
}
const statusesTo: Status[] = [
	{
		value: 'Layer Zero',
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
		value: 'zroo',
		cryptoNumbers: '0.00000079',
		moreLess: '<$0.01',
		label: 'ZROO',
		icon: '/payment_table/zro.svg',
	},
	{
		value: 'trxx',
		cryptoNumbers: '0.00000079',
		moreLess: '<$0.01',
		label: 'TRXX',
		icon: '/payment_table/trx.svg',
	},
]
const Swap_To: NextPage = () => {
	const { swapPoppover_1, swapPoppover_2 } = useThemeStore()

	return (
		<article className='bg-[#7676801F] flex flex-col md:gap-[23px] w-full p-[24px_23px_24px_23px] md:p-[24px_31px_24px_31px] rounded-[20px]'>
			<h1 className='block w-full text-[20px] md:text-[32px] font-medium leading-[40px]'>
				To
			</h1>
			<div className='w-full flex items-center gap-[5px] justify-between'>
				<span className='md:text-[20px] text-[#BDBDBD] font-medium'>
					10.3595-250,000
				</span>

				<div className='flex items-center'>
					<Swap_ToFrom statusesFromTo={statusesTo} />
				</div>
			</div>
		</article>
	)
}

export default Swap_To