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

interface Props {
	propsItem: React.ReactNode
}

export const ChangeRegion: NextPage<Props> = ({ propsItem }) => {
	const { theme } = useThemeStore()
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button className='bg-transparent hover:bg-transparent text-[#205bc9] dark:text-white border border-solid rounded-[50px] border-gray-400'>
					{propsItem}
				</Button>
			</DrawerTrigger>

			<DrawerContent className='z-[9999] px-[30px] pb-[2px] bg-white dark:bg-black'>
				<DrawerHeader>
					<DrawerTitle className='w-full border-transparent'>
						<h1 className='text-[32px]'>Identity verification</h1>
					</DrawerTitle>
					<span className='block w-full min-h-[1px] bg-gray-400 my-[20px]'></span>
					<DrawerDescription className='text-black dark:text-white flex gap-[20px] flex-col'>
						<span className='flex items-center gap-[15px] text-[18px]'>
							<span>{'<'}</span> Back
						</span>
						<p className='text-[20px] md:text-[32px]'>
							Select country/region of residence
						</p>

						<label className='flex flex-col gap-[20px]'>
							<span className='text-[20px]'>Country/Region of residence</span>
							<Choose_region />
						</label>
						<p className='flex flex-col items-center gap-[15px] text-[18px] md:text-[20px] font-medium bg-white dark:bg-[#181818] pt-[8px] px-[20px] pb-[30px] rounded-[6px]'>
							Reminder
							<span className='text-[14px] font-normal'>
								Once your country/region is changed, some of your tag/memo
								addresses and asset holdings may become unsupported. Check if
								your deposit address is still valid, and consider trading your
								assets before proceeding as withdrawals may incur high fees.
							</span>
						</p>
					</DrawerDescription>
				</DrawerHeader>

				<DrawerFooter className='flex flex-row justify-center'>
					<DrawerClose asChild>
						<Button className='w-full max-w-[531px] text-[20px] rounded-[50px] px-[35px] min-w-[117px] bg-[#205BC9] text-[#fff]'>
							Next
						</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}
