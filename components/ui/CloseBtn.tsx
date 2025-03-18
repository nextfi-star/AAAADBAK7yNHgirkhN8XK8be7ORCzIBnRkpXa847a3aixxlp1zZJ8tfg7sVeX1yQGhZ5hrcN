'use client'
import { useEffect } from 'react'

import { useThemeStore } from '../../store/useChatStore'

export const CloseBtn = () => {
	const { theme, initializeTheme } = useThemeStore()

	useEffect(() => {
		initializeTheme()
	}, [initializeTheme])

	return (
		<svg
			className='lucide lucide-x'
			fill='none'
			height='24'
			stroke={theme === 'dark' ? 'white' : '#3a3939'}
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='2'
			viewBox='0 0 24 24'
			width='24'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path d='M18 6 6 18' />
			<path d='m6 6 12 12' />
		</svg>
	)
}
