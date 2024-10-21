import { Link } from '@/i18n/routing'
import Image from 'next/image'
import React from 'react'

const data = [
	{
		src: '/header_icons/profile_burger/deposit.svg',
		title: 'Deposit',
    href: '/verify',
	},
	{
		src: '/header_icons/profile_burger/withdraw.svg',
		title: 'Witharaw',
    href: '/security',
	},
	{
		src: '/header_icons/profile_burger/swap.svg',
		title: 'Swap',
    href: '/verify',
	},
	{
		src: '/header_icons/profile_burger/commission.svg',
		title: 'Commission',
    href: '/devices',
	},
]
export const ProfileBurger_assets = () => {
	return (
		<section className='profile__burger-assets'>
			<h5 className='sec__title'>Manage Assets</h5>
			<div className='flex items-center justify-between'>
				{data &&
					data.map(item => (
						<Link href={item.href} key={item.title} className='flex flex-col items-center'>
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
						</Link>
					))}
			</div>
		</section>
	)
}
