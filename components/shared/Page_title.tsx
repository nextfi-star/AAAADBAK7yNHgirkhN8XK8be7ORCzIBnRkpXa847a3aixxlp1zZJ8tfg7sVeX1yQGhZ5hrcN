import { Link } from '@/i18n/routing'
import { ChevronLeft, X } from 'lucide-react'
import { NextPage } from 'next'
import React from 'react'

interface Props {
	DropSteps: () => void
	title: string
}
export const Page_title: NextPage<Props> = ({ DropSteps, title }) => {
	return (
		<>
			<h1 className='hide-mobile w-full text-center text-[32px] 2xl:text-[62px] font-bold my-[30px] dark:text-[#EFEFEF] text-[#0c0c0c]'>
				{title}
			</h1>
			<div className='show-mobile w-full flex items-center justify-between fixed top-[0] left-0 right-0 z-[200] px-[28px] py-[15px] bg-[#f9f9fa] dark:bg-[#0c0c0c]'>
				<Link href={'/assets'} onClick={DropSteps}>
					<ChevronLeft strokeWidth={1} className='w-[30px]' />
				</Link>
				<h1 className='w-full text-center lg:text-left text-[32px] dark:text-[#EFEFEF] text-[#0c0c0c]'>
					{title}
				</h1>
				<Link href={'/assets'} onClick={DropSteps}>
					<X className='w-[30px]' />
				</Link>
			</div>
		</>
	)
}
