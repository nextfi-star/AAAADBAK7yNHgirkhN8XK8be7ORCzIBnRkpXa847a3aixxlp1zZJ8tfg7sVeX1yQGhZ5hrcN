import { Link } from '@/i18n/routing'
import { Lock } from 'lucide-react'
import { useTranslations } from 'next-intl'

export const Navigation = () => {
	const t = useTranslations('shared')
	return (
		<nav className='header__navigation header-nav flex justify-center items-center gap-[24px] w-full'>
			<Link
				className='header__navigation-item flex items-center gap-[10px]'
				href='#'
			>
				{t('investment')}
				<Lock strokeWidth={1} className='max-w-[20px] ' />
			</Link>
			<Link className='header__navigation-item ' href='#'>
				{t('status')}
			</Link>
			<Link
				className='header__navigation-item flex items-center gap-[10px]'
				href='#'
			>
				{t('token')}
				<Lock strokeWidth={1} className='max-w-[20px] ' />
			</Link>
			<a className='header__navigation-item' href='#'>
				{t('app')}
			</a>
		</nav>
	)
}
