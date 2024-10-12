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
import { useThemeStore } from '@/store'
import { Choose_region } from './Choose_region'
import { useState } from 'react'

interface Props {
	propsItem: React.ReactNode
}

export const ChangeRegion: NextPage<Props> = ({ propsItem }) => {
	const { theme } = useThemeStore()
	const [indexItem, setIndex] = useState(false)

	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button className='bg-transparent hover:bg-transparent text-[#205bc9] dark:text-white border border-solid rounded-[50px] border-gray-400'>
					{propsItem}
				</Button>
			</DrawerTrigger>

			<DrawerContent className='z-[9999] px-[30px] pb-[2px] bg-white dark:bg-black min-h-[100dvh] max-h-[70%]'>
				<DrawerHeader>
					<DrawerTitle className='w-full border-transparent'>
						<h1 className='text-[20px] md:text-[32px] lg:text-[42px]'>
							Identity verification
						</h1>
					</DrawerTitle>
					<span className='block w-full min-h-[1px] bg-gray-400 my-[20px]'></span>
					<DrawerDescription className='text-black dark:text-white flex gap-[20px] lg:gap-[40px] flex-col'>
						<span
							onClick={() => setIndex(!indexItem)}
							className='flex items-center gap-[15px] text-[18px] lg:text-[30px]'
						>
							<span className='text-[18px] lg:text-[30px]'>{'<'}</span> Back
						</span>
						<p className='text-[20px] md:text-[32px] lg:text-[38px]'>
							Select country/region of residence
						</p>
						<label className='flex flex-col gap-[20px] lg:gap-[30px]'>
							<span className='text-[20px] md:tetx-[28px] lg:text-[32px]'>
								Country/Region of residence
							</span>
							<Choose_region />
						</label>
						<p className='flex flex-col items-start gap-[18px] lg:gap-[30px] font-medium bg-[#F5F5F5] dark:bg-[#181818] pt-[15px] px-[20px] pb-[15px] rounded-[6px] text-[14px] md:text-[25px] lg:text-[30px]'>
							Reminder
							<span className='text-[14px] md:text-[25px] lg:text-[30px] font-normal leading-8 text-left'>
								Once your country/region is changed, some of your tag/memo
								addresses and asset holdings may become unsupported. Check if
								your deposit address is still valid, and consider trading your
								assets before proceeding as withdrawals may incur high fees.
							</span>
						</p>
					</DrawerDescription>
				</DrawerHeader>

				<DrawerFooter className='flex flex-row justify-center py-0'>
					<DrawerClose asChild>
						<Button
							onClick={() => setIndex(!indexItem)}
							className='w-full max-w-[531px] lg:max-w-[631px] py-[px] md:py-[28px] lg:py-[38px] text-[14px] md:text-[20px] lg:text-[32px] rounded-[50px] min-w-[117px] bg-[#205BC9] text-[#fff]'
						>
							Next
						</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}
