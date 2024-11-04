import React from 'react'
import {
	Accordion,
	AccordionItem,
} from '@/components/ui/AccordionBurger'
import Image from 'next/image'
import { NextPage } from 'next'
import { Device } from '../ui/Device'
import { useThemeStore } from '@/store'
import { Alert } from './Alert'

export const ProfileBurger_devices__accor: NextPage = () => {
	const { theme } = useThemeStore()

	return (
		<div className='flex flex-col gap-[20px] h-full'>
			<Accordion className='' type='single' collapsible>
				<div className='w-full'>
					<AccordionItem value={'item-1'} className='flex flex-col gap-[30px]'>
						<div className='hover:no-underline py-[0] items-start svg-hidden'>
							<div className='flex flex-col w-full gap-[5px]'>
								<div className='flex items-center justify-between w-full'>
									<div className='flex items-center -ml-[3px]'>
										<Image
											src={'/header_icons/profile_burger/device_phone.svg'}
											width={40}
											height={40}
											alt='icon'
										/>
										<h5 className='text-[20px] font-medium'>Devices</h5>
									</div>
								</div>

								<div className='flex items-start flex-col gap-[15px] pb-[10px]'>

									<div
										className='flex w-full gap-[15px] justify-between items-center relative after:absolute after:w-full after:min-h-[1px] after:bottom-[-8px] after:border-0 after:border-b after:border-dashed after:border-black after:dark:border-white'
										onClick={e => e.stopPropagation()}
									>
										<span className='text-[14px]  flex items-center gap-[10px] dark:text-[#BDBDBD] text-black after:content-["Russia/Moscow"] after:text-[10px] after:absolute relative after:dark:text-white after:text-black after:bottom-[-10px] after:left-[50%] after:translate-x-[-50%] '>
											MacBook PRO
										</span>
										<Alert
											title={'Are you absolutely sure?'}
											content={
												'This action cannot be undone. You will be logged out from this device, but your account and data will remain intact on servers'
											}
											titleTriger={'Log out'}
										/>
									</div>

									<div
										className='flex w-full gap-[15px] justify-between items-center relative after:absolute after:w-full after:min-h-[1px] after:bottom-[-8px] after:border-0 after:border-b after:border-dashed after:border-black after:dark:border-white'
										onClick={e => e.stopPropagation()}
									>
										<span className='text-[14px]  flex items-center gap-[10px] dark:text-[#BDBDBD] text-black after:content-["Russia/Moscow"] after:text-[10px] after:absolute relative after:dark:text-white after:text-black after:bottom-[-10px] after:left-[50%] after:translate-x-[-50%] '>
											MacBook PRO
										</span>
										<Alert
											title={'Are you absolutely sure?'}
											content={
												'This action cannot be undone. You will be logged out from this device, but your account and data will remain intact on servers'
											}
											titleTriger={'Log out'}
										/>
									</div>


									<div
										className='flex w-full gap-[15px] justify-between items-center relative after:absolute after:w-full after:min-h-[1px] after:bottom-[-8px] after:border-0 after:border-b after:border-dashed after:border-black after:dark:border-white'
										onClick={e => e.stopPropagation()}
									>
										<span className='text-[14px] flex items-center gap-[10px] dark:text-[#BDBDBD] text-black after:content-["Russia/Moscow"] after:text-[10px] after:absolute relative after:dark:text-white after:text-black after:bottom-[-10px] after:left-[50%] after:translate-x-[-50%] '>
											MacBook PRO
										</span>
										<Alert
											title={'Are you absolutely sure?'}
											content={
												'This action cannot be undone. You will be logged out from this device, but your account and data will remain intact on servers'
											}
											titleTriger={'Log out'}
										/>
									</div>

								</div>
							</div>
						</div>
					</AccordionItem>
					{/* <span className='block w-full min-h-[1px] bg-gray-500 dark:bg-white my-[10px]'></span> */}
				</div>
				<div className='w-full flex flex-col items-center mt-[4rem] pb-[1.5rem]'>
					<Device width={'235'} color={theme === 'dark' ? 'white' : 'black'} />
					<button className='text-[16px] bg-[#205BC9] rounded-[50px] px-[15px] py-[5px] text-white'>
						Log Out from all devices
					</button>
				</div>
			</Accordion>
		</div>
	)
}
