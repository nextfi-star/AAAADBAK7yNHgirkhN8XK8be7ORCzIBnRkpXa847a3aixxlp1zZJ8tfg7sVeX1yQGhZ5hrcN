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

export function TermsModal() {
	const t = useTranslations('activity')
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button className='p-0 text-[14px] bg-transparent hover:bg-transparent flex-shrink-0 dark:text-[#FFFFFF66] hover:cursor-pointer shadow-none'>
					Terms of Service
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
						Terms of Service
					</AlertDialogTitle>
				</AlertDialogHeader>
				<div className='flex flex-col gap-4'>
					<div className='flex flex-col gap-[.5rem]'>
						<p>Introduction</p>
						<span>
							• Agreement to Terms: By using NextFi, you agree to abide by these
							Terms of Service.
						</span>
						<span>
							• Updates & Changes: NextFi may modify these Terms at any time,
							with notifications to users.
						</span>
					</div>
					<div className='flex flex-col gap-[.5rem]'>
						<p>Account Registration & KYC Compliance</p>
						<span>
							• Users must be 18+ and complete identity verification (KYC)
							before engaging in transactions:
						</span>
						<span>
							• Identity verification includes passport submission and live
							video confirmation.
						</span>
					</div>
					<div className='flex flex-col gap-[.5rem]'>
						<p>Financial Transactions & Fees</p>
						
						<span>• Transaction fees apply and vary by payment method.</span>
					</div>
					<div className='flex flex-col gap-[.5rem]'>
						<p>Acceptable Use Policy</p>
						<p>Users may not engage in:</p>
						<span>o Fraudulent activities or money laundering.</span>
						<span>o Unauthorized access to accounts.</span>
						<span>o Automated bots/scripts for platform manipulation.</span>
					</div>
					<div className='flex flex-col gap-[.5rem]'>
						<p>Risk Disclosure & Platform Liability</p>
						<span>• Investing in financial assets involves market risks.</span>
						<span>
							• NextFi does not guarantee profits and is not liable for
							financial losses due to market fluctuations.
						</span>
					</div>
					<div className='flex flex-col gap-[.5rem]'>
						<p>Account Suspension & Termination:</p>
						<span>
							• NextFi reserves the right to suspend or terminate accounts
							involved in suspicious or prohibited activities.
						</span>
						<span>
							• Users will receive prior notice unless the termination is due to
							legal obligations.
						</span>
					</div>
					<div className='flex flex-col gap-[.5rem]'>
						<p>Intellectual Property Rights</p>
						<span>
							• All NextFi trademarks, logos, and content are the property of
							NextFi.
						</span>
						<span>
							• Users may not reproduce, distribute, or exploit any part of the
							platform without authorization.
						</span>
					</div>
					<div className='flex flex-col gap-[.5rem]'>
						<p>Governing Law & Dispute Resolution</p>
						<span>• These Terms are governed by the laws of Malta.</span>
						<span>
							• Disputes shall be resolved through arbitration or legal
							proceedings in the relevant jurisdiction.
						</span>
					</div>
					<div className='flex flex-col gap-[.5rem]'>
						<p>Changes to Terms of Service</p>
						<span>
							• Users will be notified of changes through email and platform
							announcements
						</span>
					</div>
					<div className='flex flex-col gap-[.5rem]'>
						<p>Contact Information</p>
						<span>Users can:</span>
						<span className='flex items-center gap-[10px]'>
							• Support Contact:{' '}
							<span className='text-[#205bc9]'>technicalNextfi@gmail.com</span>
						</span>
					</div>
				</div>
				<div className='w-full flex justify-center'>
					<AlertDialogCancel
						asChild
						className='text-black dark:text-white bg-transparent text-[14px] md:text-[18px] border-none shadow-none hover:bg-transparent p-0 items-center m-0 my-[3.5rem] w-full'
					>
						<Button
							className='p-0 text-[20px] outline outline-1 rounded-[40px] px-[1.5rem] outline-white bg-transparent hover:bg-transparent flex-shrink-0 dark:text-[#FFFFFF66] hover:cursor-pointer shadow-none max-w-[150px]'
						>
							Close
						</Button>
					</AlertDialogCancel>
				</div>
			</AlertDialogContent>
		</AlertDialog>
	)
}
