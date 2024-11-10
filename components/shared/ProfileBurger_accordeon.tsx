import { NextPage } from 'next'

import { Alert_email } from './Alert_email'
import { Alert_logpass } from './Alert_logpass'
import { Alert_nickname } from './Alert_nickname'
import { Alert_phone } from './Alert_phone'
import { ChangeRegion } from './ChangeRegion'
import { CloseAccount } from './CloseAccount'
import { FreezeAccount } from './FreezeAccount'
import { ProfileBurger_devices__accor } from './ProfileBurger_devices__accor'
import { ProfileBurger_profile_accor } from './ProfileBurger_profile_accor'
import { ProfileBurger_security_accor } from './ProfileBurger_security_accor'
import { ViewRegion } from './ViewRegion'
import { Alert_auntef } from './Alert_auntef'
import { ProfileBurger_verification_accor } from './ProfileBurger_verification_accor'
import { Button } from '@nextui-org/button'
import { Link } from '@/i18n/routing'

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
						<Alert_nickname propsItem={'Change'} />
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
						<ChangeRegion propsItem={'Change'} />
					</>
				),
			},
			{
				value: 'item-2',
				trigger: 'Country/Region',
				content: (
					<>
						Russia/Moscow
						<ViewRegion propsItem={'Change'} />
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
						<Alert_email propsItem={'Change'} />
					</>
				),
			},
			{
				value: 'item-2',
				trigger: 'Phone',
				content: (
					<>
						+7354654654
						<Alert_phone propsItem={'Change'} />
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
						<Alert_auntef propsItem={'Change'} />
					</>
				),
			},
			{
				icon: '/main/profile_security/phone.svg',
				value: 'item-2',
				trigger: 'Phone authentication',
				content: (
					<>
						<span>Change phone</span>
						<Alert_phone propsItem={'Change'} />
					</>
				),
			},
			{
				icon: '/main/profile_security/email.svg',
				value: 'item-3',
				trigger: 'Email authentication',
				content: (
					<>
						<span>Change email</span>
						<Alert_email propsItem={'Change'} />
					</>
				),
			},
			{
				icon: '/main/profile_security/login_pass.svg',
				value: 'item-4',
				trigger: 'Login password',
				content: (
					<>
						<span>Change login/password</span>
						<Alert_logpass propsItem={'Change'} />
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
						<FreezeAccount propsItem={'Freeze'} />
					</>
				),
			},
			{
				icon: '/main/profile_security/account_close.svg',
				value: 'item-2',
				trigger: 'Close account',
				content: (
					<>
						<span>Close account</span>
						<CloseAccount propsItem={'Close'} />
					</>
				),
			},
		],
	},
]
const verifData = [
	{
		items: [
			{
				value: 'item-1',
				trigger: 'Verification',
				icon: '/main/profile_security/auth_app.svg',
				content: (
					<>
						<span>You are not verified </span>
						<Link href='/verify'>
							<Button className='text-[14px] sm:text-[20px] text-white rounded-[50px] bg-[#205BC9] px-[50px] py-[4px] xl:py-[20px] hover:opacity-[.9] hover:bg-[#205BC9]'>
								Verify now
							</Button>
						</Link>
					</>
				),
			},
		],
	},
]
const authData = [
	{
		title: 'Authentication methods',
		items: [
			{
				value: 'item-1',
				trigger: 'Device',
				icon: '/header_icons/profile_burger/device_phone.svg',
				content: (
					<>
						<span className='text-[14px] text-[#BDBDBD]'>Iphone 15</span>
						<span className='h-[17px] w-[1px] bg-[#BDBDBD]' />
						<span className='text-[14px] text-[#BDBDBD]'>MacBook PRO</span>
						<span className='h-[17px] w-[1px] bg-[#BDBDBD]' />
						<span className='text-[14px] text-[#BDBDBD]'>Ipad mini 6</span>
					</>
				),
			},
			{
				icon: '/header_icons/profile_burger/device_location.svg',
				value: 'item-2',
				trigger: 'Location of autorization',
				content: 'Location of autorization content',
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
						<FreezeAccount propsItem={'Freeze'} />
					</>
				),
			},
			{
				icon: '/main/profile_security/account_close.svg',
				value: 'item-2',
				trigger: 'Close account',
				content: (
					<>
						<span>Close account</span>
						<CloseAccount propsItem={'Close'} />
					</>
				),
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
			{activeTab === 'Profile' && (
				<ProfileBurger_profile_accor data={profileData} />
			)}
			{activeTab === 'Security' && (
				<ProfileBurger_security_accor data={securityData} />
			)}
			{activeTab === 'Verification' && (
				<ProfileBurger_verification_accor data={verifData} />
			)}
			{activeTab === 'Authorized Devices' && <ProfileBurger_devices__accor />}
		</div>
	)
}
