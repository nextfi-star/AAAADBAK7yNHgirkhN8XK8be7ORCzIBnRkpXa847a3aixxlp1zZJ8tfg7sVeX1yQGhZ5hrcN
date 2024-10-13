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

			<DrawerContent className='z-[9999] px-[30px] min-h-[100dvh] max-h-[70%]'>
				<DrawerHeader>
					<DrawerTitle className='w-full border-transparent border-b-1 border-solid border-b-gray-400 pb-[20px] mb-[20px] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-left flex items-center gap-[15px]'>
						<span className='text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-[#888888] flex items-center gap-[15px]'>
							<DrawerClose asChild>
								<Button className=' text-white bg-transparent hover:text-[#fff] text-[14px] md:text-[18px] lg:text-[25px] hover:bg-transparent p-0 px-[20px]'>
									{'<'}
								</Button>
							</DrawerClose>
							<Link
								className='text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-[#888888]'
								href='/security'
							>
								Security center
							</Link>
							{'>'}{' '}
						</span>{' '}
						Change login password
					</DrawerTitle>
					<div className='flex justify-center'>
						<div className='flex flex-col items-start gap-[9px] 2xl:gap-[15px] mt-[20px] w-full max-w-[550px]'>
							<div className='flex w-full flex-col items-start gap-[7px] 2xl:gap-[15px]'>
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
									Email authentication
									<Input
										type='email'
										placeholder='Enter code'
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
							</div>
							<DrawerClose asChild>
								<Button className='bg-[#515151] text-white rounded-[50px] px-[35px] min-w-[117px] hover:bg-[#515151] hover:text-[#fff] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] lg:px-[50px] lg:py-[20px]'>
									Confirm
								</Button>
							</DrawerClose>
						</div>
					</div>
				</DrawerHeader>
			</DrawerContent>
		</Drawer>
	)
}
