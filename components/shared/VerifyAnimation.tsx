'use client'
import animationData from '@/public/animation/file.json'
import animationData2 from '@/public/animation/sphera.json'
import animationData3 from '@/public/animation/sphera_dark.json'
import { useThemeStore } from '@/store/useChatStore'
import Lottie from 'lottie-react'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import ArrowBracket from '../ui/ArrowBracket'
import { Link } from '@/i18n/routing'

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
			{showStatus ? (
				<div className='w-full flex flex-col min-h-[100vh]'>
					<span className='text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-[#888888] flex items-center gap-[15px]'>
						<Link
							className='text-black dark:text-white bg-transparent text-[14px] md:text-[18px] border-none shadow-none p-0 hover:bg-transparent'
							href={'/over'}
						>
							<ArrowBracket
								className='rotate-90'
								color={theme === 'dark' ? 'white' : 'black'}
								height={25}
								width={25}
							/>
						</Link>
					</span>
					<div className='flex flex-col items-center'>
						<h1 className='text-[24px] font-medium'>{t('identVerif')}</h1>
						<Lottie
							autoPlay
							animationData={theme === 'dark' ? animationData3 : animationData2}
							className='max-w-[170px] w-full h-auto'
							loop={true}
						/>
						<p className='text-[24px] font-medium text-center'>
							{t('verifProg')}
						</p>
						<span className='text-[20px] font-medium w-full py-[16px] rounded-[50px] text-white text-center'>
							{t('24hours')}
						</span>
					</div>
				</div>
			) : (
				<>
					{progress !== 100 ? (
						<div className='flex flex-col items-center gap-[20px]'>
							<h1 className='text-[24px] font-medium'>{t('identVerif')}</h1>
							<Lottie
								autoPlay
								animationData={
									theme === 'dark' ? animationData3 : animationData2
								}
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
			)}
		</>
	)
}

export default VerifyAnimation
