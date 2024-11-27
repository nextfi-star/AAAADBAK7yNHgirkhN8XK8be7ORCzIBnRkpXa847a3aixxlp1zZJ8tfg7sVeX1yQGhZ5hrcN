import { useThemeStore } from '@/store'
import { Button } from '@nextui-org/button'
import { Avatar, Divider } from '@nextui-org/react'
import { Globe, Info } from 'lucide-react'
import Image from 'next/image'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/AccordionBurger'
import { NextPage } from 'next'

const data = [
	{
		val: 'overview',
		title: 'Overview',
		content: (
			<div className='flex flex-col items-start gap-[15px]'>
				<span className='text-[18px] dark:text-[#FFFFFF66]'>Profile</span>
				<span className='text-[18px] dark:text-[#FFFFFF66]'>Security</span>
				<span className='text-[18px] dark:text-[#FFFFFF66]'>Verification</span>
				<span className='text-[18px] dark:text-[#FFFFFF66]'>
					Authorized Devices
				</span>
			</div>
		),
	},
	{
		val: 'assets',
		title: 'Assets',
		content: (
			<div className='flex flex-col items-start gap-[15px]'>
				<span className='text-[18px] dark:text-[#FFFFFF66]'>Deposit</span>
				<span className='text-[18px] dark:text-[#FFFFFF66]'>Swap</span>
				<span className='text-[18px] dark:text-[#FFFFFF66]'>Withdrawal</span>
				<span className='text-[18px] dark:text-[#FFFFFF66]'>
					Commission Level
				</span>
			</div>
		),
	},
	{
		val: 'investment',
		title: 'Investment',
		content: (
			<div className='flex flex-col items-start gap-[15px]'>
				<span className='text-[18px] dark:text-[#FFFFFF66]'>
					Company Stocks
				</span>
				<span className='text-[18px] dark:text-[#FFFFFF66]'>
					Corporate Bonds
				</span>
				<span className='text-[18px] dark:text-[#FFFFFF66]'>Oil Sector</span>
				<span className='text-[18px] dark:text-[#FFFFFF66]'>
					Precious Metals Level
				</span>
				<span className='text-[18px] dark:text-[#FFFFFF66]'>
					Innovative Startups
				</span>
			</div>
		),
	},
	{
		val: 'more',
		title: 'More about NextFi',
		content: (
			<div className='flex flex-col items-start gap-[15px]'>
				<span className='text-[18px] dark:text-[#FFFFFF66]'>
					Support center
				</span>
				<span className='text-[18px] dark:text-[#FFFFFF66]'>Token</span>
				<span className='text-[18px] dark:text-[#FFFFFF66]'>History</span>
				<span className='text-[18px] dark:text-[#FFFFFF66]'>FAQ</span>
			</div>
		),
	},
	{
		val: 'footer',
		title: 'Scan to download NextFi app',
		content: (
			<div className='flex flex-col items-start gap-[15px]'>
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
		),
	},
]

export const Footer: NextPage = () => {
	const { theme } = useThemeStore()
	return (
		<footer className='bg-[#F9F9FA] dark:bg-[#131313] mt-[9.5rem] py-[95px] px-[17px] w-full'>
			{/* PC */}
			<div className='site-holder hidden lg:flex flex-col gap-[30px] w-full'>
				<div className='flex flex-col lg:flex-row items-center gap-[172px]'>
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
							<Globe />
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

				<div className='flex flex-col lg:flex-row items-start justify-between gap-[10px]'>
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
						<span className='text-[18px] dark:text-[#EFEFEF] text-center'>
							Scan to download NextFi app
						</span>
					</div>
				</div>

				<div className='flex flex-col gap-[10px] lg:flex-row xl:items-center lg:items-start justify-between w-full'>
					<div className='flex items-start gap-[18px] lg:flex-col xl:flex-row'>
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

					<div className='flex items-center w-full justify-center'>
						<input
							className='text-[16px] pl-[30px] py-[8px] rounded-[50px] w-full max-w-[400px] bg-[#7676801F]'
							placeholder='Search'
						/>
					</div>

					<div className='flex items-center justify-end w-full xl:w-fit gap-[10px]'>
						<span className='dark:text-[#EFEFEF] text-[14px] flex-shrink-0'>
							User agreement
						</span>
						<span className='dark:text-[#EFEFEF] text-[14px] flex-shrink-0'>
							User agreement
						</span>
					</div>
				</div>
			</div>

			{/* Mob */}
			<div className='site-holder flex lg:hidden flex-col gap-[30px] w-full !px-[10px]'>
				<div className='flex flex-col xl:flex-row items-center gap-[15px]'>
					<div className='flex flex-row items-center justify-between gap-[74px]'>
						<div className='flex flex-col items-center gap-[9px]'>
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
						</div>
						<Button
							className='bg-transparent text-[18px] w-full max-w-[140px] border-1 border-solid dark:border-[#FFFFFF] border-[#0c0c0c] rounded-[25px]'
							variant='bordered'
						>
							<Globe />
							English
						</Button>
					</div>

					<div className='flex items-start gap-[25px] px-[36px] py-[20px] rounded-[50px] bg-[#7676801F]'>
						<Info strokeWidth={1} className='w-full max-w-[33px]' />
						<p className='text-[16px] dark:text-[#EFEFEF] font-semibold'>
							NextFi is the trade name of Next Financial Investments, a company
							registered with United Arab Emirates. All services are provided
							outside other countries and are licensed and/or registered with
							OAE.
						</p>
					</div>
				</div>

				<div className='flex flex-col xl:flex-row items-start justify-between gap-[10px]'>
					<Accordion
						collapsible
						className='w-full flex flex-col items-center justify-between'
						type='single'
					>
						{data.map(item => (
							<AccordionItem value={item.val} className='w-full' key={item.val}>
								<AccordionTrigger className=' w-full md:text-[20px] text-left font-normal text-[16px]'>
									{item.title}
								</AccordionTrigger>
								<AccordionContent className='flex w-full justify-between items-center text-[16px] md:text-[20px]'>
									{item.content}
								</AccordionContent>
								<Divider />
							</AccordionItem>
						))}
					</Accordion>
				</div>

				<div className='flex flex-col gap-[32px] items-start w-full'>
					<div className='flex items-center gap-[8px]'>
						<h5 className='text-[25px] dark:text-[#EFEFEF] font-semibold'>
							Community
						</h5>
						<div className='flex items-center gap-[8px]'>
							<Avatar showFallback name='Tg' className='w-[27px] h-[27px]' />
							<Avatar showFallback name='Ins' className='w-[27px] h-[27px]' />
							<Avatar showFallback name='Snp' className='w-[27px] h-[27px]' />
							<Avatar showFallback name='Twt' className='w-[27px] h-[27px]' />
							<Avatar showFallback name='Fcb' className='w-[27px] h-[27px]' />
						</div>
					</div>

					<div className='flex items-center w-full justify-center'>
						<input
							className='text-[16px] pl-[30px] py-[8px] rounded-[50px] w-full  bg-[#7676801F]'
							placeholder='Search'
						/>
					</div>

					<div className='flex w-full justify-center items-center gap-[30px]'>
						<span className='dark:text-[#EFEFEF] text-[18px]'>
							User agreement
						</span>
						<span className='dark:text-[#EFEFEF] text-[18px]'>
							User agreement
						</span>
					</div>
				</div>
			</div>
		</footer>
	)
}
