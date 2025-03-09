'use client'
import { useThemeStore } from '@/store/useChatStore'
import Image from 'next/image'
import { useState } from 'react'
import ArrowBracket from '../ui/ArrowBracket'
import { Button } from '../ui/button'
import { PlusIcon } from '../ui/PlusIcon'
import { Spinner } from '@heroui/spinner'
import { useTranslations } from 'next-intl'

interface Props {
	items: string
	step: number
	setStep: (step: number) => void
	onPhotoChange: (value: string) => void
	handlePhotoChange: (photoData: string) => void
	handlePhotoChange2: (photoData2: string) => void
	fileInputRef: React.RefObject<HTMLInputElement>
	handleFileChangeApi: (e: React.ChangeEvent<HTMLInputElement>) => void
	uploading: boolean
	error: string
	upLoad: (type: 'upload_verif' | 'upload_logo') => void
	setUploading: (value: boolean) => void
}
export const Verify_documents = ({
	items,
	step,
	setStep,
	handlePhotoChange,
	fileInputRef,
	handleFileChangeApi,
	uploading,
	error,
	setUploading,
	upLoad,
}: Props) => {
	const { theme } = useThemeStore()
	const [change, setChange] = useState<boolean>(false)
	const [photo, setPhoto] = useState<string | null>(null)
	const [privacy, setPrivacy] = useState(false)
	const t = useTranslations('verify')
	const handleFileChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		onPhotoChange: (photoData: string) => void,
		setPhoto: React.Dispatch<React.SetStateAction<string | null>>
	) => {
		const file = e.target.files && e.target.files[0]
		if (file) {
			const reader = new FileReader()
			reader.onloadend = () => {
				onPhotoChange(reader.result as string)
				setPhoto(reader.result as string)
			}
			reader.readAsDataURL(file)
		}
	}

	return (
		<div className='w-full flex flex-col items-center'>
			<span className='text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-[#888888] flex justify-start items-center w-full  gap-[15px] mb-[15px]'>
				<Button
					className=' text-black dark:text-white bg-transparent text-[14px] md:text-[18px] border-none shadow-none p-0 hover:bg-transparent'
					onClick={() => setStep(step - 1)}
				>
					<ArrowBracket
						className={'rotate-90'}
						color={theme === 'dark' ? 'white' : 'black'}
						height={25}
						width={25}
					/>
					{t('stpBack')}
				</Button>
			</span>

			{!change ? (
				<div className='flex flex-col items-center gap-[15px] md:gap-[20px]'>
					<h1 className='text-[20px] md:text-[24px] font-medium pb-[8px]'>
						{t('getUr')}{' '}
						<span className='text-[#3F7EF3]'>{items.toUpperCase()}</span> ready
					</h1>
					<p className='text-[14px] md:text-[20px] max-w-[557px] text-center'>
						{t('toVerif')} {items}
					</p>
					<div className='max-w-[392px] w-full md:max-w-[536px] border-1 border-solid border-[#888888] rounded-[10px] py-[16px] px-[24px] flex flex-col justify-evenly gap-[16px] mb-0 md:mb-[24px]'>
						<h5 className='text-[20px] text-center'>{items.toUpperCase()}</h5>
						<div className='flex items-start gap-[20px] md:gap-[40px] pb-[24px]'>
							<div className='min-h-[50px] min-w-[50px] md:min-h-[100px] md:min-w-[100px] border border-solid border-[#888888] rounded-[5px]' />
							<div className='flex flex-col w-full gap-[16px]'>
								<span className='bg-[#888888] min-h-[10px] md:min-h-[20px] rounded-[5px] w-full' />
								<span className='bg-[#888888] min-h-[10px] md:min-h-[20px] rounded-[5px] w-full' />
								<span className='bg-[#888888] min-h-[10px] md:min-h-[20px] rounded-[5px] w-full' />
								<span className='bg-[#888888] min-h-[10px] md:min-h-[20px] rounded-[5px] w-full' />
							</div>
						</div>
						<div className='flex items-start gap-[10px] w-full'>
							<div className='flex flex-col items-center gap-[10px] flex-1'>
								<span className='bg-[#888888] min-h-[10px] md:min-h-[20px] rounded-[5px] w-full' />
								<span className='bg-[#888888] min-h-[10px] md:min-h-[20px] rounded-[5px] w-full' />
								<span className='bg-[#888888] min-h-[10px] md:min-h-[20px] rounded-[5px] w-full' />
							</div>
							<div className='min-h-[60px] min-w-[50px] md:min-h-[100px] md:min-w-[90px] -mt-[19px] border border-solid border-[#888888] rounded-[5px]' />
						</div>
					</div>
					<span className='text-[20px] text-center'>{t('makePic')}</span>
					<button
						className='text-[16px] sm:text-[20px] bg-[#205BC9] rounded-[50px] py-[5px] sm:py-[16px] px-[60px] mb-[40px] text-white'
						onClick={() => setChange(!change)}
					>
						{t('strtVerif')}
					</button>
				</div>
			) : (
				<div className='w-full flex flex-col items-center gap-[24px] pb-[40px]'>
					<h1 className='text-[24px] font-medium pb-[8px]'>
						{t('uploadY')} <span className='text-[#205BC9]'> {items}</span>
					</h1>
					<div className='flex flex-col gap-[30px] items-center'>
						<div className='flex flex-col xl:flex-row gap-[15px] items-start'>
							<div className='flex flex-col gap-[15px] w-full max-w-[340px]'>
								{!photo && (
									<>
										<div className='min-h-[321px] border-1 border-dashed border-gray-500 rounded-[10px] flex flex-col gap-[10px] items-center justify-center p-[15px]'>
											<input
												accept='image/*'
												className='hidden'
												id='file-upload'
												type='file'
												ref={fileInputRef}
												onChange={e => {
													handleFileChange(e, handlePhotoChange, setPhoto)
													handleFileChangeApi(e)
												}}
											/>
											<label
												className='flex flex-col items-center justify-center cursor-pointer rounded-[50%] border-1 border-solid dark:border-white border-black p-[13px] mb-[10px]'
												htmlFor='file-upload'
											>
												<PlusIcon
													color={theme === 'dark' ? 'white' : 'black'}
												/>
											</label>
											<span className='text-[14px] md:text-[20px] text-center'>
												{t('upLoadDrag')}
											</span>

											<span className='text-center text-[14px] md:text-[20px]'>
												{t('maxSize')}: 20 MB (png, jpeg, jpg)
											</span>
										</div>
									</>
								)}
								{photo && (
									<div className='relative'>
										<Image
											alt='Uploaded photo'
											className='w-full h-full max-w-[340px] max-h-[191px] transition duration-300'
											height={100}
											src={photo}
											width={100}
										/>
										<button
											className='absolute top-0 right-0 text-[20px] bg-[#BDBDBD] w-[24px] h-[24px] rounded-[5px] flex items-center justify-center'
											onClick={() => setPhoto(null)}
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
								)}
							</div>
						</div>

						<div className='privacy max-w-[691px] flex flex-col self-center	 justify-start'>
							<label
								className='checkbox-label gap-[5px] md:gap-[18px] !items-start'
								htmlFor='checkbox-privacy'
							>
								<input
									className='checkbox'
									id='checkbox-privacy'
									type='checkbox'
									onChange={() => setPrivacy(!privacy)}
								/>
								<span className='checkbox-view'>
									<svg
										className='checkbox-icon max-w-[50px] md:max-w-[50px] max-h-[20px] md:max-h-[45px]'
										viewBox='0 0 511.985 511.985'
										width='18'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0-15.862 15.862-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899 10.394 0 20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435z'
											fill={theme === 'dark' ? '#fff' : '#3A3939'}
										/>
									</svg>
								</span>
								<p className='text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] text-left'>
									{t('consent')}{' '}
									<span className='text-[#3F7EF3]'>{t('privacNot')}.</span>
								</p>
							</label>
						</div>

						<button
							className={`text-[20px] ${
								!photo || !privacy ? 'bg-[#888888]' : 'bg-[#205BC9]'
							} rounded-[50px] py-[10px] sm:py-[16px] max-w-[248px] w-full mb-[40px] text-white`}
							disabled={!photo || !privacy}
							onClick={() => {
			setUploading(true)

								upLoad('upload_verif')
							}}
						>
							{uploading ? <Spinner /> : t('next')}
						</button>
					</div>
				</div>
			)}

			<span className='text-[20px] text-center'>
				{t('entirePrsc')}{' '}
				<span className='text-[#3F7EF3] hover:cursor-pointer'>
					{t('mobileBrowser')}
				</span>{' '}
				{t('or')}{' '}
				<span className='text-[#3F7EF3] hover:cursor-pointer'>{t('app')}.</span>{' '}
			</span>
		</div>
	)
}
