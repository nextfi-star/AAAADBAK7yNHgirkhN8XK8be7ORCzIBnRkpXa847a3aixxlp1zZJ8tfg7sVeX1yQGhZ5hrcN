import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'

const data = [
	{
		src: '/header_icons/profile_burger/deposit.svg',
		title: 'Deposit',
		tabName: 'Profile',
	},
	{
		src: '/header_icons/profile_burger/withdraw.svg',
		title: 'Witharaw',
		tabName: 'Security',
	},
	{
		src: '/header_icons/profile_burger/swap.svg',
		title: 'Swap',
		tabName: 'Verification',
	},
	{
		src: '/header_icons/profile_burger/commission.svg',
		title: 'Commission',
		tabName: 'Authorized Devices',
	},
]
interface Props {
	handleShortcutClick: (val: any) => void
}
export const ProfileBurger_assets:NextPage<Props> = ({ handleShortcutClick }) => {
	return (
		<section className='profile__burger-assets'>
			<h5 className='sec__title'>Manage Assets</h5>
			<div className='flex items-center justify-between'>
				{data &&
					data.map(item => (
						<div key={item.title} className='flex flex-col items-center' onClick={() => handleShortcutClick(item.tabName)}>
							<Image
								src={item.src}
								width={90}
								height={90}
								quality={100}
								priority
								alt={item.title}
								className='w-full'
							/>
							{item.title}
						</div>
					))}
			</div>
		</section>
	)
}
