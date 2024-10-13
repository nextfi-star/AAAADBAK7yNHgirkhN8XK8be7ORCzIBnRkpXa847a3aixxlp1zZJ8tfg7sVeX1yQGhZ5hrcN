import React from 'react'
import { Button } from '../ui/button'
import { ChangeNick } from './ChangeNick'
import Image from 'next/image'
import { NextPage } from 'next'

export const Profile_perosnalinfo: NextPage = () => {
	return (
		<section className='personal__content flex flex-col w-full'>
			<h1 className='personal__content-title'>
				<Image
					src={'/main/profile_page/info_icon.svg'}
					width={30}
					height={30}
					alt='picture'
					quality={100}
				/>
				Personal Info
			</h1>
			<article className='flex items-center justify-between gap-[5px]'>
				<span>Nickname</span>
				<span>user****@main.ru</span>

				<ChangeNick propsItem={'Change'} />
			</article>

			<span className='devider w-full h-[1px] bg-slate-100 block my-[24px]' />

			<article className='flex items-center justify-between gap-[5px]'>
				<span>User ID</span>
				<span>589511219100</span>

				<Button variant={'outline'} className='bg-transparent'>
					Copy
				</Button>
			</article>
		</section>
	)
}
