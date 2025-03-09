'use client'
import VerifyAnimation from '@/components/shared/VerifyAnimation'
import { Verify_documents } from '@/components/shared/Verify_documents'
import ArrowBracket from '@/components/ui/ArrowBracket'
import { ProfilePage_guard } from '@/components/ui/ProfilePage_guard'
import { Button } from '@/components/ui/button'
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '@/components/ui/command'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { useUserStore } from '@/hooks/useUserData'
import { cn } from '@/lib/utils'
import animationData2 from '@/public/animation/verify_anim_mini.json'
import { useThemeStore } from '@/store/useChatStore'
import { uploadFile } from '@/utils/api'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import { Check, ChevronsUpDown, X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useMemo, useRef, useState } from 'react'

const Verify = () => {
	const typeID = useMemo(
		() => [
			{
				value: 'id_card',
				label: 'National ID card',
			},
			{
				value: 'passport',
				label: 'Passport',
			},
			{
				value: 'driver license',
				label: 'Driver license',
			},
		],
		[]
	)
	const countries = useMemo(
		() => [
			{
				value: 'russia',
				label: 'Russia',
			},
			{
				value: 'uzbekistan',
				label: 'Uzbekistan',
			},
			{
				value: 'usa',
				label: 'USA',
			},
			{
				value: 'china',
				label: 'China',
			},
			{
				value: 'japan',
				label: 'Japan',
			},
		],
		[]
	)
	const user = useUserStore(state => state.user)
	const t = useTranslations('verify')
	const { theme, globalVeriState } = useThemeStore()
	const [change, SetChange] = useState<boolean>(false)
	const [open, setOpen] = useState(false)
	const [openID, setOpenID] = useState(false)
	const [value, setValue] = useState('')
	const [valueID, setValueID] = useState('')
	const [step, setStep] = useState<number>(1)
	const [photo, setPhoto] = useState<string | null>(null)
	const [photo2, setPhoto2] = useState<string | null>(null)
	const [showFaq, setShowFaq] = useState<boolean>(false)
	const [selectedFile, setSelectedFile] = useState<File | null>(null)
	const [region, setRegion] = useState('')
	const [uploading, setUploading] = useState(false)
	const [error, setError] = useState('')
	const fileInputRef = useRef<HTMLInputElement>(null)

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!event.target.files?.length) return
		setSelectedFile(event.target.files[0])
		setError('')
	}
	// const handleUpload = async (type: "upload_verif" | "upload_logo") => {
	// 	if (!user?.csrf || !selectedFile) {
	// 		setError("Выберите файл!");
	// 		return;
	// 	}
	// 	setUploading(true);
	// 	const result = await uploadFile(user.csrf, selectedFile, type, region);
	// 	if (result?.response === "success") {
	// 		alert("Файл успешно загружен!");
	// 	} else {
	// 		setError(result?.message || "Ошибка загрузки файла");
	// 	}
	// 	setUploading(false);
	// };

	const handleUpload = async () => {
		if (!selectedFile) {
			setError('Выберите файл перед загрузкой')
			return
		}
		if (!user?.csrf) {
			setError('Ошибка: CSRF токен отсутствует')
			return
		}
		const result = await uploadFile(user.csrf, selectedFile, 'upload_verif', region, )
		if (result.response === 'success') {
			setSelectedFile(null)
			setError('✅ Файл успешно загружен и отправлен на проверку')
		} else {
			setError(`❌ Ошибка: ${result.message}`)
		}
	}

	const handlePhotoChange = (photoData: string) => {
		setPhoto(photoData)
	}
	const handlePhotoChange2 = (photoData: string) => {
		setPhoto2(photoData)
	}
	const lottieRef = useRef<LottieRefCurrentProps>(null)
	const ClearState = () => {
		setStep(1)
		SetChange(false)
	}
	const handleNextStep = () => {
		if (value && valueID) {
			setStep(step + 1)
		}
	}
	return (
		<section
			className={`verify -mt-[8rem] sm:-mt-0 pb-[2rem] sm:pb-[0] ${
				showFaq ? 'fixed' : ''
			}`}
		>
			<div className='site-holder !px-[0]'>
				{!change ? (
					<div className='flex flex-col items-center mt-[183px] gap-[9px] md:gap-[83px]'>
						{!globalVeriState ? (
							<>
								<div className='w-fit relative'>
									<Image
										priority
										alt='protection icon'
										className='h-auto w-auto max-w-[80px] sm:max-w-[100%]'
										height={181}
										quality={100}
										src={'/main/profile_verify/Protection.svg'}
										width={181}
									/>
									<Image
										priority
										alt='file icon'
										className='h-auto w-auto absolute -right-[24px] -top-[40px] sm:-top-[68px] sm:-right-[68px] max-w-[65px] sm:max-w-[100%] z-[1]'
										height={158}
										quality={100}
										src={'/main/profile_verify/File.svg'}
										width={118}
									/>
									<Image
										priority
										alt='decor icon'
										className='h-auto w-auto absolute -left-[48px] -bottom-[23px] sm:-left-[86px] sm:-bottom-[44px]'
										height={189}
										quality={100}
										src={'/main/profile_verify/decor.svg'}
										width={139}
									/>
									<Image
										priority
										alt='decor icon'
										className='h-auto w-auto absolute -right-[74px] -top-[64px] sm:-right-[151px] sm:-top-[114px]'
										height={200}
										quality={100}
										src={'/main/profile_verify/decor2.svg'}
										width={208}
									/>
								</div>

								<div className='max-w-[641px] w-full flex flex-col gap-[25px] items-center'>
									<h1 className='text-[25px] sm:text-[32px] font-medium leading-[35px]'>
										{t('cmfrnIdent')}
									</h1>
									<article className='flex flex-col items-start md:items-center gap-[20px] md:gap-[50px]'>
										<p className='text-[14px] sm:text-[18px] md:text-[20px] leading-[24px] pb-[7px] max-w-[60%%] text-left'>
											{t('accLaw')}
										</p>
										<p className='text-[14px] sm:text-[18px] md:text-[20px] leading-[24px] pb-[7px] max-w-[60%%] text-left'>
											{t('uponCompl')}
										</p>
										<div className='flex flex-col items-start gap-[4px]'>
											<p className='text-[18px] md:text-[20px]'>
												{t('provide')}:{' '}
											</p>
											<ul className='pl-[24px] text-[14px] sm:text-[18px] md:text-[20px]'>
												<li className='!list-disc'>{t('provideDoc')}</li>
												<li className='!list-disc'>{t('persInfo')}</li>
											</ul>
										</div>
									</article>
									<article className='flex flex-col items-center gap-[24px]'>
										<p className='text-[14px] sm:text-[18px] md:text-[20px] text-[#BDBDBD] flex items-center gap-[10px] sm:gap-[7px] w-full'>
											<ProfilePage_guard
												color={theme === 'dark' ? '#fff' : '#000'}
											/>
											{t('onlyfor')}
										</p>
										<Button
											className='text-[14px] md:text-[20px] text-white rounded-[50px] bg-[#205BC9] px-[50px] py-[4px] xl:py-[20px] hover:opacity-[.9] hover:bg-[#205BC9] w-full h-[3.25rem]'
											onClick={() => SetChange(!change)}
										>
											{t('verfNow')}
										</Button>
									</article>
								</div>
							</>
						) : (
							<div className='flex flex-col items-center gap-[20px] mt-[-98px] sm:mt-[-116px]'>
								<Lottie
									lottieRef={lottieRef}
									autoPlay={true}
									animationData={animationData2}
									className='max-w-[281px] w-full h-auto'
									loop={true}
								/>
								<h3 className='text-[20px] md:text-[32px] font-bold'>
									{t('basicVerif')}
								</h3>
								<p className='text-[20px] text-center'>{t('passedVerif')}</p>
							</div>
						)}
					</div>
				) : (
					<>
						{step === 1 && (
							<div className='flex flex-col items-center gap-[83px]'>
								<h1 className='w-full border-transparent pb-[20px] mb-[20px] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[19px] xl:text-[22px] text-left flex items-center gap-[10px]'>
									<span className='text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-[#888888] flex items-center gap-[15px]'>
										<Button
											className=' text-black dark:text-white bg-transparent  text-[14px] md:text-[18px] border-none shadow-none p-0 hover:bg-transparent'
											onClick={() => SetChange(!change)}
										>
											<ArrowBracket
												className={'rotate-90'}
												color={theme === 'dark' ? 'white' : 'black'}
												height={25}
												width={25}
											/>
										</Button>
									</span>
									{t('identVerif')}
								</h1>

								<div className='flex flex-col items-center w-full max-w-[724px] gap-[25px]'>
									<h1 className='text-[24px] font-medium text-center'>
										{t('selectYouID')}
									</h1>

									<label className='text-[18px] w-full flex flex-col gap-[5px]'>
										{t('countryRegion')}
										<Popover open={open} onOpenChange={setOpen}>
											<PopoverTrigger asChild>
												<Button
													aria-expanded={open}
													className='w-full justify-between z-[96] border border-solid border-gray-400 text-[16px] sm:text-[18px] md:text-[19px] xl:text-[20px] 2xl:text-[25px] py-[1rem] lg:py-[1.3rem] 2xl:py-[2.5rem]'
													role='combobox'
													variant='outline'
												>
													{value
														? countries.find(
																framework => framework.value === value
															)?.label
														: t('selectReg')}
													<ChevronsUpDown className='ml-2 h-4 w-4 lg:h-6 lg:w-6 shrink-0 opacity-50' />
												</Button>
											</PopoverTrigger>
											<PopoverContent className='w-full p-0'>
												<Command>
													<CommandInput
														className='text-[16px] md:text-[18px] lg:text-[17px] xl:text-[20px] 2xl:text-[25px] w-full min-h-[58px]'
														placeholder={t('searchReg')}
													/>
													<CommandList>
														<CommandEmpty className='text-[14px] sm:text-[16px] md:text-[18px] lg:text-[17px] xl:text-[20px] 2xl:text-[25px] p-[.5rem]'>
															{t('noOne')}
														</CommandEmpty>
														<CommandGroup>
															{countries.map(framework => (
																<CommandItem
																	key={framework.value}
																	className='w-[370px] sm:w-[560px] md:w-[700px]'
																	value={framework.value}
																	onSelect={(
																		currentValue: React.SetStateAction<string>
																	) => {
																		setRegion(currentValue)
																		setValue(
																			currentValue === value ? '' : currentValue
																		)
																		setOpen(false)
																	}}
																>
																	<Check
																		className={cn(
																			'mr-2 h-4 w-4',
																			value === framework.value
																				? 'opacity-100'
																				: 'opacity-0'
																		)}
																	/>
																	{framework.label}
																</CommandItem>
															))}
														</CommandGroup>
													</CommandList>
												</Command>
											</PopoverContent>
										</Popover>
									</label>

									<label className='text-[18px] w-full flex flex-col gap-[5px]'>
										{t('IDtype')}
										<Popover open={openID} onOpenChange={setOpenID}>
											<PopoverTrigger asChild>
												<Button
													aria-expanded={openID}
													className='w-full justify-between z-[96] border border-solid border-gray-400 text-[16px] sm:text-[18px] md:text-[19px] xl:text-[20px] 2xl:text-[25px] py-[1rem] lg:py-[1.3rem] 2xl:py-[2.5rem]'
													role='combobox'
													variant='outline'
												>
													{valueID
														? typeID.find(
																framework => framework.value === valueID
															)?.label
														: t('selectID')}
													<ChevronsUpDown className='ml-2 h-4 w-4 lg:h-6 lg:w-6 shrink-0 opacity-50' />
												</Button>
											</PopoverTrigger>
											<PopoverContent className='!w-full p-0'>
												<Command>
													<CommandList>
														<CommandEmpty className='text-[14px] sm:text-[16px] md:text-[18px] lg:text-[17px] xl:text-[20px] 2xl:text-[25px] p-[.5rem]'>
															{t('noOne')}
														</CommandEmpty>
														<CommandGroup>
															{typeID.map(framework => (
																<CommandItem
																	key={framework.value}
																	className='w-[370px] sm:w-[560px] md:w-[700px]'
																	value={framework.value}
																	onSelect={(
																		currentValue: React.SetStateAction<string>
																	) => {
																		setValueID(
																			currentValue === valueID
																				? ''
																				: currentValue
																		)

																		setOpenID(false)
																	}}
																>
																	<Check
																		className={cn(
																			'mr-2 h-4 w-4',
																			value === framework.value
																				? 'opacity-100'
																				: 'opacity-0'
																		)}
																	/>
																	{framework.label}
																</CommandItem>
															))}
														</CommandGroup>
													</CommandList>
												</Command>
											</PopoverContent>
										</Popover>
									</label>

									<button
										className={`text-[20px] md:text-[25px] 2xl:text-[32px] px-[40px] xl:px-[90px] py-[5px] 2xl:py-[10px] bg-[#888888] rounded-[50px] mt-[80px] text-white ${
											value && valueID && '!bg-[#205BC9]'
										}`}
										disabled={!value && !valueID}
										onClick={handleNextStep}
									>
										{t('next')}
									</button>
								</div>
							</div>
						)}

						{step === 2 && (
							<Verify_documents
								error={error}
								handlePhotoChange={handlePhotoChange}
								handlePhotoChange2={handlePhotoChange2}
								items={valueID}
								setStep={setStep}
								onPhotoChange={handlePhotoChange}
								step={step}
								fileInputRef={fileInputRef}
								handleFileChangeApi={handleFileChange}
								uploading={uploading}
								upLoad={handleUpload}
							/>
						)}

						{step === 3 && (
							<div className='flex flex-col gap-[40px]'>
								<div className='w-full border-transparent pb-[20px] mb-[20px]  text-left flex items-center justify-between gap-[10px]'>
									<div className='flex items-center'>
										<span className='text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-[#888888] flex items-center gap-[15px]'>
											<Button
												className=' text-black dark:text-white bg-transparent  text-[14px] md:text-[18px] border-none shadow-none p-0 hover:bg-transparent'
												onClick={() => setStep(prev => prev - 1)}
											>
												<ArrowBracket
													className={'rotate-90'}
													color={theme === 'dark' ? 'white' : 'black'}
													height={25}
													width={25}
												/>
											</Button>
										</span>
										<h1 className='text-[20px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px]'>
											{t('identVerif')}
										</h1>
									</div>
									<div onClick={ClearState}>
										<X />
									</div>
								</div>
								<div className='flex items-start justify-center'>
									<VerifyAnimation />
								</div>
							</div>
						)}
					</>
				)}
			</div>
		</section>
	)
}

export default Verify
