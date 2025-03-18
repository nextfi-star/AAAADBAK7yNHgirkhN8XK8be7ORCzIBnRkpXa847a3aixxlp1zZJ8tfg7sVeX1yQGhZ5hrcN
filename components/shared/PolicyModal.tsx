import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import ArrowBracket from '../ui/ArrowBracket'

export function PolicyModal() {
	const t = useTranslations('activity')
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button className='p-0 text-[18px] bg-transparent hover:bg-transparent flex-shrink-0 dark:text-[#FFFFFF66] text-black hover:cursor-pointer shadow-none'>
					Privacy Policy
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent className='max-w-[1200px] px-[1rem] m-auto overflow-y-auto pb-[5.5rem] !top-[1px] sm:!top-[176px] md:!top-[176px]'>
				<AlertDialogHeader className=''>
					<AlertDialogTitle className='w-full border-transparent border-b-1 border-solid border-b-gray-400 pb-[20px] text-[12px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-left flex items-center gap-[10px] mb-[10px]'>
						<span className='text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] text-[#888888] flex items-center gap-[15px]'>
							<AlertDialogCancel className='text-black dark:text-white bg-transparent text-[14px] md:text-[18px] border-none shadow-none hover:bg-transparent p-0 items-center m-0'>
								<ArrowBracket
									className={'rotate-90'}
									color={'currentColor'}
									height={25}
									width={25}
								/>
							</AlertDialogCancel>
						</span>{' '}
					</AlertDialogTitle>
				</AlertDialogHeader>
				<AlertDialogHeader className='flex flex-col items-center gap-[10px] py-4'>
					<AlertDialogTitle className='text-[24px] xl:text-[32px]'>
						Privacy Policy
					</AlertDialogTitle>
				</AlertDialogHeader>
				<div className='flex flex-col gap-8'>
					<div className='flex flex-col gap-[1rem]'>
						<p className='text-lg font-semibold text-[24px] xl:text-[32px]'>Introduction</p>
						<span className='text-[18px] xl:text-[24px] text-sm text-muted-foreground'>
							• Company Information: NextFi is committed to safeguarding user
							privacy and data security.
						</span>
						<span className='text-[18px] xl:text-[24px] text-sm text-muted-foreground leading-[1.5]'>
							• Purpose of this Policy: This Privacy Policy explains how we
							collect, use, and protect user data in compliance with GDPR (EU),
							CCPA (California), PDPL (UAE), and other applicable laws.
						</span>
					</div>
					<div className='flex flex-col gap-[1rem]'>
						<p className='text-lg font-semibold text-[24px] xl:text-[32px]'>Information We Collect</p>
						<span className='text-[18px] xl:text-[24px] text-sm text-muted-foreground'>• Personal Identification Data:</span>
						<span className='text-[18px] xl:text-[24px] text-sm text-muted-foreground'>
							o Full name, date of birth, passport/government-issued ID.
						</span>
						<span className='text-[18px] xl:text-[24px] text-sm text-muted-foreground'>o Photo/video for identity verification.</span>
					</div>
					<div className='flex flex-col gap-[1rem]'>
						<p className='text-lp font-semibold text-[24px] xl:text-[32px]'>Financial Data:</p>
						<span className='text-[18px] xl:text-[24px] text-sm text-muted-foreground'>o Cryptocurrency transactions.</span>
					</div>
					<div className='flex flex-col gap-[1rem]'>
						<p className='text-lg font-semibold text-[24px] xl:text-[32px]'>Technical and Analytical Data:</p>
						<span className='text-[18px] xl:text-[24px] text-sm text-muted-foreground'>
							o IP address, device type, browser version, operating system.
						</span>
						<span className='text-[18px] xl:text-[24px] text-sm text-muted-foreground'>
							o Login frequency, platform interactions, geographic location.
						</span>
					</div>
					<div className='flex flex-col gap-[1rem]'>
						<p className='text-lg font-semibold text-[24px] xl:text-[32px]'>Marketing & Tracking Data:</p>
						<span className='text-[18px] xl:text-[24px] text-sm text-muted-foreground'>o Cookies, advertising tracking, behavioral analytics.</span>
					</div>
					<div className='flex flex-col gap-[1rem]'>
						<p className='text-lg font-semibold text-[24px] xl:text-[32px]'>How We Use Your Data:</p>
						<span className='text-[18px] xl:text-[24px] text-sm text-muted-foreground'>
							• Account verification and compliance with financial regulations.
						</span>
						<span className='text-[18px] xl:text-[24px] texspan text-muted-foreground'>• Processing transactions and payments.</span>
						<span className='text-[18px] xl:text-[24px] text-sm text-muted-foreground'>• Risk assessment and fraud prevention.</span>
						<span className='text-[18px] xl:text-[24px] text-sm text-muted-foreground'>• Marketing, personalization, and service improvement.</span>
					</div>
					<div className='flex flex-col gap-[1rem]'>
						<p className='text-lg font-semibold text-[24px] xl:text-[32px]'>Legal Basis for Data Processing (GDPR Compliance)</p>
						<span className='text-[18px] xl:text-[24px] text-sm text-muted-foreground'>• Contractual necessity: To provide our services.</span>
						<span className='text-[18px] xl:text-[24px] text-sm text-muted-foreground'>
							• <strong>Legal obligations</strong>: AML/KYC compliance.
						</span>
						<span className='text-[18px] xl:text-[24px] text-sm text-muted-foreground'>
							• <strong>Legitimate interest</strong>: Security, fraud
							prevention.
						</span>
						<span className='text-[18px] xl:text-[24px] text-sm text-muted-foreground'>
							• <strong>User consent</strong>: Marketing and tracking analytics.
						</span>
					</div>
					<div className='flex flex-col gap-[1rem]'>
						<p className='text-lg font-semibold text-[24px] xl:text-[32px]'>Cookies & Tracking Technologies</p>
						<span className='text-[18px] xl:text-[24px] text-sm text-muted-foreground leading-[1.5]'>
							• We use cookies and tracking technologies to enhance user
							experience and improve service functionality.
						</span>
						<span className='text-[18px] xl:text-[24px] text-sm text-muted-foreground leading-[1.5]'>
							• Users can manage cookie preferences via their browser settings.
						</span>
					</div>
					<div className='flex flex-col gap-[1rem]'>
						<p className='text-lg font-semibold text-[24px] xl:text-[32px]'>Data Sharing with Third Parties</p>
						<span className='text-[18px] xl:text-[24px] text-sm text-muted-foreground'>
							• <strong>Identity verification partners</strong> (AML/KYC
							compliance)
						</span>
						<span className='text-[18px] xl:text-[24px] text-sm text-muted-foreground'>
							• <strong>Advertising and analytics partners</strong>
						</span>
					</div>
					<div className='flex flex-col gap-[1rem]'>
						<p className='text-lg font-semibold text-[24px] xl:text-[32px]'>User Rights (GDPR, CCPA, PDPL)</p>
						<span className='text-[18px] xl:text-[24px] text-sm text-muted-foreground'>Users can:</span>
						<span className='text-[18px] xl:text-[24px] text-sm text-muted-foreground'>
							• Request access, correction, or deletion of personal data
						</span>
						<span className='text-[18px] xl:text-[24px] text-sm text-muted-foreground'>• Opt out of marketing communications</span>
						<span className='text-[18px] xl:text-[24px] text-sm text-muted-foreground'>• Withdraw consent for data processing</span>
					</div>
					<div className='flex flex-col gap-[1rem]'>
						<p className='text-lg font-semibold text-[24px] xl:text-[32px]'>Data Security Measures</p>
						<span className='text-[18px] xl:text-[24px] text-sm text-muted-foreground'>Users can:</span>
						<span className='text-[18px] xl:text-[24px] text-sm text-muted-foreground'>
							• <strong>AES-256 encryption</strong> for data storage
						</span>
						<span className='text-[18px] xl:text-[24px] text-sm text-muted-foreground'>
							• <strong>TLS 1.3 encryption</strong> for data transmission
						</span>
						<span>
							• <strong>Multi-factor authentication (2FA)</strong> for account
							protection
						</span>
					</div>
					<div className='flex flex-col gap-[1rem]'>
						<p className='text-lg font-semibold text-[24px] xl:text-[32px]'>International Data Transfers</p>
						<span className='text-[18px] xl:text-[24px] text-sm text-muted-foreground leading-[1.5]'>
							• Data may be transferred to secure data centers across multiple
							jurisdictions in compliance with applicable regulations
						</span>
					</div>
					<div className='flex flex-col gap-[1rem]'>
						<p className='text-lg font-semibold text-[24px] xl:text-[32px]'>Changes to the Privacy Policy</p>
						<span className='text-[18px] xl:text-[24px] text-sm text-muted-foreground'>
							• Users will be notified of any significant changes to this
							Privacy Policy
						</span>
					</div>
					<div className='flex flex-col gap-[1rem] pb-[2.5rem]'>
						<p className='text-lg font-semibold text-[24px] xl:text-[32px]'>Contact Information</p>
						<span className='text-[18px] xl:text-[24px] text-sm text-muted-foreground'>
							• Privacy Officer Contact:{' '}
							<span className='text-[#205bc9]'>technicalNextfi@gmail.com</span>
						</span>
					</div>
					<div className='w-full flex justify-center'>
					<AlertDialogCancel
						asChild
						className='text-black dark:text-white bg-transparent text-[14px] md:text-[18px] border-none shadow-none hover:bg-transparent p-0 items-center m-0 my-[3.5rem] w-full'
					>
						<Button className='p-0 text-[20px] outline outline-1 rounded-[40px] px-[1.5rem] outline-white bg-transparent hover:bg-transparent flex-shrink-0 dark:text-[#FFFFFF66] hover:cursor-pointer shadow-none max-w-[150px] !my-[2.5rem]'>
							Close
						</Button>
					</AlertDialogCancel>
					</div>
				</div>
			</AlertDialogContent>
		</AlertDialog>
	)
}
