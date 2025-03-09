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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useUserStore } from '@/hooks/useUserData'
import { useThemeStore } from '@/store/useChatStore'
import { Button } from '@heroui/button'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'
import { PlusIcon } from './PlusIcon'
import { uploadFile } from '@/utils/api'
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
	const [selectedFile, setSelectedFile] = useState<File | null>(null)
	const [activeTab, setActiveTab] = useState('select-avatar')
	const [error, setError] = useState('')

	const { theme } = useThemeStore()
	const userAvatar = useUserStore(state => state.user?.logo)
	const t = useTranslations('profile')
	const handleAvatarSelect = (avatarUrl: string) => {
		setSelectedAvatar(avatarUrl)
	}
	const user = useUserStore(state => state.user)
	const [file, setFile] = useState<File | null>(null)
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!event.target.files?.length) return
		setSelectedFile(event.target.files[0])
		setError('')
	}
	const handleUpload = async () => {
		if (!selectedFile) {
			setError('Выберите файл перед загрузкой')
			return
		}
		if (!user?.csrf) {
			setError('Ошибка: CSRF токен отсутствует')
			return
		}
		const result = await uploadFile(user.csrf, selectedFile, 'upload_logo' )
		if (result.response === 'success') {
			setSelectedFile(null)
			setError('✅ Файл успешно загружен и отправлен на проверку')
		} else {
			setError(`❌ Ошибка: ${result.message}`)
		}
	}
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<div>
					<Image
						alt={'avatar'}
						className={`absolute bottom-0 -right-[10px] object-contain min-h-[20px] min-w-[20px] cursor-pointer`}
						height={53}
						src={userAvatar || '/main/profile_page/edit_icon.svg'}
						width={53}
					/>
				</div>
			</DrawerTrigger>

			<DrawerContent className='z-[99] px-[30px] drawer__without_after modal-holder mobile-holder flex flex-col items-center'>
				<div>
					<DrawerHeader className='flex flex-col items-start'>
						<DrawerTitle>{t('changePic')}</DrawerTitle>
						<DrawerDescription className='text-black dark:text-white'>
							{t('uCan')}
						</DrawerDescription>
					</DrawerHeader>

					{/* Tabs */}
					<Tabs
						className='flex flex-col items-center md:items-start overflow-y-visible overflow-x-visible'
						value={activeTab}
						onValueChange={setActiveTab}
					>
						<TabsList className='mb-[0px]'>
							<TabsTrigger value='select-avatar'>{t('selectAva')}</TabsTrigger>
							<TabsTrigger value='upload-avatar'>{t('uploadAva')}</TabsTrigger>
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
												className={`object-cover max-w-[116px] max-h-[116px] w-full rounded-[50%] hover:cursor-pointer border border-solid hover:border-[#205BC9] hover:shadow-2xl hover:shadow-[#205BC9] index-${index}`}
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
							<form className='min-h-[321px] border-1 border-dashed border-gray-500 rounded-[10px] flex flex-col gap-[10px] items-center justify-center p-[10px] max-w-[390px]'>
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
									{t('uploadPhoto')}
								</span>
								<span className='text-center text-[14px] md:text-[20px]'>
									{t('suppFormat')}
								</span>
							</form>
						</TabsContent>
					</Tabs>

					<DrawerFooter className='flex flex-row justify-center gap-[42px]'>
						<DrawerClose asChild>
							<Button className='border-1 !border-[#4d4d4d] dark:!border-[#4d4d4d] text-[16px] border-solid rounded-[50px] px-[10px] !bg-transparent !text-[#0c0c0c] dark:!text-[#eeeeee] min-w-[117px]'>
								{t('close')}
							</Button>
						</DrawerClose>
						<Button
							className='bg-[#205BC9] text-white rounded-[50px] px-[35px] border border-solid border-[#205BC9] min-w-[117px] hover:bg-[#205BC9] hover:text-white hover:opacity-[.8] transition duration-300'
							onPress={handleUpload}
							disabled={!file}
						>
							{t('save')}
						</Button>
					</DrawerFooter>
				</div>
			</DrawerContent>
		</Drawer>
	)
}
