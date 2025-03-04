'use client'
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Input } from '@/components/ui/input'
import { Link } from '@/i18n/routing'
import { useThemeStore } from '@/store'
import { NextPage } from 'next'
import Image from 'next/image'
import ArrowBracket from '../ui/ArrowBracket'
import { Button } from "@heroui/button"
import { useState } from 'react'
import { useTranslations } from 'next-intl'

interface Props {
	propsItem: React.ReactNode
}

export const Alert_phone = ({ propsItem }: Props) => {
	const t = useTranslations('security')
	const { theme } = useThemeStore()
	const [inputs, setInputs] = useState({
		newPhone: '',
		newPhoneAuth: '',
		currentPhoneAuth: '',
		authenticatorApp: '',
	})
	const isDisabled = Object.values(inputs).some(value => value.length < 3)
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setInputs(prev => ({ ...prev, [name]: value }))
	}
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button className='border-1 !border-[#4d4d4d] dark:!border-[#4d4d4d] text-[16px] border-solid rounded-[50px] px-[10px] !bg-transparent !text-[#0c0c0c] dark:!text-[#eeeeee] max-w-[120px] lg:max-w-[220px] w-full min-h-[28px]'>
					{propsItem}
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent className='px-[40px] gap-[10px] min-h-[100dvh] max-h-[90dvh] sm:pb-[7rem] !max-w-[1306px] !mx-auto items-center !overflow-y-auto bg-[#f9f9fa] dark:!bg-[#0c0c0c] modal-new'>
				<AlertDialogHeader className=''>
					<AlertDialogTitle className='w-full border-transparent border-b-1 border-solid border-b-gray-400 pb-[20px] text-[12px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-left flex items-center gap-[10px] mb-[10px]'>
						<span className='text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-[#888888] flex items-center gap-[15px]'>
							<AlertDialogCancel className='text-black dark:text-white bg-transparent  text-[14px] md:text-[18px] border-none shadow-none hover:bg-transparent p-0 items-center m-0'>
								<ArrowBracket
									className={'rotate-90'}
									color={theme === 'dark' ? 'white' : 'black'}
									height={25}
									width={25}
								/>
							</AlertDialogCancel>
							<Link
								className='text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-[#888888]'
								href='/security'
							>
								{t('security')}
							</Link>
							<ArrowBracket
								className={'-rotate-90'}
								color={theme === 'dark' ? 'white' : 'black'}
								height={25}
								width={25}
							/>
						</span>{' '}
						{t('changephone')}
					</AlertDialogTitle>
				</AlertDialogHeader>
				<div className='flex justify-center gap-[10px] w-full '>
					<div className={'flex flex-col max-w-[600px] gap-[20px]'}>
						<span className='text-black dark:text-white bg-[#F5F5F5] dark:bg-[#181818] py-[24px] px-[22px] rounded-[6px] text-[14px] sm:text-[16px] lg:text-[18px] 2xl:text-[20px] flex flex-col items-center gap-[5px] md:flex-row md:items-start md:gap-[10px]'>
							<Image
								alt='info'
								className='max-w-[19px] md:max-w-[23px] lg:max-w-[25px] w-full'
								height={20}
								quality={100}
								src={'/header_icons/profile_burger/info_icon.svg'}
								width={20}
							/>
							{t('protectAcc')}
						</span>
						<AlertDialogDescription
							className={'w-full flex flex-col gap-[10px]'}
						>
							<label className='text-[#181818] dark:text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] flex flex-col items-start gap-[10px] w-full'>
								{t('newPhone')}
								<Input
									className='border border-solid rounded-[30px] shadow-none !border-[#4d4d4d] dark:!border-[#4d4d4d] text-[16px] px-[10px] py-[20px]'
									placeholder={t('enterPhoneNum')}
									type='text'
									name='newPhone'
									value={inputs.newPhone}
									onChange={handleChange}
								/>
							</label>
						</AlertDialogDescription>
						<AlertDialogDescription
							className={'w-full flex flex-col gap-[10px]'}
						>
							<label className='text-[#181818] dark:text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] flex flex-col items-start gap-[10px] w-full'>
								{t('newPhoenSMS')}
								<div className='relative w-full'>
									<Input
										className='border border-solid rounded-[30px] shadow-none !border-[#4d4d4d] dark:!border-[#4d4d4d] text-[16px] px-[10px] py-[20px]'
										placeholder={t('enterCode')}
										type='text'
										name='newPhoneAuth'
										value={inputs.newPhoneAuth}
										onChange={handleChange}
									/>
									<Button className='absolute right-[10px] bottom-[50%] translate-y-[50%] dark:text-white text-[#0c0c0c] text-[16px] rounded-[50px] cursor-pointer dark:bg-[#0c0c0c] bg-white h-fit border-1 border-solid outline-[#4d4d4d] dark:outline-[#4d4d4d] !outline-none'>
										{t('sendCode')}
									</Button>
								</div>
							</label>
						</AlertDialogDescription>
						<AlertDialogDescription
							className={'w-full flex flex-col gap-[10px]'}
						>
							<label className='text-[#181818] dark:text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] flex flex-col items-start gap-[10px] w-full'>
								{t('currSMS')}
								<div className='relative w-full'>
									<Input
										className='border border-solid rounded-[30px] shadow-none !border-[#4d4d4d] dark:!border-[#4d4d4d] text-[16px] px-[10px] py-[20px]'
										placeholder={t('enterCode')}
										type='text'
										name='currentPhoneAuth'
										value={inputs.currentPhoneAuth}
										onChange={handleChange}
									/>
									<Button className='absolute right-[10px] bottom-[50%] translate-y-[50%] dark:text-white text-[#0c0c0c] text-[16px] rounded-[50px] cursor-pointer dark:bg-[#0c0c0c] bg-white h-fit border-1 border-solid outline-[#4d4d4d] dark:outline-[#4d4d4d] !outline-none'>
										{t('sendCode')}
									</Button>
								</div>
							</label>
						</AlertDialogDescription>
						<AlertDialogDescription
							className={'w-full flex flex-col gap-[10px]'}
						>
							<label className='text-[#181818] dark:text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] flex flex-col items-start gap-[10px] w-full'>
								{t('authApp')}
								<Input
									className='border border-solid rounded-[30px] shadow-none !border-[#4d4d4d] dark:!border-[#4d4d4d] text-[16px] px-[10px] py-[20px]'
									placeholder={t('enterCode')}
									type='text'
									name='authenticatorApp'
									value={inputs.authenticatorApp}
									onChange={handleChange}
								/>
							</label>
						</AlertDialogDescription>
					</div>
				</div>
				<AlertDialogFooter className='px-[30px] pt-[15px] h-fit items-center gap-[30px]'>
					<AlertDialogAction
						disabled={isDisabled}
						className={`text-[16px] px-[40px] rounded-[50px] text-[#0c0c0c] dark:text-white border border-solid !border-[#4d4d4d] dark:!border-[#4d4d4d]  ${
							isDisabled
								? 'bg-transparent cursor-not-allowed'
								: 'bg-[#205bc9] hover:bg-[#205bc9] text-white border-none'
						}`}
						onClick={() =>
							setInputs({
								newPhone: '',
								newPhoneAuth: '',
								currentPhoneAuth: '',
								authenticatorApp: '',
							})
						}
					>
						{t('confirm')}
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
