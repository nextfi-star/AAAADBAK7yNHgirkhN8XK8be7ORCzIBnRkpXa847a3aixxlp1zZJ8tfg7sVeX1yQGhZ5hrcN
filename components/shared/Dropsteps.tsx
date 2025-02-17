'use client'
import { useThemeStore } from '@/store'
import { ChevronLeft, X } from 'lucide-react'
import Link from 'next/link'

export const Dropsteps = () => {
const { setConfirmStep, swapCheck, swapCheck2, setStep } = useThemeStore()

	const DropSteps = () => {
		setStep(1)
		setConfirmStep(1)
		swapCheck('')
		swapCheck2('')
	}
	return (
		<div className='show-mobile w-full flex items-center justify-between fixed top-[0] left-0 right-0 z-[200] px-[28px] py-[15px] bg-[#f9f9fa] dark:bg-[#0c0c0c]'>
			<Link href={'/assets'} onClick={DropSteps}>
				<ChevronLeft strokeWidth={1} className='w-[30px]' />
			</Link>
			<h1 className='w-full text-center lg:text-left text-[32px] dark:text-[#EFEFEF] text-[#0c0c0c]'>
				Withdrawal
			</h1>
			<Link href={'/assets'} onClick={DropSteps}>
				<X className='w-[30px]' />
			</Link>
		</div>
	)
}
