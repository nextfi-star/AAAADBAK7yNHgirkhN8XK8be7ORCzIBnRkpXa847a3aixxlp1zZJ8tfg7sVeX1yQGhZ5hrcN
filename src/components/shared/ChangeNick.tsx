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
import { Button } from '../ui/button'
import { NextPage } from 'next'
import Image from 'next/image'

interface Props {
	propsItem: React.ReactNode
}

export const ChangeNick: NextPage<Props> = ({ propsItem }) => {
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
		<Drawer>
			<DrawerTrigger asChild>
				<Button
					className={`bg-transparent hover:bg-transparent border border-solid rounded-[50px] text-[#205bc9] dark:text-white border-gray-400`}
				>
					{propsItem}
				</Button>
			</DrawerTrigger>

			<DrawerContent className='z-[9999] px-[30px] min-h-[100vh]'>
				<DrawerHeader>
					<DrawerTitle className='w-full border-transparent border-b-1 border-solid border-b-gray-400 pb-[20px] mb-[20px]'>
						<h1 className='text-[20px] md:text-[32px]'>Nickname</h1>
					</DrawerTitle>
					<div className=' flex flex-col gap-[38px]'>
						<DrawerDescription className='text-black dark:text-white bg-[#F5F5F5] dark:bg-[#181818] py-[24px] px-[22px] rounded-[6px] flex items-start gap-[16px]'>
							<Image
								src={'/header_icons/profile_burger/info_icon.svg'}
								width={40}
								height={40}
								alt='info'
								quality={100}
								className='max-w-[20px] md:max-w-[40px] lg:max-w-[45px]'
							/>
							<span className='text-black dark:text-white text-[14px] md:text-[30px] leading-10'>
								Make sure your nickname does not contain disrespectful language,
								official names(i.e. product names), or names of other trading
								platforms.
							</span>
						</DrawerDescription>
						<div className='flex flex-col gap-[14px] lg:gap-[40px]'>
							<span className='text-black dark:text-white text-left text-[14px] md:text-[18px] lg:text-[30px]'>
								Your nickname is used for trading and in-app messages
							</span>
							<input
								type='text'
								className='bg-transparent text-black dark:text-white border border-solid border-[#000] dark:border-white rounded-[4px] px-[20px] py-[10px] text-[14px] md:text-[18px] lg:text-[30px]'
								onChange={trackSymbols}
								placeholder='zya***@rambler.ru'
							/>
							<span className='w-full flex justify-between text-black dark:text-white text-left text-[14px] md:text-[18px] lg:text-[30px]'>
								Your nickname can be edited 3 more time(s) this year{' '}
								<span className='text-black dark:text-white'>{symbols}/20</span>
							</span>
						</div>
					</div>
				</DrawerHeader>

				<DrawerFooter className='flex flex-row justify-center gap-[40px]'>
					<DrawerClose asChild>
						<Button
							variant='outline'
							className='border border-solid dark:border-gray-300 border-black rounded-[50px] px-[35px] min-w-[117px] hover:bg-transparent hover:text-[#205BC9] text-[14px] md:text-[18px] lg:text-[32px] lg:px-[50px] lg:py-[30px]'
						>
							Cancel
						</Button>
					</DrawerClose>
					<DrawerClose asChild>
						<Button className='bg-[#205BC9] text-white rounded-[50px] px-[35px] min-w-[117px] hover:bg-[#205BC9] hover:text-[#fff] text-[14px] md:text-[18px] lg:text-[32px] lg:px-[50px] lg:py-[30px]'>
							Confirm
						</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}
