'use client'
import React, { useState } from 'react'
import { Button } from "@heroui/button"
import Activity_progress from './Activity_progress'
import Activity_awards from './Activity_awards'
import Confetti from 'react-confetti'

const Activity_personal = () => {
	const [progress, setProgress] = useState(0)
	const [level, setLevel] = useState(1)
	const [showConfetti, setShowConfetti] = useState(false)

	const handleIncreaseProgress = () => {
		setProgress(prev => (prev + 4 > 100 ? 100 : prev + 4))
	}
	const handleClick = () => {
		setShowConfetti(true)
		setTimeout(() => setShowConfetti(false), 5000)
	}
	const levelUp = () => {
		if (progress >= 100) setLevel(prev => prev + 1)
		setProgress(0)
		handleClick()
	}

	return (
		<>
			<section className='w-full max-h-[476px] lg:py-[40px] xl:shadow-medium xl:dark:bg-[#3C3C3C66] xl:rounded-[1000px] xl:backdrop-blur-[6px] flex items-start lg:items-center justify-center relative'>
				<article className='flex flex-col items-center gap-[15px] lg:gap-[40px] w-full relative'>
					<h1 className='text-[24px] lg:text-[42px] font-bold lg:mb-[40px] uppercase'>
						Your Activity
					</h1>

					<Activity_progress progress={progress} />
					{/* MOBILE */}
					<div className='w-full flex flex-col items-center gap-[10px]'>
						<div className='w-full flex lg:hidden items-center justify-between gap-[5px]'>
							<h5 className='text-[#3F7EF3] text-[20px] font-medium '>
								Level {level}
							</h5>
							<span className='min-w-[54px] text-[20px] font-medium text-end'>
								{progress}%
							</span>
						</div>
						<Button
							className={`${progress === 100 ? '!bg-[#3F7EF3]' : ''} !cursor-pointer rounded-[50px] text-[18px] text-white px-[30px] py-[25px] lg:hidden`}
							disabled={progress < 100}
							onClick={levelUp}
						>
							Next Level
						</Button>
					</div>
					{showConfetti && (
						<Confetti
							style={{
								zIndex: 1000,
								pointerEvents: 'none',
							}}
							className='lg:w-full'
							recycle={false}
						/>
					)}
					{/* DESKTOP */}
					<div className='w-full hidden lg:flex items-center justify-between gap-[5px] px-[140px]'>
						<h5 className='text-[#3F7EF3] text-[32px] font-medium w-[159px]'>
							Level {level}
						</h5>
						<span className='text-[32px] font-medium text-end w-[159px]'>
							{progress}%
						</span>
						<Button
							className={`${progress === 100 ? '!bg-[#3F7EF3]' : ''} cursor-pointer rounded-[50px] text-[32px] text-white px-[30px] py-[25px]`}
							disabled={progress < 100}
							onClick={levelUp}
						>
							Next Level
						</Button>
					</div>
				</article>
			</section>
			<Activity_awards
				progress={progress}
				handleIncreaseProgress={handleIncreaseProgress}
			/>
		</>
	)
}

export default Activity_personal
