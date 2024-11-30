import { useThemeStore } from '@/store'
import { useParams, useRouter } from 'next/navigation'
const {  setEmail } = useThemeStore()
export const handleLogout = () => {
  const router = useRouter()
	const locale = useParams().locale
  useThemeStore.getState().clearUser();
	localStorage.removeItem('zustand-store')
  setEmail('')
	
	router.push(`/${locale}/login?error=sessionExpired`)
}
