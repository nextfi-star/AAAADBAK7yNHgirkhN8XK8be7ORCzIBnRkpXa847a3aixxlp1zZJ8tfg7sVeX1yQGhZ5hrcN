import { NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'

import ArrowBracket from '../ui/ArrowBracket'
import { Input } from '../ui/input'

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/routing'
import { useThemeStore } from '@/store'

interface Props {
	propsItem: React.ReactNode
}
export const Alert_nickname: NextPage<Props> = ({ propsItem }) => {
	const [symbols, setSymbols] = useState<number | string | any>(0)
	const { theme } = useThemeStore()

	const trackSymbols = (e: any) => {
		const inputLength = e.target.value.length

		if (inputLength >= 20) {
			setSymbols(20)
		} else {
			setSymbols(inputLength)
		}
	}

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button className='bg-transparent hover:bg-transparent text-[#205bc9] dark:text-white border border-solid rounded-[50px] border-gray-400'>
					{propsItem}
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent className='px-[40px] gap-[10px] min-h-[100dvh] max-h-[90dvh] sm:pb-[7rem] !max-w-[1306px] !mx-auto items-center  !overflow-y-auto bg-white dark:!bg-[#0c0c0c] modal-new'>
				<AlertDialogHeader className=''>
					<AlertDialogTitle className='w-full border-transparent border-b-1 border-solid border-b-gray-400 pb-[20px] text-[12px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-left flex items-center gap-[10px] mb-[10px]'>
						<span className='text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-[#888888] flex items-center gap-[15px]'>
							<AlertDialogCancel className='text-black dark:text-white bg-transparent text-[14px] md:text-[18px] border-none shadow-none hover:bg-transparent p-0 items-center m-0'>
								<ArrowBracket
									className={'rotate-90'}
									color={theme === 'dark' ? 'white' : 'black'}
									height={25}
									width={25}
								/>
							</AlertDialogCancel>
							<Link
								className='text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-[#888888]'
								href='/profile'
							>
								Profile
							</Link>
							<ArrowBracket
								className={'-rotate-90'}
								color={theme === 'dark' ? 'white' : 'black'}
								height={25}
								width={25}
							/>
						</span>{' '}
						Change Nickname
					</AlertDialogTitle>
				</AlertDialogHeader>
				<div className='flex justify-center w-full '>
					<div className={'flex flex-col max-w-[600px] gap-[30px]'}>
						<span className='text-black dark:text-white bg-[#F5F5F5] dark:bg-[#181818] py-[24px] px-[22px] rounded-[6px] text-[14px] sm:text-[16px] lg:text-[18px] 2xl:text-[20px] flex flex-col items-center gap-[5px] md:flex-row md:items-start md:gap-[10px]'>
							<Image
								alt='info'
								className='max-w-[19px] md:max-w-[23px] lg:max-w-[25px] w-full'
								height={20}
								quality={100}
								src={'/header_icons/profile_burger/info_icon.svg'}
								width={20}
							/>
							Make sure your nickname does not contain disrespectful language,
							official names(i.e. product names), or names of other trading
							platforms
						</span>
						<AlertDialogDescription
							className={'w-full flex flex-col gap-[10px]'}
						>
							<label className='text-[#181818] dark:text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] flex flex-col items-start gap-[10px] w-full'>
								Your nickname is used for trading and in-app messages
								<Input
									className='border border-solid border-black shadow-none dark:border-white text-[16px] py-[10px] 2xl:py-[1rem]'
									placeholder='Enter nickname'
									type='text'
									onChange={trackSymbols}
								/>
							</label>
							<span className='text-[12px] sm:text-[18px] flex items-center justify-between w-full text-[#181818] dark:text-white'>
								Your nickname can be edited 3 more time(s) this year
								<span>{symbols}/20</span>
							</span>
						</AlertDialogDescription>
					</div>
				</div>
				<AlertDialogFooter className='px-[30px] pt-[20px] h-fit items-center gap-[30px]'>
					<AlertDialogAction
						className={'text-[16px] xl:text-[22px] px-[20px] 2xl:px-[40px]'}
					>
						Confirm
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
