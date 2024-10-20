'use client'
import animationData from '../../../public/animation/file.json'
import animationData2 from '../../../public/animation/sphera.json'
import animationData3 from '../../../public/animation/sphera_dark.json'
import Lottie from 'lottie-react'
import { useThemeStore } from '../../store'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Link } from '@/i18n/routing'

const VerifyAnimation: NextPage = () => {
	const { theme } = useThemeStore()
	const [progress, setProgress] = useState(0)

	useEffect(() => {
		const timer = setTimeout(() => setProgress(100), 3000)
		return () => clearTimeout(timer)
	}, [])

	return (
		<>
			{progress !== 100 ? (
				<div className='flex flex-col items-center gap-[24px]'>
					<h1 className='text-[24px] font-medium'>Identities verification</h1>
					<Lottie
						animationData={theme === 'dark' ? animationData3 : animationData2}
						className='maw-w-[152px] w-full h-auto'
						loop={true}
						autoPlay
					/>
					<p className='text-[24px] font-medium'>Verification in progress</p>
					<p className='text-[24px] font-medium'>
						Please allow 24 hours for a response
					</p>
				</div>
			) : (
				<div className='flex flex-col items-center gap-[24px]'>
					<h1 className='text-[24px] font-medium'>Document sent</h1>
					<Lottie
						animationData={animationData}
						className='maw-w-[152px] w-full h-auto'
						loop={true}
						autoPlay
					/>
					<p className='text-[24px] font-medium'>
						Wait for confirmation of identity verification
					</p>
					<Link href={'/over'} className='text-[20px] font-medium max-w-[256px] w-full py-[16px] bg-[#205BC9] rounded-[50px] text-white text-center'>
						Check Status
					</Link>
				</div>
			)}
		</>
	)
}

export default VerifyAnimation
