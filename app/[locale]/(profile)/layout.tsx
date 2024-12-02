'use client'
import { useResponsiveVisibility } from '@/hooks/useResponsiveVisibility'
import Template from '../Template'
import { TapBar, ProfileHeader, Profile_nav } from '@/components/shared/index'
import { Footer } from '@/components/shared/Footer'
import { A_Chat } from '@/components/shared/A_Chat'

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
				<Template>{children}</Template>
			</main>
			<A_Chat />
			<Footer />
			{showTapbar && <TapBar />}
		</div>
	)
}
