import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { NextPage } from 'next'

interface Props {
	content: string
	titleTriger: string
	title: string
}
export const Alert: NextPage<Props> = ({title, content, titleTriger}) => {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				{/* <Button className='bg-[#515151] text-white rounded-[50px] px-[35px] min-w-[117px] hover:bg-[#515151] hover:text-[#fff] text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] lg:px-[50px] lg:py-[25px] 2xl:py-[30px]'>
					Confirm
				</Button> */}
				<Button className='dark:text-white text-black px-[15px] py-[5px] bg-transparent border border-solid dark:border-white border-black rounded-[50px] text-[14px] font-medium h-fit w-[98px] hover:bg-transparent'>
					{titleTriger}
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent className='max-w-[350px] max-h-[254px]'>
				<AlertDialogHeader>
					<AlertDialogTitle>{title}</AlertDialogTitle>
					<AlertDialogDescription>
						{content}
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction>Continue</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
