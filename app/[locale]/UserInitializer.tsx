'use client'
import { useUserStore } from '@/hooks/useUserData'
import { useEffect } from 'react'

export function UserInitializer() {
  const loadUser = useUserStore((state) => state.loadUser)

  useEffect(() => {
    loadUser()
  }, [])

  return null
}
