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
				'w-full lg:max-w-[85%] flex gap-[1px] sm:gap-[8px] 2xl:gap-[12px] p-[12px_56px] items-center justify-center  border-1 border-solid border-[#3F7EF3] rounded-[30px]'
			}
		>
			{Array.from({ length: totalCells }).map((_, index) => (
				<div
					key={index}
					className={`min-w-[13px] w-full max-w-[40px] min-h-[32px] lg:min-h-[52px] bg-[#515151] rounded-[5px] transition-all duration-300 ${index < filledCells ? '!bg-[#3F7EF3]' : ''}`}
				/>
			))}
		</div>
	)
}

export default Activity_progress
