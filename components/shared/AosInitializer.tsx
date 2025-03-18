'use client'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export function AosInitializer() {
	useEffect(() => {
		Aos.init({ duration: 1000, once: true })
	}, [])
	return null
}
