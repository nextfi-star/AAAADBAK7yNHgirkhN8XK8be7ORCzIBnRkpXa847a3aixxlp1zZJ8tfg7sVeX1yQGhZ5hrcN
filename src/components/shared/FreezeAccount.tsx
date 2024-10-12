import {
	Drawer,
	DrawerContent,
	DrawerTrigger,
	DrawerHeader,
	DrawerTitle,
	DrawerDescription,
	DrawerFooter,
	DrawerClose,
} from '@/components/ui/drawer'
import { Button } from '../ui/button'
import { NextPage } from 'next'
import Image from 'next/image'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Link } from '@/i18n/routing'
import { useThemeStore } from '@/store'

interface Props {
	propsItem: React.ReactNode
}

export const FreezeAccount: NextPage<Props> = ({ propsItem }) => {
	const { theme } = useThemeStore()
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button
					className={`bg-transparent hover:bg-transparent border border-solid rounded-[50px] border-gray-400 text-[#205bc9] dark:text-white`}
				>
					{propsItem}
				</Button>
			</DrawerTrigger>

			<DrawerContent className='z-[9999] px-[30px] pt-[2.5rem] min-h-[100dvh] max-h-[70%]'>
				<DrawerHeader>
					<DrawerTitle className='w-full border-transparent border-b-1 border-solid border-b-gray-400 pb-[20px] mb-[20px] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-left'>
						<DrawerClose asChild>
							<Button className=' text-white bg-transparent hover:text-[#fff] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[25px] lg:px-[50px] lg:py-[25px] hover:bg-transparent'>
								{'<'}
							</Button>
						</DrawerClose>
						<span className='text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px]'>
							<Link
								className='text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-[#888888]'
								href='/security'
							>
								Security center
							</Link>{' '}
							{'>'}{' '}
						</span>
						Freeze account
					</DrawerTitle>
					<div className='flex flex-col items-center gap-[20px]'>
						<DrawerDescription className='text-black dark:text-white bg-[#F5F5F5] dark:bg-[#181818] py-[24px] px-[22px] rounded-[6px] flex flex-col items-center gap-[10px] justify-center w-full max-w-[921px]'>
							<span className='flex flex-col items-center gap-[5px] md:flex-row md:items-center justify-center md:gap-[10px] text-[14px] md:text-[20px] lg:text-[25px] w-full text-center'>
								<Image
									src={'/header_icons/profile_burger/info_icon.svg'}
									width={20}
									height={20}
									alt='info'
									quality={100}
									className='max-w-[20px] md:max-w-[25px] w-full'
								/>
								After freezing your account:
							</span>
							<ul className='flex flex-col gap-[25px] items-start text-[14px] md:text-[20px] lg:text-[25px] text-left leading-[30px]'>
								<li>
									• Your account zyabkin.vladislav2001@rambler.ru will be frozen
									temporarily. To unfreeze it, start by logging in again.{' '}
								</li>

								<li>
									• Your account zyabkin.vladislav2001@rambler.ru will be frozen
									temporarily. To unfreeze it, start by logging in again.{' '}
								</li>

								<li>
									• All trading capabilities of this account will be disabled
								</li>

								<li>• All API keys for this account will be deleted </li>

								<li>• All approved devices for this account will be removed</li>

								<li>
									• Ongoing transactions such as perpetuals will not be canceled
									automatically
								</li>
							</ul>
						</DrawerDescription>
						<div className='flex w-full max-w-[921px] flex-col items-start gap-[20px] md:gap-[40px] border border-solid border-gray-400 py-[10px] rounded-[4px]'>
							<h5 className='text-[12px] md:text-[18px] lg:text-[20px] border-0 border-b border-solid border-b-gray-400 w-full text-center py-[10px] px-[5px]'>
								Why do you want to freeze your account?
							</h5>
							<div className='px-[16px]'>
								<RadioGroup defaultValue='option-one'>
									<div className='flex items-center space-x-2'>
										<label className='flex justify-start text-left items-center gap-[12px] text-[14px] md:text-[16px] lg:text-[20px] xl:text-[27px] w-full'>
											<RadioGroupItem
												value='option-one'
												id='option-one'
												className='border border-solid border-[#BDBDBD] dark:border-[#BDBDBD] '
											/>
											This account is not safe, so I want to freeze it
											temporarily.
										</label>
									</div>
									<div className='flex items-center space-x-2'>
										<label className='flex justify-start text-left items-center gap-[12px] text-[14px] md:text-[16px] lg:text-[20px] xl:text-[27px] w-full'>
											<RadioGroupItem
												value='option-two'
												id='option-two'
												className='border border-solid border-[#BDBDBD] dark:border-[#BDBDBD] text-[14px] md:text-[16px]'
											/>
											I don't want to use this account anymore.
										</label>
									</div>
									<div className='flex items-center space-x-2'>
										<label className='flex justify-start text-left items-center gap-[12px] text-[14px] md:text-[16px] lg:text-[20px] xl:text-[27px] w-full'>
											<RadioGroupItem
												value='option-three'
												id='option-three'
												className='border border-solid border-[#BDBDBD] dark:border-[#BDBDBD] text-[14px] md:text-[16px]'
											/>
											I want to use another cryptocurrency platform.
										</label>
									</div>
									<div className='flex items-center space-x-2'>
										<label className='flex justify-start text-left items-center gap-[12px] text-[14px] md:text-[16px] lg:text-[20px] xl:text-[27px] w-full'>
											<RadioGroupItem
												value='option-four'
												id='option-four'
												className='border border-solid border-[#BDBDBD] dark:border-[#BDBDBD] text-[14px] md:text-[16px]'
											/>
											Other reasons
										</label>
									</div>
								</RadioGroup>
							</div>
						</div>
						<div className='privacy max-w-[921px] flex flex-col self-center	 justify-start'>
							<label
								htmlFor='checkbox-privacy'
								className='checkbox-label gap-[5px] md:gap-[18px] !items-start'
							>
								<input
									type='checkbox'
									id='checkbox-privacy'
									className='checkbox'
								/>
								<span className='checkbox-view'>
									<svg
										className='checkbox-icon max-w-[50px] md:max-w-[50px] max-h-[20px] md:max-h-[45px]'
										xmlns='http://www.w3.org/2000/svg'
										width='18'
										viewBox='0 0 511.985 511.985'
									>
										<path
											fill={theme === 'dark' ? '#fff' : '#3A3939'}
											d='M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0-15.862 15.862-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899 10.394 0 20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435z'
										/>
									</svg>
								</span>
								<p className='text-[14px] md:text-[16px] lg:text-[22px] text-left'>
									To protect your account, you will not be able to withdraw
									funds within 24 hours after resetting your settings or
									changing your account password.
								</p>
							</label>
						</div>
					</div>
				</DrawerHeader>

				<DrawerFooter className='flex flex-row justify-center gap-[40px]'>
					<DrawerClose asChild>
						<Button className='bg-[#515151] text-white rounded-[50px] px-[35px] min-w-[117px] hover:bg-[#515151] hover:text-[#fff] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[32px] lg:px-[50px] lg:py-[30px]'>
							Confirm
						</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}
