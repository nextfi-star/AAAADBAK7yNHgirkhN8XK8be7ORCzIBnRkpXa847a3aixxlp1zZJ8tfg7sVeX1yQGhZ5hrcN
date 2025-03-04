import { Divider } from "@heroui/divider"
import { NextPage } from 'next'
import { useTranslations } from 'next-intl'

const Deposit_faq = () => {
	const t = useTranslations('deposit')
	return (
		<div className='shadow-medium dark:shadow-none dark:bg-[#181818] rounded-[30px] p-[40px_44px] h-fit'>
			<h5 className='text-[18px] md:text-[32px] mb-[23px]'>{t('faq')}</h5>

			<div className='flex flex-col '>
				<p className='text-[15px] md:text-[20px]'>{t('howMake')}</p>
				<Divider className='my-[15px]' />
				<p className='text-[15px] md:text-[20px]'>
					{t("whyStill")}
				</p>
				<Divider className='my-[15px]' />
				<p className='text-[15px] md:text-[20px]'>
					{t('howSelect')}
				</p>
				<Divider className='my-[15px]' />
				<p className='text-[15px] md:text-[20px]'>
					{t('doI')}{' '}
				</p>
				<Divider className='my-[15px]' />
			</div>
		</div>
	)
}

export default Deposit_faq
