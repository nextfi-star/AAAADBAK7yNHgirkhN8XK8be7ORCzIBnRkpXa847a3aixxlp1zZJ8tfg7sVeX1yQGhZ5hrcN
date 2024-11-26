import { NextPage } from 'next'
import Image from 'next/image'

import ArrowBracket from '../ui/ArrowBracket'

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
import { Button } from '@nextui-org/button'
import { useState } from 'react'

interface Props {
	propsItem: React.ReactNode
}

export const Alert_email: NextPage<Props> = ({ propsItem }) => {
	const { theme } = useThemeStore()
	const [inputs, setInputs] = useState({
		newEmail: '',
		newEmailAuth: '',
		currentEmailAuth: '',
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
				<Button className='border-1 !border-[#4d4d4d] dark:!border-[#4d4d4d] text-[16px] border-solid rounded-[50px] px-[10px] !bg-transparent !text-[#0c0c0c] dark:!text-[#eeeeee] max-w-[120px] w-full min-h-[28px]'>
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
								Security
							</Link>
							<ArrowBracket
								className={'-rotate-90'}
								color={theme === 'dark' ? 'white' : 'black'}
								height={25}
								width={25}
							/>
						</span>{' '}
						Change Email
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
							To protect your account, you won't be able to withdraw fundsor use
							P2P trading to sell crypto for 24 hours after you reset or change
							your account phone.
						</span>
						<AlertDialogDescription
							className={'w-full flex flex-col gap-[10px]'}
						>
							<label className='text-[#181818] dark:text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] flex flex-col items-start gap-[10px] w-full'>
								New email address
								<Input
									className='border border-solid !border-[#4d4d4d] dark:!border-[#4d4d4d] shadow-none text-[16px] px-[10px] py-[20px] rounded-[30px]'
									placeholder='Enter new email address'
									type='text'
									name='newEmail'
									value={inputs.newEmail}
									onChange={handleChange}
								/>
							</label>
						</AlertDialogDescription>
						<AlertDialogDescription
							className={'w-full flex flex-col gap-[10px]'}
						>
							<label className='text-[#181818] dark:text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] flex flex-col items-start gap-[10px] w-full'>
								New email authentication
								<Input
									className='border border-solid !border-[#4d4d4d] dark:!border-[#4d4d4d] shadow-none text-[16px] px-[10px] py-[20px] rounded-[30px]'
									placeholder='Enter code'
									type='text'
									name='newEmailAuth'
									value={inputs.newEmailAuth}
									onChange={handleChange}
								/>
							</label>
						</AlertDialogDescription>
						<AlertDialogDescription
							className={'w-full flex flex-col gap-[10px]'}
						>
							<label className='text-[#181818] dark:text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] flex flex-col items-start gap-[10px] w-full'>
								Current email authentication
								<Input
									className='border border-solid !border-[#4d4d4d] dark:!border-[#4d4d4d] shadow-none text-[16px] px-[10px] py-[20px] rounded-[30px]'
									placeholder='Enter code'
									type='text'
									name='currentEmailAuth'
									value={inputs.currentEmailAuth}
									onChange={handleChange}
								/>
							</label>
						</AlertDialogDescription>
						<AlertDialogDescription
							className={'w-full flex flex-col gap-[10px]'}
						>
							<label className='text-[#181818] dark:text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] flex flex-col items-start gap-[10px] w-full'>
								Authenticator app
								<Input
									className='border border-solid !border-[#4d4d4d] dark:!border-[#4d4d4d] shadow-none text-[16px] px-[10px] py-[20px] rounded-[30px]'
									placeholder='Enter code'
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
						className={`text-[16px] xl:text-[22px] px-[40px] rounded-[50px] text-white ${
							isDisabled
								? 'bg-[#7676801f] cursor-not-allowed'
								: 'bg-[#205bc9] hover:bg-[#205bc9]'
						}`}
					>
						Confirm
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
