import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

const Tier_initData = () => {
	const t = useTranslations('tier')
	const data = useMemo(() => [
		{
			title: t('deposit'),
			subTitle: t('dailyAss'),
			numbers: '0.0000',
			subNumbers: '0.0000',
			currency: 'USD',
		},
		{
			title: t('allInvst'),
			subTitle: t('30days'),
			numbers: '0.0000',
			subNumbers: '0.0000',
			currency: 'USD',
		},
		{
			title: t('inInvest'),
			subTitle: t('exptPoint'),
			numbers: '0.0000',
			subNumbers: '0.0000',
			currency: 'USD',
		},
		{
			title: t('withdrawal'),
			subTitle: t('refInvited'),
			numbers: '0.0000',
			subNumbers: '2',
			currency: 'users',
		},
	], [])
	return (
		<div className='w-full flex flex-1 flex-col items-center xl:items-start gap-[23px]'>
			<h3 className='hidden sm:block text-[20px] dark:text-[#eee] text-[#0c0c0c]'>
				{t('30trading')}
			</h3>

			<div className='w-full hidden sm:flex items-start justify-between gap-[5%] px-[10px]'>
				{data &&
					data.map(item => (
						<div
							className='flex flex-col justify-between gap-[23px]'
							key={item.title}
						>
							<div className='flex flex-col'>
								<p className='dark:text-[#eee] text-[#0c0c0c] xl:text-[20px]'>
									{item.title}
								</p>
								<p className='xl:text-[20px]'>
									{item.numbers} {item.currency}
								</p>
							</div>
							{item.subTitle && (
								<div className='flex flex-col'>
									<p className='dark:text-[#eee] text-[#0c0c0c] xl:text-[20px]'>
										{item.subTitle}
									</p>
									<p className='xl:text-[20px]'>
										{item.subNumbers
											? `${item.subNumbers} ${item.currency}`
											: null}
									</p>
								</div>
							)}
						</div>
					))}
			</div>

			<div className='w-full flex sm:hidden flex-col gap-[20px] bg-[#EEEEEE] dark:bg-[#181818] px-[20px] py-[14px] rounded-[30px]'>
				<h3 className='block sm:hidden text-[20px] dark:text-[#eee] text-[#0c0c0c]'>
					{t('30trading')}
				</h3>
				<div className='w-full flex flex-wrap sm:hidden items-center justify-between gap-[15px] '>
					<div className='w-full flex items-center justify-between gap-[23px]'>
						<div className='flex flex-col'>
							<p className='dark:text-[#eee] text-[#0c0c0c] xl:text-[20px]'>
								{t('deposit')}
							</p>
							<p className='xl:text-[20px] text-[#0c0c0c] dark:text-[#BDBDBD]'>
								0.0000 USD
							</p>
						</div>
						<div className='flex flex-col'>
							<p className='dark:text-[#eee] text-[#0c0c0c] xl:text-[20px]'>
								{t('dailyAss')}
							</p>
							<p className='xl:text-[20px] text-[#0c0c0c] dark:text-[#BDBDBD]'>
								0.0000 USD
							</p>
						</div>
					</div>

					<div className='w-full flex items-center justify-between gap-[23px]'>
						<div className='flex flex-col'>
							<p className='dark:text-[#eee] text-[#0c0c0c] xl:text-[20px]'>
								{t('allInvst')}
							</p>
							<p className='xl:text-[20px] text-[#0c0c0c] dark:text-[#BDBDBD]'>
								0.0000 USD
							</p>
						</div>
						<div className='flex flex-col'>
							<p className='dark:text-[#eee] text-[#0c0c0c] xl:text-[20px] text-right'>
								{t('30days')}
							</p>
							<p className='xl:text-[20px] text-[#0c0c0c] dark:text-[#BDBDBD] text-right'>
								0.0000 USD
							</p>
						</div>
					</div>

					<div className='w-full flex items-center justify-between gap-[23px]'>
						<div className='flex flex-col'>
							<p className='dark:text-[#eee] text-[#0c0c0c] xl:text-[20px]'>
								{t('inInvest')}
							</p>
							<p className='xl:text-[20px] text-[#0c0c0c] dark:text-[#BDBDBD]'>
								0.0000 USD
							</p>
						</div>
						<div className='flex flex-col text-right'>
							<p className='dark:text-[#eee] text-[#0c0c0c] xl:text-[20px]'>
								{t('exptPoint')}
							</p>
							<p className='xl:text-[20px] text-[#0c0c0c] dark:text-[#BDBDBD]'>
								25 EXP
							</p>
						</div>
					</div>

					<div className='w-full flex items-center justify-between gap-[23px]'>
						<div className='flex flex-col'>
							<p className='dark:text-[#eee] text-[#0c0c0c] xl:text-[20px]'>
								{t('withdrawal')}
							</p>
							<p className='xl:text-[20px] text-[#0c0c0c] dark:text-[#BDBDBD]'>
								0.0000 USD
							</p>
						</div>
						<div className='flex flex-col text-right'>
							<p className='dark:text-[#eee] text-[#0c0c0c] xl:text-[20px]'>
								{t('refInvited')}
							</p>
							<p className='xl:text-[20px] text-[#0c0c0c] dark:text-[#BDBDBD]'>
								2 users
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Tier_initData
