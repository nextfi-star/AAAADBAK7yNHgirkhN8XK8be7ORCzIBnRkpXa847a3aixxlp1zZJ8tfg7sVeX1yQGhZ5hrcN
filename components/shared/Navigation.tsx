import { Link } from '@/i18n/routing'

export const Navigation = () => {
	return (
		<nav className='header__navigation header-nav flex justify-center items-center gap-[24px] w-full'>
			<Link className='header__navigation-item' href='/invest'>
				Investment
			</Link>
			<Link className='header__navigation-item' href='/activity'>
				Status
			</Link>
			<Link className='header__navigation-item' href='/token'>
				Token
			</Link>
			<a className='header__navigation-item' href='#'>
				App
			</a>
		</nav>
	)
}
