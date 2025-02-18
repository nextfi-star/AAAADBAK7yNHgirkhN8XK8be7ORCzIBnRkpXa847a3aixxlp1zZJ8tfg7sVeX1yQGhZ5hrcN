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
import { useUserStore } from '@/hooks/useUserData'
import { handleAccountAction } from '@/utils/api'
import { Button } from '@nextui-org/button'
import { NextPage } from 'next'
interface Props {
	content: string
	titleTriger: string | any
	title: string
	className?: string
	unic?: string
	selectedOption?: string | undefined
	checked?: boolean
	handleAction?: (action: 'freeze' | 'close') => void
}
export const Confirmation_dialog: NextPage<Props> = ({
	title,
	content,
	titleTriger,
	className,
	unic,
	checked,
	selectedOption,
}) => {
	const user = useUserStore(state => state.user)
	const handleActionClose = async (action: 'close') => {
		try {
			const result = await handleAccountAction(user?.csrf, action)
			
			console.log(`${action} result:`, result)
		} catch (err: any) {
			console.log(err.message)
		}
	}
	const handleActionFreeze = async (action: 'freeze') => {
		try {
			const result = await handleAccountAction(user?.csrf, action)
			console.log(`${action} result:`, result)
		} catch (err: any) {
			console.log(err.message)
		}
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					className={`dark:text-white text-black px-[15px] py-[5px] bg-transparent border border-solid !border-[#4d4d4d] dark:!border-[#4d4d4d] rounded-[50px] text-[14px] xl:!text-[20px] 2xl:!text-[25px] xl:px-[40px] 2xl:px-[70px] font-medium h-fit w-[98px] hover:bg-transparent ${className}`}
					disabled={!checked || !selectedOption}
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
					<DialogClose asChild></DialogClose>
					{unic === 'freeze' ? (
						<Button
							type='button'
							className='min-w-[91.52px] rounded-[50px] bg-[#205BC9] text-white'
							onClick={() => handleActionFreeze('freeze')}
						>
							Continue
						</Button>
					) : (
						<Button
							type='button'
							className='min-w-[91.52px] rounded-[50px] bg-[#205BC9] text-white'
							onClick={() => handleActionClose('close')}
						>
							Continue
						</Button>
					)}
					{!unic && (
						<Button
							type='button'
							className='min-w-[91.52px] rounded-[50px] bg-[#205BC9] text-white'
						>
							Continue
						</Button>
					)}
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
