import { useThemeStore } from '@/store'
import { Button } from '@heroui/button'
import { Divider } from '@heroui/react'
import { Globe, Info } from 'lucide-react'
import Image from 'next/image'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/AccordionBurger'
import { NextPage } from 'next'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'
import { LangSwitch } from '../ui/LangSwitch'

export const Footer: NextPage = () => {
	const { theme } = useThemeStore()
	const t = useTranslations('footer')

	const data = useMemo(() => [
		{
			val: 'overview',
			title: t('overview'),
			content: (
				<div className='flex flex-col items-start gap-[15px]'>
					<span className='text-[18px] dark:text-[#FFFFFF66]'>{t('profile')}</span>
					<span className='text-[18px] dark:text-[#FFFFFF66]'>
						{t('security')}
					</span>
					<span className='text-[18px] dark:text-[#FFFFFF66]'>
						{t('verification')}
					</span>
					<span className='text-[18px] dark:text-[#FFFFFF66]'>
						{t('authDev')}
					</span>
				</div>
			),
		},
		{
			val: 'assets',
			title: t('assets'),
			content: (
				<div className='flex flex-col items-start gap-[15px]'>
					<span className='text-[18px] dark:text-[#FFFFFF66]'>
						{t('deposit')}
					</span>
					<span className='text-[18px] dark:text-[#FFFFFF66]'>{t('swap')}</span>
					<span className='text-[18px] dark:text-[#FFFFFF66]'>
						{t('withdrawal')}
					</span>
					<span className='text-[18px] dark:text-[#FFFFFF66]'>
						{t('levels')}
					</span>
				</div>
			),
		},
		{
			val: 'investment',
			title: t('investment'),
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
			title: t('more'),
			content: (
				<div className='flex flex-col items-start gap-[15px]'>
					<span className='text-[18px] dark:text-[#FFFFFF66]'>
						{t('supCenter')}
					</span>
					<span className='text-[18px] dark:text-[#FFFFFF66]'>
						{t('token')}
					</span>
					<span className='text-[18px] dark:text-[#FFFFFF66]'>
						{t('history')}
					</span>
					<span className='text-[18px] dark:text-[#FFFFFF66]'>{t('faq')}</span>
				</div>
			),
		},
		{
			val: 'footer',
			title: t('scan'),
			content: (
				<div className='flex flex-col items-start gap-[15px]'>
					<Image
						src={'/footer/qr.svg'}
						width={137}
						height={137}
						alt='icon qr footer'
					/>
					<span className='text-[18px] dark:text-[#EFEFEF]'>{t('scan')}</span>
				</div>
			),
		},
	], [])
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
							{t('policy')}
						</p>
					</div>
				</div>

				<div className='flex flex-col lg:flex-row items-start justify-between gap-[10px]'>
					<div className='flex flex-col items-start gap-[15px]'>
						<h5 className='text-[25px] font-semibold dark:text-[#EFEFEF] mb-[5px]'>
							{t('overview')}
						</h5>
						<span className='text-[18px] dark:text-[#FFFFFF66]'>Profile</span>
						<span className='text-[18px] dark:text-[#FFFFFF66]'>Security</span>
						<span className='text-[18px] dark:text-[#FFFFFF66]'>
							{t('verification')}
						</span>
						<span className='text-[18px] dark:text-[#FFFFFF66]'>
							{t('authDev')}
						</span>
					</div>

					<div className='flex flex-col items-start gap-[15px]'>
						<h5 className='text-[25px] font-semibold dark:text-[#EFEFEF] mb-[5px]'>
							{t('assets')}
						</h5>
						<span className='text-[18px] dark:text-[#FFFFFF66]'>Deposit</span>
						<span className='text-[18px] dark:text-[#FFFFFF66]'>Swap</span>
						<span className='text-[18px] dark:text-[#FFFFFF66]'>
							{t('withdrawal')}
						</span>
						<span className='text-[18px] dark:text-[#FFFFFF66]'>
							{t('levels')}
						</span>
					</div>

					<div className='flex flex-col items-start gap-[15px]'>
						<h5 className='text-[25px] font-semibold dark:text-[#EFEFEF] mb-[5px]'>
							[t('investment')]
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
							{t('more')}
						</h5>
						<span className='text-[18px] dark:text-[#FFFFFF66]'>
							[t('supCenter')]
						</span>
						<span className='text-[18px] dark:text-[#FFFFFF66]'>
							{t('token')}
						</span>
						<span className='text-[18px] dark:text-[#FFFFFF66]'>
							{t('history')}
						</span>
						<span className='text-[18px] dark:text-[#FFFFFF66]'>
							{t('faq')}
						</span>
					</div>

					<div className='flex flex-col items-center gap-[15px]'>
						<Image
							src={'/footer/qr.svg'}
							width={137}
							height={137}
							alt='icon qr footer'
						/>
						<span className='text-[18px] dark:text-[#EFEFEF] text-center'>
							{t('scan')}
						</span>
					</div>
				</div>

				<div className='flex flex-col gap-[10px] lg:flex-row xl:items-center lg:items-start justify-between w-full'>
					<div className='flex items-start gap-[18px] lg:flex-col xl:flex-row'>
						<h5 className='text-[25px] dark:text-[#EFEFEF] font-semibold'>
							[t('comm')]
						</h5>
						<div className='flex items-center gap-[8px]'>
							<Image
								width={27}
								height={27}
								alt='social icon'
								src='/footer/telegram.svg'
							/>
							<Image
								width={27}
								height={27}
								alt='social icon'
								src='/footer/instagram.svg'
							/>
							<Image
								width={27}
								height={27}
								alt='social icon'
								src='/footer/snapchat.svg'
							/>
							<Image
								width={27}
								height={27}
								alt='social icon'
								src='/footer/twitter.svg'
							/>
							<Image
								width={27}
								height={27}
								alt='social icon'
								src='/footer/facebook.svg'
							/>
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
							{t('agreeM')}
						</span>
						<span className='dark:text-[#EFEFEF] text-[14px] flex-shrink-0'>
							{t('agreeM')}
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
						<LangSwitch cls={'bg-transparent text-[18px] w-full max-w-[140px] border-1 border-solid dark:border-[#FFFFFF] border-[#0c0c0c] rounded-[25px]'} 
						/>
					</div>

					<div className='flex items-start gap-[25px] px-[36px] py-[20px] rounded-[50px] bg-[#7676801F]'>
						<Info strokeWidth={1} className='w-full max-w-[33px]' />
						<p className='text-[16px] dark:text-[#EFEFEF] font-semibold'>
							{t('policy')}
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
							{t('comm')}
						</h5>
						<div className='flex items-center gap-[8px]'>
							<Image
								width={27}
								height={27}
								alt='social icon'
								src='/footer/telegram.svg'
							/>
							<Image
								width={27}
								height={27}
								alt='social icon'
								src='/footer/instagram.svg'
							/>
							<Image
								width={27}
								height={27}
								alt='social icon'
								src='/footer/snapchat.svg'
							/>
							<Image
								width={27}
								height={27}
								alt='social icon'
								src='/footer/twitter.svg'
							/>
							<Image
								width={27}
								height={27}
								alt='social icon'
								src='/footer/facebook.svg'
							/>
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
							{t('agreeM')}
						</span>
					</div>
				</div>
			</div>
		</footer>
	)
}
