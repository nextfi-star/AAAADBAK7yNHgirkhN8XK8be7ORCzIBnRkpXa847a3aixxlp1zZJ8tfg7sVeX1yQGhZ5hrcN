import Image from 'next/image'
import React from 'react'

export const Platform_mode = () => {
	return (
		<div className='flex items-center bg-white dark:bg-black border border-solid border-black dark:border-white rounded-[50px] gap-[10px]'>
			<button className='lock-btn flex items-center justify-center border-r border-0 border-solid border-r-black dark:border-r-white rounded-[50px] min-h-[30px] max-h-[30px] px-[8px] min-w-[99px] gap-[3px] text-[14px] bg-[#205BC9]'>
				Platform
			</button>
			<button className='lock-btn flex items-center border-r border-0 border-solid border-r-black dark:border-r-white rounded-[50px] min-h-[30px] max-h-[30px] px-[8px] gap-[3px] text-[14px] min-w-[99px]'>
				Exchange
				<Image src={'/lock.svg'} width={20} height={20} alt='lock icon' className='lock max-w-[15px]' />
			</button>
			<button className='lock-btn flex items-center min-h-[30px] max-h-[30px] px-[8px] gap-[3px] text-[14px] min-w-[99px] justify-center'>
				Web 3 <Image src={'/lock.svg'} width={20} height={20} alt='lock icon' className='lock max-w-[15px]' />
			</button>
		</div>
	)
}
