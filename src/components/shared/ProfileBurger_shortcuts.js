import Image from 'next/image'
import React from 'react'
import { Link } from '../../i18n/routing'

const data = [
	{
		src: '/header_icons/profile_burger/support.svg',
		title: 'Support',
		href: '/verify',
	},
	{
		src: '/header_icons/profile_burger/security.svg',
		title: 'Security',
		href: '/security',
	},
	{
		src: '/header_icons/profile_burger/verifciation.svg',
		title: 'Verification',
		href: '/verify',
	},
	{
		src: '/header_icons/profile_burger/devices.svg',
		title: 'Devices',
		href: '/devices',
	},
]
export const ProfileBurger_shortcuts = () => {
	return (
		<section className='profile__burger-shortcuts'>
			<h5 className='sec__title'>Shortcuts</h5>
			<div className='flex items-center justify-between'>
				{data &&
					data.map(item => (
						<div key={item.title} className='flex flex-col items-center'>
							<Link className='flex flex-col items-center' href={item.href}>
								<Image
									src={item.src}
									width={70}
									height={70}
									quality={100}
									priority
									alt={item.title}
									className='w-full'
								/>
								{item.title}
							</Link>
						</div>
					))}
			</div>
		</section>
	)
}
