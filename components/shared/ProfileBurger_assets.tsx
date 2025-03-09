import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useMemo } from 'react'

interface Props {
	handleShortcutClick: (val: any) => void
}
export const ProfileBurger_assets = ({ handleShortcutClick }: Props) => {
	const t = useTranslations('shared')
	const data = useMemo(
		() => [
			{
				src: '/header_icons/profile_burger/deposit.svg',
				title: t('deposit'),
				tabName: 'Profile',
				href: '/profile',
			},
			{
				src: '/header_icons/profile_burger/withdraw.svg',
				title: t('withdrawal'),
				tabName: 'Security',
				href: '/withdrawal',
			},
			{
				src: '/header_icons/profile_burger/swap.svg',
				title: t('swap'),
				tabName: 'Verification',
				href: '#',
			},
			{
				src: '/header_icons/profile_burger/commission.svg',
				title: t('levels'),
				tabName: 'Profile',
				href: '/tier',
			},
		],
		[]
	)
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
