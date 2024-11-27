'use client'
import { CheckCheck } from 'lucide-react'
import { NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import ArrowBracket from '../ui/ArrowBracket'
import Copy from '../ui/Copy'
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
import { Link } from '@/i18n/routing'
import { useThemeStore } from '@/store'
import { Button } from '@nextui-org/button'
import { Snippet } from '@nextui-org/snippet'

interface Props {
	propsItem: React.ReactNode
}

export const Alert_auntef: NextPage<Props> = ({ propsItem }) => {
	const { theme } = useThemeStore()
	const [isValid, setisValid] = useState<boolean>(false)
	const [inputs, setInputs] = useState({
		emailAuth: '',
		currentAuth: '',
	})
	const [step, setStep] = useState<number>(1)

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button className='border-1 !border-[#4d4d4d] dark:!border-[#4d4d4d] text-[16px] border-solid rounded-[50px] px-[10px] !bg-transparent !text-[#0c0c0c] dark:!text-[#eeeeee] max-w-[120px] lg:max-w-[220px] w-full min-h-[28px]'>
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
								Security
							</Link>
							<ArrowBracket
								className={'-rotate-90'}
								color={theme === 'dark' ? 'white' : 'black'}
								height={25}
								width={25}
							/>
						</span>{' '}
						Change authenticator app
					</AlertDialogTitle>
				</AlertDialogHeader>
				<div className='flex justify-center gap-[10px] w-full overflow-x-hidden pb-[4.5rem]'>
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
							To protect your account, you won't be able to withdraw fundsor use
							P2P trading to sell crypto for 24 hours after you reset or change
							your account phone.
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
										Download authenticator
									</span>
								</div>

								{step === 1 && (
									<div className={`flex flex-col gap-[15px] w-full ml-[47px]`}>
										<span className='text-[16px] xl:text-[20px] text-[#888888]'>
											Download an authenticator app such as Google
											Authenticator.
										</span>
										<div className={'flex items-center gap-[40px]'}>
											<div className='flex flex-col items-center gap-[5px]'>
												<Image
													alt='iphone qr'
													height={110}
													src={'/main/profile_security/qr_iphone.png'}
													width={110}
												/>
												<span className='text-[16px] xl:text-[19px]'>IOS</span>
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
											By continuing, you agree to our{' '}
											<span className='underline'>disclamer</span>
										</span>
										<Button
											className='border-1 !border-[#4d4d4d] dark:!border-[#4d4d4d] text-[16px] border-solid rounded-[50px] px-[10px] !bg-transparent !text-[#0c0c0c] dark:!text-[#eeeeee] max-w-[150px] w-full'
											onClick={() => setStep(prev => (prev = 2))}
										>
											Next
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
										Scan QR code
									</span>
								</div>

								{step === 2 && (
									<div className='flex flex-col gap-[15px] w-full ml-[47px]'>
										<span className='text-[16px] xl:text-[20px] text-[#888888]'>
											Launch the authenticator app and scan
											<br /> the QR code or enter the key.
										</span>
										<div className={'flex items-center gap-[20px]'}>
											<div className='flex flex-col items-center gap-[5px]'>
												<Image
													alt='iphone qr'
													height={110}
													src={'/main/profile_security/qr_iphone.png'}
													width={110}
												/>
											</div>
										</div>
										<span className='text-[16px] text-[#888888]'>
											Or manually enter the code below
										</span>
										<span className='text-[16px] text-[#888888] flex items-center gap-[10px]'>
											<Snippet symbol={''} className='bg-transparent'>
												UJY3HM5ATJBQW2IB
											</Snippet>
										</span>
										<div className='flex items-center gap-[10px]'>
											<Button
												className='border-1 !border-[#4d4d4d] dark:!border-[#4d4d4d] text-[16px] border-solid rounded-[50px] px-[10px] !bg-transparent !text-[#0c0c0c] dark:!text-[#eeeeee] max-w-[115px] xl:max-w-[150px] w-full'
												onClick={() => setStep(prev => (prev = 1))}
											>
												Back
											</Button>
											<Button
												className='border-1 !border-[#4d4d4d] dark:!border-[#4d4d4d] text-[16px] border-solid rounded-[50px] px-[10px] !bg-transparent !text-[#0c0c0c] dark:!text-[#eeeeee] max-w-[115px] xl:max-w-[150px] w-full'
												onClick={() => setStep(prev => (prev = 3))}
											>
												Next
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
										Security authentication
									</span>
								</div>
								{step === 3 && (
									<div className='flex flex-col gap-[15px] w-full ml-[47px]'>
										<label className='text-[#181818] dark:text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] flex flex-col items-start gap-[10px] w-full max-w-[271px] md:max-w-[100%]'>
											Email authentication
											<div className='relative w-full'>
												<Input
													className='border border-solid shadow-none text-[16px] !border-[#4d4d4d] dark:!border-[#4d4d4d] px-[10px] py-[20px] rounded-[30px]'
													placeholder='Enter code'
													type='text'
													name='emailAuth'
													value={inputs.emailAuth}
													onChange={e =>
														setInputs(prev => ({
															...prev,
															emailAuth: e.target.value,
														}))
													}
												/>
												<button className='absolute right-[10px] bottom-[50%] translate-y-[50%] dark:text-white text-[#0c0c0c] text-[16px] border border-solid rounded-[50px] dark:border-white border-black py-[2px] px-[7px] cursor-pointer dark:bg-[#0c0c0c] bg-white'>
													Send Code
												</button>
											</div>
										</label>
										<label className='text-[#181818] dark:text-white text-[16px] flex flex-col items-start gap-[10px] w-full max-w-[271px] md:max-w-[100%]'>
											Current authenticator app
											<div className='w-full'>
												<Input
													className='border border-solid !border-[#4d4d4d] dark:!border-[#4d4d4d] px-[10px] py-[20px] shadow-none text-[16px] rounded-[30px] '
													placeholder='Enter 6-digit generated code from your app'
													type='text'
													name='currentAuth'
													value={inputs.currentAuth}
													onChange={e =>
														setInputs(prev => ({
															...prev,
															currentAuth: e.target.value,
														}))
													}
												/>
											</div>
										</label>

										<div className='flex items-center gap-[10px] bg-transparent'>
											<Button
												className='border-1 !border-[#4d4d4d] dark:!border-[#4d4d4d] text-[16px] border-solid rounded-[50px] px-[10px] !bg-transparent !text-[#0c0c0c] dark:!text-[#eeeeee] max-w-[115px] xl:max-w-[150px] w-full'
												onClick={() => setStep(prev => (prev = 2))}
											>
												Back
											</Button>
											<AlertDialogCancel className='mt-0 !bg-transparent w-fit'>
												<Button
													className={`border-1 !border-[#4d4d4d] dark:!border-[#4d4d4d] text-[16px] border-solid rounded-[50px] px-[10px]  dark:!text-[#eeeeee] min-w-[115px] xl:min-w-[150px] xl:max-w-[150px] w-full ${inputs.emailAuth.length < 3 || inputs.currentAuth.length < 3 ? '!bg-transparent' : '!bg-[#205BC9] !border-[#205bc9] dark:!border-[#205bc9] !text-[#fff]'}`}
													onClick={() => {
														setStep(prev => (prev = 1))
														setInputs(prev => ({ ...prev, emailAuth: '', currentAuth: '' }))
													}}
													disabled={!inputs.emailAuth || !inputs.currentAuth}
												>
													Confirm
												</Button>
											</AlertDialogCancel>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</AlertDialogContent>
		</AlertDialog>
	)
}

// after:content-[""] after:absolute after:left-[15px] after:-z-[9999] after:top-0 after:w-[1px] after:bottom-[24px] after:bg-gray-400
