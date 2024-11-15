'use client'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import { NextPage } from 'next'
import animationData2 from '@/public/animation/verify_anim_mini.json'
import { useEffect, useRef } from 'react'

const Withdrawal_animation: NextPage = () => {
	const lottieRef = useRef<LottieRefCurrentProps>(null)
	const handleComplete = () => {
		const duration = lottieRef.current?.getDuration(true) || 0
		lottieRef.current?.goToAndStop(duration * 0.2, true)
	}
	return (
		<>
			<div className='flex flex-col items-center gap-[20px]'>
				<Lottie
					lottieRef={lottieRef}
					autoPlay={true}
					animationData={animationData2}
					className='max-w-[281px] w-full h-auto'
					loop={false}
					onComplete={handleComplete}
				/>
			</div>
		</>
	)
}

export default Withdrawal_animation
