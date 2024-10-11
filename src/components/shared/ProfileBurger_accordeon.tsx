import { NextPage } from 'next'
import { ProfileBurger_profile_accor } from './ProfileBurger_profile_accor'
import { ProfileBurger_security_accor } from './ProfileBurger_security_accor'
import { Button } from '../ui/button'

interface Props {
	showSection: boolean
	activeTab: string
}
const profileData = [
	{
		title: 'Personal info',
		icon: '/header_icons/profile_burger/accord_info.svg',
		items: [
			{
				value: 'item-1',
				trigger: 'Nickname',
				content: (
					<>
						<span>zya***@rambler.ru</span>
						<Button className='bg-transparent text-black dark:text-white border border-solid border-black dark:border-white rounded-[50px] hover:bg-transparent hover:text-blue-600 hover:border-blue-600'>
							Change
						</Button>
					</>
				),
			},
			{
				value: 'item-2',
				trigger: 'User ID',
				content: '354654654',
			},
		],
	},
	{
		title: 'Verification info',
		icon: '/header_icons/profile_burger/verifciation.svg',
		items: [
			{
				value: 'item-1',
				trigger: 'Identity certification',
				content: (
					<>
						<span>Identity</span>
						<Button className='bg-transparent text-black dark:text-white border border-solid border-black dark:border-white rounded-[50px] hover:bg-transparent hover:text-blue-600 hover:border-blue-600'>
							Change
						</Button>
					</>
				),
			},
			{
				value: 'item-2',
				trigger: 'Country/Region',
				content: (
					<>
						Russia/Moscow
						<Button className='bg-transparent text-black dark:text-white border border-solid border-black dark:border-white rounded-[50px] hover:bg-transparent hover:text-blue-600 hover:border-blue-600'>
							Change
						</Button>
					</>
				),
			},
		],
	},
	{
		title: 'Account details',
		icon: '/header_icons/profile_burger/settings_burger.svg',
		items: [
			{
				value: 'item-1',
				trigger: 'Email',
				content: (
					<>
						<span>zya***@rambler.ru</span>
						<Button className='bg-transparent text-black dark:text-white border border-solid border-black dark:border-white rounded-[50px] hover:bg-transparent hover:text-blue-600 hover:border-blue-600'>
							Change
						</Button>
					</>
				),
			},
			{
				value: 'item-2',
				trigger: 'Phone',
				content: (
					<>
						+7354654654
						<Button className='bg-transparent text-black dark:text-white border border-solid border-black dark:border-white rounded-[50px] hover:bg-transparent hover:text-blue-600 hover:border-blue-600'>
							Change
						</Button>
					</>
				),
			},
			{
				value: 'item-3',
				trigger: 'Trading fee tier',
				content: '1-tier',
			},
		],
		no_line: '',
	},
]
const securityData = [
	{
		title: 'Authentication methods',
		items: [
			{
				value: 'item-1',
				trigger: 'Authenticator app',
				icon: '/main/profile_security/auth_app.svg',
				content: (
					<>
						<span>
							Use authentication codes when managing assets and other functions
						</span>
						<Button className='bg-transparent text-black dark:text-white border border-solid border-black dark:border-white rounded-[50px] hover:bg-transparent hover:text-blue-600 hover:border-blue-600'>
							Change
						</Button>
					</>
				),
			},
			{
				icon: '/main/profile_security/phone.svg',
				value: 'item-2',
				trigger: 'Phone authentication',
				content: 'Phone authentication content',
			},
			{
				icon: '/main/profile_security/email.svg',
				value: 'item-3',
				trigger: 'Email authentication',
				content: (
					<>
						<span>
							Change email
						</span>
						<Button className='bg-transparent text-black dark:text-white border border-solid border-black dark:border-white rounded-[50px] hover:bg-transparent hover:text-blue-600 hover:border-blue-600'>
							Change
						</Button>
					</>
				),
			},
			{
				icon: '/main/profile_security/login_pass.svg',
				value: 'item-4',
				trigger: 'Login password',
				content: (
					<>
						<span>
							Change login/password
						</span>
						<Button className='bg-transparent text-black dark:text-white border border-solid border-black dark:border-white rounded-[50px] hover:bg-transparent hover:text-blue-600 hover:border-blue-600'>
							Change
						</Button>
					</>
				),
			},
		],
	},
	{
		title: 'Account management',
		items: [
			{
				value: 'item-1',
				trigger: 'Freeze account',
				icon: '/main/profile_security/account_freeze.svg',
				content: (
					<>
						<span>Freeze account</span>
						<Button className='bg-transparent text-black dark:text-white border border-solid border-black dark:border-white rounded-[50px] hover:bg-transparent hover:text-blue-600 hover:border-blue-600'>
							Change
						</Button>
					</>
				),
			},
			{
				icon: '/main/profile_security/account_close.svg',
				value: 'item-2',
				trigger: 'Close account',
				content: 'Close your account',
			},
		],
	},
]
export const ProfileBurger_accordeon: NextPage<Props> = ({
	showSection,
	activeTab,
}) => {
	return (
		<div className={`accor__wrapper ${!showSection ? 'scrollY' : ''}`}>
			{/* Аккордеон  */}
			{activeTab === 'Profile' && (
				<ProfileBurger_profile_accor profileData={profileData} />
			)}
			{activeTab === 'Security' && (
				<ProfileBurger_security_accor securityData={securityData} />
			)}
		</div>
	)
}