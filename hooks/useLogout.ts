'use client'
import { useThemeStore } from '@/store'
import { useParams, useRouter } from 'next/navigation'
const {  setEmail, setPassword,  } = useThemeStore()

export const handleLogout = () => {
  const router = useRouter()
	const locale = useParams().locale
  useThemeStore.getState().clearUser();
	localStorage.removeItem('zustand-store')
  setEmail('')
	setPassword('')

	router.push(`/${locale}/login?error=sessionExpired`)
}
