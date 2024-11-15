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
import Withdrawal_animation from './Withdrawal_animation'
import { Cross2Icon } from '@radix-ui/react-icons'

interface Props {
	titleTrigger: string
}
export const Swap_confirmation: NextPage<Props> = ({ titleTrigger }) => {
	const {
		theme,
		confirmationStep,
		setConfirmStep,
		setStep,
		swapPoppover_1,
		swapPoppover_2,
		swapCheck,
		swapCheck2,
	} = useThemeStore()
	const DropSteps = () => {
		setStep(1)
		setConfirmStep(1)
		swapCheck('')
		swapCheck2('')
	}
	return (
		<Dialog>
			<DialogTrigger asChild className='!hover:bg-[#205BC9]'>
				<Button
					className={`rounded-[50px] text-[#888888] text-[24px] w-full max-w-[124px] md:max-w-[707px] !py-[8px] h-fit ${!swapPoppover_1 || !swapPoppover_2 ? 'bg-[#7676801F]' : 'bg-[#205BC9] text-white'}`}
					disabled={!swapPoppover_1 || !swapPoppover_2}
				>
					{titleTrigger}
				</Button>
			</DialogTrigger>
			{confirmationStep === 1 && (
				<DialogContent className='max-w-[24rem] md:max-w-[90%] xl:max-w-[60%] w-full p-0 rounded-[20px]'>
					<DialogHeader>
						<DialogTitle className='text-[25px] md:text-[32px] p-[20px_41px_19px] flex items-center justify-between w-full'>
							Confirm to Swap
							<DialogClose asChild>
								<Cross2Icon className='h-[32px] w-[32px]' />
							</DialogClose>
						</DialogTitle>
						<Divider className='m-0' />
						<div className='p-[21px] flex flex-col gap-[28px]'>
							<article className='dark:bg-[#7676801F] rounded-[6px] flex flex-col gap-[28px] p-[21px]'>
								<div className='flex items-center w-full justify-between'>
									<DialogDescription>Convert from</DialogDescription>

									<DialogDescription>100.486 TRX</DialogDescription>
								</div>
								<div className='flex items-center w-full justify-between'>
									<DialogDescription>Convert to</DialogDescription>
									<DialogDescription>100.486 USDT</DialogDescription>
								</div>
							</article>
							<div className='privacy max-w-[921px] flex flex-col 	 justify-center'>
								<label
									className='checkbox-label gap-[5px] md:gap-[18px] !items-center md:items-center'
									htmlFor='checkbox-confirm'
								>
									<input
										className='checkbox'
										id='checkbox-confirm'
										type='checkbox'
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
										Show zero balances
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
								className='border-1 w-fit border-solid border-[#fff] rounded-[50px] bg-transparent hover:bg-transparent min-w-[124px]'
							>
								Close
							</Button>
						</DialogClose>
						<Button
							onClick={() => setConfirmStep(2)}
							type='button'
							variant='secondary'
							className='bg-[#205BC9] w-fit rounded-[50px] hover:bg-[#205BC9] min-w-[124px]'
						>
							Continue
						</Button>
					</DialogFooter>
				</DialogContent>
			)}
			{confirmationStep === 2 && (
				<DialogContent className='max-w-[24rem] md:max-w-3xl w-full rounded-[20px] p-0'>
					<DialogHeader>
						<DialogTitle className='text-[32px] min-h-[96px] opacity-0 pointer-events-none'></DialogTitle>
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
					<DialogFooter className='flex !flex-col items-center justify-start p-[30px_40px]'>
						<DialogClose asChild>
							<Button
								onClick={DropSteps}
								type='button'
								variant='secondary'
								className='bg-[#205BC9] rounded-[50px] hover:bg-[#205BC9] min-w-[124px]'
							>
								Confirm
							</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			)}
		</Dialog>
	)
}
