import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/AccordionBurger'
import { useThemeStore } from '@/store/useChatStore'
import { Divider } from '@heroui/react'
import { Facebook, Info, Instagram, Lock, Send, Twitter } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useMemo } from 'react'
import { LangSwitch } from '../ui/LangSwitch'
import { Link } from '@/i18n/routing'
import { TermsModal } from './TermsModal'
import { PolicyModal } from './PolicyModal'
import { SecPolicyModal } from './SecPolicyModal'
import { SecIcon } from '../ui/SecIcon'

export const Footer = () => {
	const { theme } = useThemeStore()
	const t = useTranslations('footer')
	const data = useMemo(
		() => [
			{
				val: 'overview',
				title: t('overview'),
				href: 'over',
				content: (
					<div className='flex flex-col items-start gap-[15px]'>
						<Link href={'/over'}>
							<span className='text-[18px] dark:text-[#FFFFFF66]'>
								{t('profile')}
							</span>
						</Link>
						<span className='text-[18px] dark:text-[#FFFFFF66]'>
							<Link href={'/security'}>{t('security')}</Link>
						</span>
						<span className='text-[18px] dark:text-[#FFFFFF66]'>
							<Link href={'/verify'}>{t('verification')}</Link>
						</span>
						<span className='text-[18px] dark:text-[#FFFFFF66]'>
							<Link href={'/devices'}>{t('authDev')}</Link>
						</span>
					</div>
				),
			},
			{
				val: 'assets',
				href: 'assets',
				title: t('assets'),
				content: (
					<div className='flex flex-col items-start gap-[15px]'>
						<span className='text-[18px] dark:text-[#FFFFFF66]'>
							<Link href={'/deposit'}>{t('deposit')}</Link>
						</span>
						<span className='text-[18px] dark:text-[#FFFFFF66] flex items-center gap-[5px] lock-btn'>
							<Link href={'#'}>{t('swap')}</Link>
							<SecIcon cls='lock min-w-[20px]' />
						</span>
						<span className='text-[18px] dark:text-[#FFFFFF66]'>
							<Link href={'/withdrawal'}>{t('withdrawal')}</Link>
						</span>
						<span className='text-[18px] dark:text-[#FFFFFF66]'>
							<Link href={'/activity'}>{t('levels')}</Link>
						</span>
					</div>
				),
			},
			{
				val: 'investment',
				title: t('investment'),
				href: '#',
				content: (
					<div className='flex flex-col items-start gap-[15px]'>
						<span className='text-[18px] dark:text-[#FFFFFF66] hover:cursor-pointer'>
							Company Stocks
						</span>
						<span className='text-[18px] dark:text-[#FFFFFF66] hover:cursor-pointer'>
							Corporate Bonds
						</span>
						<span className='text-[18px] dark:text-[#FFFFFF66] hover:cursor-pointer'>
							Oil Sector
						</span>
						<span className='text-[18px] dark:text-[#FFFFFF66] hover:cursor-pointer'>
							Precious Metals Level
						</span>
					</div>
				),
			},
			{
				val: 'more',
				title: t('more'),
				content: (
					<div className='flex flex-col items-start gap-[15px]'>
						<TermsModal />
						<PolicyModal />
						<SecPolicyModal />
					</div>
				),
			},
			{
				val: 'footer',
				title: t('scan'),
				content: (
					<div className='flex flex-col items-start gap-[15px]'>
						<Image
							src={'/footer/qr code.svg'}
							width={137}
							height={137}
							alt='icon qr footer'
						/>
						<span className='text-[18px] dark:text-[#EFEFEF]'>{t('scan')}</span>
					</div>
				),
			},
		],
		[]
	)
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
						<div className='bg-transparent text-[18px] w-full flex items-center '>
							<LangSwitch
								title={t('lang')}
								cls={
									'bg-transparent text-[18px] w-full focus-visible:!outline-none'
								}
							/>
						</div>
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
						<Link href='/profile' className='text-[18px] dark:text-[#FFFFFF66]'>
							{t('profile')}
						</Link>
						<Link
							href='/security'
							className='text-[18px] dark:text-[#FFFFFF66]'
						>
							{t('security')}
						</Link>
						<Link href='/verify' className='text-[18px] dark:text-[#FFFFFF66]'>
							{t('verification')}
						</Link>
						<Link href='/devices' className='text-[18px] dark:text-[#FFFFFF66]'>
							{t('authDev')}
						</Link>
					</div>

					<div className='flex flex-col items-start gap-[15px]'>
						<h5 className='text-[25px] font-semibold dark:text-[#EFEFEF] mb-[5px]'>
							{t('assets')}
						</h5>
						<Link href='/deposit' className='text-[18px] dark:text-[#FFFFFF66]'>
							{t('deposit')}
						</Link>
						<Link
							href='#'
							className='text-[18px] dark:text-[#FFFFFF66] lock-btn flex items-center gap-[5px]'
						>
							{t('swap')}{' '}
							<SecIcon cls='lock min-w-[20px]' />
						</Link>
						<Link
							href='/withdrawal'
							className='text-[18px] dark:text-[#FFFFFF66]'
						>
							{t('withdrawal')}
						</Link>
						<Link
							href='/activity'
							className='text-[18px] dark:text-[#FFFFFF66]'
						>
							{t('levels')}
						</Link>
					</div>

					<div className='flex flex-col items-start gap-[15px]'>
						<h5 className='text-[25px] font-semibold dark:text-[#EFEFEF] mb-[5px]'>
							{t('investment')}
						</h5>
						<span className='text-[18px] dark:text-[#FFFFFF66] hover:cursor-pointer'>
							Company Stocks
						</span>
						<span className='text-[18px] dark:text-[#FFFFFF66] hover:cursor-pointer'>
							Corporate Bonds
						</span>
						<span className='text-[18px] dark:text-[#FFFFFF66] hover:cursor-pointer'>
							Oil Sector
						</span>
						<span className='text-[18px] dark:text-[#FFFFFF66] hover:cursor-pointer'>
							Precious Metals Level
						</span>
					</div>

					<div className='flex flex-col items-start gap-[15px] '>
						<h5 className='text-[25px] font-semibold dark:text-[#EFEFEF] mb-[5px]'>
							{t('more')}
						</h5>
						<span className='text-[18px] dark:text-[#FFFFFF66] hover:cursor-pointer'>
							{t('supCenter')}
						</span>
						<span className='text-[18px] dark:text-[#FFFFFF66] lock-btn flex items-center gap-[5px] hover:cursor-pointer'>
							{t('token')}{' '}
							<SecIcon cls='lock min-w-[20px]' />
						</span>
						<span className='text-[18px] dark:text-[#FFFFFF66] hover:cursor-pointer'>
							{t('history')}
						</span>
						<span className='text-[18px] dark:text-[#FFFFFF66] hover:cursor-pointer'>
							{t('faq')}
						</span>
					</div>

					<div className='flex flex-col items-center gap-[15px]'>
						<Image
							src={'/footer/qr code.svg'}
							width={137}
							height={137}
							alt='icon qr footer'
						/>
						<span className='text-[18px] dark:text-[#EFEFEF] text-center'>
							{t('scan')}
						</span>
					</div>
				</div>

				<div className='flex flex-col gap-[30px] lg:flex-row xl:items-center lg:items-start justify-center w-full'>
					<div className='flex items-start gap-[18px] lg:flex-col xl:flex-row'>
						<h5 className='text-[25px] dark:text-[#EFEFEF] font-semibold'>
							{t('comm')}
						</h5>
						<div className='flex items-center gap-[8px]'>
						<Image
								width={40}
								height={40}
								alt='social icon'
								src={`/footer/soc/inst.svg`}
							/>
							<Image
								width={40}
								height={40}
								alt='social icon'
								src={`/footer/soc/face.svg`}
							/>
							<Image
								width={40}
								height={40}
								alt='social icon'
								src={`/footer/soc/twitt.svg`}
							/>
							<Image
								width={40}
								height={40}
								alt='social icon'
								src={`/footer/soc/teleg.svg`}
							/>
							<Image
								width={40}
								height={40}
								alt='social icon'
								src={`/footer/soc/snap.svg`}
							/>
						</div>
					</div>

					<div className='flex items-center justify-end w-full xl:w-fit gap-[10px]'>
						<TermsModal />
						<PolicyModal />
						<SecPolicyModal />
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
						<div className='bg-transparent text-[18px] w-full flex items-center gap-[10px]'>
							<LangSwitch
								title={t('lang')}
								cls={
									'bg-transparent text-[18px] w-full focus-visible:!outline-none'
								}
							/>
							{/* <span>{t('lang')}</span> */}
						</div>
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

				<div className='flex flex-col pb-[2.8rem] gap-[32px] items-center w-full'>
					<div className='flex flex-col items-center gap-[8px]'>
						<h5 className='text-[25px] dark:text-[#EFEFEF] font-semibold'>
							{t('comm')}
						</h5>
						<div className='flex items-center gap-[8px]'>
							<Image
								width={40}
								height={40}
								alt='social icon'
								src={`/footer/soc/inst.svg`}
							/>
							<Image
								width={40}
								height={40}
								alt='social icon'
								src={`/footer/soc/face.svg`}
							/>
							<Image
								width={40}
								height={40}
								alt='social icon'
								src={`/footer/soc/twitt.svg`}
							/>
							<Image
								width={40}
								height={40}
								alt='social icon'
								src={`/footer/soc/teleg.svg`}
							/>
							<Image
								width={40}
								height={40}
								alt='social icon'
								src={`/footer/soc/snap.svg`}
							/>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
