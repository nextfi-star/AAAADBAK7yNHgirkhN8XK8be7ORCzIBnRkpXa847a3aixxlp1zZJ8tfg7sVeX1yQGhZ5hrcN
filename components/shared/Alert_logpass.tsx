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
import { Button } from "@heroui/button"
import { useTranslations } from 'next-intl'
import { useState } from 'react'

interface Props {
	propsItem: React.ReactNode
}

export const Alert_logpass = ({ propsItem }: Props) => {
	const t = useTranslations('security')
	const { theme } = useThemeStore()
	const [inputs, setInputs] = useState({
		currentPassword: '',
		newPassword: '',
		confirmNew: '',
		emailAuth: '',
		authApp: '',
	})
	const [checked, setChecked] = useState(false)
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
						{t('changeLoginPass')}
					</AlertDialogTitle>
				</AlertDialogHeader>
				<div className='flex justify-center gap-[10px] w-full '>
					<div className={'flex flex-col max-w-[600px] gap-[20px]'}>
						<AlertDialogDescription
							className={'w-full flex flex-col gap-[10px]'}
						>
							<label className='text-[#181818] dark:text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] flex flex-col items-start gap-[10px] w-full'>
								{t('currPass')}
								<Input
									className='border border-solid text-[16px] !border-[#4d4d4d] dark:!border-[#4d4d4d] px-[10px] py-[20px] rounded-[30px] shadow-none'
									placeholder={t('enterCurrPass')}
									type='text'
									name='currentPassword'
									value={inputs.currentPassword}
									onChange={handleChange}
								/>
							</label>
						</AlertDialogDescription>
						<AlertDialogDescription
							className={'w-full flex flex-col gap-[10px]'}
						>
							<label className='text-[#181818] dark:text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] flex flex-col items-start gap-[10px] w-full'>
								{t('newPass')}
								<Input
									className='border border-solid text-[16px] !border-[#4d4d4d] dark:!border-[#4d4d4d] px-[10px] py-[20px] rounded-[30px] shadow-none'
									placeholder={t('confirmNewPass')}
									type='text'
									name='newPassword'
									value={inputs.newPassword}
									onChange={handleChange}
								/>
							</label>
						</AlertDialogDescription>
						<AlertDialogDescription
							className={'w-full flex flex-col gap-[10px]'}
						>
							<label className='text-[#181818] dark:text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] flex flex-col items-start gap-[10px] w-full'>
								{t('confirmNewPass')}
								<Input
									className='border border-solid text-[16px] !border-[#4d4d4d] dark:!border-[#4d4d4d] px-[10px] py-[20px] rounded-[30px] shadow-none'
									placeholder={t('confirmEnterNewPass')}
									type='text'
									name='confirmNew'
									value={inputs.confirmNew}
									onChange={handleChange}
								/>
							</label>
						</AlertDialogDescription>
						<AlertDialogDescription
							className={'w-full flex flex-col gap-[10px]'}
						>
							<label className='text-[#181818] dark:text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] flex flex-col items-start gap-[10px] w-full'>
								{t('emailAuth')}
								<Input
									className='border border-solid text-[16px] !border-[#4d4d4d] dark:!border-[#4d4d4d] px-[10px] py-[20px] rounded-[30px] shadow-none'
									placeholder={t('enterEmailAuth')}
									type='text'
									name='emailAuth'
									value={inputs.emailAuth}
									onChange={handleChange}
								/>
							</label>
						</AlertDialogDescription>
						<AlertDialogDescription
							className={'w-full flex flex-col gap-[10px]'}
						>
							<label className='text-[#181818] dark:text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] flex flex-col items-start gap-[10px] w-full'>
								{t('authApp')}
								<Input
									className='border border-solid text-[16px] !border-[#4d4d4d] dark:!border-[#4d4d4d] px-[10px] py-[20px] rounded-[30px] shadow-none'
									placeholder={t('enterAuthApp')}
									type='text'
									name='authApp'
									value={inputs.authApp}
									onChange={handleChange}
								/>
							</label>
						</AlertDialogDescription>
						<div className='privacy max-w-[921px] flex flex-col self-center justify-start'>
							<label
								className='checkbox-label gap-[5px] md:gap-[18px] !items-start'
								htmlFor='checkbox-privacy'
							>
								<input
									className='checkbox'
									id='checkbox-privacy'
									type='checkbox'
									checked={checked}
									onChange={() => setChecked(!checked)}
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
									To protect your account, you will not be able to withdraw
									funds within 24 hours after resetting your settings or
									changing your account password.
								</p>
							</label>
						</div>
					</div>
				</div>
				<AlertDialogFooter className='px-[30px] pt-[15px] h-fit items-center gap-[30px]'>
					<AlertDialogAction
						disabled={isDisabled || !checked}
						className={`text-[16px] px-[40px] rounded-[50px] text-[#0c0c0c] dark:text-white border border-solid !border-[#4d4d4d] dark:!border-[#4d4d4d]  ${
							isDisabled || !checked
								? 'bg-transparent cursor-not-allowed'
								: 'bg-[#205bc9] hover:bg-[#205bc9] text-white border-none'
						}`}
						onClick={() =>
							setInputs({
								currentPassword: '',
								newPassword: '',
								confirmNew: '',
								emailAuth: '',
								authApp: '',
							})
						}
					>
						Confirm
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
