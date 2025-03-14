'use client'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import animationData2 from '@/public/animation/verify_anim_mini.json'
import { useEffect, useRef } from 'react'

const Withdrawal_animation = () => {
	const lottieRef = useRef<LottieRefCurrentProps>(null);
	const stopAtFrame = () => {
		const duration = lottieRef.current?.getDuration(true) || 0;
		lottieRef.current?.goToAndStop(duration * 0.9, true);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			stopAtFrame();
		}, 500); 
		return () => clearTimeout(timer);
	}, []);
	return (
		<>
			<div className='flex flex-col items-center gap-[20px]'>
				<Lottie
					lottieRef={lottieRef}
					autoPlay={true}
					animationData={animationData2}
					className='w-[277px] md:w-[376px] h-auto'
					loop={false}
				/>
			</div>
		</>
	)
}

export default Withdrawal_animation
