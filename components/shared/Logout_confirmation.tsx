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
import { Button } from '@nextui-org/button'
import { NextPage } from 'next'
interface Props {
	content: string
	titleTriger: string | any
	title: string
	className?: string
}
export const Logout_confirmation: NextPage<Props> = ({
	title,
	content,
	titleTriger,
	className,
}) => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					className={`dark:text-white text-black px-[15px] py-[5px] bg-transparent border border-solid !border-[#4d4d4d] dark:!border-[#4d4d4d] rounded-[50px] text-[14px] xl:!text-[20px] 2xl:!text-[25px] xl:px-[40px] 2xl:px-[70px] font-medium h-fit w-[98px] hover:bg-transparent ${className}`}
				>
					{titleTriger}
				</Button>
			</DialogTrigger>
			<DialogContent className='max-w-[23rem] sm:max-w-md rounded-[10px]'>
				<DialogHeader className='my-[20px]'>
					<DialogTitle>{title}</DialogTitle>
					<DialogDescription>{content}</DialogDescription>
				</DialogHeader>
				<DialogFooter className='flex flex-row gap-[40px] items-center justify-center sm:justify-center'>
					<DialogClose asChild>
						<Button
							type='button'
							className='min-w-[91.52px] border-1 !border-[#767680] border-solid rounded-[50px] px-[10px] !bg-[#7676801F] !text-[#0c0c0c] dark:!text-[#EFEFEF] !text-[16px] xl:!text-[16px] 2xl:!text-[16px]'
						>
							Close
						</Button>
					</DialogClose>
					<DialogClose asChild>
						<Button
							type='button'
							className='min-w-[91.52px] rounded-[50px] bg-[#205BC9] text-white'
						>
							Continue
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
