import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export const Navigation = () => {
	const t = useTranslations('shared')
	return (
		<nav className='header__navigation header-nav flex justify-center items-center gap-[24px] w-full'>
			<Link className='header__navigation-item' href='/invest'>
				{t('investment')}
			</Link>
			<Link className='header__navigation-item' href='/activity'>
				{t('status')}
			</Link>
			<Link className='header__navigation-item' href='/token'>
				{t('token')}
			</Link>
			<a className='header__navigation-item' href='#'>
				{t('app')}
			</a>
		</nav>
	)
}
