import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import ArrowBracket from '../ui/ArrowBracket'

export const ReserveModal = () => {
	const t = useTranslations('activity')
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button
					variant='default'
					className='flex items-center rounded-[50px] text-[20px] xl:text-[27px] font-medium px-[35px] xl:py-[35px] border border-solid dark:border-white border-black'
				>
					Read more
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent className='max-w-[800px] px-[1rem] m-auto overflow-y-auto pb-[5.5rem] !top-[176px]'>
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
						How will the reserve system work in NextFi
					</AlertDialogTitle>
				</AlertDialogHeader>
				<div className='flex flex-col gap-4'>
					<AlertDialogHeader className='flex flex-col items-center gap-[10px] py-4'>
						<AlertDialogTitle className='text-[24px] xl:text-[32px]'>
							1. Investments without risk for the user
						</AlertDialogTitle>
						<p className='text-[18px] xl:text-[24px]'>
							• The user receives a guaranteed income, regardless of the success
							of AI transactions.
						</p>
						<p className='text-[18px] xl:text-[24px]'>
							• If the AI investment is unsuccessful, the losses are covered by
							the NextFi reserve fund.
						</p>
						<p className='text-[18px] xl:text-[24px]'>
							• The user does not learn about specific losses, he just sees how
							his investments bring profit.
						</p>
					</AlertDialogHeader>
					<AlertDialogHeader className='flex flex-col items-center gap-[10px] py-4'>
						<AlertDialogTitle className='text-[24px] xl:text-[32px]'>
							2. How the reserve is formed and replenished
						</AlertDialogTitle>
						<p className='text-[18px] xl:text-[24px]'>
							• The reserve is created at the expense of NextFi's initial
							investments and replenished from operating profit.
						</p>
						<p className='text-[18px] xl:text-[24px]'>
							• We monitor the reserve balance and replenish it, if necessary,
							in order to continue to provide guaranteed income.
						</p>
						<p className='text-[18px] xl:text-[24px]'>
							• On the main page, the public counter of the reserve fund is
							updated once a day, demonstrating its current status.
						</p>
					</AlertDialogHeader>
					<AlertDialogHeader className='flex flex-col items-center gap-[10px] py-4'>
						<AlertDialogTitle className='text-[24px] xl:text-[32px]'>
							3. AI development and risk minimization
						</AlertDialogTitle>
						<p className='text-[18px] xl:text-[24px]'>
							• Each new investment cycle improves the neural network: it
							analyzes successful and unsuccessful transactions, learns and
							becomes more accurate.
						</p>
						<p className='text-[18px] xl:text-[24px]'>
							• Over time, AI will reach a level where errors will be minimized
							and the need to compensate for losses will decrease.Invest
							confidently —AI provides stable income At NextFi, we guarantee
							profit regardless of market fluctuations. You invest, and our
							system takes care of your stability.
						</p>
					</AlertDialogHeader>
					<AlertDialogHeader className='flex flex-col items-center gap-[10px] py-4'>
						<AlertDialogTitle className='text-[24px] xl:text-[32px]'>
							Focus on innovation
						</AlertDialogTitle>
						<p className='text-[18px] xl:text-[24px]'>
							• Our AI doesn't just advise —it makes decisions on its own and
							gets smarter with each new investment session.
						</p>
						<p className='text-[18px] xl:text-[24px]'>
							• Every day our neural network predicts the market more
							accurately, reducing risks to almost zero.
						</p>
					</AlertDialogHeader>
					<AlertDialogHeader className='flex flex-col items-center gap-[10px] py-4'>
						<AlertDialogTitle className='text-[24px] xl:text-[32px]'>
							Maximum trust
						</AlertDialogTitle>
						<p className='text-[18px] xl:text-[24px]'>
							• You don't have to worry about unsuccessful trades —we compensate
							for losses and provide you with income.
						</p>
						<p className='text-[18px] xl:text-[24px]'>
							• NextFi Reserve Fund is a guarantee of your profit. His balance
							is updated daily, and you can always see how secured we are.
						</p>
					</AlertDialogHeader>
					<AlertDialogHeader className='flex flex-col items-center gap-[10px] py-4'>
						<AlertDialogTitle className='text-[24px] xl:text-[32px]'>
							NextFi Exclusivity
						</AlertDialogTitle>
						<p className='text-[18px] xl:text-[24px]'>
							• Unlike other platforms where your investments depend on market
							risks, you are always in the black at NextFi.
						</p>
						<p className='text-[18px] xl:text-[24px]'>
							• It's not just an investment — it's an investment with full
							protection.
						</p>
					</AlertDialogHeader>
					<AlertDialogHeader className='flex flex-col items-center gap-[10px] py-4'>
						<AlertDialogTitle className='text-[24px] xl:text-[32px]'>
							A large-scale goal
						</AlertDialogTitle>
						<p className='text-[18px] xl:text-[24px]'>
							• The more users invest, the faster the AI learns and the more
							accurate it becomes.
						</p>
						<p className='text-[18px] xl:text-[24px]'>
							• You are becoming part of the investment ecosystem of the future.
						</p>
					</AlertDialogHeader>
				</div>
			</AlertDialogContent>
		</AlertDialog>
	)
}
