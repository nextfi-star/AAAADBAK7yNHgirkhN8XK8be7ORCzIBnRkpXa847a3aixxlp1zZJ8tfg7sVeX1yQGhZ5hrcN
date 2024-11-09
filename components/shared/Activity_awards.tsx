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
const Activity_awards: NextPage<Props> = ({
	progress,
	handleIncreaseProgress,
}) => {
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
		<section className='flex items-center flex-col gap-[40px] lg:mt-[80px]'>
			<h1 className='text-[20px] 2xl:text-[42px] font-bold'>AWARDS</h1>

			<div className='hidden lg:grid max-w-[1096px] w-full grid-cols-[1fr] md:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1fr] 2xl:grid-cols-[1fr_1fr_1fr] auto-rows-auto gap-[20px]'>
				{visibleItems &&
					visibleItems.map((item, index) => (
						<div
							className='p-[24px] border-2 border-dashed border-[#3F7EF3] rounded-[30px]'
							key={item.id}
						>
							<div className='p-[40px] flex flex-col items-center bg-[#073D95] rounded-[30px] gap-[12px]'>
								<h2 className='text-[20px] 2xl:text-[54px]'>
									{item.percent} %
								</h2>
								<p className='text-[20px] 2xl:text-[32px] mb-[60px]'>
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

			<div className='lg:hidden'>
				<Swiper
					className='w-[400px] mb-[5rem]'
					modules={[Pagination]}
					pagination={{ clickable: true }}
				>
					{visibleItems &&
						visibleItems.map((item, index) => (
							<SwiperSlide
								className='p-[38px] border-2 border-dashed border-[#3F7EF3] rounded-[30px]'
								key={item.id}
							>
								<div className='p-[40px] flex flex-col items-center bg-[#073D95] rounded-[30px] gap-[12px]'>
									<h2 className='text-[32px]'>{item.percent} %</h2>
									<p className='text-[24px] mb-[40px]'>{item.title}</p>
									<Button
										className='bg-transparent border border-solid border-white text-white text-[20px] rounded-[50px] px-[30px] py-[25px]'
										onClick={() => handleItemClick(index)}
									>
										Upgrade
									</Button>
								</div>
							</SwiperSlide>
						))}
				</Swiper>
			</div>
		</section>
	)
}

export default Activity_awards
