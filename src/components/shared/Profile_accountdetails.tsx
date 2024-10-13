import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { NextPage } from 'next'
import { useThemeStore } from '@/store'
import { ChangeEmail } from './ChangeEmail'
import { ChangePhone } from './ChangePhone'

export const Profile_accountdetails: NextPage = () => {
	const { theme } = useThemeStore()
	return (
		<section className='personal__content flex flex-col w-full'>
			<h1 className='personal__content-title'>
				<Image
					src={'/main/profile_page/accept_icon.svg'}
					width={30}
					height={30}
					alt='picture'
					quality={100}
				/>
				Account details
			</h1>
			<article className='flex items-center justify-between gap-[5px]'>
				<span>Email</span>
				<span>user****@main.ru</span>

				<ChangeEmail propsItem={'Change'} />
			</article>

			<span className='devider w-full h-[1px] bg-slate-100 block my-[24px]' />

			<article className='flex items-center justify-between gap-[5px]'>
				<span>Phone</span>
				<span>****140</span>

				<ChangePhone propsItem={'Change'} />
			</article>

			<span className='devider w-full h-[1px] bg-slate-100 block my-[24px]' />

			<article className='flex items-center justify-between gap-[5px]'>
				<span>Trading fee tier</span>
				<span>Level 1</span>

				<Button variant={'outline'} className='bg-transparent'>
					View Details
				</Button>
			</article>
		</section>
	)
}
