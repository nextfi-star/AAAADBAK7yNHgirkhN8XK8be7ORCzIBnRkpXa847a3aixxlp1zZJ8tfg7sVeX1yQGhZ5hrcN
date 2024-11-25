import { NextPage } from 'next'
import React from 'react'

interface ProgressBarProps {
	progress: number
}

export const Invest_progressBar: NextPage<ProgressBarProps> = ({ progress }) => {
	const totalCells = 19
	const filledCells = Math.round((progress / 100) * totalCells)

	return (
		<div
			className={
				'w-fit flex gap-[2px] items-center justify-center'
			}
		>
			{Array.from({ length: totalCells }).map((_, index) => (
				<div
					key={index}
					className={`w-full h-full max-w-[12px] min-h-[28px] aspect-[1/2] bg-[#BDBDBD] dark:bg-[#515151] rounded-[2px] transition-all duration-300 cursor-pointer hover:scale-[1.2] ${index < filledCells ? '!bg-[#3F7EF3]' : ''}`}
				/>
			))}
		</div>
	)
}
