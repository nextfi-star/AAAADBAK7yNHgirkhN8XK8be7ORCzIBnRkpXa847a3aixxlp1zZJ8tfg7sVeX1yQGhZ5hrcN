'use client'
import { Swap_confirmation } from '@/components/shared/Swap_confirmation'
import Swap_faq from '@/components/shared/Swap_faq'
import Swap_from from '@/components/shared/Swap_from'
import Swap_To from '@/components/shared/Swap_To'
import { Link } from '@/i18n/routing'
import { useThemeStore } from '@/store'
import { Divider } from '@heroui/divider'
import { Image } from '@heroui/react'
import { ArrowDownUp, ChevronLeft, X } from 'lucide-react'
import { useTranslations } from 'next-intl'

const Swap = () => {
	const t = useTranslations('swap')
	const {
		theme,
		swapPoppover_1,
		swapPoppover_2,
		setReplaceCurrency,
		replaceCurrency,
		setConfirmStep,
		swapCheck,
		swapCheck2,
		setStep,
	} = useThemeStore()
	const DropSteps = () => {
		setStep(1)
		setConfirmStep(1)
		swapCheck('')
		swapCheck2('')
	}
	return (
		<section className='mt-[-7rem] lg:mt-0 flex flex-col gap-[40px] w-full min-h-screen pb-[1.5rem] top-mobile'>
			<article className='md:dark:bg-[#1e1e1e66] md:shadow-medium dark:shadow-none flex flex-col items-center gap-[19px] md:gap-[35px] w-full md:py-[51px] rounded-[30px]'>
				<h1 className='hide-mobile text-[30px] xl:text-[68px] font-bold xl:leading-[32px]'>
					{t('swap')}
				</h1>
				<div className='show-mobile w-full flex items-center justify-between fixed top-[0] left-0 right-0 z-[200] px-[28px] py-[15px] bg-[#f9f9fa] dark:bg-[#0c0c0c]'>
					<Link href={'/assets'} onClick={DropSteps}>
						<ChevronLeft strokeWidth={1} className='w-[30px]' />
					</Link>
					<h1 className='w-full text-center lg:text-left text-[32px] dark:text-[#EFEFEF] text-[#0c0c0c]'>
						{t('swap')}
					</h1>
					<Link href={'/assets'} onClick={DropSteps}>
						<X className='w-[30px]' />
					</Link>
				</div>
				<div className='flex items-center justify-center w-full'>
					<span className='text-[12px] sm:text-[18px] text-[#888888]'>
						{t('zroSwap')}
					</span>
					<Divider
						className='mx-[5px] sm:mx-[16px] h-[21px] md:h-8 dark:bg-[#fff]'
						orientation='vertical'
					/>
					<span className='text-[12px] sm:text-[18px] text-[#888888]'>
						{t('lwrLimits')}
					</span>
					<Divider
						className='mx-[5px] sm:mx-[16px] h-[21px] md:h-8 dark:bg-[#fff]'
						orientation='vertical'
					/>
					<span className='text-[12px] sm:text-[18px] text-[#888888]'>
						{t('simpleTrans')}
					</span>
				</div>
			</article>

			<div className='md:dark:bg-[#1e1e1e66] md:shadow-medium dark:shadow-none flex flex-col items-center gap-[15px] md:gap-[35px] w-full md:min-h-[871px] md:p-[46px_36px] rounded-[30px]'>
				<Swap_from />

				<div className='w-full flex items-center justify-between gap-[5px] md:px-[32px]'>
					<article className='flex flex-col items-start gap-[5px]'>
						<p className='flex items-start md:items-center gap-[13px] md:text-[20px]'>
							{t('available')}: 0.00000079 TRX
							<span className='text-[#205BC9]'>{t('deposit')}</span>
						</p>
						<div className='privacy max-w-[921px] flex flex-col 	 justify-center'>
							<label
								className='checkbox-label gap-[5px] md:gap-[18px] !items-center md:items-center'
								htmlFor='checkbox-privacy'
							>
								<input
									className='checkbox'
									id='checkbox-privacy'
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
								<p className='text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] text-left text-[#888888] leading-[1]'>
									{t('showZroBal')}
								</p>
							</label>
						</div>
					</article>
					<div
						className='rounded-full border-1 md:border-3 border-solid border-[#EFEFEF] p-[13px]'
						onClick={() => setReplaceCurrency(!replaceCurrency)}
					>
						<ArrowDownUp
							strokeWidth={1}
							className='w-full max-w-[36px] max-h-[36px]'
						/>
					</div>
				</div>

				<Swap_To />

				<div className='flex items-center gap-[5px]'>
					<span className='md:text-[20px] text-[#888888]'>
						{t('exchange')}:
					</span>
					<span className='md:text-[20px] text-[#888888]'>
						1 {swapPoppover_1} ={' '}
					</span>
					<span className='md:text-[20px] text-[#888888]'>
						6.05521141 {swapPoppover_2}
					</span>
				</div>

				<Swap_confirmation titleTrigger={t('confirm')} />

				<div className='flex items-center gap-[30px] md:gap-[100px]'>
					<div className='flex flex-col items-center justify-between gap-[11px]'>
						<Image
							className='w-[60px] md:w-[100px]'
							src='/main/swap/zero_tier.svg'
							alt='Zero Tier'
						/>
						<span className='text-[16px] md:text-[20px]'>{t('zroTier')}</span>
					</div>
					<div className='flex flex-col items-center justify-between gap-[11px]'>
						<Image
							className='w-[60px] md:w-[100px]'
							src='/main/swap/no_slippage.svg'
							alt='no_slippage'
						/>
						<span className='text-[16px] md:text-[20px]'>{t('noSlip')}</span>
					</div>
					<div className='flex flex-col items-center justify-between gap-[11px]'>
						<Image
							className='w-[60px] md:w-[100px]'
							src='/main/swap/more_pairs.svg'
							alt='more_pairs'
						/>
						<span className='text-[16px] md:text-[20px]'>{t('morePairs')}</span>
					</div>
				</div>
			</div>

			<div className='dark:bg-[#1e1e1e66] md:shadow-medium dark:shadow-none flex flex-col items-center gap-[35px] w-full p-[46px_16px] md:p-[46px_36px] rounded-[30px]'>
				<h1 className='block md:text-center w-full text-[24px] md:text-[32px] font-normal md:font-bold leading-[32px]'>
					"{t('faq')}"
				</h1>

				<Swap_faq />
			</div>
		</section>
	)
}

export default Swap
