'use client'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Globe, Lock } from 'lucide-react'
import Image from 'next/image'
import { useChangeLocale } from '@/hooks/useTranslateWeb'
import { useTranslations } from 'next-intl'

export function LangSwitch({ cls, title }: { cls?: string; title?: string }) {
	const locale = useChangeLocale()
	const t = useTranslations('footer')
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='outline'
					className={`bg-transparent hover:bg-transparent shadow-none flex w-full items-center gap-[7px] ${cls} `}
				>
					{/* <Globe className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' /> */}
					<Globe className=' min-h-[1.2rem] min-w-[1.2rem]' />
					{title}
					<span className='sr-only'>Toggle lang</span>
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent
				align='end'
				className='!z-[99999] relative dark:bg-[#0c0c0c]'
			>
				<DropdownMenuItem onClick={() => locale('en')}>En</DropdownMenuItem>
				<DropdownMenuItem onClick={() => locale('ru')}>Ru</DropdownMenuItem>
				<DropdownMenuItem onClick={() => locale('arab')}>
					لعربية
				</DropdownMenuItem>
				<DropdownMenuItem className='flex items-center lock-btn'>
					Ch{' '}
					{/* <Image
						alt='lock icon'
						className='pl-[5px] lock'
						height={20}
						src={'/lock.svg'}
						width={20}
					/> */}
					<Lock strokeWidth={1} className='max-w-[20px] lock' />
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
