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
import { useThemeStore } from '@/store/useChatStore'
import { Divider } from '@heroui/divider'
import { Spinner } from '@heroui/react'
import { Cross2Icon } from '@radix-ui/react-icons'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import Withdrawal_animation from './Withdrawal_animation'
import { Coin } from '@/store/coinList'
import { createWithdraw } from '@/utils/api'
import { useUserStore } from '@/hooks/useUserData'
import { useWithdrawStore } from '@/store/useWithdrawalStore'

interface Props {
	titleTrigger: string
	setInputStep2: (val: string) => void
	inputStep2: string
	selectedCoin: Coin | null
	selectedNetwork: string | null
	className?: string
	amount: string
	setAmount: (val: string) => void
	depositAddress: string
	isValidAmount: () => boolean
}
export const Withdrawal_confirmation = ({
	className,
	titleTrigger,
	setInputStep2,
	inputStep2,
	selectedCoin,
	selectedNetwork,
	amount,
	setAmount,
	depositAddress,
	isValidAmount,
}: Props) => {
	const t = useTranslations('withdrawal')
	const { theme, confirmationStep, setConfirmStep, setStep } = useThemeStore()
	const backUpdate = useWithdrawStore(state => state.fetchWithdrawList)
	const [checked, setChecked] = useState(false)
	const [message, setMessage] = useState('')
	const csrf = useUserStore(state => state.user?.csrf)
	const handleSubmit = async (e: any) => {
		e.preventDefault()
		const amountStr = amount.toString()
		const result = await createWithdraw(
			csrf,
			selectedCoin?.name || '',
			amountStr,
			depositAddress || '0x627390cc319e1a61d6c3a9c7cbdfa9c85740bf89',
			selectedNetwork || 'ERC20',
			inputStep2
		)
		if (result.data) {
			setMessage(result.message || 'Заявка успешно создана')
			setConfirmStep(3)
			setChecked(false)
			setMessage('')
		} else {
			setConfirmStep(1)
			setChecked(false)
			setMessage(result.message)
		}
	}
	const DropSteps = () => {
		setStep(1)
		setConfirmStep(1)
		setChecked(false)
		setInputStep2('')
		setAmount('')
	}
	return (
		<Dialog>
			<DialogTrigger asChild className='!hover:bg-[#205BC9]'>
				<Button
					className={`text-[16px] xl:text-[20px] flex items-center justify-center w-[156px] h-[44px] !py-[8px] hover:!bg-[#205BC9] text-white rounded-[50px] ${isValidAmount() ? '!bg-[#205BC9] text-[#ffffff]' : 'bg-[#7676801F] text-[#888888]'} ${className}`}
					disabled={!isValidAmount()}
				>
					{titleTrigger}
				</Button>
			</DialogTrigger>

			{confirmationStep === 1 && (
				<DialogContent className='max-w-[90%] md:max-w-[36rem] w-full p-0 rounded-[20px]'>
					<DialogHeader>
						<DialogTitle className='text-[25px] md:text-[32px] p-[20px_41px_19px] flex items-center justify-between w-full'>
							{t('ConfirmToWithdraw')}
							<DialogClose asChild>
								<Cross2Icon className='h-[32px] w-[32px]' />
							</DialogClose>
						</DialogTitle>
						<Divider className='m-0 space-0' />
						<div className='p-[21px] flex flex-col gap-[28px]'>
							<article className='dark:bg-[#7676801F] rounded-[6px] flex flex-col gap-[28px] py-[21px] px-[18px] md:px-[21px]'>
								<div className='flex items-center w-full justify-between overflow-hidden gap-[4]'>
									<DialogDescription className='flex flex-col gap-[1px] text-[14px] md:text-[20px]'>
										{t('onChain')} <span>{t('onChainWith')}</span>
									</DialogDescription>

									<DialogDescription className='flex items-center justify-end gap-[1px] md:gap-[16px] dark:text-white text-[12px] md:text-[20px] w-full '>
										<span className='p-[5px] text-white bg-[#205BC9] rounded-[4px] ]'>
											{selectedCoin?.name || <Spinner />}
										</span>
									</DialogDescription>

									<div className='max-w-[300px] break-words hyphens-auto ml-[10px]'>
										<span className='block'>
											{depositAddress || 'none'}
										</span>
									</div>
								</div>
								<div className='flex items-center w-full justify-between'>
									<DialogDescription className='flex flex-col gap-[1px] text-[14px] md:text-[20px]'>
										{t('actualAmount')} <span>{t('received')}</span>
									</DialogDescription>

									<DialogDescription className='flex items-center gap-[4px] dark:text-white text-[14px] md:text-[20px]'>
										{amount} {selectedCoin?.name}
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
										{t('confirmWith')}
									</DialogDescription>
								</label>
							</div>
						</div>
					</DialogHeader>
					<Divider className='m-0' />
					<DialogFooter className='flex flex-row justify-center items-center gap-[15px] p-[30px_40px]'>
						{message && (
							<p className='text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] text-danger-500 leading-[1] w-full text-center'>
								{message}
							</p>
						)}
						<DialogClose asChild>
							<Button
								type='button'
								variant='secondary'
								className={`border-1 w-fit border-solid dark:border-[#fff] rounded-[50px] bg-transparent hover:bg-transparent min-w-[124px]`}
							>
								{t('close')}
							</Button>
						</DialogClose>
						<Button
							onClick={handleSubmit}
							type='button'
							variant='secondary'
							className='bg-[#205BC9] text-white w-fit rounded-[50px] hover:bg-[#205BC9] min-w-[124px]'
							disabled={!checked}
						>
							{t('contin')}
						</Button>
					</DialogFooter>
				</DialogContent>
			)}

			{/* {confirmationStep === 2 && (
				<DialogContent className='max-w-[90%] md:max-w-[38rem]  w-full p-0 rounded-[20px]'>
					<DialogHeader>
						<DialogTitle className='text-[25px] md:text-[32px] p-[20px_41px_19px] flex items-center justify-between w-full'>
							{t('secverif')}
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
												{t('verifCode')} asdadasd@mail.ru
											</DialogDescription>
										</div>
										<div className='relative w-full'>
											<input
												type='text'
												placeholder='Please enter the email verification'
												className='text-[16px] bg-[#7676801F] rounded-[20px] h-[50px] px-[15px] w-full'
											/>
											<p className='text-[#205BC9] font-bold text-[16px] absolute top-[13px] right-[17px]'>
												{t('sendCode')}
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
												{t('2fa')}
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
							{t('comfirm')}
						</Button>
					</DialogFooter>
				</DialogContent>
			)} */}

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
								<div className='absolute left-[50%] -top-[59%] md:-top-[84%] translate-x-[-50%]'>
									<Withdrawal_animation />
								</div>
								<DialogDescription className='text-[25px] font-bold dark:text-white text-[#0c0c0c] min-h-[150px] w-full flex flex-col justify-end items-center'>
									{t('withApp')}
								</DialogDescription>
							</article>
						</div>
					</DialogHeader>
					<Divider className='m-0' />
					<DialogFooter className='flex sm:justify-center items-center gap-[15px] p-[30px_40px]'>
						<DialogClose asChild>
							<Button
								onClick={() => setConfirmStep(1)}
								type='button'
								variant='secondary'
								className='bg-[#205BC9] w-full text-white rounded-[50px] hover:bg-[#205BC9] max-w-[124px] h-[48px] relative'
							>
								{t('comfirm')}
							</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			)}
		</Dialog>
	)
}
