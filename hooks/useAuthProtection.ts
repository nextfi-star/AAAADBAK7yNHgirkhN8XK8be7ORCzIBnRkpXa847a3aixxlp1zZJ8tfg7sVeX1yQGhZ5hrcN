'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUserStore } from '@/hooks/useUserData'
import { useParams } from 'next/navigation'

const useAuthProtection = () => {
	const router = useRouter()
	const locale = useParams().locale
	const user = useUserStore(state => state.user)
	useEffect(() => {
		if (!user?.uid || !user?.csrf) {
			localStorage.removeItem('userData')
			localStorage.removeItem('profile-store')
			router.push(`/${locale}/login?error=sessionExpired`)
		}
	}, [locale, user, router])

	return user
}

export default useAuthProtection
