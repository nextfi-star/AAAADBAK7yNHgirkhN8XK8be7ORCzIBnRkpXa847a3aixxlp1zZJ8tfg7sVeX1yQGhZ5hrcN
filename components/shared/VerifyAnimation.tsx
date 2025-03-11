'use client'
import animationData from '@/public/animation/file.json'
import animationData2 from '@/public/animation/sphera.json'
import animationData3 from '@/public/animation/sphera_dark.json'
import { useThemeStore } from '@/store/useChatStore'
import Lottie from 'lottie-react'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

const VerifyAnimation = () => {
	const { theme, setGlobalVerifState, setLocalVerif } = useThemeStore()
	const [progress, setProgress] = useState(0)
	const [showStatus, setShowStatus] = useState(false)

	const t = useTranslations('verify')

	const Handler = () => {
		setLocalVerif(true)
		setShowStatus(prev => !prev)
		setGlobalVerifState(true)
	}

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
					<h1 className='text-[24px] font-medium'>{t('identVerif')}</h1>
					<Lottie
						autoPlay
						animationData={theme === 'dark' ? animationData3 : animationData2}
						className='max-w-[170px] w-full h-auto'
						loop={true}
					/>
					<p className='text-[24px] font-medium'>{progress}%</p>
				</div>
			) : (
				<div className='flex flex-col items-center gap-[20px]'>
							<>
								<h1 className='text-[24px] font-medium'>{t('sentDoc')}</h1>
								<Lottie
									autoPlay
									animationData={animationData}
									className='max-w-[170px] w-full h-auto'
									loop={true}
								/>
								<p className='text-[24px] font-medium text-center'>
									{t('waitCmf')}
								</p>
								<span
									className='text-[20px] font-medium max-w-[256px] w-full py-[10px] sm:py-[16px] bg-[#205BC9] rounded-[50px] text-white text-center hover:cursor-pointer'
									onClick={Handler}
								>
									{t('checkStatus')}
								</span>
							</>
				</div>
			)}
		</>
	)
}

export default VerifyAnimation
