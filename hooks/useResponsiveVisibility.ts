import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export const useResponsiveVisibility = () => {
	const [isMobile, setIsMobile] = useState(false)
	const pathname = usePathname()

	const handleResize = () => {
		setIsMobile(window.innerWidth <= 431)
	}

	useEffect(() => {
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const hiddenRoutes = [
		/^\/[a-z]{2}\/swap$/, // /en/profile/swap, /ru/profile/swap
		/^\/[a-z]{2}\/withdrawal$/, // /en/swap, /ru/swap
		/^\/[a-z]{2}\/invest$/, // /en/dashboard, /ru/dashboard
		/^\/[a-z]{2}\/settings$/, // /en/settings, /ru/settings
	]

	const isHiddenRoute = hiddenRoutes.some(regex => regex.test(pathname))

	return {
		showHeader: !isMobile || !isHiddenRoute,
		showTapbar: !isMobile || !isHiddenRoute,
	}
}
