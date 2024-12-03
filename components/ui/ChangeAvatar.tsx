'use client'
import { useState } from 'react'
import Image from 'next/image'
import { PlusIcon } from './PlusIcon'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
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
import { useThemeStore } from '@/store'
import { Button } from '@nextui-org/button'
import { sendPicture } from '@/utils/api'
// import { sendPicture } from '@/utils/api'
const data = [
	{
		img: '/main/avatar_noface.png',
	},
	{
		img: '/main/avatar_noface.png',
	},
	{
		img: '/main/avatar_noface.png',
	},
	{
		img: '/main/avatar_noface.png',
	},
	{
		img: '/main/avatar_noface.png',
	},
	{
		img: '/main/avatar_noface.png',
	},
]

export const ChangeAvatar = () => {
	const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null)
	const [activeTab, setActiveTab] = useState('select-avatar')
	const { theme } = useThemeStore()

	const handleAvatarSelect = (avatarUrl: string) => {
		setSelectedAvatar(avatarUrl)
	}
	const [file, setFile] = useState<File | null>(null)
	const [uploadStatus, setUploadStatus] = useState<string | null>(null)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      console.log(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file first.');
      return;
    }
    setUploadStatus('Uploading...');
    try {
      const response = await sendPicture(file);
      setUploadStatus(`Upload successful: ${response.message}`);
    } catch (error: any) {
      setUploadStatus(`Error: ${error.message}`);
    }
  };


	return (
		<Drawer>
			<DrawerTrigger asChild>
				<div>
					<Image
						alt={'avatar'}
						className={`absolute bottom-0 -right-[10px] object-contain min-h-[20px] min-w-[20px] cursor-pointer`}
						height={53}
						src={'/main/profile_page/edit_icon.svg'}
						width={53}
					/>
				</div>
			</DrawerTrigger>

			<DrawerContent className='z-[99] px-[30px] drawer__without_after modal-holder mobile-holder flex flex-col items-center'>
				<div>
					<DrawerHeader className='flex flex-col items-start'>
						<DrawerTitle>Change profile picture</DrawerTitle>
						<DrawerDescription className='text-black dark:text-white'>
							You can choose from available avatars or upload a new one.
						</DrawerDescription>
					</DrawerHeader>

					{/* Tabs */}
					<Tabs
						className='flex flex-col items-center md:items-start overflow-y-auto'
						value={activeTab}
						onValueChange={setActiveTab}
					>
						<TabsList className='mb-[0px]'>
							<TabsTrigger value='select-avatar'>Select Avatar</TabsTrigger>
							<TabsTrigger value='upload-avatar'>Upload Avatar</TabsTrigger>
						</TabsList>

						{/* Табка для выбора из существующих */}
						<TabsContent value='select-avatar'>
							<div className='flex justify-center sm:justify-start flex-wrap border-0 border-b border-solid border-b-white max-h-full max-w-[233px] sm:max-w-[100%]'>
								{data &&
									data.map((avatar, index) => (
										<div
											key={index}
											className={`flex py-[5px] px-[5px] avatar-holder`}
											onClick={() => handleAvatarSelect(avatar.img)}
										>
											<Image
												alt={'avatar'}
												className={`object-cover max-w-[116px] max-h-[116px] w-full rounded-[50%] hover:cursor-pointer border border-solid hover:border-[#205BC9] idnex-${index}`}
												height={116}
												src={avatar.img}
												width={116}
											/>
										</div>
									))}
							</div>
						</TabsContent>

						{/* Табка для загрузки картинки */}
						<TabsContent value='upload-avatar'>
							<div className='min-h-[321px] border-1 border-dashed border-gray-500 rounded-[10px] flex flex-col gap-[10px] items-center justify-center p-[10px] max-w-[390px]'>
								<input
									className='hidden'
									id='file-upload'
									type='file'
									onChange={handleFileChange}
								/>
								<label
									className='flex flex-col items-center justify-center cursor-pointer rounded-[50%] border-1 border-solid dark:border-white border-black p-[13px] mb-[10px]'
									htmlFor='file-upload'
								>
									<PlusIcon color={theme === 'dark' ? 'white' : 'black'} />
								</label>
								<span className='text-[14px] md:text-[20px]'>
									Upload a photo or drag and drop
								</span>
								<span className='text-center text-[14px] md:text-[20px]'>
									Supports JPG,PNG and GIF. Maximum upload file size 10 MB
								</span>
							</div>
						</TabsContent>
					</Tabs>

					<DrawerFooter className='flex flex-row justify-center gap-[42px]'>
						<DrawerClose asChild>
							<Button className='border-1 !border-[#4d4d4d] dark:!border-[#4d4d4d] text-[16px] border-solid rounded-[50px] px-[10px] !bg-transparent !text-[#0c0c0c] dark:!text-[#eeeeee] min-w-[117px]'>
								Cancel
							</Button>
						</DrawerClose>
						<Button
							className='bg-[#205BC9] text-white rounded-[50px] px-[35px] border border-solid border-[#205BC9] min-w-[117px] hover:bg-[#205BC9] hover:text-white hover:opacity-[.8] transition duration-300'
							onClick={handleUpload}
							disabled={!file}
						>
							Save
						</Button>
					</DrawerFooter>
				</div>
			</DrawerContent>
		</Drawer>
	)
}
