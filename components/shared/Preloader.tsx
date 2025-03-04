'use client'

import Lottie from 'lottie-react'
import { useThemeStore } from '../../store'
import animationData from '@/public/preloader/White_logo2.json'
import animationData2 from '@/public/preloader/Black_logo2.json'

const Preloader = () => {
	const { theme } = useThemeStore()

	return (
		<>
			{theme.toString() !== 'light' ? (
				<div className='preloader preloader__black'>
					<Lottie
						autoPlay
						animationData={animationData}
						className='lottie'
						loop={false}
					/>
				</div>
			) : (
				<div className='preloader preloader__white'>
					<Lottie
						autoPlay
						animationData={animationData2}
						className='lottie'
						loop={false}
					/>
				</div>
			)}
		</>
	)
}

export default Preloader
