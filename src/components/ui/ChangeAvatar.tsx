'use client'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import { NextPage } from 'next'
import Image from 'next/image'

interface Props {}

export const ChangeAvatar: NextPage<Props> = () => {
	return (
		<div>
				<Drawer>
			<DrawerTrigger asChild>
				<div className=''>
					<Image
						src={'/main/profile_page/edit_icon.svg'}
						width={53}
						height={53}
						alt={'avatar'}
						className='absolute bottom-0 -right-[10px] object-contain min-h-[20px] min-w-[20px] cursor-pointer'
					/>
				</div>
			</DrawerTrigger>
			<DrawerContent className='z-[9999] min-h-[70%]'>
				<DrawerHeader>
					<DrawerTitle>Change profile picture</DrawerTitle>
					<DrawerDescription>
						Your public profile picture be uploaded 3 more time(s) this year, or
						choose from our avatars with no limit
					</DrawerDescription>
				</DrawerHeader>
				<DrawerFooter>
					<Button>Submit</Button>
					<DrawerClose>
						<Button variant='outline'>Cancel</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
		</div>
	)
}
