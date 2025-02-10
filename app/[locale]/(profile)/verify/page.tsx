'use client'
import VerifyAnimation from '@/components/shared/VerifyAnimation'
import { Verify_documents } from '@/components/shared/Verify_documents'
import ArrowBracket from '@/components/ui/ArrowBracket'
import { ProfilePage_guard } from '@/components/ui/ProfilePage_guard'
import { Button } from '@/components/ui/button'
import animationData2 from '@/public/animation/verify_anim_mini.json'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import { Check, ChevronsUpDown, X } from 'lucide-react'
import Image from 'next/image'
import { useRef, useState } from 'react'
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
import { cn } from '@/lib/utils'
import { useThemeStore } from '@/store'

const countries = [
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
]
const typeID = [
	{
		value: 'national id card',
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
]

const Verify = () => {
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

	const handlePhotoChange = (photoData: string) => {
		setPhoto(photoData)
		DataHolder(photoData, 1)
	}
	const handlePhotoChange2 = (photoData: string) => {
		setPhoto2(photoData)
		DataHolder(photoData, 2)
	}

	const DataHolder = (photoData: string, index: number) => {
		console.log('Country/Region - ', value)
		console.log('Type ID - ', valueID)
		console.log(`img ${index} - `, photoData)
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
									{/* <Image
										priority
										alt='decor icon'
										className='h-auto md:w-[200px]'
										height={200}
										quality={100}
										src={
											'/main/profile_verify/Basic_verification_completed.svg'
										}
										width={200}
									/> */}
								</div>

								<div className='max-w-[641px] w-full flex flex-col gap-[25px] items-center'>
									<h1 className='text-[25px] sm:text-[32px] font-medium leading-[35px]'>
										Confirm your identity
									</h1>
									<article className='flex flex-col items-start md:items-center gap-[20px] md:gap-[50px]'>
										<p className='text-[14px] sm:text-[18px] md:text-[20px] leading-[24px] pb-[7px] max-w-[60%%] text-left'>
											According to the law, you need to verify your identity,
											which will enhance the security of your account and grant
											access to services.
										</p>
										<p className='text-[14px] sm:text-[18px] md:text-[20px] leading-[24px] pb-[7px] max-w-[60%%] text-left'>
											Upon completion of the verification, you will receive
											rewards.
										</p>
										<div className='flex flex-col items-start gap-[4px]'>
											<p className='text-[18px] md:text-[20px]'>
												You’ll need to provide:{' '}
											</p>
											<ul className='pl-[24px] text-[14px] sm:text-[18px] md:text-[20px]'>
												<li className='!list-disc'>
													Password, Id or Driver license
												</li>
												<li className='!list-disc'>Personal information</li>
											</ul>
										</div>
									</article>
									<article className='flex flex-col items-center gap-[24px]'>
										<p className='text-[14px] sm:text-[18px] md:text-[20px] text-[#BDBDBD] flex items-center gap-[10px] sm:gap-[7px] w-full'>
											<ProfilePage_guard
												color={theme === 'dark' ? '#fff' : '#000'}
											/>
											Your information is only used for identity verification.
										</p>
										<Button
											className='text-[14px] md:text-[20px] text-white rounded-[50px] bg-[#205BC9] px-[50px] py-[4px] xl:py-[20px] hover:opacity-[.9] hover:bg-[#205BC9] w-full h-[3.25rem]'
											onClick={() => SetChange(!change)}
										>
											Verify now
										</Button>

										{/* {showFaq ? (
                  <>
                    <FAQ_howVerify setShowFaq={setShowFaq} showFaq={showFaq} />
                  </>
                ) : (
                  <span
                    className="text-[16px] text-[#205BC9] leading-[24px] cursor-pointer"
                    onClick={() => setShowFaq((prev) => !prev)}
                  >
                    How do I verify an individual account?
                  </span>
                )} */}
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
									Basic verification completed
								</h3>
								<p className='text-[20px] text-center'>
									You have passed identity verification. Start your journey into
									the world of cryptocurrencies now!
								</p>
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
									Identity verification
								</h1>

								<div className='flex flex-col items-center w-full max-w-[724px] gap-[25px]'>
									<h1 className='text-[24px] font-medium text-center'>
										Select your ID type
									</h1>

									<label className='text-[18px] w-full flex flex-col gap-[5px]'>
										Country/Region of residence
										{/* <Verify_country /> */}
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
														: 'Select region...'}
													<ChevronsUpDown className='ml-2 h-4 w-4 lg:h-6 lg:w-6 shrink-0 opacity-50' />
												</Button>
											</PopoverTrigger>
											<PopoverContent className='w-full p-0'>
												<Command>
													<CommandInput
														className='text-[16px] md:text-[18px] lg:text-[17px] xl:text-[20px] 2xl:text-[25px] w-full min-h-[58px]'
														placeholder='Search region/country...'
													/>
													<CommandList>
														<CommandEmpty className='text-[14px] sm:text-[16px] md:text-[18px] lg:text-[17px] xl:text-[20px] 2xl:text-[25px] p-[.5rem]'>
															No one was found.
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
										ID type
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
														: 'Select ID type'}
													<ChevronsUpDown className='ml-2 h-4 w-4 lg:h-6 lg:w-6 shrink-0 opacity-50' />
												</Button>
											</PopoverTrigger>
											<PopoverContent className='!w-full p-0'>
												<Command>
													<CommandList>
														<CommandEmpty className='text-[14px] sm:text-[16px] md:text-[18px] lg:text-[17px] xl:text-[20px] 2xl:text-[25px] p-[.5rem]'>
															No one was found.
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
										Next
									</button>
								</div>
							</div>
						)}

						{step === 2 && (
							<Verify_documents
								handlePhotoChange={handlePhotoChange}
								handlePhotoChange2={handlePhotoChange2}
								items={valueID}
								setStep={setStep}
								onPhotoChange={handlePhotoChange}
								step={step}
								// resetData={resetData}
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
											Identity verification
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
