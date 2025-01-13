import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'

const useAuthProtection = () => {
	const [user, setUser] = useState<Record<string, any> | null>(null)
	const router = useRouter()
	const locale = useParams().locale

	useEffect(() => {
		const storedData = localStorage.getItem('userData')
		if (storedData) {
			setUser(JSON.parse(storedData))
		}

		// if (!storedData || !JSON.parse(storedData)?.csrf) {
		// 	localStorage.removeItem('userData')
		// 	router.push(`/${locale}/login?error=sessionExpired`)
		// }
	}, [locale, router])

	return user
}

export default useAuthProtection
