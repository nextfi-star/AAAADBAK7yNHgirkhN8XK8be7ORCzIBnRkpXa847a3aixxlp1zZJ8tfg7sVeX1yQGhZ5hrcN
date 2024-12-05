'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { NextPage } from 'next'
import { ProfilePage_guard } from '../ui/ProfilePage_guard'
import { ViewRegion } from './ViewRegion'
import { ChangeRegion } from './ChangeRegion'
import { useThemeStore } from '@/store'
import { Button } from '@nextui-org/button'
import { Link } from '@/i18n/routing'
import { Spinner } from '@nextui-org/spinner'

export const Profile_personalverif: NextPage = () => {
	const { theme } = useThemeStore()
	const [user, setUser] = useState<Record<string, any> | null>(null)
	useEffect(() => {
		const storedData = localStorage.getItem('userData') || '{}'
		setUser(JSON.parse(storedData))
	}, [])
	return (
		<section className='personal__content flex flex-col w-full'>
			<h1 className='personal__content-title'>
				<Image
					alt='picture'
					height={30}
					quality={100}
					src={'/main/profile_page/accept_icon.svg'}
					width={30}
				/>
				Verification info
			</h1>
			<article className='flex items-center justify-between gap-[5px]'>
				<span className='!hidden !sm:flex'>Identity cerification</span>
				<span className='flex sm:hidden'>Identity</span>
				<span className='after:content-["needed"] after:absolute relative after:text-white after:-bottom-[20px] after:left-[43px] '>
					<ProfilePage_guard color={theme === 'dark' ? '#fff' : '#000'} />
					Additional info
				</span>

				<div className='min-w-[181px] flex justify-end'>
					<Link href={'/verify'}>
						<Button className='border-1 !border-[#4d4d4d] dark:!border-[#4d4d4d] text-[16px] border-solid rounded-[50px] px-[10px] !bg-transparent !text-[#0c0c0c] dark:!text-[#eeeeee]'>
							View details
						</Button>
					</Link>
				</div>
			</article>

			<span className='devider w-full h-[1px] bg-slate-100 block my-[24px]' />

			<article className='flex items-center justify-between gap-[5px]'>
				<span>Country/Region</span>
				<span>{user?.country || <Spinner />}</span>

				<div className='min-w-[181px] flex justify-end'>
					<ViewRegion propsItem={'Change'} />
				</div>
			</article>
		</section>
	)
}
