'use client'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Globe } from 'lucide-react'
import Image from 'next/image'
import { useChangeLocale } from '@/hooks/useTranslateWeb'

export function LangSwitch({ cls }: { cls?: string }) {
	const locale = useChangeLocale()
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='outline' className={`bg-transparent hover:bg-transparent shadow-none ${cls} `} size='icon'>
					<Globe className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
					<Globe className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
					<span className='sr-only'>Toggle lang</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end' className='!z-[99999] relative dark:bg-[#0c0c0c]'>
				<DropdownMenuItem onClick={() => locale('en')}>
					En
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => locale('ru')}>
					Ru
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => locale('arab')}>
				لعربية
				</DropdownMenuItem>
				<DropdownMenuItem
					className='flex items-center'
				>
					Ch{' '}
					<Image
						alt='lock icon'
						className='pl-[5px] lock'
						height={20}
						src={'/lock.svg'}
						width={20}
					/>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
