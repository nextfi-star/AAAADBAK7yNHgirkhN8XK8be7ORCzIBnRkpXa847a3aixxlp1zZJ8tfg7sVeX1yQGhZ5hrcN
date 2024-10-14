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
import { Link } from '@/i18n/routing'

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

			<DrawerContent className='px-[15px] modal-holder mobile-holder '>
				<DrawerTitle className='w-full border-transparent border-b-1 border-solid border-b-gray-400 pb-[20px] mb-[20px] text-[12px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-left flex items-center gap-[10px]'>
					<span className='text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-[#888888] flex items-center gap-[15px]'>
						<DrawerClose asChild>
							<Button className=' text-black dark:text-white bg-transparent  text-[14px] md:text-[18px] border-none shadow-none hover:bg-transparent p-0 pl-[20px]'>
								{'<'}
							</Button>
						</DrawerClose>
						<Link
							className='text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-[#888888]'
							href='/profile'
						>
							Profile
						</Link>
						{'>'}{' '}
					</span>{' '}
					Change Nickname
				</DrawerTitle>

				<DrawerDescription className='flex flex-col justify-flex-start items-center w-full h-full'>
					<p className='max-w-[760px] flex flex-col gap-[33px]'>
						<p className='text-black dark:text-white bg-[#F5F5F5] dark:bg-[#181818] py-[24px] px-[22px] rounded-[6px] flex flex-col items-center md:flex-row md:items-start gap-[16px]'>
							<Image
								src={'/header_icons/profile_burger/info_icon.svg'}
								width={40}
								height={40}
								alt='info'
								quality={100}
								className='w-full max-w-[20px] sm:max-w-[23px] md:max-w-[25px]'
							/>
							<span className='text-black dark:text-white text-[14px] md:text-[18px] lg:text-[20px] 2xl:text-[25px] text-left leading-7'>
								Make sure your nickname does not contain disrespectful language,
								official names(i.e. product names), or names of other trading
								platforms.
							</span>
						</p>
						<p className='flex flex-col gap-[14px] lg:gap-[40px]'>
							<span className='text-black dark:text-white text-left text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px]'>
								Your nickname is used for trading and in-app messages
							</span>
							<input
								type='text'
								className='bg-transparent text-black dark:text-white border border-solid border-[#000] dark:border-white rounded-[4px] px-[20px] py-[7px] text-[14px] md:text-[18px] lg:text-[20px] 2xl:text-[25px]'
								placeholder='zya***@rambler.ru'
								onChange={trackSymbols}
							/>
							<span className='w-full flex justify-between text-black dark:text-white text-left text-[14px] md:text-[18px] lg:text-[20px] 2xl:text-[25px]'>
								Your nickname can be edited 3 more time(s) this year{' '}
								<span className='text-black dark:text-white'>{symbols}/20</span>
							</span>
							<span className='flex flex-row justify-center gap-[40px] mt-[15px]'>
								<DrawerClose asChild>
									<Button
										variant='outline'
										className='border border-solid dark:border-gray-300 border-black rounded-[50px] px-[35px] min-w-[117px] hover:bg-transparent hover:text-[#205BC9] text-[14px] md:text-[18px] lg:text-[20px] lg:px-[70px] lg:py-[20px]'
									>
										Cancel
									</Button>
								</DrawerClose>
								<DrawerClose asChild>
									<Button className='bg-[#205BC9] text-white rounded-[50px] px-[35px] min-w-[117px] hover:bg-[#205BC9] hover:text-[#fff] text-[14px] md:text-[18px] lg:text-[20px] lg:px-[70px] lg:py-[20px]'>
										Confirm
									</Button>
								</DrawerClose>
							</span>
						</p>
					</p>
				</DrawerDescription>
			</DrawerContent>
		</Drawer>
	)
}
