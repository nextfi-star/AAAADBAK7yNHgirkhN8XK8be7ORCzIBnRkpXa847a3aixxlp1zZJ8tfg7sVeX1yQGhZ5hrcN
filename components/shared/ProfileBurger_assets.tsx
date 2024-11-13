import { Link } from '@/i18n/routing'
import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'

const data = [
	{
		src: '/header_icons/profile_burger/deposit.svg',
		title: 'Deposit',
		tabName: 'Profile',
		href: '/profile',
	},
	{
		src: '/header_icons/profile_burger/withdraw.svg',
		title: 'Withdrawal',
		tabName: 'Security',
		href: '/withdrawal',
	},
	{
		src: '/header_icons/profile_burger/swap.svg',
		title: 'Swap',
		tabName: 'Verification',
		href: '/verify',
	},
	{
		src: '/header_icons/profile_burger/commission.svg',
		title: 'Fee Tier',
		tabName: 'Devices',
		href: '/devices',
	},
]

interface Props {
	handleShortcutClick: (val: any) => void
}
export const ProfileBurger_assets: NextPage<Props> = ({
	handleShortcutClick,
}) => {
	return (
		<section className='profile__burger-assets'>
			<h5 className='sec__title'>Manage Assets</h5>
			<div className='flex items-center justify-between'>
				{data &&
					data.map(item => (
						<Link
							href={item.href}
							key={item.title}
							className='flex flex-col items-center'
							onClick={() => handleShortcutClick(item.tabName)}
						>
							<Image
								priority
								alt={item.title}
								className='w-full'
								height={90}
								quality={100}
								src={item.src}
								width={90}
							/>
							{item.title}
						</Link>
					))}
			</div>
		</section>
	)
}
