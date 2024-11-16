'use client'
import { useResponsiveVisibility } from '@/hooks/useResponsiveVisibility'
import Template from '../Template'
import { TapBar, ProfileHeader, Profile_nav } from '@/components/shared/index'

interface RootLayoutProps {
	children: React.ReactNode
}
export default function ProfileRoot({
	children,
}: {
	children: React.ReactNode
}) {
	const { showHeader, showTapbar } = useResponsiveVisibility();

	return (
		<div className='profile__body'>
			{showHeader && <ProfileHeader auth />}
			<main className='profile__main site-holder'>
				<Profile_nav />
				<Template>{children}</Template>
			</main>
			{showTapbar && <TapBar />}
		</div>
	)
}
