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
import Image from 'next/image'
import { Input } from '@/components/ui/input'

interface Props {
	propsItem: React.ReactNode
}

export const ChangeEmail: NextPage<Props> = ({ propsItem }) => {
	
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button
					className={`bg-transparent hover:bg-transparent border border-solid rounded-[50px] border-gray-400 text-[#205bc9] dark:text-white`}
				>
					{propsItem}
				</Button>
			</DrawerTrigger>

			<DrawerContent className='z-[9999] px-[30px]'>
				<DrawerHeader>
					<DrawerTitle className='w-full border-transparent border-b-1 border-solid border-b-gray-400 pb-[20px] mb-[20px]'>
					Change email
					</DrawerTitle>
					<div className=' flex flex-col gap-[38px]'>
						<DrawerDescription className='text-black dark:text-white bg-[#F5F5F5] dark:bg-[#181818] py-[24px] px-[22px] rounded-[6px] text-[14px] md:text-[20px] flex flex-col items-center gap-[5px] md:flex-row md:items-start md:gap-[10px]'>
							<Image
								src={'/header_icons/profile_burger/info_icon.svg'}
								width={20}
								height={20}
								alt='info'
								quality={100}
							/>
							To protect your account, you won't be able to withdraw funds for
							24 hours after you reset or changing the email address in your
							account.
						</DrawerDescription>
						<div className='flex w-full  flex-col items-start gap-[20px]'>
							<label className='text-[#181818] dark:text-white text-[14px] md:text-[16px] flex flex-col items-start gap-[7px] w-full'>
								New email address
								<Input
									type='email'
									placeholder='Enter new email address'
									className='border border-solid border-white text-[16px] md:text-[20px] w-full py-[20px] pl-[35px]'
								/>
							</label>
							<label className='text-[#181818] dark:text-white text-[14px] md:text-[16px] flex flex-col items-start gap-[7px] w-full'>
								New email authentication
								<Input
									type='email'
									placeholder='Enter code'
									className='border border-solid border-white text-[16px] md:text-[20px] w-full py-[20px] pl-[35px]'
								/>
							</label>
							<label className='text-[#181818] dark:text-white text-[14px] md:text-[16px] flex flex-col items-start gap-[7px] w-full'>
								Current email authentication
								<Input
									type='email'
									placeholder='Enter code'
									className='border border-solid border-white text-[16px] md:text-[20px] w-full py-[20px] pl-[35px]'
								/>
							</label>
							<label className='text-[#181818] dark:text-white text-[14px] md:text-[16px] flex flex-col items-start gap-[7px] w-full'>
								Authenticator app
								<Input
									type='email'
									placeholder='Enter code'
									className='border border-solid border-white text-[16px] md:text-[20px] w-full py-[20px] pl-[35px]'
								/>
							</label>
						</div>
					</div>
				</DrawerHeader>

				<DrawerFooter className='flex flex-row justify-start gap-[40px]'>
					<DrawerClose asChild>
						<Button className='bg-[#515151] text-white rounded-[50px] px-[35px] min-w-[117px] hover:bg-[#515151] hover:text-[#fff]  md:min-w-[250px]'>
							Confirm
						</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}
