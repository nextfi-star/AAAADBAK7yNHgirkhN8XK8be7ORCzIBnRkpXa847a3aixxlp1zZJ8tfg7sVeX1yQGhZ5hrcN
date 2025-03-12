import { Link } from '@/i18n/routing'
import { Lock } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { SecIcon } from '../ui/SecIcon'

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
				<SecIcon cls='lock min-w-[20px]' />
			</Link>
			<a
				className='header__navigation-item flex items-center gap-[10px] lock-btn'
				href='#'
			>
				{t('app')}
				<SecIcon cls='lock min-w-[20px]' />
			</a>
		</nav>
	)
}
