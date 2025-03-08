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

export function Activity_modal() {
	const t = useTranslations('activity')
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button
					variant='default'
					className='flex items-center rounded-[50px] text-[20px] xl:text-[27px] font-medium px-[35px] xl:py-[35px] border border-solid dark:border-white border-black'
				>
					{t('descCrit')}
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent className='max-w-[1200px] px-[1rem] m-auto overflow-y-auto pb-[5.5rem] !top-[176px]'>
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
						{t('criteries')}
					</AlertDialogTitle>
				</AlertDialogHeader>
				<AlertDialogHeader className='flex flex-col items-center gap-[10px] py-4'>
					<AlertDialogTitle className='text-[24px] xl:text-[32px]'>
						{t('lvlBonus')}
					</AlertDialogTitle>
					<AlertDialogDescription className='text-[18px] xl:text-[24px]'>
						{t('eachInvs')}
					</AlertDialogDescription>
				</AlertDialogHeader>
				<div className='flex flex-col gap-4'>
					<div className='flex flex-col gap-[.5rem]'>
						<p>{t('howWorks')}</p>
						<span>• {t('invstXp')}.</span>
						<span>• {t('levelUp')}.</span>
						<span>• {t('chooseBonus')}.</span>
					</div>
					<div className='flex flex-col gap-[.5rem]'>
						<p>{t('expBonus')}</p>
						<span>• {t('addPerc')}</span>
						<span>• {t('reducFee')}.</span>
						<span>• {t('reducMin')}.</span>
						<span>{t('theHigh')}</span>
					</div>
				</div>
				<AlertDialogHeader className='flex flex-col items-center gap-[10px] py-4'>
					<AlertDialogTitle className='text-[24px] xl:text-[32px]'>
						{t('genAct')}
					</AlertDialogTitle>
					<AlertDialogDescription className='text-[18px] xl:text-[24px]'>
						{t('urInvs')}
					</AlertDialogDescription>
				</AlertDialogHeader>
				<div className='flex flex-col gap-4'>
					<div className='flex flex-col gap-[.5rem]'>
						<p className='text-[24px] xl:text-[32px]'>{t('howWorks')}</p>
						<span className='text-[18px] xl:text-[24px]'>• {t('invUr')}.</span>
						<span className='text-[18px] xl:text-[24px]'>
							• {t('dvlpEco')}.
						</span>
						<span className='text-[18px] xl:text-[24px]'>• {t('getRew')}.</span>
						<h3 className='text-[24px] xl:text-[32px]'>{t('follwPrgs')}</h3>
					</div>
				</div>
			</AlertDialogContent>
		</AlertDialog>
	)
}
