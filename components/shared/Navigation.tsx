import { NextPage } from 'next'
import { Link } from '@/i18n/routing'

export const Navigation: NextPage = () => {
	return (
		<nav className='header__navigation header-nav flex justify-center items-center gap-[24px] w-full'>
			<Link className='header__navigation-item' href='/invest'>
				Investment
			</Link>
			<Link className='header__navigation-item' href='/activity'>
				Activity
			</Link>
			<a className='header__navigation-item' href='#'>
				Token
			</a>
			<a className='header__navigation-item' href='#'>
				App
			</a>
		</nav>
	)
}
