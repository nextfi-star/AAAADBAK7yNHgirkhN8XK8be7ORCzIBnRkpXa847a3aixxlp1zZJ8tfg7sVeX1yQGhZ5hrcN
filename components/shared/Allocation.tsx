'use client'
import React from 'react'
import ArrowBracket from '../ui/ArrowBracket'
import { useThemeStore } from '@/store'
const data = [
	{
		dot: 'bg-blue-500',
		name: 'Balance',
		cell: (
			<span className='flex flex-col gap-[5px] text-[14px] dark:text-white text-[#0c0c0c]'>
				$0.01{' '}
				<span className='text-[14px] text-[#BDBDBD] dark:text-[#BDBDBD]'>
					0.03%
				</span>
			</span>
		),
	},
	{
		dot: 'bg-blue-600',
		name: 'Bonus',
		cell: (
			<span className='flex flex-col gap-[5px] text-[14px] dark:text-white text-[#0c0c0c]'>
				$0.01{' '}
				<span className='text-[14px] text-[#BDBDBD] dark:text-[#BDBDBD]'>
					0.03%
				</span>
			</span>
		),
	},
	{
		dot: 'dark:bg-white bg-[#414141]',
		name: 'Investment',
		cell: (
			<span className='flex flex-col gap-[5px] text-[14px] dark:text-white text-[#0c0c0c]'>
				$0.01{' '}
				<span className='text-[14px] text-[#BDBDBD] dark:text-[#BDBDBD]'>
					0.03%
				</span>
			</span>
		),
	},
	{
		dot: 'dark:bg-white bg-[#414141]',
		name: 'Percentages',
		cell: (
			<span className='flex flex-col gap-[5px] text-[14px] dark:text-white text-[#0c0c0c]'>
				$0.01{' '}
				<span className='text-[14px] !text-[#BDBDBD] dark:!text-[#BDBDBD]'>
					0.03%
				</span>
			</span>
		),
	},
]
const Allocation = () => {
	const { theme } = useThemeStore()

	return (
		<section className='dark:!bg-[#1e1e1e66] !bg-[#fff] !shadow-medium dark:!shadow-none rounded-[30px] p-[33.5px_40px] flex flex-col gap-[20px]'>
			<h3 className='text-[14px] md:text-[20px] 2xl:text-[25px] w-full flex items-center justify-between'>
				Allocation{' '}
				<ArrowBracket color={theme === 'dark' ? 'white' : 'black'} width={24} />{' '}
			</h3>
			<div className='w-full min-h-[10px] rounded-[30px] bg-[#3f7ef3]' />
			<div className='flex flex-col gap-[10px]'>
				{data &&
					data.map(item => (
						<div key={item.name}>
							<div className='flex items-center w-full justify-between'>
								<div className='flex gap-[10px] items-center'>
									<span
										className={`${item.dot} min-h-[13px] min-w-[13px] rounded-[50%]`}
									/>
									<h5 className='text-[14px] md:text-[20px] 2xl:text-[25px]'>
										{item.name}
									</h5>
								</div>
								{item.cell}
							</div>
							<span className='min-h-[1px] w-full bg-white block' />
						</div>
					))}
			</div>
		</section>
	)
}

export default Allocation
