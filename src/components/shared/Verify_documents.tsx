'use client'
import { NextPage } from 'next'
import { useState } from 'react'
import { Button } from '../ui/button'
import ArrowBracket from '../ui/ArrowBracket'
import { useThemeStore } from '@/store'
import { PlusIcon } from '../ui/PlusIcon'
import Image from 'next/image'

interface Props {
	items: string
	step: number
	setStep: (step: number) => void
	onPhotoChange: (value: string) => void
	handlePhotoChange: (photoData: string) => void
	handlePhotoChange2: (photoData2: string) => void
	// resetData: () => void
}
export const Verify_documents: NextPage<Props> = ({
	items,
	step,
	setStep,
	onPhotoChange,
	handlePhotoChange, 
	handlePhotoChange2,
}) => {
	const { theme } = useThemeStore()
	const [change, setChange] = useState<boolean>(false)
	const [photo, setPhoto] = useState<string | null>(null)
	const [photo2, setPhoto2] = useState<string | null>(null)

	// const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	const file = e.target.files && e.target.files[0]
	// 	if (file) {
	// 		const reader = new FileReader()
	// 		reader.onloadend = () => {
	// 			setPhoto(reader.result as string)
	// 			onPhotoChange(reader.result as string)
	// 		}
	// 		reader.readAsDataURL(file)
	// 	}
	// }
	// const handleFileChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	const file = e.target.files && e.target.files[0]
	// 	if (file) {
	// 		const reader = new FileReader()
	// 		reader.onloadend = () => {
	// 			setPhoto2(reader.result as string)
	// 		}
	// 		reader.readAsDataURL(file)
	// 	}
	// }

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, onPhotoChange: (photoData: string) => void, setPhoto: React.Dispatch<React.SetStateAction<string | null>>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onPhotoChange(reader.result as string); // Передаем результат в соответствующий обработчик
        setPhoto(reader.result as string); // Сохраняем результат в локальное состояние
      };
      reader.readAsDataURL(file);
    }
  };

	return (
		<div className='w-full flex flex-col items-center'>
			<span className='text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-[#888888] flex justify-start items-center w-full  gap-[15px] mb-[15px]'>
				<Button
					className=' text-black dark:text-white bg-transparent  text-[14px] md:text-[18px] border-none shadow-none p-0 hover:bg-[#205BC9]'
					onClick={() => setStep(step - 1)}
				>
					<ArrowBracket
						color={theme === 'dark' ? 'white' : 'black'}
						width={25}
						height={25}
						className={'rotate-90'}
					/>
					Step Back
				</Button>
			</span>

			{!change ? (
				<div className='flex flex-col items-center gap-[15px] md:gap-[20px]'>
					<h1 className='text-[20px] md:text-[24px] font-medium pb-[8px]'>
						Get your{' '}
						<span className='text-[#3F7EF3]'>{items.toUpperCase()}</span> ready
					</h1>
					<p className='text-[14px] md:text-[20px] max-w-[557px] text-center'>
						To verify your identity and prevent fraud, you need to take a photo
						of your {items}
					</p>
					<div className='min-w-[392px] md:min-w-[536px] border-1 border-solid border-[#888888] rounded-[10px] py-[16px] px-[24px] flex flex-col justify-evenly gap-[16px] mb-0 md:mb-[24px]'>
						<h5 className='text-[20px] text-center'>{items.toUpperCase()}</h5>
						<div className='flex items-start gap-[20px] md:gap-[40px] pb-[24px]'>
							<div className='min-h-[70px] min-w-[70px] md:min-h-[100px] md:min-w-[100px] border border-solid border-[#888888] rounded-[5px]'></div>
							<div className='flex flex-col w-full gap-[16px]'>
								<span className='bg-[#888888] min-h-[10px] md:min-h-[20px] rounded-[5px] w-full'></span>
								<span className='bg-[#888888] min-h-[10px] md:min-h-[20px] rounded-[5px] w-full'></span>
								<span className='bg-[#888888] min-h-[10px] md:min-h-[20px] rounded-[5px] w-full'></span>
								<span className='bg-[#888888] min-h-[10px] md:min-h-[20px] rounded-[5px] w-full'></span>
							</div>
						</div>
						<div className='flex items-start gap-[10px] w-full'>
							<div className='flex flex-col items-center gap-[10px] flex-1'>
								<span className='bg-[#888888] min-h-[10px] md:min-h-[20px] rounded-[5px] w-full'></span>
								<span className='bg-[#888888] min-h-[10px] md:min-h-[20px] rounded-[5px] w-full'></span>
								<span className='bg-[#888888] min-h-[10px] md:min-h-[20px] rounded-[5px] w-full'></span>
							</div>
							<div className='min-h-[70px] min-w-[60px] md:min-h-[100px] md:min-w-[90px] -mt-[19px] border border-solid border-[#888888] rounded-[5px]'></div>
						</div>
					</div>
					<span className='text-[20px] text-center'>
						Make sure you capture a clear and complete image.
					</span>
					<button
						className='text-[20px] bg-[#205BC9] rounded-[50px] py-[16px] px-[60px] mb-[40px]'
						onClick={() => setChange(!change)}
					>
						Start verification
					</button>
				</div>
			) : (
				<div className='w-full flex flex-col items-center gap-[24px] pb-[40px]'>
					<h1 className='text-[24px] font-medium pb-[8px]'>
						Upload page 1-2 of your{' '}
						<span className='text-[#205BC9]'> {items}</span>
					</h1>
					<div className='flex flex-col gap-[30px] items-center'>

						<div className="flex flex-col xl:flex-row gap-[15px] items-start">
						<div className='flex flex-col gap-[15px] w-full max-w-[340px]'>
							<div className='min-h-[321px] border-1 border-dashed border-gray-500 rounded-[10px] flex flex-col gap-[10px] items-center justify-center p-[15px]'>
								<input
									type='file'
									id='file-upload'
									className='hidden'
									accept='image/*'
									onChange={(e) => handleFileChange(e, handlePhotoChange, setPhoto)}
								/>
								<label
									htmlFor='file-upload'
									className='flex flex-col items-center justify-center cursor-pointer rounded-[50%] border-1 border-solid dark:border-white border-black p-[13px] mb-[10px]'
								>
									<PlusIcon color={theme === 'dark' ? 'white' : 'black'} />
								</label>
								<span className='text-[14px] md:text-[20px]'>
									Upload a photo or drag and drop
								</span>

								<span className='text-center text-[14px] md:text-[20px]'>
									Max size per file: 20 MB (png, jpeg, jpg)
								</span>
							</div>
							{photo && (
								<Image
									src={photo}
									width={100}
									height={100}
									alt='Uploaded photo'
									className='w-auto h-auto max-w-[340px] transition duration-300 hover:scale-[1.5]'
								/>
							)}
						</div>

						<div className='flex flex-col gap-[15px] w-full max-w-[340px]'>
							<div className='min-h-[321px] border-1 border-dashed border-gray-500 rounded-[10px] flex flex-col gap-[10px] items-center justify-center p-[15px]'>
								<input
									type='file'
									id='file-upload-2'
									className='hidden'
									accept='image/*'
									onChange={(e) => handleFileChange(e, handlePhotoChange2, setPhoto2)}
								/>
								<label
									htmlFor='file-upload-2'
									className='flex flex-col items-center justify-center cursor-pointer rounded-[50%] border-1 border-solid dark:border-white border-black p-[13px] mb-[10px]'
								>
									<PlusIcon color={theme === 'dark' ? 'white' : 'black'} />
								</label>
								<span className='text-[14px] md:text-[20px]'>
									Upload a photo or drag and drop
								</span>

								<span className='text-center text-[14px] md:text-[20px]'>
									Max size per file: 20 MB (png, jpeg, jpg)
								</span>
							</div>
							{photo2 && (
								<Image
									src={photo2}
									width={100}
									height={100}
									alt='Uploaded photo'
									className='w-auto h-auto max-w-[340px] transition duration-300 hover:scale-[1.5]'
								/>
							)}
						</div>

						</div>

						<button
							className={`text-[20px] ${
								!photo || !photo2? 'bg-[#888888]' : 'bg-[#205BC9]'
							} rounded-[50px] py-[16px] max-w-[248px] w-full mb-[40px]`}
							disabled={!photo || !photo2}
							onClick={() => setStep(step + 1)}
						>
							Next
						</button>
					</div>
				</div>
			)}

			<span className='text-[20px] text-center'>
				Complete the entire process in your{' '}
				<span className='text-[#3F7EF3] hover:cursor-pointer'>
					mobile browser
				</span>{' '}
				or <span className='text-[#3F7EF3] hover:cursor-pointer'>app.</span>{' '}
			</span>
		</div>
	)
}
