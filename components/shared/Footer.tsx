import { useThemeStore } from '@/store'
import { Button } from '@nextui-org/button'
import { Avatar, Input } from '@nextui-org/react'
import { Info } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export const Footer = () => {
	const { theme } = useThemeStore()
	return (
		<footer className='bg-[#F9F9FA] dark:bg-[#131313] mt-[1.5rem] py-[57px] px-[10px] w-full'>
			<div className='site-holder flex flex-col gap-[30px] w-full'>
				<div className='flex flex-col xl:flex-row items-center gap-[172px]'>
					<div className='flex flex-col gap-[24px]'>
						<Image
							src={
								theme === 'dark'
									? '/footer/logo.svg'
									: '/footer/logo_for_light.svg'
							}
							width={124}
							height={52}
							alt='footer logo'
						/>
						<span className='dark:text-[#FFFFFF66] text-[18px] whitespace-nowrap'>
							©2024 NextFi.io
						</span>
						<Button
							className='bg-transparent text-[18px] w-full max-w-[140px] border-1 border-solid dark:border-[#FFFFFF] border-[#0c0c0c] rounded-[25px]'
							variant='bordered'
						>
							English
						</Button>
					</div>

					<div className='flex items-center gap-[25px] px-[36px] py-[20px] rounded-[50px] bg-[#7676801F]'>
						<Info strokeWidth={1} className='w-full max-w-[33px]' />
						<p className='text-[18px] dark:text-[#EFEFEF] font-semibold'>
							NextFi is the trade name of Next Financial Investments, a company
							registered with United Arab Emirates. All services are provided
							outside other countries and are licensed and/or registered with
							OAE.
						</p>
					</div>
				</div>

				<div className='flex flex-col xl:flex-row items-start justify-between gap-[10px]'>
					<div className='flex flex-col items-start gap-[15px]'>
						<h5 className='text-[25px] font-semibold dark:text-[#EFEFEF] mb-[5px]'>
							Overview
						</h5>
						<span className='text-[18px] dark:text-[#FFFFFF66]'>Profile</span>
						<span className='text-[18px] dark:text-[#FFFFFF66]'>Security</span>
						<span className='text-[18px] dark:text-[#FFFFFF66]'>
							Verification
						</span>
						<span className='text-[18px] dark:text-[#FFFFFF66]'>
							Authorized Devices
						</span>
					</div>

					<div className='flex flex-col items-start gap-[15px]'>
						<h5 className='text-[25px] font-semibold dark:text-[#EFEFEF] mb-[5px]'>
							Assets
						</h5>
						<span className='text-[18px] dark:text-[#FFFFFF66]'>Deposit</span>
						<span className='text-[18px] dark:text-[#FFFFFF66]'>Swap</span>
						<span className='text-[18px] dark:text-[#FFFFFF66]'>
							Withdrawal
						</span>
						<span className='text-[18px] dark:text-[#FFFFFF66]'>
							Commission Level
						</span>
					</div>

					<div className='flex flex-col items-start gap-[15px]'>
						<h5 className='text-[25px] font-semibold dark:text-[#EFEFEF] mb-[5px]'>
							Investment
						</h5>
						<span className='text-[18px] dark:text-[#FFFFFF66]'>
							Company Stocks
						</span>
						<span className='text-[18px] dark:text-[#FFFFFF66]'>
							Corporate Bonds
						</span>
						<span className='text-[18px] dark:text-[#FFFFFF66]'>
							Oil Sector
						</span>
						<span className='text-[18px] dark:text-[#FFFFFF66]'>
							Precious Metals Level
						</span>
						<span className='text-[18px] dark:text-[#FFFFFF66]'>
							Innovative Startups
						</span>
					</div>

					<div className='flex flex-col items-start gap-[15px]'>
						<h5 className='text-[25px] font-semibold dark:text-[#EFEFEF] mb-[5px]'>
							More about NextFi
						</h5>
						<span className='text-[18px] dark:text-[#FFFFFF66]'>
							Support center
						</span>
						<span className='text-[18px] dark:text-[#FFFFFF66]'>Token</span>
						<span className='text-[18px] dark:text-[#FFFFFF66]'>History</span>
						<span className='text-[18px] dark:text-[#FFFFFF66]'>FAQ</span>
					</div>

					<div className='flex flex-col items-center gap-[15px]'>
						<Image
							src={'/footer/qr.svg'}
							width={137}
							height={137}
							alt='icon qr footer'
						/>
						<span className='text-[18px] dark:text-[#EFEFEF]'>
							Scan to download NextFi app
						</span>
					</div>
				</div>

				<div className='flex flex-col xl:flex-row items-center justify-between w-full'>
					<div className='flex items-center gap-[18px]'>
						<h5 className='text-[25px] dark:text-[#EFEFEF] font-semibold'>
							Community
						</h5>
						<div className='flex items-center gap-[8px]'>
							<Avatar showFallback name='Tg' />
							<Avatar showFallback name='Ins' />
							<Avatar showFallback name='Snp' />
							<Avatar showFallback name='Twt' />
							<Avatar showFallback name='Fcb' />
						</div>
					</div>

					<div className='flex items-center flex-1 justify-center'>
						<input
							className='text-[16px] pl-[30px] py-[8px] rounded-[50px] w-full max-w-[400px] bg-[#7676801F]'
							placeholder='Search'
						/>
					</div>

					<div className='flex items-center gap-[30px]'>
						<span className='dark:text-[#EFEFEF]'>User agreement</span>
						<span className='dark:text-[#EFEFEF]'>User agreement</span>
					</div>
				</div>

			</div>
		</footer>
	)
}
