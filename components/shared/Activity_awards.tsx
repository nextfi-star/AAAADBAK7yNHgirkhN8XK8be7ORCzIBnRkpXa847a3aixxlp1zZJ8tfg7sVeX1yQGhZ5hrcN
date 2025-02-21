'use client'
import { Button } from '@nextui-org/button'
import { NextPage } from 'next'
import React, { useMemo, useState } from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

interface Props {
	progress: number
	handleIncreaseProgress: () => void
}
const Activity_awards = ({
	progress,
	handleIncreaseProgress,
}: Props) => {
	const data = useMemo(
		() => [
			{
				percent: '+2',
				title: 'Oil product',
				id: 1,
			},
			{
				percent: '-15 ',
				title: 'Fee',
				id: 2,
			},
			{
				percent: '+10 ',
				title: 'Strap',
				id: 3,
			},
			{
				percent: '+22 ',
				title: 'Oil product',
				id: 4,
			},
			{
				percent: '+32 ',
				title: 'Strap',
				id: 5,
			},
			{
				percent: '-22 ',
				title: 'Fee',
				id: 6,
			},
			{
				percent: '+32 ',
				title: 'Strap',
				id: 7,
			},
			{
				percent: '-42 ',
				title: 'Fee',
				id: 8,
			},
			{
				percent: '+80 ',
				title: 'Oil product',
				id: 9,
			},
			{
				percent: '-88 ',
				title: 'Fee',
				id: 10,
			},
		],
		[]
	)
	const [visibleItems, setVisibleItems] = useState(data.slice(0, 6))
	const [hiddenItems, setHiddenItems] = useState(data.slice(6))

	const handleItemClick = (index: number) => {
		if (hiddenItems.length === 0) return
		const newVisibleItems = [...visibleItems]
		const newHiddenItems = [...hiddenItems]
		const replacedItem = newHiddenItems.shift()
		if (replacedItem) {
			newHiddenItems.push(newVisibleItems[index])
			newVisibleItems[index] = replacedItem
		}
		if (progress >= 100) {
			return
		} else {
			setVisibleItems(newVisibleItems)
			setHiddenItems(newHiddenItems)
			handleIncreaseProgress()
		}
	}
	return (
		<section className='flex items-center flex-col gap-[40px] lg:mt-[40px]'>
			<h1 className='text-[20px] 2xl:text-[42px] font-bold'>AWARDS</h1>

			<div className='hidden max-w-[1096px] w-full lg:grid grid-cols-[1fr_1fr_1fr] auto-rows-auto gap-[20px]'>
				{visibleItems &&
					visibleItems.map((item, index) => (
						<div
							className='p-[24px] border-2 border-dashed border-[#3F7EF3] rounded-[30px] min-w-[304px]'
							key={item.id}
						>
							<div className='p-[40px] flex flex-col items-center bg-[#073D95] rounded-[30px] gap-[12px]'>
								<h2 className='text-[20px] 2xl:text-[54px] text-white'>
									{item.percent} %
								</h2>
								<p className='text-[20px] 2xl:text-[32px] mb-[60px] !text-white'>
									{item.title}
								</p>
								<Button
									className='bg-transparent border border-solid border-white text-white text-[20px] rounded-[50px] px-[30px] py-[25px]'
									onClick={() => handleItemClick(index)}
								>
									Upgrade
								</Button>
							</div>
						</div>
					))}
			</div>

			<div className='lg:hidden max-w-[360px]'>
				<Swiper
					className='mb-[5rem]x'
					modules={[Pagination]}
					pagination={{ clickable: true }}
					loop
				>
					{visibleItems &&
						visibleItems.map((item, index) => (
							<SwiperSlide key={item.id} className='backdrop-blur-[6px]'>
								<div className='p-[50px] border-2 border-dashed border-[#3F7EF3] rounded-[30px]'>
									<div className='p-[40px] flex flex-col items-center bg-[#073D95] rounded-[30px] gap-[12px] w-full max-w-[320px] '>
										<h2 className='text-[32px] text-white'>{item.percent} %</h2>
										<p className='text-[24px] mb-[40px] text-white'>
											{item.title}
										</p>
										<Button
											className='bg-transparent border border-solid border-white text-white text-[20px] rounded-[50px] px-[30px] py-[25px]'
											onClick={() => handleItemClick(index)}
										>
											Upgrade
										</Button>
									</div>
								</div>
							</SwiperSlide>
						))}
				</Swiper>
			</div>
		</section>
	)
}

export default Activity_awards
