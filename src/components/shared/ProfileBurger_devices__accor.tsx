import React from 'react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/AccordionBurger'
import Image from 'next/image'
import { NextPage } from 'next'
import { Device } from '../ui/Device'
import { useThemeStore } from '@/store'

export const ProfileBurger_devices__accor: NextPage = () => {
	const { theme } = useThemeStore()
	return (
		<div className='flex flex-col gap-[20px] h-full'>
			<Accordion className='' type='single' collapsible>
				<div>
					<AccordionItem value={'item-1'} className='flex flex-col gap-[30px]'>
						<AccordionTrigger className='hover:no-underline py-[0] items-start'>
							<p className='flex flex-col w-full gap-[15px]'>
								<div className='flex justify-between w-full pr-[10px]'>
									<div className='flex items-center'>
										<Image
											src={'/header_icons/profile_burger/device_phone.svg'}
											width={40}
											height={40}
											alt='icon'
										/>
										<h5 className='text-[20px] font-medium'>Device</h5>
									</div>

									<button className='text-[#3F7EF3] px-[15px] py-[0px] bg-transparent border border-solid border-[#3F7EF3] rounded-[50px] text-[16px] font-medium'>
										Log out
									</button>
								</div>
								<div className='flex items-center gap-[15px] py-[15px]'>
									<span className='text-[14px] text-[#BDBDBD]'>Iphone 15</span>
									<span className='h-[17px] w-[1px] bg-[#BDBDBD]'></span>
									<span className='text-[14px] text-[#BDBDBD]'>
										MacBook PRO
									</span>
									<span className='h-[17px] w-[1px] bg-[#BDBDBD]'></span>
									<span className='text-[14px] text-[#BDBDBD]'>
										Ipad mini 6
									</span>
								</div>
							</p>
						</AccordionTrigger>
						<AccordionContent className='flex justify-between'>
							<div className='flex items-start'>
								<Image
									src={'/header_icons/profile_burger/device_location.svg'}
									width={40}
									height={40}
									alt='icon'
								/>
								<div className='flex flex-col gap-[10px]'>
									<h5 className='text-[20px] font-medium'>
										Location of autorization
									</h5>
									<span className='text-[14px]'>Russia, Moscow</span>
								</div>
							</div>
						</AccordionContent>
					</AccordionItem>
					<span className='block w-full min-h-[1px] bg-gray-500 dark:bg-white my-[10px]'></span>
				</div>
				<div className='w-full flex flex-col items-center mt-[4rem] pb-[1.5rem]'>
					<Device color={theme === 'dark' ? 'white' : 'black'} />
					<button className='text-[16px] bg-[#205BC9] rounded-[50px] px-[15px] py-[5px] text-white'>
						Log Out from all devices
					</button>
				</div>
			</Accordion>
		</div>
	)
}
