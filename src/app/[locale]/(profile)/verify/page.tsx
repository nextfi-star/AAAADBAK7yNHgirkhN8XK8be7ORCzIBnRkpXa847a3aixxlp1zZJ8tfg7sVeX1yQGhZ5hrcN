'use client'
import { Choose_ID_type } from '@/components/shared/Choose_ID_type'
import { Verify_country } from '@/components/shared/Verify_country'
import ArrowBracket from '@/components/ui/ArrowBracket'
import { ProfilePage_guard } from '@/components/ui/ProfilePage_guard'
import { useThemeStore } from '@/store'
import { NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'
import { cn } from '@/lib/utils'
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
const frameworks = [
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

const Page: NextPage = () => {
	const { theme } = useThemeStore()
	const [change, SetChange] = useState<boolean>(false)
	const [open, setOpen] = useState(false)
	const [value, setValue] = useState('')

	return (
		<section className='verify -mt-[8rem] sm:-mt-0'>
			<div className='site-holder !px-[0]'>
				{!change ? (
					<div className='flex flex-col items-center pt-[86px] gap-[83px]'>
						<div className='w-fit relative'>
							<Image
								src={'/main/profile_verify/Protection.svg'}
								width={181}
								height={181}
								quality={100}
								priority
								alt='protection icon'
								className='h-auto w-auto max-w-[80px] sm:max-w-[100%]'
							/>
							<Image
								src={'/main/profile_verify/File.svg'}
								width={118}
								height={158}
								quality={100}
								priority
								alt='file icon'
								className='h-auto w-auto absolute -right-[24px] -top-[40px] sm:-top-[68px] sm:-right-[68px] max-w-[65px] sm:max-w-[100%] -z-[1]'
							/>
							<Image
								src={'/main/profile_verify/decor.svg'}
								width={139}
								height={189}
								quality={100}
								priority
								alt='decor icon'
								className='h-auto w-auto absolute -left-[48px] -bottom-[23px] sm:-left-[86px] sm:-bottom-[44px]'
							/>
							<Image
								src={'/main/profile_verify/decor2.svg'}
								width={208}
								height={200}
								quality={100}
								priority
								alt='decor icon'
								className='h-auto w-auto absolute -right-[74px] -top-[64px] sm:-right-[151px] sm:-top-[114px]'
							/>
						</div>

						<div className='w-full flex flex-col gap-[25px] items-center'>
							<h1 className='text-[25px] sm:text-[32px] font-medium leading-[35px]'>
								Verify your identity
							</h1>
							<article className='flex flex-col items-center'>
								<p className='text-[14px] sm:text-[18px] leading-[24px] pb-[7px] max-w-[50%] text-center'>
									To comply with regulations, we need to verify your identity.
									Doing so helps secure your account and allows you to access
									our services.
								</p>
								<div className='flex flex-col gap-[4px]'>
									<p className='text-[18px]'>You’ll need to provide: </p>
									<ul className='pl-[24px] text-[14px] sm:text-[18px]"'>
										<li className='!list-disc'>
											Password, Id or Driver license
										</li>
										<li className='!list-disc'>Personal information</li>
									</ul>
								</div>
							</article>

							<article className='flex flex-col items-center gap-[24px]'>
								<p className='text-[14px] sm:text-[18px] text-[#BDBDBD] inline-flex items-center gap-[7px]'>
									<ProfilePage_guard
										color={theme === 'dark' ? '#fff' : '#000'}
									/>
									Your information is only used for identity verification.
								</p>
								<Button
									className='text-[14px] sm:text-[20px] text-white rounded-[50px] bg-[#205BC9] hover:bg-[#205BC9] px-[50px] py-[4px] hover:opacity-[.9]'
									onClick={() => SetChange(!change)}
								>
									Verify now
								</Button>

								<span className='tetx-[16px] text-[#3F7EF3] leading-[24px]'>
									How do I verify an individual account?
								</span>
							</article>
						</div>
					</div>
				) : (
					<div className='flex flex-col items-center gap-[83px]'>
						<h1 className='w-full border-transparent pb-[20px] mb-[20px] text-[12px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-left flex items-center gap-[10px]'>
							<span className='text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-[#888888] flex items-center gap-[15px]'>
								<Button
									className=' text-black dark:text-white bg-transparent  text-[14px] md:text-[18px] border-none shadow-none p-0 hover:bg-[#205BC9]'
									onClick={() => SetChange(!change)}
								>
									<ArrowBracket
										color={theme === 'dark' ? 'white' : 'black'}
										width={25}
										height={25}
										className={'rotate-90'}
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
											variant='outline'
											role='combobox'
											aria-expanded={open}
											className='w-full justify-between z-[9999] border border-solid border-gray-400 text-[16px] sm:text-[18px] md:text-[19px] xl:text-[20px] 2xl:text-[25px] py-[1rem] lg:py-[1.3rem] 2xl:py-[2.5rem]'
										>
											{value
												? frameworks.find(
														framework => framework.value === value
												  )?.label
												: 'Select region...'}
											<ChevronsUpDown className='ml-2 h-4 w-4 lg:h-6 lg:w-6 shrink-0 opacity-50' />
										</Button>
									</PopoverTrigger>
									<PopoverContent className='w-full max-w-[623px] p-0'>
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
													{frameworks.map(framework => (
														<CommandItem
															key={framework.value}
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
								<Choose_ID_type />
							</label>
							<button className={`text-[20px] md:text-[25px] 2xl:text-[32px] px-[40px] xl:px-[90px] py-[5px] bg-[#888888] rounded-[50px] mt-[80px] ${value && '!bg-[#205BC9]'}`}>
								Next
							</button>
						</div>
					</div>
				)}
			</div>
		</section>
	)
}
export default Page
