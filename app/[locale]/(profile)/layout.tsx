'use client'
import { TapBar, ProfileHeader, Profile_nav } from '@/components/shared/index'
import { useResponsiveVisibility } from '@/hooks/useResponsiveVisibility'
import { Footer } from '@/components/shared/Footer'
import { A_Chat } from '@/components/shared/A_Chat'
import 'aos/dist/aos.css'

export default function ProfileRoot({
	children,
}: {
	children: React.ReactNode
}) {
	const { showHeader, showTapbar } = useResponsiveVisibility()
	
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
