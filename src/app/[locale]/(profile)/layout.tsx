import { Metadata, NextPage } from 'next'
import {
	TapBar,
	ProfileHeader,
	Profile_nav,
} from '@/components/shared/index'
import Template from './Template'
import { ADMIN } from '@/components/shared/ADMIN'

export const metadata: Metadata = {
	title: 'Profile | Home',
	description: 'Your personal space in NextFi',
}

interface RootLayoutProps {
	children: React.ReactNode
}

const FormLayout: NextPage<RootLayoutProps> = ({ children }) => {
	return (
		<div className='profile__body '>
			<ProfileHeader auth />
			<main className='profile__main site-holder'>
				<Profile_nav />
				<Template>{children}</Template>
			</main>
			<TapBar />
			<ADMIN />
		</div>
	)
}
export default FormLayout
