import React from 'react'
import Image from 'next/image'
import { NextPage } from 'next'
import { Alert_nickname } from './Alert_nickname'
import { Button } from '@nextui-org/button'

export const Profile_perosnalinfo: NextPage = () => {
	return (
		<section className='personal__content flex flex-col w-full'>
			<h1 className='personal__content-title'>
				<Image
					alt='picture'
					height={30}
					quality={100}
					src={'/main/profile_page/info_icon.svg'}
					width={30}
				/>
				Personal Info
			</h1>
			<article className='flex items-center justify-between gap-[5px]'>
				<span>Nickname</span>
				<span>username123</span>
				<div className='min-w-[181px] flex justify-end'>
					<Alert_nickname propsItem={'Change'} />
				</div>
			</article>

			<span className='devider w-full h-[1px] bg-slate-100 block my-[24px]' />

			<article className='flex items-center justify-between gap-[5px]'>
				<span>User ID</span>
				<span>589511219100</span>

				<div className='min-w-[181px] flex justify-end'>
					<Button className='border-1 !border-gray-300 text-[16px] border-solid rounded-[50px] px-[10px] !bg-transparent !text-[#0c0c0c] dark:!text-[#eeeeee]'>Copy</Button>
				</div>
			</article>
		</section>
	)
}
