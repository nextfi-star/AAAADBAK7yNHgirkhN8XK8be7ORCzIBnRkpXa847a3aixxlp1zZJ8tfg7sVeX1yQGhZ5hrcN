import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Link } from '@/i18n/routing'
import { useThemeStore } from '@/store/useChatStore'
import { Button } from '@heroui/button'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'
import ArrowBracket from '../ui/ArrowBracket'
import { Confirmation_dialog } from './Confirmation_dialog'

interface Props {
	propsItem: React.ReactNode
}

export const FreezeAccount = ({ propsItem }: Props) => {
	const { theme } = useThemeStore()
	const t = useTranslations('security')
	const [checked, setChecked] = useState(false)
	const [selectedOption, setSelectedOption] = useState<string | undefined>(
		undefined
	)
	const handleRadioChange = (value: string) => {
		setSelectedOption(value)
	}

	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button
					className={`border-1 !border-[#4d4d4d] dark:!border-[#4d4d4d] text-[16px] border-solid rounded-[50px] px-[10px] !bg-transparent !text-[#0c0c0c] dark:!text-[#eeeeee] !min-w-[116px] min-h-[28px]`}
				>
					{propsItem}
				</Button>
			</DrawerTrigger>

			<DrawerContent className='pt-[.5rem] min-h-[100dvh] mdoal-holder modal-holder mobile-holder '>
				<div className='max-h-[99%] overflow-y-auto'>
					<DrawerTitle className='w-full border-transparent border-b-1 border-solid border-b-gray-400 pb-[20px] mb-[20px] text-[12px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-left flex items-center gap-[10px]'>
						<div className='text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-[#888888] flex items-center gap-[15px]'>
							<DrawerClose asChild>
								<Button className=' text-black dark:text-white bg-transparent  text-[14px] md:text-[18px] border-none shadow-none hover:bg-transparent p-0 w-fit min-w-fit'>
									<ArrowBracket
										className={'rotate-90'}
										color={theme === 'dark' ? 'white' : 'black'}
										height={25}
										width={25}
									/>
								</Button>
							</DrawerClose>
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
						</div>{' '}
						{t('freezeAcc')}
					</DrawerTitle>
					<div className='flex flex-col items-center gap-[20px] pb-[5rem]'>
						<DrawerDescription className='text-black dark:text-white bg-[#F5F5F5] dark:bg-[#181818] py-[24px] px-[22px] rounded-[6px] flex flex-col items-center gap-[10px] justify-center w-full max-w-[921px]'>
							<span className='flex flex-col items-center gap-[5px] md:flex-row md:items-center justify-center md:gap-[10px] text-[14px] md:text-[18px] lg:text-[20px] 2xl:text-[25px] w-full text-center'>
								<Image
									alt='info'
									className='max-w-[20px] md:max-w-[22px] 2xl:max-w-[30px] w-full'
									height={20}
									quality={100}
									src={'/header_icons/profile_burger/info_icon.svg'}
									width={20}
								/>
								{t('afterFreeze')}
							</span>
							<span className='flex flex-col gap-[10px] items-start text-[14px] md:text-[16px] lg:text-[17px] text-left leading-[16px] xl:leading-[18px] 2xl:leading-[20px]'>
								<span>• {t('after1')} </span>
								<span>• {t('after2')} </span>
								<span>• {t('after3')}</span>
								<span>• {t('after4')}</span>
								<span>• {t('after5')}</span>
								<span>• {t('after6')}</span>
							</span>
						</DrawerDescription>
						<div className='flex w-full max-w-[921px] flex-col items-start gap-[10px] md:gap-[20px] border border-solid border-gray-400 py-[10px] rounded-[4px]'>
							<h5 className='text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] border-0 border-b border-solid border-b-gray-400 w-full text-center py-[10px] px-[5px]'>
								{t('whyFrz')}
							</h5>
							<div className='px-[16px]'>
								<RadioGroup
									defaultValue={selectedOption}
									onValueChange={handleRadioChange}
								>
									<div className='flex items-center space-x-2'>
										<label className='flex justify-start text-left items-center gap-[12px] text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] w-full'>
											<RadioGroupItem
												className='border border-solid border-[#BDBDBD] dark:border-[#BDBDBD] '
												id='option-one'
												value='option-one'
											/>
											{t('why1')}
										</label>
									</div>
									<div className='flex items-center space-x-2'>
										<label className='flex justify-start text-left items-center gap-[12px] text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] w-full'>
											<RadioGroupItem
												className='border border-solid border-[#BDBDBD] dark:border-[#BDBDBD] text-[14px] md:text-[16px]'
												id='option-two'
												value='option-two'
											/>
											{t('why2')}
										</label>
									</div>
									<div className='flex items-center space-x-2'>
										<label className='flex justify-start text-left items-center gap-[12px] text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] w-full'>
											<RadioGroupItem
												className='border border-solid border-[#BDBDBD] dark:border-[#BDBDBD] text-[14px] md:text-[16px]'
												id='option-three'
												value='option-three'
											/>
											{t('why3')}
										</label>
									</div>
									<div className='flex items-center space-x-2'>
										<label className='flex justify-start text-left items-center gap-[12px] text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] w-full'>
											<RadioGroupItem
												className='border border-solid border-[#BDBDBD] dark:border-[#BDBDBD] text-[14px] md:text-[16px]'
												id='option-four'
												value='option-four'
											/>
											{t('why4')}
										</label>
									</div>
								</RadioGroup>
							</div>
						</div>
						<div className='privacy max-w-[921px] flex flex-col self-center	 justify-start'>
							<label
								className='checkbox-label gap-[5px] md:gap-[18px] !items-start'
								htmlFor='checkbox-privacy'
							>
								<input
									className='checkbox'
									id='checkbox-privacy'
									type='checkbox'
									onChange={() => setChecked(!checked)}
									checked={checked}
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
									{t('protectFrz')}
								</p>
							</label>
						</div>
						<DrawerFooter className='flex flex-row justify-center gap-[40px] pb-[3rem] w-full'>
							<DrawerClose asChild>
								<Button className='dark:text-white text-black px-[15px] py-[5px] bg-transparent border border-solid !border-[#4d4d4d] dark:!border-[#4d4d4d] rounded-[50px] text-[14px] xl:!text-[20px] 2xl:!text-[25px] xl:!px-[40px] 2xl:!px-[70px] font-medium h-fit !max-w-[220px] !w-full hover:bg-transparent'>
									{t('close')}
								</Button>
							</DrawerClose>
							<Confirmation_dialog
								className={`text-[14px] xl:!text-[20px]  2xl:!text-[25px]  xl:!px-[40px] 2xl:!px-[70px] rounded-[50px] font-medium h-fit !max-w-[220px] !w-full text-[#0c0c0c] dark:text-white border border-solid !border-[#4d4d4d] dark:!border-[#4d4d4d]  ${
									checked && selectedOption
										? 'bg-[#205bc9] hover:bg-[#205bc9] dark:!border-[#205bc9] !border-[#205bc9] text-white'
										: 'bg-transparent hover:bg-transparent data-[hover=true]:opacity-[.6] opacity-[.6]'
								}`}
								content={t('undone')}
								title={t('sure')}
								titleTriger={t('confirm')}
								checked={checked}
								unic={'freeze'}
								selectedOption={selectedOption}
							/>
						</DrawerFooter>
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	)
}
