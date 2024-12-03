import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'

const useAuthProtection = () => {
  const router = useRouter()
  const locale = useParams().locale
  useEffect(() => {
    const userData = localStorage.getItem('userData') 
    if (!userData) {
      localStorage.removeItem('userData')
      router.push(`/${locale}/login?error=sessionExpired`)
    }
  }, [router])
}

export default useAuthProtection