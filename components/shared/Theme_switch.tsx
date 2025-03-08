'use client'

import { Moon } from 'lucide-react'
import { useThemeStore } from '../../store/useChatStore'

interface Props {
	width?: string
}
export default function Theme_switch({ width }: Props) {
	const { theme, setTheme, initializeTheme } = useThemeStore()

	const toggleTheme = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark'

		setTheme(newTheme)
	}

	return (
		<button className='theme-switch' onClick={toggleTheme}>
			<Moon strokeWidth={1} />
		</button>
	)
}
