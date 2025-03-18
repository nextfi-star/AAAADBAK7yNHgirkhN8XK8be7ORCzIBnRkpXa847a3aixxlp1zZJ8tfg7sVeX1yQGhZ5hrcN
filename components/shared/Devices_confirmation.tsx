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
import { Button } from "@heroui/button"
import { NextPage } from 'next'
import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
interface Props {
	content: string
	titleTriger: string | any
	title: string
	className?: string
	
}
export const Devices_confirmation: NextPage<Props> = ({
	title,
	content,
	titleTriger,
	className,

}) => {
	const user = useUserStore((state) => state.user)
	const router = useRouter()
	const locale = useLocale()
	const handleLogout = async (fullLogout = false) => {
		try {
			const payload = {
				csrf: user?.csrf,
				full: fullLogout ? 'true' : '',
			}
			const response = await fetch('https://nextfi.io:5000/api/v1/logout', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(payload),
			})
			const result = await response.json()
			if (!response.ok) {
				throw new Error(result.message || 'Logout failed')
			}
			localStorage.removeItem('userData')
			router.push(`/${locale}/login`)
		} catch (error) {
			console.error('Logout error:', error)
		}
	}
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
							onClick={() => handleLogout()}
						>
							Continue
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
