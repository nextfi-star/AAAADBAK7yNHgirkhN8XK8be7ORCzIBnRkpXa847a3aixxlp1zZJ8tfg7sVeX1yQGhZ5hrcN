import React from 'react'

const data = [
	{
		title: 'Deposit',
		subTitle: 'Daily assets',
		numbers: '0.0000',
		subNumbers: '0.0000',
		currency: 'USD',
	},
	{
		title: 'All investments',
		subTitle: '30-day average assets',
		numbers: '0.0000',
		subNumbers: '0.0000',
		currency: 'USD',
	},
	{
		title: 'In investment',
		numbers: '0.0000',
		currency: 'USD',
	},
	{
		title: 'Withdrawal',
		numbers: '0.0000',
		currency: 'USD',
	},
]
const Tier_initData = () => {
	return (
		<div className='w-full flex flex-1 flex-col items-center xl:items-start gap-[23px]'>
			<h3 className='hidden sm:block text-[20px] dark:text-[#eee] text-[#0c0c0c]'>
				30-day trading volume (as of yesterday)
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
					30-day trading volume (as of yesterday)
				</h3>
				<div className='w-full flex flex-wrap sm:hidden items-center justify-between gap-[15px] '>
					<div className='w-full flex items-center justify-between gap-[23px]'>
						<div className='flex flex-col'>
							<p className='dark:text-[#eee] text-[#0c0c0c] xl:text-[20px]'>
								Deposit
							</p>
							<p className='xl:text-[20px] text-[#0c0c0c] dark:text-[#BDBDBD]'>
								0.0000 USD
							</p>
						</div>
						<div className='flex flex-col'>
							<p className='dark:text-[#eee] text-[#0c0c0c] xl:text-[20px]'>
								Deposit
							</p>
							<p className='xl:text-[20px] text-[#0c0c0c] dark:text-[#BDBDBD]'>
								0.0000 USD
							</p>
						</div>
					</div>

					<div className='w-full flex items-center justify-between gap-[23px]'>
						<div className='flex flex-col'>
							<p className='dark:text-[#eee] text-[#0c0c0c] xl:text-[20px]'>
								In investment
							</p>
							<p className='xl:text-[20px] text-[#0c0c0c] dark:text-[#BDBDBD]'>
								0.0000 USD
							</p>
						</div>
						<div className='flex flex-col'>
							<p className='dark:text-[#eee] text-[#0c0c0c] xl:text-[20px]'>
								Deposit
							</p>
							<p className='xl:text-[20px] text-[#0c0c0c] dark:text-[#BDBDBD]'>
								0.0000 USD
							</p>
						</div>
					</div>

					<div className='w-full flex items-center justify-between gap-[23px]'>
						<div className='flex flex-col'>
							<p className='dark:text-[#eee] text-[#0c0c0c] xl:text-[20px]'>
								Daily assets
							</p>
							<p className='xl:text-[20px] text-[#0c0c0c] dark:text-[#BDBDBD]'>
								0.0000 USD
							</p>
						</div>
						<div className='flex flex-col text-right'>
							<p className='dark:text-[#eee] text-[#0c0c0c] xl:text-[20px]'>
								30-day average assets
							</p>
							<p className='xl:text-[20px] text-[#0c0c0c] dark:text-[#BDBDBD]'>
								0.0000 USD
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Tier_initData
