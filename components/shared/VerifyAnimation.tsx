'use client'
import animationData from '../../../public/animation/file.json'
import animationData2 from '../../../public/animation/sphera.json'
import animationData3 from '../../../public/animation/sphera_dark.json'
import Lottie from 'lottie-react'
import { useThemeStore } from '../../store'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'

const VerifyAnimation: NextPage = () => {
	const { theme } = useThemeStore()
	const [progress, setProgress] = useState(0)
	const [showStatus, setShowStatus] = useState(false)

	useEffect(() => {
		if (progress < 100) {
			const timer = setTimeout(() => setProgress(progress + 1), 50)
			return () => clearTimeout(timer)
		}
	}, [progress])

	return (
		<>
			{progress !== 100 ? (
				<div className='flex flex-col items-center gap-[20px]'>
					<h1 className='text-[24px] font-medium'>Identities verification</h1>
					<Lottie
						animationData={theme === 'dark' ? animationData3 : animationData2}
						className='max-w-[170px] w-full h-auto'
						loop={true}
						autoPlay
					/>
					<p className='text-[24px] font-medium'>{progress}%</p>
				</div>
			) : (
				<div className='flex flex-col items-center gap-[20px]'>
					<>
						{!showStatus ? (
							<>
								<h1 className='text-[24px] font-medium'>Document sent</h1>
								<Lottie
									animationData={animationData}
									className='max-w-[170px] w-full h-auto'
									loop={true}
									autoPlay
								/>
								<p className='text-[24px] font-medium text-center'>
									Wait for confirmation of identity verification
								</p>
								<span
									onClick={() => setShowStatus(prev => !prev)}
									className='text-[20px] font-medium max-w-[256px] w-full py-[10px] sm:py-[16px] bg-[#205BC9] rounded-[50px] text-white text-center'
								>
									Check Status
								</span>
							</>
						) : (
							<div className='flex flex-col items-center'>
								<h1 className='text-[24px] font-medium'>
									Identities verification
								</h1>
								<Lottie
									animationData={theme === 'dark' ? animationData3 : animationData2}
									className='max-w-[170px] w-full h-auto'
									loop={true}
									autoPlay
								/>
								<p className='text-[24px] font-medium text-center'>
									Verification in progress
								</p>
								<span className='text-[20px] font-medium w-full py-[16px] rounded-[50px] text-white text-center'>
									Please allow 24 hours for a response
								</span>
								<span className='text-[16px] text-[#888888] text-center cursor-pointer'>Are you waiting more than 24 hours for a response?</span>
							</div>
						)}
					</>
				</div>
			)}
		</>
	)
}

export default VerifyAnimation
