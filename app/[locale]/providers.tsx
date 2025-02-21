'use client'
import { NextUIProvider } from '@nextui-org/system'
import { useRouter } from 'next/navigation'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'
import { useThemeStore } from '@/store'
import { useEffect } from 'react'
export interface ProvidersProps {
	children: React.ReactNode
	themeProps?: ThemeProviderProps
}

export function Providers({ children, themeProps }: ProvidersProps) {
	const router = useRouter()
	const initializeTheme = useThemeStore((state) => state.initializeTheme);
	useEffect(() => {
		initializeTheme()
	}, [])
	return (
		<NextUIProvider navigate={router.push}>
			<NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
		</NextUIProvider>
	)
}
