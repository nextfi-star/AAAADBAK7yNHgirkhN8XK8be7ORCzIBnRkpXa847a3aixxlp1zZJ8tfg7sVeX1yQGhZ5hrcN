import Image from 'next/image'
import { NextPage } from 'next'
import { Device } from '../ui/Device'
import { Accordion, AccordionItem } from '@/components/ui/AccordionBurger'
import { useThemeStore } from '@/store'
import { Confirmation_dialog } from './Confirmation_dialog'
import { Confirmation_dialog_devices } from './Confirmation_dialog_devices'

export const Profile_devices: NextPage = () => {
	const { theme } = useThemeStore()

	return (
		<div className='flex flex-col gap-[20px] h-full'>
			<Accordion collapsible className='' type='single'>
				<div className='w-full'>
					<AccordionItem className='flex flex-col gap-[30px]' value={'item-1'}>
						<div className='hover:no-underline py-[0] items-start svg-hidden'>
							<div className='flex flex-col w-full gap-[5px]'>
								<div className='flex items-center justify-between w-full'>
									<div className='flex items-center -ml-[3px]'>
										<Image
											alt='icon'
											height={50}
											src={'/header_icons/profile_burger/device_phone.svg'}
											width={50}
										/>
										<h5 className='text-[32px] font-medium'>Devices</h5>
									</div>
								</div>

								<div className='flex items-start flex-col gap-[25px] pb-[20px]'>
									<div
										className='flex w-full gap-[15px] justify-between items-center'
										onClick={e => e.stopPropagation()}
									>
										<span className='text-[20px]  flex items-center gap-[10px] dark:text-[#BDBDBD] text-black after:content-["Russia/Moscow"] after:text-[16px] after:absolute relative after:dark:text-white after:text-black after:bottom-[-17px] after:left-[50%] after:translate-x-[-50%]'>
											MacBook PRO
										</span>
										<Confirmation_dialog_devices
											content={
												'This action cannot be undone. You will be logged out from this device, but your account and data will remain intact on servers'
											}
											title={'Are you absolutely sure?'}
											titleTriger={'Log out'}
											unic='half'
											className='border-1 !border-gray-300 border-solid rounded-[50px] px-[10px] !bg-transparent !text-[#0c0c0c] dark:!text-[#eeeeee] !text-[16px] xl:!text-[16px] 2xl:!text-[16px]'
										/>
									</div>

									<div
										className='flex w-full gap-[15px] justify-between items-center'
										onClick={e => e.stopPropagation()}
									>
										<span className='text-[20px]  flex items-center gap-[10px] dark:text-[#BDBDBD] text-black after:content-["Russia/Moscow"] after:text-[16px] after:absolute relative after:dark:text-white after:text-black after:bottom-[-17px] after:left-[50%] after:translate-x-[-50%]'>
											MacBook PRO
										</span>
										<Confirmation_dialog_devices
											content={
												'This action cannot be undone. You will be logged out from this device, but your account and data will remain intact on servers'
											}
											title={'Are you absolutely sure?'}
											titleTriger={'Log out'}
											className='border-1 !border-gray-300 border-solid rounded-[50px] px-[10px] !bg-transparent !text-[#0c0c0c] dark:!text-[#eeeeee] !text-[16px] xl:!text-[16px] 2xl:!text-[16px]'
										/>
									</div>

									<div
										className='flex w-full gap-[15px] justify-between items-center'
										onClick={e => e.stopPropagation()}
									>
										<span className='text-[20px]  flex items-center gap-[10px] dark:text-[#BDBDBD] text-black after:content-["Russia/Moscow"] after:text-[16px] after:absolute relative after:dark:text-white after:text-black after:bottom-[-17px] after:left-[50%] after:translate-x-[-50%]'>
											MacBook PRO
										</span>

										<Confirmation_dialog_devices
											content={
												'This action cannot be undone. You will be logged out from this device, but your account and data will remain intact on servers'
											}
											title={'Are you absolutely sure?'}
											titleTriger={'Log out'}
											className='border-1 !border-gray-300 border-solid rounded-[50px] px-[10px] !bg-transparent !text-[#0c0c0c] dark:!text-[#eeeeee] !text-[16px] xl:!text-[16px] 2xl:!text-[16px]'
										/>
									</div>
								</div>
							</div>
						</div>
					</AccordionItem>
					<span className='block w-full min-h-[1px] bg-gray-500 dark:bg-white my-[10px]' />
				</div>
				<div className='w-full flex flex-col items-center mt-[4rem] pb-[1.5rem] overflow-hidden'>
					<Device
						className={'min-w-[970px] object-cover'}
						color={theme === 'dark' ? 'white' : 'black'}
						width={'835'}
					/>
					<button className='text-[20px] bg-[#205BC9] rounded-[50px] px-[25px] py-[5px] text-white'>
						Log Out from all devices
					</button>
				</div>
			</Accordion>
		</div>
	)
}
