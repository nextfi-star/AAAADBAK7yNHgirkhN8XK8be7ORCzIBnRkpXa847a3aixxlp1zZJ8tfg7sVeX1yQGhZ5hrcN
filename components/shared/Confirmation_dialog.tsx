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
import { NextPage } from 'next'
interface Props {
	content: string
	titleTriger: string | any
	title: string
	className?: string
	unic?: string
}
export const Confirmation_dialog: NextPage<Props> = ({
	title,
	content,
	titleTriger,
	className,
	unic,
}) => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className={`dark:text-white text-black px-[15px] py-[5px] bg-transparent border border-solid dark:border-white border-black rounded-[50px] text-[14px] xl:!text-[20px] 2xl:!text-[25px] xl:px-[40px] 2xl:px-[70px] font-medium h-fit w-[98px] hover:bg-transparent ${className}`}>
					{titleTriger}
				</Button>
			</DialogTrigger>
			<DialogContent className='sm:max-w-md'>
				<DialogHeader className='my-[20px]'>
					<DialogTitle>{title}</DialogTitle>
					<DialogDescription>
					{content}
					</DialogDescription>
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
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
