'use client'
import { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { useThemeStore } from '@/store'
import {
	Profile_balance,
	Profile_industry,
	Profile_info,
	Profile_news,
	Profile_payments,
	Profile_qr,
	Profile_verification,
} from '@/components/shared'
import { usePathname } from 'next/navigation'
import useAuthProtection from '@/hooks/useAuthProtection'
import AOS from 'aos'

const Overview: NextPage = () => {
	useAuthProtection()
	const pathname = usePathname()
	const [verify, setVerify] = useState<boolean>(false)
	const { setVerifyState } = useThemeStore()
	const toggleActive = () => {
		setVerify(prev => !prev)
	}
	useEffect(() => {
		AOS.init({ duration: 1000, once: true })
	}, [])
	useEffect(() => {
		if (pathname !== '/assets') {
			setVerifyState(false)
		} else {
			setVerifyState(true)
		}
	}, [pathname])

	return (
		<section className='profile' data-aos='fade-up'>
			<Profile_info toggleActive={toggleActive} verify={verify} />
			<div className='profile__grid gap-[1.5rem] max-xl:grid max-xl:grid-cols-1'>
				<div className='flex flex-col gap-[1.5rem] h-full items-stretch justify-start'>
					{verify ? (
						<Profile_balance />
					) : (
						<Profile_verification toggleActive={toggleActive} />
					)}
					<Profile_payments />
				</div>

				<div className='max-w-[1331px] flex flex-col gap-[1.5rem]'>
					<Profile_industry unicClass='show__when' />
					<Profile_news />
					<Profile_qr />
				</div>
			</div>
		</section>
	)
}

export default Overview
