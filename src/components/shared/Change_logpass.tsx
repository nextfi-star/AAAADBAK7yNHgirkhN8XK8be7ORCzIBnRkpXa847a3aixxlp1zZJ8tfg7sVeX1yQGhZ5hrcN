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
import { Input } from '@/components/ui/input'
import { Link } from '@/i18n/routing'
import { useThemeStore } from '@/store'
import Image from 'next/image'
import ArrowBracket from '../ui/ArrowBracket'

interface Props {
	propsItem: React.ReactNode
}

export const Change_logpass: NextPage<Props> = ({ propsItem }) => {
	const { theme } = useThemeStore()

	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button
					className={`bg-transparent hover:bg-transparent border border-solid rounded-[50px] border-gray-400 text-[#205bc9] dark:text-white`}
				>
					{propsItem}
				</Button>
			</DrawerTrigger>

			<DrawerContent className='modal-holder mobile-holder min-h-[100dvh] max-h-[70%]'>
				<DrawerHeader className='!p-0'>
				<DrawerTitle className='w-full border-transparent border-b-1 border-solid border-b-gray-400 pb-[20px] mb-[20px] text-[12px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-left flex items-center gap-[10px]'>
						<span className='text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-[#888888] flex items-center gap-[15px]'>
							<DrawerClose asChild>
								<Button className=' text-black dark:text-white bg-transparent  text-[14px] md:text-[18px] border-none shadow-none hover:bg-transparent p-0'>
									<ArrowBracket
										color={theme === 'dark' ? 'white' : 'black'}
										width={25}
										height={25}
										className={'rotate-90'}
									/>
								</Button>
							</DrawerClose>
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
						</span>
						Change login password
					</DrawerTitle>

					<div className='flex justify-center h-full w-full overflow-y-auto'>
						<div className='flex flex-col items-start gap-[15px] 2xl:gap-[20px] mt-[20px] w-full max-w-[550px] md:pb-[5.5rem]'>
							<div className='flex w-full flex-col items-start gap-[15px] 2xl:gap-[20px]'>
								<label className='text-[#181818] dark:text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] flex flex-col items-start gap-[7px] w-full'>
								Current password
									<Input
										type='email'
										placeholder='Enter your current password'
										className='border border-solid border-white text-[16px] py-[10px] 2xl:py-[1rem]'
									/>
								</label>
								<label className='text-[#181818] dark:text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] flex flex-col items-start gap-[7px] w-full'>
								New password
									<Input
										type='email'
										placeholder='Enter your new password'
										className='border border-solid border-white text-[16px] py-[10px] 2xl:py-[1rem]'
									/>
								</label>
								<label className='text-[#181818] dark:text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] flex flex-col items-start gap-[7px] w-full'>
								Confirm new password
									<Input
										type='email'
										placeholder='Enter your new password again'
										className='border border-solid border-white text-[16px] py-[10px] 2xl:py-[1rem]'
									/>
								</label>
								<label className='text-[#181818] dark:text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] flex flex-col items-start gap-[7px] w-full'>
									Authenticator app
									<Input
										type='email'
										placeholder='Enter code'
										className='border border-solid border-white text-[16px] py-[10px] 2xl:py-[1rem]'
									/>
								</label>
								<div className='privacy max-w-[921px] flex flex-col self-center	 justify-start'>
							<label
								htmlFor='checkbox-privacy'
								className='checkbox-label gap-[5px] md:gap-[18px] !items-start mb-[20px]'
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
								<DrawerClose asChild>
								<Button className='bg-[#515151] text-white rounded-[50px] px-[35px] min-w-[117px] hover:bg-[#515151] hover:text-[#fff] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] lg:px-[50px] lg:py-[20px]'>
									Confirm
								</Button>
							</DrawerClose>
							</div>
							
						</div>
					</div>
				</DrawerHeader>
			</DrawerContent>
		</Drawer>
	)
}
