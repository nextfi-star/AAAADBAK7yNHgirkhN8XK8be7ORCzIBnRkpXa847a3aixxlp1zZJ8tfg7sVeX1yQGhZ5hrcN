'use client'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import {
	Era,
	Faq,
	Get_started,
	Header,
	How,
	Intro,
	Invest,
	Levels,
} from '@/components/shared'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const Home = () => {
	const [loading, setLoading] = useState<boolean>(true)
	const Preloader = dynamic(() => import('@/components/shared/Preloader'), {
		ssr: false,
	})
	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 3000)
		return () => clearTimeout(timer)
	}, [])

	if (loading) {
		return <Preloader />
	}
	return (
		<>
			<Header auth={false} />

			<Intro />

			<Era />

			<How />

			<Levels />

			<Get_started />

			<Invest />

			<Faq />
		</>
	)
}

export default Home
