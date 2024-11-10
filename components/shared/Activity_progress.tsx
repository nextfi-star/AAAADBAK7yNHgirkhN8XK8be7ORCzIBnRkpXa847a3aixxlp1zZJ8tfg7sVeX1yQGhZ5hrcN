import React from 'react'

interface ProgressBarProps {
	progress: number
}

const Activity_progress: React.FC<ProgressBarProps> = ({ progress }) => {
	const filledCells = Math.round(progress / 4)
	const totalCells = 25

	return (
		<div
			className={
				'w-full lg:max-w-[85%] flex gap-[2px] sm:gap-[8px] 2xl:gap-[12px] p-[12px_56px] items-center justify-center lg:border-1 lg:border-solid lg:border-[#3F7EF3] rounded-[30px]'
			}
		>
			{Array.from({ length: totalCells }).map((_, index) => (
				<div
					key={index}
					className={`w-full h-full min-w-[12px] min-h-[28px] aspect-[1/2] bg-[#515151] rounded-[5px] transition-all duration-300 cursor-pointer hover:scale-[1.2] ${index < filledCells ? '!bg-[#3F7EF3]' : ''}`}
				/>
			))}
		</div>
	)
}

export default Activity_progress
