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
import { Button } from '../ui/button'
import { NextPage } from 'next'
import { Input } from '@/components/ui/input'
import { Link } from '@/i18n/routing'
import { useThemeStore } from '@/store'
import Image from 'next/image'
import ArrowBracket from '../ui/ArrowBracket'

interface Props {
	propsItem: React.ReactNode
}

export const Alert_logpass: NextPage<Props> = ({ propsItem }) => {
	const { theme } = useThemeStore()

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
			<Button className='bg-transparent hover:bg-transparent text-[#205bc9] dark:text-white border border-solid rounded-[50px] border-gray-400'>
							{propsItem}
						</Button>
			</AlertDialogTrigger>
			<AlertDialogContent className='px-[40px] gap-[10px] min-h-[100dvh] max-h-[90dvh] sm:pb-[7rem] !max-w-[1306px] !mx-auto items-center !overflow-y-auto bg-white dark:!bg-[#0c0c0c] modal-new'>
				<AlertDialogHeader className=''>
					<AlertDialogTitle className='w-full border-transparent border-b-1 border-solid border-b-gray-400 pb-[20px] text-[12px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-left flex items-center gap-[10px] mb-[10px]'>
						<span className='text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-[#888888] flex items-center gap-[15px]'>
							<AlertDialogCancel className='text-black dark:text-white bg-transparent  text-[14px] md:text-[18px] border-none shadow-none hover:bg-transparent p-0 items-center m-0'>
								<ArrowBracket
									color={theme === 'dark' ? 'white' : 'black'}
									width={25}
									height={25}
									className={'rotate-90'}
								/>
							</AlertDialogCancel>
							<Link
								className='text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-[#888888]'
								href='/security'
							>
								Security
							</Link>
							<ArrowBracket
								color={theme === 'dark' ? 'white' : 'black'}
								width={25}
								height={25}
								className={'-rotate-90'}
							/>
						</span>{' '}
						Change login password
					</AlertDialogTitle>
				</AlertDialogHeader>
				<div className='flex justify-center gap-[10px] w-full '>
					<div className={'flex flex-col max-w-[600px] gap-[20px]'}>
						<AlertDialogDescription
							className={'w-full flex flex-col gap-[10px]'}
						>
							<label className='text-[#181818] dark:text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] flex flex-col items-start gap-[10px] w-full'>
							Current password
								<Input
									type='text'
									placeholder='Enter your current password'
									className='border border-solid border-black shadow-none dark:border-white text-[16px] py-[10px] 2xl:py-[1rem]'
								/>
							</label>
						</AlertDialogDescription>
						<AlertDialogDescription
							className={'w-full flex flex-col gap-[10px]'}
						>
							<label className='text-[#181818] dark:text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] flex flex-col items-start gap-[10px] w-full'>
							New password
								<Input
									type='text'
									placeholder='Enter your new password'
									className='border border-solid border-black shadow-none dark:border-white text-[16px] py-[10px] 2xl:py-[1rem]'
								/>
							</label>
						</AlertDialogDescription>
						<AlertDialogDescription
							className={'w-full flex flex-col gap-[10px]'}
						>
							<label className='text-[#181818] dark:text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] flex flex-col items-start gap-[10px] w-full'>
							Confirm new password
								<Input
									type='text'
									placeholder='Enter your new password again'
									className='border border-solid border-black shadow-none dark:border-white text-[16px] py-[10px] 2xl:py-[1rem]'
								/>
							</label>
						</AlertDialogDescription>
						<AlertDialogDescription
							className={'w-full flex flex-col gap-[10px]'}
						>
							<label className='text-[#181818] dark:text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] flex flex-col items-start gap-[10px] w-full'>
							Email authentication
								<Input
									type='text'
									placeholder='Enter code'
									className='border border-solid border-black shadow-none dark:border-white text-[16px] py-[10px] 2xl:py-[1rem]'
								/>
							</label>
						</AlertDialogDescription>
						<AlertDialogDescription
							className={'w-full flex flex-col gap-[10px]'}
						>
							<label className='text-[#181818] dark:text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] flex flex-col items-start gap-[10px] w-full'>
							Authenticator app
								<Input
									type='text'
									placeholder='Enter code'
									className='border border-solid border-black shadow-none dark:border-white text-[16px] py-[10px] 2xl:py-[1rem]'
								/>
							</label>
						</AlertDialogDescription>
						<div className='privacy max-w-[921px] flex flex-col self-center	 justify-start'>
							<label
								htmlFor='checkbox-privacy'
								className='checkbox-label gap-[5px] md:gap-[18px] !items-start'
							>
								<input
									type='checkbox'
									id='checkbox-privacy'
									className='checkbox'
								/>
								<span className='checkbox-view'>
									<svg
										className='checkbox-icon max-w-[50px] md:max-w-[50px] max-h-[20px] md:max-h-[45px]'
										xmlns='http://www.w3.org/2000/svg'
										width='18'
										viewBox='0 0 511.985 511.985'
									>
										<path
											fill={theme === 'dark' ? '#fff' : '#3A3939'}
											d='M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0-15.862 15.862-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899 10.394 0 20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435z'
										/>
									</svg>
								</span>
								<p className='text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] text-left'>
									To protect your account, you will not be able to withdraw
									funds within 24 hours after resetting your settings or
									changing your account password.
								</p>
							</label>
						</div>
					</div>
				</div>
				<AlertDialogFooter className='px-[30px] pt-[15px] h-fit items-center gap-[30px]'>
				<AlertDialogAction className={'text-[16px] xl:text-[22px] px-[20px] 2xl:px-[40px]'}>
				Confirm
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
