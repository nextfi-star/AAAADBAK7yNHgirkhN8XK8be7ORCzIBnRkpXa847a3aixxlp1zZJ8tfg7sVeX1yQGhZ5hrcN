'use client'
import { useThemeStore } from '@/store'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export const useCheckPathAssets = () => {
	const { setVerifyState } = useThemeStore()
	const pathname = usePathname()

	useEffect(() => {
		if (pathname === '/assets') {
			setVerifyState(false)
		} else {
			setVerifyState(true)
		}
	}, [pathname])
}
