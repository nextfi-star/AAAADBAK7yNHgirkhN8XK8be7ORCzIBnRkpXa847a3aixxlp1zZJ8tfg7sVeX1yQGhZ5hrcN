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
import { NextPage } from 'next'
import { Input } from '../ui/input'
import { Link } from '@/i18n/routing'
import { useState } from 'react'

interface Props {
	propsItem: React.ReactNode
}
export const Change_logpas_alert: NextPage<Props> = ({ propsItem }) => {
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
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant='outline'>{propsItem}</Button>
			</AlertDialogTrigger>
			<AlertDialogContent className='px-0'>
				<AlertDialogHeader>
					<AlertDialogTitle className='flex items-center gap-[10px] border-0 border-b border-solid border-b-white pb-[15px] px-[30px] text-[12px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px]'>
						<span className='text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-[#888888]'>
							{'>'}{' '}
							<Link
								className='text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-[#888888]'
								href='/profile'
							>
								Profile{' '}
							</Link>
							{'>'}{' '}
						</span>{' '}
						Change Nickname
					</AlertDialogTitle>
					<AlertDialogDescription>
						<span className='text-black dark:text-white text-left text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px]'>
							Your nickname is used for trading and in-app messages
						</span>
						<Input
							type='text'
							className='bg-transparent text-black dark:text-white border border-solid border-[#000] dark:border-white rounded-[4px] px-[20px] py-[7px] text-[14px] md:text-[18px] lg:text-[20px] 2xl:text-[25px]'
							placeholder='zya***@rambler.ru'
							onChange={trackSymbols}
						/>
						<span className='w-full flex justify-between text-black dark:text-white text-left text-[14px] md:text-[18px] lg:text-[20px] 2xl:text-[25px]'>
							Your nickname can be edited 3 more time(s) this year{' '}
							<span className='text-black dark:text-white'>{symbols}/20</span>
						</span>
					</AlertDialogDescription>
					<AlertDialogDescription>
						<span className='text-black dark:text-white text-left text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px]'>
							Your nickname is used for trading and in-app messages
						</span>
						<Input
							type='text'
							className='bg-transparent text-black dark:text-white border border-solid border-[#000] dark:border-white rounded-[4px] px-[20px] py-[7px] text-[14px] md:text-[18px] lg:text-[20px] 2xl:text-[25px]'
							placeholder='zya***@rambler.ru'
							onChange={trackSymbols}
						/>
						<span className='w-full flex justify-between text-black dark:text-white text-left text-[14px] md:text-[18px] lg:text-[20px] 2xl:text-[25px]'>
							Your nickname can be edited 3 more time(s) this year{' '}
							<span className='text-black dark:text-white'>{symbols}/20</span>
						</span>
					</AlertDialogDescription>
					<AlertDialogDescription>
						<span className='text-black dark:text-white text-left text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px]'>
							Your nickname is used for trading and in-app messages
						</span>
						<Input
							type='text'
							className='bg-transparent text-black dark:text-white border border-solid border-[#000] dark:border-white rounded-[4px] px-[20px] py-[7px] text-[14px] md:text-[18px] lg:text-[20px] 2xl:text-[25px]'
							placeholder='zya***@rambler.ru'
							onChange={trackSymbols}
						/>
						<span className='w-full flex justify-between text-black dark:text-white text-left text-[14px] md:text-[18px] lg:text-[20px] 2xl:text-[25px]'>
							Your nickname can be edited 3 more time(s) this year{' '}
							<span className='text-black dark:text-white'>{symbols}/20</span>
						</span>
					</AlertDialogDescription>
					<AlertDialogDescription>
						<span className='text-black dark:text-white text-left text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px]'>
							Your nickname is used for trading and in-app messages
						</span>
						<Input
							type='text'
							className='bg-transparent text-black dark:text-white border border-solid border-[#000] dark:border-white rounded-[4px] px-[20px] py-[7px] text-[14px] md:text-[18px] lg:text-[20px] 2xl:text-[25px]'
							placeholder='zya***@rambler.ru'
							onChange={trackSymbols}
						/>
						<span className='w-full flex justify-between text-black dark:text-white text-left text-[14px] md:text-[18px] lg:text-[20px] 2xl:text-[25px]'>
							Your nickname can be edited 3 more time(s) this year{' '}
							<span className='text-black dark:text-white'>{symbols}/20</span>
						</span>
					</AlertDialogDescription>
					<AlertDialogDescription>
						<span className='text-black dark:text-white text-left text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px]'>
							Your nickname is used for trading and in-app messages
						</span>
						<Input
							type='text'
							className='bg-transparent text-black dark:text-white border border-solid border-[#000] dark:border-white rounded-[4px] px-[20px] py-[7px] text-[14px] md:text-[18px] lg:text-[20px] 2xl:text-[25px]'
							placeholder='zya***@rambler.ru'
							onChange={trackSymbols}
						/>
						<span className='w-full flex justify-between text-black dark:text-white text-left text-[14px] md:text-[18px] lg:text-[20px] 2xl:text-[25px]'>
							Your nickname can be edited 3 more time(s) this year{' '}
							<span className='text-black dark:text-white'>{symbols}/20</span>
						</span>
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter className='px-[30px]'>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction>Continue</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}

{
	/* <Input
							type='text'
							className='bg-transparent text-black dark:text-white border border-solid border-[#000] dark:border-white rounded-[4px] px-[20px] py-[7px] text-[14px] md:text-[18px] lg:text-[20px] 2xl:text-[25px]'
							placeholder='zya***@rambler.ru'
						/> */
}
