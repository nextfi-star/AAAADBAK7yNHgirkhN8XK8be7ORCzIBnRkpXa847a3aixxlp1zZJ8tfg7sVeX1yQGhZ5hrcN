import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useMemo } from 'react'

interface Props {
	handleShortcutClick: (val: any) => void
}
export const ProfileBurger_shortcuts = ({ handleShortcutClick }: Props) => {
  const t = useTranslations('burger')
	const data = useMemo(
		() => [
			{
				src: '/header_icons/profile_burger/support.svg',
				title: t('support'),
				tabName: 'Profile',
				href: '/profile',
			},
			{
				src: '/header_icons/profile_burger/security.svg',
				title: t('security'),
				tabName: 'Security',
				href: '/security',
			},
			{
				src: '/header_icons/profile_burger/verifciation.svg',
				title: t('verification'),
				tabName: 'Verification',
				href: '/verify',
			},
			{
				src: '/header_icons/profile_burger/devices.svg',
				title: t('devices'),
				tabName: 'Devices',
				href: '/devices',
			},
		],
		[]
	)
	return (
		<section className='profile__burger-shortcuts'>
			<h5 className='sec__title'>Shortcuts</h5>
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
