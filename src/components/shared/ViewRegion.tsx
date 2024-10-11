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
import { RussiaMap } from '../ui/RussiaMap'
import { useThemeStore } from '@/store'
import { Location } from '../ui/Location'

interface Props {
	propsItem: React.ReactNode
}

export const ViewRegion: NextPage<Props> = ({ propsItem }) => {
	const { theme } = useThemeStore()
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button className='bg-transparent hover:bg-transparent text-[#205bc9] dark:text-white border border-solid rounded-[50px] border-gray-400'>
					{propsItem}
				</Button>
			</DrawerTrigger>

			<DrawerContent className='z-[9999] px-[30px] bg-white dark:bg-black'>
				<DrawerHeader className='flex flex-col gap-[16px]'>
					<DrawerTitle className='w-full border-transparent flex flex-col items-center gap-[15px]'>
						<div className='relative border-2 border-dashed rounded-[20px]'>
							<RussiaMap color={theme === 'dark' ? '#fff' : '#000'} />
							<Location
								className='absolute top-[40px] md:top-0 right-[20%] max-w-[40px] md:w-full'
								color={theme === 'dark' ? '#205BC9' : '#205BC9'}
							/>
						</div>
						<h1 className='text-[32px] leading-[32px]'>
							Country/Region of residence:{' '}
							<span className='text-[#205BC9] '>Russia</span>
						</h1>
					</DrawerTitle>
					<DrawerDescription className='text-black dark:text-white flex gap-[5px] items-start text-center text-[14px] md:text-[20px]'>
						You can only update your country/region of residence once every 90
						days. Updating it also means you'll need to complete your identity
						verification again.
					</DrawerDescription>
				</DrawerHeader>

				<DrawerFooter className='flex flex-row justify-center'>
					<DrawerClose asChild>
						<Button className='w-full max-w-[531px] text-[20px] rounded-[50px] px-[35px] min-w-[117px] bg-[#205BC9] text-[#fff]'>
							Update
						</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}
