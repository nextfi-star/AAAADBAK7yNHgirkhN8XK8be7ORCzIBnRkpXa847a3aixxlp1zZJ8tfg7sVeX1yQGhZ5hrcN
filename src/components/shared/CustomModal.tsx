'use client'
import { NextPage } from 'next'
import Image from 'next/image'
import { Button } from '../ui/button'
import {
	Drawer,
	DrawerContent,
	DrawerTrigger,
	DrawerHeader,
	DrawerTitle,
	DrawerDescription,
	DrawerFooter,
	DrawerClose,
} from '@/components/ui/drawer'
import { useState } from 'react'
interface Props {
	propsItem: React.ReactNode
	show: boolean
	handleClick: () => void
}

export const CustomModal: NextPage<Props> = ({
	propsItem,
	show,
	handleClick,
}) => {
	const [symbols, setSymbols] = useState<number | string | any>(0)

	const trackSymbols = (e: any) => {
		const inputLength = e.target.value.length

		if (inputLength >= 20) {
			setSymbols(20)
		} else {
			setSymbols(inputLength)
		}
	}
	return (
		<div className=''>
			<Button
				onClick={handleClick}
				className={`bg-transparent hover:bg-transparent border border-solid rounded-[50px] text-[#205bc9] dark:text-white border-gray-400`}
			>
				{propsItem}
			</Button>

			{show && (
				<div className='px-[30px] fixed inset-x-0 inset-y-0 bg-[#000000] z-[9999] flex flex-col items-center pt-[2rem] overflow-hidden'>
					<div className='container !min-h-[100dvh]'>
					<div className='mb-[2rem]'>
						<div className='border-transparent border-b-1 border-solid border-b-gray-400 pb-[20px] mb-[15px] 2xl:mb-[30px] flex items-center justify-start gap-[15px]'>
							<span
								className='!text-[18px] lg:!text-[30px] !w-fit'
								onClick={handleClick}
							>
								<span className='!text-[18px] lg:!text-[30px]'>{'<'}</span>
							</span>
							<h1 className='!text-[20px] md:!text-[25px]'>Nickname</h1>
						</div>

						<div className='flex flex-col justify-center items-center gap-[38px] w-full h-full'>
							<div className='max-w-[760px] flex flex-col gap-[30px]'>
								<div className='text-black dark:text-white bg-[#F5F5F5] dark:bg-[#181818] py-[24px] px-[22px] rounded-[6px] flex flex-col items-center md:flex-row md:items-start gap-[16px]'>
									<Image
										src={'/header_icons/profile_burger/info_icon.svg'}
										width={40}
										height={40}
										alt='info'
										quality={100}
										className='w-full max-w-[20px] sm:max-w-[23px] md:max-w-[25px]'
									/>
									<span className='text-black dark:text-white text-[14px] md:text-[18px] lg:text-[20px] 2xl:text-[25px] leading-10 text-left'>
										Make sure your nickname does not contain disrespectful
										language, official names(i.e. product names), or names of
										other trading platforms.
									</span>
								</div>
								<form
									className='flex flex-col gap-[14px] lg:gap-[40px]'
									onSubmit={e => e.stopPropagation()}
								>
									<span className='text-black dark:text-white text-left text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px]'>
										Your nickname is used for trading and in-app messages
									</span>
									<input
										type='text'
										className='bg-transparent text-black dark:text-white border border-solid border-[#000] dark:border-white rounded-[4px] px-[20px] py-[7px] text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[25px]'
										onChange={trackSymbols}
										placeholder='zya***@rambler.ru'
									/>
									<span className='w-full flex justify-between text-black dark:text-white text-left text-[14px] md:text-[18px] lg:text-[20px] 2xl:text-[25px]'>
										Your nickname can be edited 3 more time(s) this year{' '}
										<span className='!w-fit text-black dark:text-white'>
											{symbols}/20
										</span>
									</span>
								</form>
							</div>
						</div>
					</div>

					<div className='flex flex-row justify-center gap-[40px]'>
						<Button
							variant='outline'
							className='border border-solid dark:border-gray-300 border-black rounded-[50px] px-[35px] min-w-[117px] hover:bg-tr!ansparent hover:tex!t-[#205BC9] !text-[14px] md:!text-[18px] lg:!text-[20px] 2xl:!text-[25px] lg:px-[30px] lg:py-[15px]'
						>
							Cancel
						</Button>
						<Button className='bg-[#205BC9] text-white !border-none rounded-[50px] px-[35px] min-w-[117px] hover:!bg-[#205BC9] hover:!text-[#fff] !text-[14px] md:!text-[18px] lg:!text-[20px] 2xl:!text-[25px] lg:px-[30px] lg:py-[15px]'>
							Confirm
						</Button>
					</div>
					</div>
				</div>
			)}
		</div>
	)
}
