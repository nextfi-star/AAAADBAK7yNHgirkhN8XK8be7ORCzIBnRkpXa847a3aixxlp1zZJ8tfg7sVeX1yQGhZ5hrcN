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
		/^\/[a-z]{2}\/swap$/,
		/^\/[a-z]{2}\/withdrawal$/, 
		/^\/[a-z]{2}\/invest$/,
		/^\/[a-z]{2}\/tier$/, 
		/^\/[a-z]{2}\/deposit$/, 
	]

	const isHiddenRoute = hiddenRoutes.some(regex => regex.test(pathname))

	return {
		showHeader: !isMobile || !isHiddenRoute,
		showTapbar: !isMobile || !isHiddenRoute,
		showFooter: !isMobile || !isHiddenRoute,
	}
}
