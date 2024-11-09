'use client'
import React, { useEffect, useState } from 'react'
import { Button } from '@nextui-org/button'
import Activity_progress from './Activity_progress'
import Activity_awards from './Activity_awards'
const Activity_personal = () => {
	const [progress, setProgress] = useState(0)
	const [level, setLevel] = useState(1)

	const handleIncreaseProgress = () => {
		setProgress(prev => (prev + 4 > 100 ? 100 : prev + 4))
	}
	const levelUp = () => {
		if (progress >= 100) setLevel(prev => prev + 1)
		setProgress(0)
	}

	return (
		<>
			<section className='w-full max-h-[476px] min-h-[476px] lg:shadow-xl lg:dark:bg-[#3C3C3C66] rounded-[1000px] backdrop-blur-[6px] flex items-center justify-center'>
				<article className='flex flex-col items-center gap-[40px] w-full'>
					<h1 className='text-[24px] lg:text-[42px] font-bold mb-[40px] uppercase'>
						Your Activity
					</h1>
					{/* MOBILE */}
					<div className='w-full flex lg:hidden items-center justify-between gap-[5px]'>
						<h5 className='text-[#3F7EF3] text-[20px] font-medium '>
							Level {level}
						</h5>
						<span className='text-[20px] font-medium text-end'>
							{progress}%
						</span>
					</div>
					<Activity_progress progress={progress} />

					<Button
						className={`${progress === 100 ? '!bg-[#3F7EF3]' : ''} rounded-[50px] text-[18px] text-white px-[30px] py-[25px] lg:hidden`}
						disabled={progress < 100}
						onClick={levelUp}
					>
						Next Level
					</Button>
					{/* DESKTOP */}
					<div className='w-full hidden lg:flex items-center justify-between gap-[5px] px-[140px]'>
						<h5 className='text-[#3F7EF3] text-[32px] font-medium w-[159px]'>
							Level {level}
						</h5>
						<span className='text-[32px] font-medium text-end w-[159px]'>
							{progress}%
						</span>
						<Button
							className={`${progress === 100 ? '!bg-[#3F7EF3]' : ''} rounded-[50px] text-[32px] text-white px-[30px] py-[25px]`}
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
