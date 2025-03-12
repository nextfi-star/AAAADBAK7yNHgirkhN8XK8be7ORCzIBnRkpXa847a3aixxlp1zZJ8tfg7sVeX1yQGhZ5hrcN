import { Link } from '@/i18n/routing'
import { Lock } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export const Navigation = () => {
	const t = useTranslations('shared')
	return (
		<nav className='header__navigation header-nav flex justify-center items-center gap-[24px] w-full'>
			<Link
				className='header__navigation-item flex items-center gap-[10px] lock-btn'
				href='/invest'
			>
				{t('investment')}
				
			</Link>
			<Link className='header__navigation-item ' href='/activity'>
				{t('status')}
			</Link>
			<Link
				className='header__navigation-item flex items-center gap-[10px] lock-btn'
				href='#'
			>
				{t('token')}
				<Image
					src='/header_icons/security_lock.svg'
					width={20}
					height={20}
					alt='lock'
					className='lock'
				/>
			</Link>
			<a
				className='header__navigation-item flex items-center gap-[10px] lock-btn'
				href='#'
			>
				{t('app')}
				<Image
					src='/header_icons/security_lock.svg'
					width={20}
					height={20}
					alt='lock'
					className='lock'
				/>
			</a>
		</nav>
	)
}
