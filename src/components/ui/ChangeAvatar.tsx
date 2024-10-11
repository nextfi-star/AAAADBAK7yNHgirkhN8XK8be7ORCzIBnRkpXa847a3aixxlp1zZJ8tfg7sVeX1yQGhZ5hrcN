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
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { useState } from 'react'
import Image from 'next/image'
import { Button } from './button'
import { PlusIcon } from './PlusIcon'
import { useThemeStore } from '@/store'

const data = [
	{
		img: '/main/avatar.png',
	},
	{
		img: '/main/avatar.png',
	},
	{
		img: '/main/avatar.png',
	},
	{
		img: '/main/avatar.png',
	},
	{
		img: '/main/avatar.png',
	},
	{
		img: '/main/avatar.png',
	},
	{
		img: '/main/avatar.png',
	},
	{
		img: '/main/avatar.png',
	},
	{
		img: '/main/avatar.png',
	},
	{
		img: '/main/avatar.png',
	},
]

export const ChangeAvatar = () => {
	const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null)
	const [activeTab, setActiveTab] = useState('select-avatar')
	const { theme } = useThemeStore()

	const handleAvatarSelect = (avatarUrl: string) => {
		setSelectedAvatar(avatarUrl)
	}

	return (
		<Drawer>
			<DrawerTrigger asChild>
				<div>
					<Image
						src={'/main/profile_page/edit_icon.svg'}
						width={53}
						height={53}
						alt={'avatar'}
						className='absolute bottom-0 -right-[10px] object-contain min-h-[20px] min-w-[20px] cursor-pointer'
					/>
				</div>
			</DrawerTrigger>

			<DrawerContent className='z-[9999] px-[30px]'>
				<DrawerHeader>
					<DrawerTitle>Change profile picture</DrawerTitle>
					<DrawerDescription className='text-black dark:text-white'>
						You can choose from available avatars or upload a new one.
					</DrawerDescription>
				</DrawerHeader>

				{/* Tabs */}
				<Tabs value={activeTab} onValueChange={setActiveTab}>
					<TabsList className='mb-[30px]'>
						<TabsTrigger value='select-avatar'>Select Avatar</TabsTrigger>
						<TabsTrigger value='upload-avatar'>Upload Avatar</TabsTrigger>
					</TabsList>

					{/* Табка для выбора из существующих */}
					<TabsContent value='select-avatar'>
						<div className='flex flex-wrap gap-4 py-[20px] border-0 border-b border-solid border-b-white min-h-[421px] max-h-[321px] overflow-y-auto'>
							{data &&
								data.map((avatar, index) => (
									<div
										key={index}
										className={`flex p-2`}
										onClick={() => handleAvatarSelect(avatar.img)}
									>
										<Image
											src={avatar.img}
											width={116}
											height={116}
											alt={'avatar'}
											className={`object-cover max-w-[116px] w-full rounded-[50%] hover:cursor-pointer border border-solid hover:border-[#205BC9]`}
										/>
									</div>
								))}
						</div>
					</TabsContent>

					{/* Табка для загрузки картинки */}
					<TabsContent value='upload-avatar'>
						<div className='min-h-[321px] border-1 border-dashed border-gray-500 rounded-[10px] flex flex-col gap-[10px] items-center justify-center p-[10px]'>
							<input
								type='file'
								id='file-upload'
								className='hidden'
								onChange={e => console.log(e.target.files)}
							/>
							<label
								htmlFor='file-upload'
								className='flex flex-col items-center justify-center cursor-pointer rounded-[50%] border-1 border-solid dark:border-white border-black p-[13px] mb-[10px]'
							>
								<PlusIcon color={theme === 'dark' ? 'white' : 'black'} />
							</label>
							<span>Upload a photo or drag and drop</span>
							<span className='text-center text-[14px] md:text-[20px]'>
								Supports JPG,PNG and GIF. Maximum upload file size 10 MB
							</span>
						</div>
					</TabsContent>
				</Tabs>

				<DrawerFooter className='flex flex-row justify-center gap-[42px]'>
					<DrawerClose asChild>
						<Button
							variant='outline'
							className='border border-solid dark:border-gray-300 border-black rounded-[50px] px-[35px] min-w-[117px] hover:bg-transparent hover:text-[#205BC9]'
						>
							Cancel
						</Button>
					</DrawerClose>
					<Button
						onClick={() => console.log('Selected Avatar:', selectedAvatar)}
						className='bg-[#205BC9] text-white rounded-[50px] px-[35px] border border-solid border-[#205BC9] min-w-[117px] hover:bg-transparent hover:text-[#205BC9] hover:border-white'
					>
						Save
					</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}
