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
import { useRef } from 'react'


const data = [
	{
		img: '/main/avatars/avatar_1.jpg',
	},
	{
		img: '/main/avatars/avatar_2.jpg',
	},
	{
		img: '/main/avatars/avatar_3.jpg',
	},
	{
		img: '/main/avatars/avatar_4.jpg',
	},
	{
		img: '/main/avatars/avatar_5.jpg',
	},
	{
		img: '/main/avatars/avatar_6.jpg',
	},
]

export const ChangeAvatar = () => {
	const closeButt = useRef<HTMLInputElement>(null);
	const closeUpload = () => {
		if (closeButt.current) {
			const button = closeButt.current.querySelector('button') as HTMLButtonElement;
			if (button){
				button.click()
			}
		}
	}
	const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null)
	const [selectedFile, setSelectedFile] = useState<File | null>(null)
	const [activeTab, setActiveTab] = useState('select-avatar')
	const [error, setError] = useState('')

	const { theme } = useThemeStore()
	const t = useTranslations('profile')

	const getSelectedAvatarFIle = async (fileName: string) => {
		try {
			// 1. Получаем файл как Blob
			const response = await fetch(`https://nextfi.io${fileName}`);
			if (!response.ok) {
			  throw new Error(`Failed to fetch file: ${response.status} ${response.statusText}`);
			}
			const blob = await response.blob();
	  
			// 2. Создаем объект File
			const file = new File([blob], fileName, { type: blob.type }); // Создаем File
			return file
		}
		catch (error: any) {
			setError(`❌ Ошибка: ${error}`)
		}
	}

	const uploadAvatar = async (file: File) => {
		if (!user?.csrf) {
			setError('Ошибка: CSRF токен отсутствует')
			return
		}

		const result = await uploadFile(user.csrf, file, 'upload_logo' )

		if (result.response === 'success') {
			setSelectedFile(null)
			setError('✅ Файл успешно загружен и отправлен на проверку')
			useUserStore.getState().updateUser({ logo: result.filename })
			closeUpload()
		} else {
			setError(`❌ Ошибка: ${result.message}`)
		}
	}

	const handleAvatarSelect = async (avatarUrl: string) => {
		setSelectedAvatar(avatarUrl);
		console.log(avatarUrl)

		const file = await getSelectedAvatarFIle(avatarUrl);
		if (file){
			await uploadAvatar(file);
		}
	}

	const user = useUserStore(state => state.user)
	const [file, setFile] = useState<File | null>(null)
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!event.target.files?.length) return
		setSelectedFile(event.target.files[0])
		setError('')

		const file = event.target.files?.[0]; // Получаем файл
		if (file) {
		// Создаем URL для отображения файла
		const url = URL.createObjectURL(file);
		setFileUrl(url); // Обновляем состояние
		} else {
		setFileUrl(''); // Очищаем URL, если файл не выбран
		}

	}
	const handleUpload = async () => {
		if (!selectedFile) {
			setError('Выберите файл перед загрузкой')
			return
		}
		await uploadAvatar(selectedFile);
	}

	const [fileUrl, setFileUrl] = useState<string>('');
	const fileInputRef = useRef<HTMLInputElement>(null);

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
						style={{width: "100%"}}
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
												className={
													selectedAvatar === avatar.img ? 
													`object-cover max-w-[116px] max-h-[116px] w-full rounded-[50%] hover:cursor-pointer border border-solid border-[#205BC9] shadow-2xl shadow-[#205BC9] index-${index}` :
													`object-cover max-w-[116px] max-h-[116px] w-full rounded-[50%] hover:cursor-pointer border border-solid hover:border-[#205BC9] hover:shadow-2xl hover:shadow-[#205BC9] index-${index}`
												}
												height={116}
												src={avatar.img}
												width={116}
											/>
										</div>
									))}
							</div>
						</TabsContent>

						{/* Табка для загрузки картинки */}
						<TabsContent value='upload-avatar' style={{width: "100%"}}>
						<div className="flex flex-col items-center justify-center" style={{minWidth: "100%"}}>
						{fileUrl ?(
							<div className='relative' style={{margin: "20px"}}>
								<Image
									alt='Uploaded photo'
									className='w-full h-full max-w-[340px] max-h-[191px] transition duration-300'
									height={100}
									src={fileUrl}
									width={100}
								/>
								<button
									className='absolute top-0 right-0 text-[20px] bg-[#BDBDBD] w-[24px] h-[24px] rounded-[5px] flex items-center justify-center'
									onClick={() => setFileUrl('')}
								>
									<Image
										alt='close X'
										className='w-full h-auto max-w-[10px] '
										height={20}
										src={'/header_icons/profile_burger/close.svg'}
										width={20}
									/>
								</button>
							</div>
							) : (
							<form className='min-h-[321px] border-1 border-dashed border-gray-500 rounded-[10px] flex flex-col gap-[10px] items-center justify-center p-[10px] max-w-[390px]'>
								<input
									className='hidden'
									id='file-upload'
									type='file'
									onChange={handleFileChange}
									ref={fileInputRef}
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
							</form>)}
						</div>
						</TabsContent>
					</Tabs>

					<DrawerFooter className='flex flex-row justify-center gap-[42px]'>
						<span ref={closeButt}>
							<DrawerClose asChild>
								<Button
									className='border-1 !border-[#4d4d4d] dark:!border-[#4d4d4d] text-[16px] border-solid rounded-[50px] px-[10px] !bg-transparent !text-[#0c0c0c] dark:!text-[#eeeeee] min-w-[117px]'
								>
									{t('close')}
								</Button>
							</DrawerClose>
						</span>
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
