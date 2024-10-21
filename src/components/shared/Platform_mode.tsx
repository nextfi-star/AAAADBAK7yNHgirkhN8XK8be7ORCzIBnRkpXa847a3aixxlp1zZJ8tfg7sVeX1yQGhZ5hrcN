import Image from 'next/image'
import React from 'react'
import ArrowBracket from '../ui/ArrowBracket'
import { useThemeStore } from '@/store'

export const Platform_mode = () => {
	const { theme } = useThemeStore()
	return (
		<>
			<div className='hidden sm:flex items-center bg-white dark:bg-[#0c0c0c] border border-solid border-black dark:border-white rounded-[50px] gap-[5px] max-h-[32px] overflow-hidden'>
				<button className='lock-btn flex items-center justify-center rounded-[50px] min-h-[30px] max-h-[25px] px-[8px] gap-[3px] text-[14px] bg-[#205BC9] text-white'>
					Platform
				</button>
				<button className='lock-btn flex items-center rounded-[50px] min-h-[32px] max-h-[32px] pr-[10px] border !border-l-transparent !rounded-l-none border-solid border-black dark:border-white text-[14px] text-black dark:text-white gap-[5px]'>
					Exchange
					<Image
						src={'/lock.svg'}
						width={20}
						height={20}
						alt='lock icon'
						className='lock max-w-[15px]'
					/>
				</button>
				<button className='lock-btn flex items-center min-h-[30px] max-h-[30px]  pr-[10px] gap-[5px] text-[14px] text-black dark:text-white  '>
					Web 3
					<Image
						src={'/lock.svg'}
						width={20}
						height={20}
						alt='lock icon'
						className='lock max-w-[15px]'
					/>
				</button>
			</div>

			<div className='sm:hidden flex items-center bg-white dark:bg-black border border-solid border-black dark:border-white rounded-[50px] max-h-[32px] overflow-hidden'>
				<button className='lock-btn flex items-center justify-center rounded-[50px] min-h-[30px] max-h-[25px] px-[8px] text-[18px] bg-[#205BC9] text-white'>
					Platform
				</button>
				<button className='lock-btn flex items-center rounded-[50px] min-h-[32px] max-h-[32px] pr-[5px] pl-[5px] border !border-l-transparent !rounded-l-none border-solid border-black dark:border-white text-[14px] text-black dark:text-white'>
					<Image
						src={'/lock.svg'}
						width={20}
						height={20}
						alt='lock icon'
						className='lock max-w-[15px]'
					/>
					<ArrowBracket color={theme === 'dark' ? 'white' : 'black'} width={18} height={18} className={'-rotate-[90deg]'}/>
				</button>
				<button className='lock-btn flex items-center min-h-[30px] max-h-[30px] pr-[5px] text-[14px] text-black dark:text-white pl-[6px]'>
					<Image
						src={'/lock.svg'}
						width={20}
						height={20}
						alt='lock icon'
						className='lock max-w-[15px]'
					/>
					<ArrowBracket color={theme === 'dark' ? 'white' : 'black'} height={18} width={18} className={'-rotate-[90deg]'}/>
				</button>
			</div>
		</>
	)
}
