import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Avatar } from '@nextui-org/react'
import { NextPage } from 'next'
import Withdrawal_steps from './Withdrawal_steps'
import Withdrawal_faq from './Withdrawal_faq'
import Withdrawal_table from './Withdrawal_table'
interface Props {}
export const Withdrawal_pageModal: NextPage<Props> = ({}) => {
	return (
		<Dialog>
			<DialogTrigger className='flex flex-col items-center'>
				<Avatar
					src='/header_icons/profile_burger/deposit.svg'
					className='flex-shrink-0 bg-transparent'
					size='lg'
				/>
				Withdrawal
			</DialogTrigger>
			<DialogContent className='sm:max-w-md top-0 bottom-0 translate-y-0'>
			<section className='withdrawal -mt-[8rem] md:-mt-[4rem] lg:mt-[4.5rem] pb-[1.5rem]'>
			<h1 className='w-full text-center lg:text-left text-[32px] my-[30px] dark:text-[#EFEFEF]text-[#0c0c0c]'>Withdrawal</h1>
			<div className='grid xl:grid-cols-[2fr_1fr] gap-[31px] mb-[33px]'>
				<div className=''>
					<Withdrawal_steps />
				</div>
				<Withdrawal_faq />
			</div>
			<Withdrawal_table />
		</section>
			</DialogContent>
		</Dialog>
	)
}



{/* <DialogHeader className='my-[20px]'>
					<DialogTitle>LOL</DialogTitle>
					<DialogDescription>LOL</DialogDescription>
				</DialogHeader>
				<DialogFooter className='flex flex-row gap-[40px] items-center justify-center '>
					<DialogClose asChild>
						<Button type='button' variant='secondary'>
							Close
						</Button>
					</DialogClose>
					<DialogClose asChild>
						<Button type='button' variant='secondary'>
							Continue
						</Button>
					</DialogClose>
				</DialogFooter> */}