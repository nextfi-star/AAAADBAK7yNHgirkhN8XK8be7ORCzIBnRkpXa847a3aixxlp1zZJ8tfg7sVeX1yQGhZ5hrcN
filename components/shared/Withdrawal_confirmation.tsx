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
import { Divider } from '@nextui-org/divider'
import { NextPage } from 'next'
import { Cross2Icon } from '@radix-ui/react-icons'
import { Image } from '@nextui-org/react'
import { useState } from 'react'
import Withdrawal_animation from './Withdrawal_animation'

interface Props {
	titleTrigger: string
	input3: string
	setInput3: (val: string) => void
}
export const Withdrawal_confirmation: NextPage<Props> = ({
	titleTrigger,
	input3,
	setInput3,
}) => {
	const { theme, confirmationStep, setConfirmStep, setStep } = useThemeStore()
	const [checked, setChecked] = useState(false)
	const DropSteps = () => {
		setStep(1)
		setConfirmStep(1)
		setChecked(false)
		setInput3('')
	}
	return (
		<Dialog>
			<DialogTrigger asChild className='!hover:bg-[#205BC9]'>
				<Button
					className={`text-[16px] xl:text-[20px] flex items-center justify-center max-w-[108px] px-[40px] xl:px-[80px] hover:!bg-[#205BC9] h-9 xl:h-9 rounded-[50px] ${input3.length > 3 ? '!bg-[#205BC9] text-[#EFEFEF]' : 'bg-[#7676801F] text-[#888888]'}`}
					disabled={input3.length <= 3}
				>
					{titleTrigger}
				</Button>
			</DialogTrigger>

			{confirmationStep === 1 && (
				<DialogContent className='max-w-[90%] md:max-w-[38rem] w-full p-0 rounded-[20px]'>
					<DialogHeader>
						<DialogTitle className='text-[25px] md:text-[32px] p-[20px_41px_19px] flex items-center justify-between w-full'>
							Confirm to Withdraw
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
										112.720 TRX (Fee: 10TRX)
									</DialogDescription>
								</div>
							</article>
							<div className='privacy max-w-[921px] flex flex-col 	 justify-center'>
								<label
									className='checkbox-label gap-[5px] md:gap-[18px] !items-center md:items-center'
									htmlFor='checkbox-privacy'
								>
									<input
										className='checkbox'
										id='checkbox-privacy'
										type='checkbox'
										onChange={() => setChecked(!checked)}
									/>
									<span className='checkbox-view !m-0'>
										<svg
											className='checkbox-icon max-w-[50px] md:max-w-[50px] max-h-[20px] md:max-h-[45px]'
											viewBox='0 0 511.985 511.985'
											width='18'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0-15.862 15.862-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899 10.394 0 20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435z'
												fill={theme === 'dark' ? '#fff' : '#3A3939'}
											/>
										</svg>
									</span>
									<DialogDescription className='text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] text-left text-[#888888] leading-[1]'>
										I confirm the withdrawal of funds to the address
									</DialogDescription>
								</label>
							</div>
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
							disabled={!checked}
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
											<span className='text-[20px] text-[#888888]'>
												A verification code will be sent to asdadasd@mail.ru
											</span>
										</div>
										<input
											type='text'
											placeholder='Please enter the email verification'
											className='text-[16px] bg-[#7676801F] rounded-[20px] h-[50px] px-[15px]'
										/>
									</label>
									<label className='flex flex-col gap-[8px]'>
										<div className='flex items-start gap-[10px]'>
											<Image
												src={'/main/withdraw_confirmation/google.svg'}
												className='min-w-[28px] rounded-none'
											/>
											<span className='text-[20px] text-[#888888]'>
												Google 2FA Code
											</span>
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
				<DialogContent className='max-w-[90%] md:max-w-[38rem]  w-full p-0 rounded-[20px]'>
					<DialogHeader>
						<DialogTitle className='text-[25px] md:text-[32px] p-[20px_41px_19px] flex items-center justify-between w-full'>
							<DialogClose asChild>
								<Cross2Icon className='h-[32px] w-[32px] pointer-events-none opacity-0' />
							</DialogClose>
						</DialogTitle>
						<Divider className='m-0' />
						<div className='p-[21px] flex flex-col gap-[28px]'>
							<article className='relative rounded-[6px] flex flex-col items-center justify-end p-[21px__21px__0__21px]'>
								<div className='absolute left-[50%] top-[-10%] md:top-[-52%] translate-x-[-50%]'>
									<Withdrawal_animation />
								</div>
								<DialogDescription className='text-[32px] font-bold dark:text-white text-[#0c0c0c] min-h-[150px] flex flex-col justify-end'>
									Swap
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
								className='bg-[#205BC9] w-full text-white rounded-[50px] hover:bg-[#205BC9] max-w-[124px] h-[48px]'
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
