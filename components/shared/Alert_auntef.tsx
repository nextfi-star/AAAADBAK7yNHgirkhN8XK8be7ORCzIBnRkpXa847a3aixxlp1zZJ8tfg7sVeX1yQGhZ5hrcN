'use client'
import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Input } from '@/components/ui/input'
import { useUserStore } from '@/hooks/useUserData'
import { Link } from '@/i18n/routing'
import { useThemeStore } from '@/store/useChatStore'
import { enable2FA, verify2FA } from '@/utils/api'
import { Button } from '@heroui/button'
import { Snippet } from '@heroui/snippet'
import { Spinner } from '@heroui/spinner'
import { CheckCheck } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'
import ArrowBracket from '../ui/ArrowBracket'
import { useParams, useRouter } from 'next/navigation'

interface Props {
	propsItem: React.ReactNode
}

export const Alert_auntef = ({ propsItem }: Props) => {
	const user = useUserStore(state => state.user)
	const [loading, setLoading] = useState(false)
	const { theme, setTwoFaActive, twoFaActive } = useThemeStore()
	const t = useTranslations('security')
	const [inputs, setInputs] = useState({
		emailAuth: '',
		currentAuth: '',
	})
	const [twoFA, setTwoFA] = useState<Record<string, any> | null>(null)
	const [step, setStep] = useState<number>(1)
	const [message, setMessage] = useState('')
	const [code, setCode] = useState('')
	const router = useRouter()
	const locale = useParams().locale
	const handleEnable2FA = async () => {
		const csrf = user?.csrf || ''
		if (!csrf) {
			console.log('CSRF token is missing. Please log in first.')
			return
		}
		try {
			const response = await enable2FA(csrf)
			console.log(response)
			setTwoFA(response.data)
		} catch (error) {
			console.log(error)
		}
	}
	const handleVerify = async (e: React.FormEvent) => {
		e.preventDefault()
		const result = await verify2FA(user?.csrf, code)
		setLoading(true)
		if (result) {
			console.log('2FA enabled successfully')
			setLoading(false)
			setTwoFaActive(true)
			setMessage(result.message)
			if(typeof window !== 'undefined') {
				window.location.reload()
			}
		} else {
			console.log(result.message)
		}
	}
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button
					isDisabled={!user || user['2fa'] === 1 || twoFaActive}
					onPress={handleEnable2FA}
					className='border-1 !border-[#4d4d4d] dark:!border-[#4d4d4d] text-[16px] border-solid rounded-[50px] px-[10px] !bg-transparent !text-[#0c0c0c] dark:!text-[#eeeeee] max-w-[120px] lg:max-w-[220px] w-full min-h-[28px]'
				>
					{propsItem}
				</Button>
			</AlertDialogTrigger>

			<AlertDialogContent className='px-[20px] md:px-[40px] xl:px-[80px] gap-[10px] min-h-[100dvh] max-h-[90dvh] overflow-y-auto sm:pb-[7rem] !max-w-[1306px] !mx-auto items-center  bg-[#f9f9fa] dark:!bg-[#0c0c0c] modal-new pb-[3.5rem] '>
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
						{t('changeAuthApp')}
					</AlertDialogTitle>
				</AlertDialogHeader>
				<div className='flex justify-center gap-[10px] w-full overflow-x-hidden pb-[4.5rem]'>
					{!user?.email ? (
						<div className='bg-black/10 backdrop-blur-sm w-full min-h-screen fixed z-[9999] flex items-center justify-center'>
							<h1 className='font-bold text-[25px]'>{t('notFoundEmail')}</h1>
						</div>
					) : (
						<div className={'flex flex-col gap-[20px]'}>
							<AlertDialogDescription className='text-black dark:text-white bg-[#F5F5F5] dark:bg-[#181818] py-[24px] px-[22px] rounded-[6px] text-[14px] sm:text-[16px] lg:text-[18px] 2xl:text-[20px] flex items-start gap-[5px] md:gap-[10px] sm:max-w-[50%]'>
								<Image
									alt='info'
									className='max-w-[19px] md:max-w-[23px] lg:max-w-[25px] w-full'
									height={20}
									quality={100}
									src={'/header_icons/profile_burger/info_icon.svg'}
									width={20}
								/>
								{t('protectAcc')}.
							</AlertDialogDescription>

							<div
								className={`flex flex-col gap-[89px] max-w-[553px] relative after:absolute after:left-[14px] after:border-l after:border-dotted after:border-gray-400 after:w-[1px] after:bottom-[15px] after:top-[6px] after:-z-[99]`}
							>
								<div className='flex flex-col gap-[14px]'>
									<div className='flex items-center gap-[15px]'>
										<span
											className={`text-white text-[18px] ${
												step === 1 ? 'bg-[#205BC9]' : 'bg-[#64718a]'
											} rounded-[50%] min-w-[30px] min-h-[30px] flex items-center justify-center`}
										>
											{step > 1 ? <CheckCheck /> : 1}
										</span>
										<span className='text-[18px] xl:text-[24px]'>
											{t('downloadAuth')}
										</span>
									</div>

									{step === 1 && (
										<div
											className={`flex flex-col gap-[15px] w-full ml-[47px]`}
										>
											<span className='text-[16px] xl:text-[20px] text-[#888888]'>
												{t('googleAuth')}
											</span>
											<div className={'flex items-center gap-[40px]'}>
												<div className='flex flex-col items-center gap-[5px]'>
													<Image
														alt='iphone qr'
														height={110}
														src={'/main/profile_security/qr_iphone.png'}
														width={110}
													/>
													<span className='text-[16px] xl:text-[19px]'>
														IOS
													</span>
												</div>
												<div className='flex flex-col items-center gap-[5px]'>
													<Image
														alt='iphone qr'
														height={110}
														src={'/main/profile_security/qr_iphone.png'}
														width={110}
													/>
													<span className='text-[16px] xl:text-[19px]'>
														Android
													</span>
												</div>
											</div>
											<span className='text-[16px] text-[#888888]'>
												{t('agreePol')}{' '}
												<span className='underline'>{t('disclamer')}</span>
											</span>
											<Button
												className='border-1 !border-[#4d4d4d] dark:!border-[#4d4d4d] text-[16px] border-solid rounded-[50px] px-[10px] !bg-transparent !text-[#0c0c0c] dark:!text-[#eeeeee] max-w-[150px] w-full'
												onPress={() => setStep(prev => (prev = 2))}
											>
												{t('next')}
											</Button>
										</div>
									)}
								</div>

								<div className='flex flex-col gap-[14px]'>
									<div className='flex items-center gap-[15px]'>
										<span
											className={`text-white text-[18px] ${
												step === 2 ? 'bg-[#205BC9]' : 'bg-[#64718a]'
											} rounded-[50%] min-w-[30px] min-h-[30px] flex items-center justify-center`}
										>
											{step > 2 ? <CheckCheck /> : 2}
										</span>
										<span className='text-[18px] xl:text-[24px]'>
											{t('scanQR')}
										</span>
									</div>

									{step === 2 && (
										<div className='flex flex-col gap-[15px] w-full ml-[47px]'>
											<span className='text-[16px] xl:text-[20px] text-[#888888]'>
												{t('launchApp')}
												<br /> {t('launchApp2')}
											</span>
											<div className={'flex items-center gap-[20px]'}>
												<div className='flex flex-col items-center gap-[5px]'>
													{!twoFA?.qr ? (
														<Spinner />
													) : (
														<Image
															alt='iphone qr'
															height={110}
															src={twoFA?.qr}
															width={110}
														/>
													)}
												</div>
											</div>
											<span className='text-[16px] text-[#888888]'>
												{t('orCopy')}
											</span>
											<span className='text-[16px] text-[#888888] flex items-center gap-[10px]'>
												<Snippet symbol={''} className='bg-transparent'>
													{twoFA?.secret || '***************'}
												</Snippet>
											</span>
											<div className='flex items-center gap-[10px]'>
												<Button
													className='border-1 !border-[#4d4d4d] dark:!border-[#4d4d4d] text-[16px] border-solid rounded-[50px] px-[10px] !bg-transparent !text-[#0c0c0c] dark:!text-[#eeeeee] max-w-[115px] xl:max-w-[150px] w-full'
													onPress={() => setStep(prev => (prev = 1))}
												>
													{t('back')}
												</Button>
												<Button
													className='border-1 !border-[#4d4d4d] dark:!border-[#4d4d4d] text-[16px] border-solid rounded-[50px] px-[10px] !bg-transparent !text-[#0c0c0c] dark:!text-[#eeeeee] max-w-[115px] xl:max-w-[150px] w-full'
													onPress={() => setStep(prev => (prev = 3))}
												>
													{t('next')}
												</Button>
											</div>
										</div>
									)}
								</div>

								<div className='flex flex-col gap-[14px] max-w-[553px]'>
									<div className='flex items-start gap-[15px]'>
										<span
											className={`text-white text-[18px] ${
												step === 3 ? 'bg-[#205BC9]' : 'bg-[#64718a]'
											} rounded-[50%] min-w-[30px] min-h-[30px] flex items-center justify-center`}
										>
											{step > 3 ? <CheckCheck /> : 3}
										</span>
										<span className='text-[18px] xl:text-[28px]'>
											{t('secAuth')}
										</span>
									</div>
									{step === 3 && (
										<form
											onSubmit={handleVerify}
											className='flex flex-col gap-[15px] w-full ml-[47px]'
										>
											<label className='text-[#181818] dark:text-white text-[16px] flex flex-col items-start gap-[10px] w-full max-w-[271px] md:max-w-[100%]'>
												{t('currAuthApp')}
												<div className='w-full'>
													<Input
														className='border border-solid !border-[#4d4d4d] dark:!border-[#4d4d4d] px-[10px] py-[20px] shadow-none text-[16px] rounded-[30px] '
														placeholder={t('enterSixCode')}
														type='text'
														name='currentAuth'
														value={code}
														onChange={e => setCode(e.target.value)}
													/>
													{message && (
														<p className='text-[16px] text-danger ml-[15px]'>
															{message}
														</p>
													)}
												</div>
											</label>

											<div className='flex items-center gap-[10px] bg-transparent'>
												<Button
													className='border-1 !border-[#4d4d4d] dark:!border-[#4d4d4d] text-[16px] border-solid rounded-[50px] px-[10px] !bg-transparent !text-[#0c0c0c] dark:!text-[#eeeeee] max-w-[115px] xl:max-w-[150px] w-full'
													onPress={() => setStep(prev => (prev = 2))}
												>
													{t('back')}
												</Button>

												<Button
													isLoading={loading}
													isDisabled={code.length < 6}
													type='submit'
													className={`border-1 !border-[#4d4d4d] dark:!border-[#4d4d4d] text-[16px] border-solid rounded-[50px] px-[10px]  dark:!text-[#eeeeee] min-w-[115px] xl:min-w-[150px] xl:max-w-[150px] !w-fit ${inputs.currentAuth.length < 3 ? '!bg-[#205BC9]' : '!bg-[#205BC9] !border-[#205bc9] dark:!border-[#205bc9] !text-[#fff]'}`}
													onPress={() => {
														setInputs(prev => ({
															...prev,
															emailAuth: '',
															currentAuth: '',
														}))
													}}
													disabled={inputs.currentAuth.length >= 6}
												>
													{t('confirm')}
												</Button>
											</div>
										</form>
									)}
								</div>
							</div>
						</div>
					)}
				</div>
			</AlertDialogContent>
		</AlertDialog>
	)
}

// after:content-[""] after:absolute after:left-[15px] after:-z-[9999] after:top-0 after:w-[1px] after:bottom-[24px] after:bg-gray-400
