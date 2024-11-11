import { Divider } from '@nextui-org/divider'
import { NextPage } from 'next'

const Withdrawal_faq: NextPage = () => {
	return (
		<div className='shadow-lg dark:shadow-none dark:bg-[#181818] rounded-[30px] p-[40px_44px] h-fit'>
			<h5 className='text-[18px] md:text-[32px] mb-[23px]'>FAQ</h5>

			<div className='flex flex-col '>
				<p className='text-[15px] md:text-[20px]'>How do I make withdrawal?</p>
				<Divider className='my-[15px]' />
				<p className='text-[15px] md:text-[20px]'>
					Why have I still not recelved my withdrawal?
				</p>
				<Divider className='my-[15px]' />
				<p className='text-[15px] md:text-[20px]'>
					How do I select the correct network for my crypto withdrawals and
					deposits?
				</p>
				<Divider className='my-[15px]' />
				<p className='text-[15px] md:text-[20px]'>
					Do I need to pay fees for deposit and withdrawal?{' '}
				</p>
				<Divider className='my-[15px]' />
			</div>
		</div>
	)
}

export default Withdrawal_faq
