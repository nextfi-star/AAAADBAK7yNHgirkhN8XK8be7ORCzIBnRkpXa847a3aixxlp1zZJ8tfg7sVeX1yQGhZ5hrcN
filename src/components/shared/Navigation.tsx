import { useTranslations } from 'next-intl'
import { NextPage } from 'next'

export const Navigation: NextPage = () => {
	const t = useTranslations('nav')

	return (
		<nav className='header__navigation header-nav flex items-center gap-[24px]'>
			<a href='' className='header__navigation-item'>
				{t('home')}
			</a>
			<a href='' className='header__navigation-item'>
				{t('token')}
			</a>
			<a href='' className='header__navigation-item'>
				{t('activity')}
			</a>
			<a href='' className='header__navigation-item'>
				{t('how')}
			</a>
			<a href='' className='header__navigation-item'>
				{t('listing')}
			</a>
			<a href='' className='header__navigation-item'>
				{t('app')}
			</a>
			<a href='' className='header__navigation-item'>
				{t('faq')}
			</a>
		</nav>
	)
}
