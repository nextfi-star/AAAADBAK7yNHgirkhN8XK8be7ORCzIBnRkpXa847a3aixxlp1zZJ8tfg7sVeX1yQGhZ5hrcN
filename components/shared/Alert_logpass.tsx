import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Input } from '@/components/ui/input'
import { useUserStore } from '@/hooks/useUserData'
import { Link } from '@/i18n/routing'
import { useThemeStore } from '@/store/useChatStore'
import { changeUserData, resendVerificationCode } from '@/utils/api'
import { Button } from '@heroui/button'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import ArrowBracket from '../ui/ArrowBracket'

interface Props {
	propsItem: React.ReactNode
}

export const Alert_logpass = ({ propsItem }: Props) => {
	const t = useTranslations('security')
	const user = useUserStore(state => state.user)

	const [inputs, setInputs] = useState<{
		currentPassword: string
		newPassword: string
		confirmNew: string
		emailAuth: string
	}>({
		currentPassword: '',
		newPassword: '',
		confirmNew: '',
		emailAuth: '',
	})

	const [checked, setChecked] = useState(false)
	const [message, setMessage] = useState('')
	const [loading, setLoading] = useState(false)

	const isDisabled =
		Object.values(inputs).some(value => value.length < 3) ||
		!checked ||
		inputs.newPassword !== inputs.confirmNew

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		if (name in inputs) {
			setInputs(prev => ({
				...prev,
				[name]: value,
			}))
		}
	}

	const handleSubmit = async () => {
		if (!user?.csrf || !inputs.newPassword || !inputs.emailAuth) {
			setMessage('Заполните все обязательные поля!')
			return
		}

		setLoading(true)
		setMessage('')

		const result = await changeUserData(
			user.csrf,
			'change_passw',
			inputs.newPassword,
			inputs.emailAuth
		)

		if (result.success) {
			setMessage('Пароль успешно изменён!')
			setInputs({
				currentPassword: '',
				newPassword: '',
				confirmNew: '',
				emailAuth: '',
			})
		} else {
			setMessage(result.message)
		}

		setLoading(false)
	}
	const { theme } = useThemeStore()

	const handleResend = async () => {
		if (!user?.csrf) {
			setMessage('CSRF token отсутствует')
			return
		}
		const result = await resendVerificationCode(user.csrf)
		if (result.success) {
			console.log(result)
		} else {
			setMessage(`Ошибка: ${result.message}`)
		}
	}

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button className='border-1 !border-[#4d4d4d] dark:!border-[#4d4d4d] text-[16px] border-solid rounded-[50px] px-[10px] !bg-transparent !text-[#0c0c0c] dark:!text-[#eeeeee] max-w-[120px] lg:max-w-[220px] w-full min-h-[28px]'>
					{propsItem}
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent className='px-[40px] gap-[10px] min-h-[100dvh] max-h-[90dvh] sm:pb-[7rem] !max-w-[1306px] !mx-auto items-center !overflow-y-auto bg-[#f9f9fa] dark:!bg-[#0c0c0c] modal-new'>
				<AlertDialogHeader>
					<AlertDialogTitle className='w-full border-transparent border-b-1 border-solid border-b-gray-400 pb-[20px] text-[12px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-left flex items-center gap-[10px] mb-[10px]'>
						<span className='text-[#888888] flex items-center gap-[15px]'>
							<AlertDialogCancel className='text-black dark:text-white bg-transparent border-none shadow-none hover:bg-transparent p-0 items-center m-0'>
								<ArrowBracket
									className={'rotate-90'}
									color={theme === 'dark' ? 'white' : 'black'}
									height={25}
									width={25}
								/>
							</AlertDialogCancel>
							<Link className='text-[#888888]' href='/security'>
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
				<div className='flex justify-center gap-[10px] w-full mb-[20px]'>
					<div className={'flex flex-col max-w-[515px] w-full gap-[20px]'}>
						<AlertDialogDescription className='w-full flex flex-col gap-[10px]'>
							<label className='text-[#181818] dark:text-white flex flex-col items-start gap-[10px] w-full'>
								{t('currPass')}
								<Input
									name='currentPassword'
									placeholder={t('enterCurrPass')}
									value={inputs.currentPassword}
									onChange={handleChange}
									className='border border-solid !border-[#4d4d4d] dark:!border-[#4d4d4d] shadow-none text-[16px] px-[10px] py-[20px] rounded-[30px]'
								/>
							</label>
						</AlertDialogDescription>
						<AlertDialogDescription className='w-full flex flex-col gap-[10px]'>
							<label className='text-[#181818] dark:text-white flex flex-col items-start gap-[10px] w-full'>
								{t('newPass')}
								<Input
									name='newPassword'
									placeholder={t('confirmNewPass')}
									value={inputs.newPassword}
									onChange={handleChange}
									className='border border-solid !border-[#4d4d4d] dark:!border-[#4d4d4d] shadow-none text-[16px] px-[10px] py-[20px] rounded-[30px]'
								/>
							</label>
						</AlertDialogDescription>
						<AlertDialogDescription className='w-full flex flex-col gap-[10px]'>
							<label className='text-[#181818] dark:text-white flex flex-col items-start gap-[10px] w-full'>
								{t('confirmNewPass')}
								<Input
									name='confirmNew'
									placeholder={t('confirmEnterNewPass')}
									value={inputs.confirmNew}
									onChange={handleChange}
									className='border border-solid !border-[#4d4d4d] dark:!border-[#4d4d4d] shadow-none text-[16px] px-[10px] py-[20px] rounded-[30px]'
								/>
							</label>
						</AlertDialogDescription>
						<AlertDialogDescription className='w-full flex flex-col gap-[10px]'>
							<label className='text-[#181818] dark:text-white flex flex-col items-start gap-[10px] w-full relative'>
								{t('emailAuth')}
								<Input
									name='emailAuth'
									placeholder={t('enterEmailAuth')}
									value={inputs.emailAuth}
									onChange={handleChange}
									className='border border-solid !border-[#4d4d4d] dark:!border-[#4d4d4d] shadow-none text-[16px] px-[10px] py-[20px] rounded-[30px]'
								/>
								<Button
									onPress={handleResend}
									className='text-[14px] p-0 py-[5px] px-[5px] h-fit absolute bottom-[5px] right-[14px] bg-transparent rounded-[50px] text-[#0c0c0c] dark:text-white border border-solid !border-[#ffffff] dark:!border-[#4d4d4d]'
								>
									{t('sendCode')}
								</Button>
							</label>
						</AlertDialogDescription>
					</div>
				</div>
				{message && <p className='text-center text-red-500'>{message}</p>}
				<AlertDialogFooter>
					<Button
						onPress={handleSubmit}
						className={`text-[16px] px-[40px] rounded-[50px] text-[#0c0c0c] dark:text-white border border-solid !border-[#4d4d4d] dark:!border-[#4d4d4d]  ${
							isDisabled || loading
								? '!bg-[#205BC9]'
								: 'bg-[#205bc9] hover:bg-[#205bc9] text-white border-none'
						}`}
					>
						{loading ? 'Обновление...' : t('confirm')}
					</Button>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
