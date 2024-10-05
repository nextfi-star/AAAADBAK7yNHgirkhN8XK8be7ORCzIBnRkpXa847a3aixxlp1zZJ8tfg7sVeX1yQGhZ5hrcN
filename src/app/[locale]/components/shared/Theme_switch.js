'use client'
import { useEffect } from 'react'
import { useThemeStore } from '../../../../store'

export default function Theme_switch() {
	const { theme, setTheme, initializeTheme } = useThemeStore()
	useEffect(() => {
		initializeTheme() 
	}, [initializeTheme])

	const toggleTheme = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark'
		setTheme(newTheme) 
	}
	return (
		<button onClick={toggleTheme} className='theme-switch'>
			<svg
				width='44'
				height='44'
				viewBox='0 0 44 44'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M18.9647 10.7314C18.5508 12.9232 18.2309 14.9465 18.3816 16.7962C18.5541 18.9132 19.3412 20.8046 21.2425 22.5015C23.1727 24.2244 25.8525 24.7377 28.265 24.8009C30.1745 24.851 31.9792 24.6195 33.2118 24.4377C33.1752 24.5318 33.1386 24.626 33.102 24.7205C32.2985 26.7928 31.4584 28.9594 28.8008 31.1594C27.2058 32.2023 25.7171 32.9219 24.1295 33.2667C22.5455 33.6108 20.8324 33.5885 18.7815 33.1041C13.4271 31.1434 9.07987 25.3263 10.938 18.5787C12.0524 15.6338 13.4684 13.8677 14.974 12.7135C16.2442 11.7397 17.6013 11.1824 18.9647 10.7314Z'
					stroke='currentColor'
				/>
			</svg>
		</button>
	)
}
