import { Button } from '@nextui-org/button'
import Image from 'next/image'
import React, { useMemo } from 'react'

const Activity_progressLogo = () => {
	const data = useMemo(
		() => [
			{
				title: '40%',
			},
			{
				title: '30%',
			},
			{
				title: '20%',
			},
			{
				title: '10%',
			},
			{
				title: '0%',
			},
		],
		[]
	)
	const data2 = useMemo(
		() => [
			{
				title: '100%',
			},
			{
				title: '90%',
			},
			{
				title: '80%',
			},
			{
				title: '70%',
			},
			{
				title: '60%',
			},
			{
				title: '50%',
			},
		],
		[]
	)
	return (
		<section className='w-full max-h-[476px] min-h-[476px] lg:shadow-xl bg-none lg:dark:bg-[#3C3C3C66] rounded-[1000px] backdrop-blur-[6px] flex flex-col items-center justify-center gap-[30px]'>
			<div className='w-full lg:max-w-[70%] flex items-center justify-evenly gap-[20px] select-none'>
				<div className='flex flex-col gap-[24px] items-start '>
					{data &&
						data.map((item, index) => (
							<div className='flex flex-row items-center gap-[5px]' key={index}>
								<p className='bg-[#3F7EF3] h-[28px] lg:h-[48px] w-[28px] lg:w-[48px] text-[10px] lg:text-[18px] rounded-full flex items-center justify-center cursor-pointer transition duration shadow-lg text-white'>
									{item.title}
								</p>
								<span className='text-[#3F7EF3] whitespace-nowrap'>----</span>
							</div>
						))}
				</div>
				<Image
					src={'/main/activity/progress_logo.svg'}
					width={472}
					height={472}
					alt='Progress logo'
					priority
					quality={100}
					className='2xl:-mt-[159px] max-w-[212px] 2xl:max-w-full'
				/>
				<div className='flex flex-col gap-[24px] items-start'>
					{data2 &&
						data2.map((item, index) => (
							<div className='flex flex-row items-center gap-[5px]' key={index}>
								<span className='text-[#3F7EF3] whitespace-nowrap'>----</span>
								<p className='bg-[#3F7EF3] h-[28px] lg:h-[48px] w-[28px] lg:w-[48px] text-[10px] lg:text-[18px] rounded-full flex items-center justify-center cursor-pointer transition duration shadow-lg text-white'>
									{item.title}
								</p>
							</div>
						))}
				</div>
			</div>

			<ul className='flex lg:hidden flex-col text-[#888888] text-[18px]'>
				<li className="before:content-['•'] before:mr-2 list-none">
					Participate in project activities
				</li>
				<li className="before:content-['•'] before:mr-2 list-none">
					Make trading operations
				</li>
				<li className="before:content-['•'] before:mr-2 list-none">
					Upgrade reward cards
				</li>
			</ul>
			<Button
				className='flex lg:hidden items-center rounded-[50px] text-[18px]  font-medium px-[35px] border border-solid dark:border-white border-black'
				variant='bordered'
			>
				Description and criteria for upgrading
			</Button>
		</section>
	)
}

export default Activity_progressLogo
