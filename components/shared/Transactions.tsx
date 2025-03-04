import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

const Transaction = () => {
	const t = useTranslations('transaction')
	const data = useMemo(
		() => [
			{
				name: t('transfer'),
				id: 1,
				cell: (
					<span className='flex items-center gap-[5px] text-[14px] dark:text-white text-[#0c0c0c]'>
						08/07/24,{' '}
						<span className='text-[14px] dark:text-white text-[#0c0c0c]'>
							14:55:39
						</span>
					</span>
				),
				symbol: '+',
				money: '+112 USDT',
			},
			{
				name: t('transfer'),
				id: 122239745679182,
				cell: (
					<span className='flex items-center gap-[5px] text-[14px] dark:text-white text-[#0c0c0c]'>
						08/07/24,{' '}
						<span className='text-[14px] dark:text-white text-[#0c0c0c]'>
							14:55:39
						</span>
					</span>
				),
				symbol: '+',
				money: '+112 USDT',
			},
			{
				name: t('transfer'),
				id: 1837461894657,
				cell: (
					<span className='flex items-center gap-[5px] text-[14px] dark:text-white text-[#0c0c0c]'>
						08/07/24,{' '}
						<span className='text-[14px] dark:text-white text-[#0c0c0c]'>
							14:55:39
						</span>
					</span>
				),
				symbol: '+',
				money: '+112 USDT',
			},
			{
				name: t('transfer'),
				id: 14,
				cell: (
					<span className='flex items-center gap-[5px] text-[14px] dark:text-white text-[#0c0c0c]'>
						08/07/24,{' '}
						<span className='text-[14px] dark:text-white text-[#0c0c0c]'>
							14:55:39
						</span>
					</span>
				),
				symbol: '+',
				money: '+112 USDT',
			},
		],
		[]
	)
	return (
		<section className='dark:!bg-[#1e1e1e66] bg-white !shadow-medium dark:!shadow-none rounded-[30px] p-[27px_40px] flex flex-col gap-[20px] min-h-[690px] max-h-[690px] overflow-y-auto'>
			<h3 className='text-[14px] md:text-[20px] 2xl:text-[25px] w-full'>
				{t('recent')}
			</h3>
			<div className='flex flex-col gap-[10px] max-h-[690px] overflow-y-auto'>
				{data &&
					data.map(item => (
						<div key={item.id}>
							<div className='flex items-center w-full justify-between'>
								<div className='flex flex-col gap-[5px] items-start'>
									<h5 className='text-[14px] md:text-[20px] 2xl:text-[23px]'>
										{item.name}
										{item.cell}
									</h5>
								</div>
								<span className='text-green-700 text-[14px] 2xl:text-[20px]'>
									{item.money}
								</span>
							</div>
							<span className='min-h-[1px] w-full bg-white block' />
						</div>
					))}
			</div>
		</section>
	)
}

export default Transaction
