import React from 'react'
import Image from 'next/image'
import { NextPage } from 'next'
import { ProfilePage_guard } from '../ui/ProfilePage_guard'
import { useThemeStore } from '@/store'
import { ViewRegion } from './ViewRegion'
import { ChangeRegion } from './ChangeRegion'

export const Profile_personalverif: NextPage = () => {
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
				Verification info
			</h1>
			<article className='flex items-center justify-between gap-[5px]'>
				<span className='!hidden !sm:flex'>Identity cerification</span>
				<span className="flex sm:hidden">Identity</span>
				<span className='after:content-["needed"] after:absolute relative after:text-white after:-bottom-[20px] after:left-[43px] '>
					<ProfilePage_guard color={theme === 'dark' ? '#fff' : '#000'} />
					Additional info
				</span>

				<div className='min-w-[181px] flex justify-end'>
					<ChangeRegion propsItem={'View Details'} />
				</div>
			</article>

			<span className='devider w-full h-[1px] bg-slate-100 block my-[24px]' />

			<article className='flex items-center justify-between gap-[5px]'>
				<span>Country/Region</span>
				<span>Russia</span>

				<div className='min-w-[181px] flex justify-end'>
				<ViewRegion propsItem={'Change'} />
				</div>
			</article>
		</section>
	)
}
