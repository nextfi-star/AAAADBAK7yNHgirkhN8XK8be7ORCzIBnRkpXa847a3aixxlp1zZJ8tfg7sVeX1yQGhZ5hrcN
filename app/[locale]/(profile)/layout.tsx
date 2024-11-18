'use client'
import { useResponsiveVisibility } from '@/hooks/useResponsiveVisibility'
import Template from '../Template'
import { TapBar, ProfileHeader, Profile_nav } from '@/components/shared/index'
import { Footer } from '@/components/shared/Footer'

interface RootLayoutProps {
	children: React.ReactNode
}
export default function ProfileRoot({
	children,
}: {
	children: React.ReactNode
}) {
	const { showHeader, showTapbar, showFooter } = useResponsiveVisibility()

	return (
		<div className='profile__body !pb-0'>
			{showHeader && <ProfileHeader auth />}
			<main className='profile__main site-holder'>
				<Profile_nav />
				<Template>{children}</Template>
			</main>
			{showFooter && <Footer />}
			{showTapbar && <TapBar />}
		</div>
	)
}
