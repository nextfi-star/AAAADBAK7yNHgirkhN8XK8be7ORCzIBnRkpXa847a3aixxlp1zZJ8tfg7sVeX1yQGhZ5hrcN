'use client'
import Template from "../Template";
import { TapBar, ProfileHeader, Profile_nav } from "@/components/shared/index";
import { useResponsiveVisibility } from '@/hooks/useResponsiveVisibility'
<<<<<<< HEAD
import { TapBar, ProfileHeader, Profile_nav } from '@/components/shared/index'
=======
>>>>>>> 1685d430c8f4dc1d32d89b0c1d64ff425bbada88
import { Footer } from '@/components/shared/Footer'
import { A_Chat } from '@/components/shared/A_Chat'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Aos from 'aos'

export default function ProfileRoot({
	children,
}: {
	children: React.ReactNode
}) {
	const { showHeader, showTapbar } = useResponsiveVisibility()
	useEffect(() => {
		Aos.init({ duration: 1000, once: true })
	}, [])
	return (
		<div className='profile__body !pb-0 flex flex-col justify-between'>
			{showHeader && <ProfileHeader auth />}
			<main className='profile__main site-holder flex-grow'>
				<Profile_nav />
				<div>{children}</div>
			</main>
			<A_Chat />
			<Footer />
			{showTapbar && <TapBar />}
		</div>
	)
}
