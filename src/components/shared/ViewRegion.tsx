'use client'
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
import { Button } from '../ui/button'
import { NextPage } from 'next'
import { RussiaMap } from '../ui/RussiaMap'
import { useThemeStore } from '@/store'
import { Location } from '../ui/Location'
import { useState } from 'react'
import { Choose_region } from './Choose_region'

interface Props {
	propsItem: React.ReactNode
}

export const ViewRegion: NextPage<Props> = ({ propsItem }) => {
	const { theme } = useThemeStore()
	const [indexItem, setIndex] = useState(false)

	return (
		<>
			{!indexItem ? (
				<Drawer>
					<DrawerTrigger asChild>
						<Button className='bg-transparent hover:bg-transparent text-[#205bc9] dark:text-white border border-solid rounded-[50px] border-gray-400'>
							{propsItem}
						</Button>
					</DrawerTrigger>

					<DrawerContent className='z-[9999] px-[30px] pb-[2px] bg-white dark:bg-black min-h-[100dvh] max-h-[70%]'>
						<DrawerHeader className='pt-[3.5rem]'>
							<div className='w-full border-transparent flex flex-col gap-[20px] mb-[20px]'>
								<h1 className='text-[14px] md:text-[17px] lg:text-[25px] xl:text-[28px] 2xl:text-[35px] border-b-2 border-0 border-solid border-b-gray-400 pb-[20px] flex gap-[15px]'>
									<span
										onClick={() => setIndex(!indexItem)}
										className='flex items-center gap-[5px] text-[18px] lg:text-[30px]'
									>
										<span className='text-[18px] lg:text-[30px]'>{'<'}</span>
									</span>
									Identity verification
								</h1>
							</div>

							<DrawerDescription className='text-black dark:text-white flex gap-[30px] lg:gap-[40px] flex-col items-center w-full'>
								<div className='flex flex-col gap-[20px] items-center max-w-[623px]'>
									<p className='text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] 2xl:text-[25px] text-left w-full'>
										Select country/region of residence
									</p>
									<label className='flex flex-col gap-[20px] lg:gap-[30px] w-full'>
										<span className='text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-[#888888] text-left'>
											Country/Region of residence
										</span>
										<Choose_region />
									</label>
									<p className='flex flex-col items-start gap-[18px] lg:gap-[30px] font-medium bg-[#F5F5F5] dark:bg-[#181818] pt-[15px] px-[20px] pb-[15px] rounded-[6px] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[17px] xl:text-[20px] 2xl:text-[25px]'>
										Reminder
										<span className='text-[14px] sm:text-[16px] md:text-[18px] lg:text-[17px] xl:text-[20px] 2xl:text-[25px] font-normal leading-8 text-left text-[#3A3939] dark:text-[#EEEEEE]'>
											Once your country/region is changed, some of your tag/memo
											addresses and asset holdings may become unsupported. Check
											if your deposit address is still valid, and consider
											trading your assets before proceeding as withdrawals may
											incur high fees.
										</span>
									</p>

									<DrawerClose asChild className='!py-[1rem]'>
										<Button
											onClick={() => setIndex(!indexItem)}
											className='w-full lg:max-w-[631px] py-[8px] md:py-[28px] 2xl:py-[2rem] text-[14px] md:text-[17px] lg:text-[20px] 2xl:text-[25px] rounded-[50px] min-w-[117px] bg-[#205BC9] text-[#fff] hover:bg-[#205BC9]'
										>
											Next
										</Button>
									</DrawerClose>
								</div>
							</DrawerDescription>
						</DrawerHeader>
					</DrawerContent>
				</Drawer>
			) : (
				<Drawer>
					<DrawerTrigger asChild>
						<Button className='bg-transparent hover:bg-transparent text-[#205bc9] dark:text-white border border-solid rounded-[50px] border-gray-400'>
							{propsItem}
						</Button>
					</DrawerTrigger>

					<DrawerContent className='z-[9999] px-[30px] bg-white dark:bg-black max-h-[100dvh] min-h-[100dvh] pt-[2.5rem]'>
						<DrawerHeader className='flex flex-col gap-[16px] pt-[3.5rem]'>
							<div className='w-full border-transparent flex flex-col items-center gap-[15px]'>
								<div className='w-full'>
									<div className='relative flex justify-center'>
										<RussiaMap
											height={'auto'}
											className='w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] border-2 border-dashed rounded-[20px]'
											width={250}
											color={theme === 'dark' ? '#fff' : '#000'}
										/>
										<Location
											className='absolute top-[45px] md:top-[35%] right-[40%] md:w-full max-w-[40px] lg:max-w-[45px]'
											color={theme === 'dark' ? '#205BC9' : '#205BC9'}
										/>
									</div>
								</div>
								<h1 className='text-[32px] lg:text-[40px] leading-[32px]'>
									Country/Region of residence:{' '}
									<span className='text-[#205BC9] '>Russia</span>
								</h1>
							</div>
							<DrawerDescription className='text-black dark:text-white flex gap-[5px] justify-center text-center text-[14px] md:text-[17px] lg:text-[20px] 2xl:text-[25px]'>
								<span className='max-w-[70%]'>
									You can only update your country/region of residence once
									every 90 days. Updating it also means you'll need to complete
									your identity verification again.
								</span>
							</DrawerDescription>
						</DrawerHeader>

						<DrawerFooter className='flex flex-row justify-center'>
							<Button
								onClick={() => setIndex(!indexItem)}
								className='w-full max-w-[531px] lg:max-w-[631px] py-[8px] md:py-[28px] 2xl:py-[2rem] text-[14px] md:text-[17px] lg:text-[20px] 2xl:text-[25px] rounded-[50px] min-w-[117px] bg-[#205BC9] hover:bg-[#205BC9] text-[#fff]'
							>
								Update
							</Button>
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
			)}
		</>
	)
}
