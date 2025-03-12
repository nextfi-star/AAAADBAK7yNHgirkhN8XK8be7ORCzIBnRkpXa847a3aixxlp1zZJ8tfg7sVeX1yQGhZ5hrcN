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

export function SecPolicyModal() {
	const t = useTranslations('activity')
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button className='p-0 text-[18px] bg-transparent hover:bg-transparent flex-shrink-0 dark:text-[#FFFFFF66] hover:cursor-pointer shadow-none'>
					Security & Compliance Policy
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
						Security & Compliance Policy
					</AlertDialogTitle>
				</AlertDialogHeader>
				<div className='flex flex-col gap-4'>
					<div className='flex flex-col gap-[.5rem]'>
						<p>Introduction</p>
						<span>
							• NextFi is committed to the highest standards of cybersecurity
							and regulatory compliance.
						</span>
						<span>
							• We comply with AML (Anti-Money Laundering), KYC (Know Your
							Customer), GDPR, CCPA, PDPL, and other global regulations.
						</span>
					</div>
					<div className='flex flex-col gap-[.5rem]'>
						<p>Cybersecurity Measures</p>
						<p>• Data Encryption:</p>
						<span>o AES-256 encryption for stored user data.</span>
						<span>o TLS 1.3 encryption for data transmission.</span>
						<p>• Authentication & Access Contro:</p>
						<span>o Mandatory two-factor authentication (2FA)</span>
						<span>o Automated brute-force attack protection.</span>
						<p>• Fraud Detection & Monitoring</p>
						<span>
							o AI-driven transaction monitoring for suspicious activities.
						</span>
						<span>
							o User activity segmentation to prevent unauthorized access.
						</span>
					</div>
					<div className='flex flex-col gap-[.5rem]'>
						<p>AML/KYC Compliance</p>
						<p>• Mandatory Identity Verification:</p>
						<span>
							o Users must submit a government-issued ID and live verification.
						</span>
						<p>• Mandatory Identity Verification:</p>
						<span>
							o Transactions exceeding risk limits require additional
							verification.
						</span>
						<p>• International Compliance:</p>
						<span>
							o NextFi adheres to sanction lists (OFAC, FATF, and global
							financial crime databases).
						</span>
					</div>
					<div className='flex flex-col gap-[.5rem]'>
						<p>Data Protection & Storage</p>
						<span>• ISO 27001, SOC 2-certified data centers.</span>
						<span>
							• Hybrid storage model (on-premises & cloud-based for redundancy).
						</span>
						<span>
							• 5-year minimum data retention for regulatory compliance.
						</span>
					</div>
					<div className='flex flex-col gap-[.5rem]'>
						<p>Incident Response & Data Breach Policy</p>
						<span>
							• 72-hour breach notification policy for affected users.
						</span>
						<span>
							• Immediate security audit & response protocol in case of a
							cyberattack.
						</span>
						<span>• DDoS protection using Cloudflare & AWS Shield.</span>
					</div>
					<div className='flex flex-col gap-[.5rem]'>
						<p>Government & Law Enforcement Compliance</p>
						<span>
							• NextFi may provide user data only under a valid legal request.
						</span>
						<span>
							• Cross-border cooperation with regulatory authorities in the EU,
							US, UAE, and CIS.
						</span>
					</div>
					<div className='flex flex-col gap-[.5rem]'>
						<p>User Responsibilities</p>
						<p>• Users must</p>
						<span>• Use strong passwords and enable 2FA.</span>
						<span>• Avoid sharing account details with third parties.</span>
						<span>• Report suspicious activity immediately</span>
					</div>
					<div className='flex flex-col gap-[.5rem]'>
						<p>Updates to Security & Compliance Policy</p>
						<span>• NextFi will notify users of security policy changes.</span>
					</div>
					<div className='flex flex-col gap-[.5rem]'>
						<p>Contact Information</p>
						<span>
							• Privacy Officer Contact:{' '}
							<span className='text-[#205bc9]'>technicalNextfi@gmail.com</span>
						</span>
					</div>
					<div className='w-full flex justify-center'>
				<AlertDialogCancel
					asChild
					className='text-black dark:text-white bg-transparent text-[14px] md:text-[18px] border-none shadow-none hover:bg-transparent p-0 items-center m-0 my-[3.5rem] w-full'
				>
					<Button className='p-0 text-[20px] outline outline-1 rounded-[40px] px-[1.5rem] outline-white bg-transparent hover:bg-transparent flex-shrink-0 dark:text-[#FFFFFF66] hover:cursor-pointer shadow-none max-w-[150px]'
					>
						Close
					</Button>
				</AlertDialogCancel>
				</div>
				</div>
			</AlertDialogContent>
		</AlertDialog>
	)
}
