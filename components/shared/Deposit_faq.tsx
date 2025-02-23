import { Divider } from "@heroui/divider"
import { NextPage } from 'next'

const Deposit_faq: NextPage = () => {
	return (
		<div className='shadow-medium dark:shadow-none dark:bg-[#181818] rounded-[30px] p-[40px_44px] h-fit'>
			<h5 className='text-[18px] md:text-[32px] mb-[23px]'>FAQ</h5>

			<div className='flex flex-col '>
				<p className='text-[15px] md:text-[20px]'>How do I make deposit?</p>
				<Divider className='my-[15px]' />
				<p className='text-[15px] md:text-[20px]'>
					Why have I still not recelved my deposit?
				</p>
				<Divider className='my-[15px]' />
				<p className='text-[15px] md:text-[20px]'>
					How do I select the correct network for my crypto deposit and
					deposits?
				</p>
				<Divider className='my-[15px]' />
				<p className='text-[15px] md:text-[20px]'>
					Do I need to pay fees for deposit and deposit?{' '}
				</p>
				<Divider className='my-[15px]' />
			</div>
		</div>
	)
}

export default Deposit_faq
