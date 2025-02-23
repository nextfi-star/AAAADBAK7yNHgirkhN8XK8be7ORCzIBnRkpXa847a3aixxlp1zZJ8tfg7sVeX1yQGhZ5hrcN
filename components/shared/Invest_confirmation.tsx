import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { useThemeStore } from '@/store'
import { Divider } from "@heroui/divider"
import { NextPage } from 'next'
import { Cross2Icon } from '@radix-ui/react-icons'
import { Image } from "@heroui/react"
import { useState } from 'react'
import Withdrawal_animation from './Withdrawal_animation'
import { InvestData } from './Invest_steps'
import { Checkbox } from './Checkbox'

interface Props {
	titleTrigger: string
	input3: string
	setInput3: (val: string) => void
	selectedInvest: InvestData | null
	setSelectedInvest: (val: null) => void
	setInputStep2: (val: string) => void
	className?: string
}
export const Invest_confirmation: NextPage<Props> = ({
	className,
	titleTrigger,
	input3,
	setInput3,
	setInputStep2,
	selectedInvest,
	setSelectedInvest,
}) => {
	const { confirmationStep, setConfirmStep, setStep, setGlboalCompany, setGlboalCompanyIcon, setGlobalPeriod } = useThemeStore()
	const [checked, setChecked] = useState(false)
	const DropSteps = () => {
		setStep(1)
		setConfirmStep(1)
		setChecked(false)
		setInput3('')
		setSelectedInvest(null)
		setInputStep2('')
		setGlboalCompany(null)
		setGlboalCompanyIcon(null)
		setGlobalPeriod(null)
	}
	return (
		<Dialog>
			<DialogTrigger asChild className='!hover:bg-[#205BC9]'>
				<Button
					className={`text-[16px] xl:text-[20px] flex items-center justify-center w-[156px] h-[52px] !py-[8px] hover:!bg-[#205BC9] rounded-[50px] ${input3.length > 3 ? '!bg-[#205BC9] text-[#EFEFEF]' : 'bg-[#7676801F] text-[#888888]'} ${className}`}
					disabled={input3.length <= 3}
				>
					{titleTrigger}
				</Button>
			</DialogTrigger>

			{confirmationStep === 1 && (
				<DialogContent className='max-w-[90%] md:max-w-[38rem] w-full p-0 rounded-[20px]'>
					<DialogHeader>
						<DialogTitle className='text-[25px] md:text-[32px] p-[20px_41px_19px] flex items-center justify-between w-full'>
							Confirm to invest
							<DialogClose asChild>
								<Cross2Icon className='h-[32px] w-[32px]' />
							</DialogClose>
						</DialogTitle>
						<Divider className='m-0 space-0' />
						<div className='p-[21px] flex flex-col gap-[28px]'>
							<article className='dark:bg-[#7676801F] rounded-[6px] flex flex-col gap-[28px] py-[21px] px-[18px] md:px-[21px]'>
								<div className='flex items-center w-full justify-between overflow-hidden'>
									<DialogDescription className='flex flex-col gap-[1px] text-[14px] md:text-[20px]'>
										On-Chain <span>Withdrawal</span>
									</DialogDescription>

									<DialogDescription className='flex items-center justify-end gap-[1px] md:gap-[16px] dark:text-white text-[12px] md:text-[20px] w-full '>
										<span className='p-[5px] text-white bg-[#205BC9] rounded-[4px] ]'>
											TRC20
										</span>
										QnC4Nssok2bb3l0Iue1Own
									</DialogDescription>
								</div>
								<div className='flex items-center w-full justify-between'>
									<DialogDescription className='flex flex-col gap-[1px] text-[14px] md:text-[20px]'>
										Actual Amount <span>Received</span>
									</DialogDescription>

									<DialogDescription className='flex items-center gap-[4px] dark:text-white text-[14px] md:text-[20px]'>
										112.720 {selectedInvest?.name} (Fee: 10
										{selectedInvest?.name})
									</DialogDescription>
								</div>
							</article>
							<Checkbox
								forBox='confirm'
								content='I confirm the withdrawal of funds to the address'
							/>
						</div>
					</DialogHeader>
					<Divider className='m-0' />
					<DialogFooter className='flex flex-row justify-center items-center gap-[15px] p-[30px_40px]'>
						<DialogClose asChild>
							<Button
								type='button'
								variant='secondary'
								className={`border-1 w-fit border-solid dark:border-[#fff] rounded-[50px] bg-transparent hover:bg-transparent min-w-[124px]`}
							>
								Close
							</Button>
						</DialogClose>
						<Button
							onClick={() => setConfirmStep(2)}
							type='button'
							variant='secondary'
							className='bg-[#205BC9] text-white w-fit rounded-[50px] hover:bg-[#205BC9] min-w-[124px]'
						>
							Continue
						</Button>
					</DialogFooter>
				</DialogContent>
			)}

			{confirmationStep === 2 && (
				<DialogContent className='max-w-[90%] md:max-w-[38rem]  w-full p-0 rounded-[20px]'>
					<DialogHeader>
						<DialogTitle className='text-[25px] md:text-[32px] p-[20px_41px_19px] flex items-center justify-between w-full'>
							Security Verification
							<DialogClose asChild>
								<Cross2Icon className='h-[32px] w-[32px]' />
							</DialogClose>
						</DialogTitle>
						<Divider className='m-0' />
						<div className='p-[21px] flex flex-col gap-[28px]'>
							<article className='rounded-[6px] flex flex-col gap-[28px] py-[21px]'>
								<div className='flex flex-col gap-[36px]'>
									<label className='flex flex-col gap-[8px]'>
										<div className='flex items-start gap-[10px]'>
											<Image
												src={'/main/withdraw_confirmation/mail.svg'}
												className='min-w-[28px] rounded-none'
											/>
											<DialogDescription className='text-[20px] text-[#888888]'>
												A verification code will be sent to asdadasd@mail.ru
											</DialogDescription>
										</div>
										<div className='relative w-full'>
											<input
												type='text'
												placeholder='Please enter the email verification'
												className='text-[16px] bg-[#7676801F] rounded-[20px] h-[50px] px-[15px] w-full'
											/>
											<p className='text-[#205BC9] font-bold text-[16px] absolute top-[13px] right-[17px]'>
												Send verification code
											</p>
										</div>
									</label>
									<label className='flex flex-col gap-[8px]'>
										<div className='flex items-start gap-[10px]'>
											<Image
												src={'/main/withdraw_confirmation/google.svg'}
												className='min-w-[28px] rounded-none'
											/>
											<DialogDescription className='text-[20px] text-[#888888]'>
												Google 2FA Code
											</DialogDescription>
										</div>
										<input
											type='text'
											placeholder='Please enter the Google Aunteficator code'
											className='text-[16px] bg-[#7676801F] rounded-[20px] h-[50px] px-[15px]'
										/>
									</label>
								</div>
							</article>
						</div>
					</DialogHeader>
					<Divider className='m-0' />
					<DialogFooter className='flex flex-row justify-center items-center gap-[15px] p-[30px_40px]'>
						<Button
							onClick={() => setConfirmStep(3)}
							type='button'
							variant='secondary'
							className='bg-[#205BC9] w-full text-white rounded-[50px] hover:bg-[#205BC9] min-w-[124px] h-[48px] flex items-center justify-center'
						>
							Confrim
						</Button>
					</DialogFooter>
				</DialogContent>
			)}

			{confirmationStep === 3 && (
				<DialogContent className='max-w-[90%] md:max-w-[576px] w-full p-0 rounded-[20px]'>
					<DialogHeader>
						<DialogTitle className='text-[25px] md:text-[32px] p-[20px_41px_19px] flex items-center justify-between w-full'>
							<DialogClose asChild>
								<Cross2Icon className='h-[32px] w-[32px] pointer-events-none opacity-0' />
							</DialogClose>
						</DialogTitle>
						<Divider className='m-0' />
						<div className='p-[21px] flex flex-col gap-[28px]'>
							<article className='relative rounded-[6px] flex flex-col items-center justify-end p-[21px__21px__0__21px]'>
								<div className='absolute left-[50%] -top-[46%] md:-top-[84%] translate-x-[-50%]'>
									<Withdrawal_animation />
								</div>
								<DialogDescription className='text-[25px] font-bold dark:text-white text-[#0c0c0c] min-h-[150px] w-full flex flex-col justify-end items-center'>
									Withdrawal Application Submitetted
								</DialogDescription>
							</article>
						</div>
					</DialogHeader>
					<Divider className='m-0' />
					<DialogFooter className='flex sm:justify-center items-center gap-[15px] p-[30px_40px]'>
						<DialogClose asChild>
							<Button
								onClick={DropSteps}
								type='button'
								variant='secondary'
								className='bg-[#205BC9] w-full text-white rounded-[50px] hover:bg-[#205BC9] max-w-[124px] h-[48px] relative'
							>
								Confrim
							</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			)}
		</Dialog>
	)
}
