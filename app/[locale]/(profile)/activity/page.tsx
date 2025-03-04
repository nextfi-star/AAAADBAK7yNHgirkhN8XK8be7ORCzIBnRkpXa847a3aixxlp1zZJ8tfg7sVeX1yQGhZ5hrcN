import { Button } from "@heroui/button"
import Activity_progressLogo from '@/components/shared/Activity_progressLogo'
import Activity_personal from '@/components/shared/Activity_personal'
import { useTranslations } from 'next-intl'

const Activity = () => {
	const t = useTranslations('activity')
	return (
		<section className='activity mt-[8rem] flex flex-col min-h-screen pb-[2.5rem] overflow-x-hidden relative'>
			<div className='site-holder flex flex-col items-center gap-[46px] relative'>
				<article className='flex flex-col items-center w-full'>
					<h1 className='text-[24px] text-center xl:text-[42px] font-bold mb-[60px] uppercase'>
						{t('genActivity')}
					</h1>
					<div className='flex flex-col lg:flex-row items-center md:justify-between w-full'>
						<p className='text-[16px] xl:text-[42px] font-bold text-center lg:text-left'>
							{t('joinUs')} <br /> {t('the')}
							<span className='text-[#205BC9]'> {t('ecosystem')}</span>
						</p>
						<Button
							className='hidden lg:flex items-center rounded-[50px] text-[20px] xl:text-[27px] font-medium px-[35px] xl:py-[35px] border border-solid dark:border-white border-black'
							variant='bordered'
						>
							{t('descCrit')}
						</Button>
					</div>
				</article>
				<Activity_progressLogo />
				<Activity_personal />
			</div>
		</section>
	)
}

export default Activity
