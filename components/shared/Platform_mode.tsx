import Image from 'next/image'

import ArrowBracket from '../ui/ArrowBracket'

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Link } from '@/i18n/routing'
import { useThemeStore } from '@/store/useChatStore'
import { Lock } from 'lucide-react'
import { SecIcon } from '../ui/SecIcon'

export const Platform_mode = () => {
	const { theme } = useThemeStore()

	return (
		<>
			<Tabs className='hidden sm:inline-flex' defaultValue='account'>
				<TabsList className='grid-cols-3'>
					<TabsTrigger
						className='text-[14px] !text-black dark:!text-white !bg-white dark:!bg-black shadow'
						value='Platform'
					>
						<Link href='/over'>Platform</Link>
					</TabsTrigger>

					<TabsTrigger
						className='lock-btn text-[14px] data-[state=active]:bg-transparent data-[state=active]:shadow-none'
						value='Exchange'
					>
						Exchange
						<SecIcon cls='lock min-w-[20px]' />
					</TabsTrigger>
					<TabsTrigger
						className='lock-btn text-[14px] data-[state=active]:bg-transparent data-[state=active]:shadow-none'
						value='Web'
					>
						Web 3
						<SecIcon cls='lock min-w-[20px]' />
					</TabsTrigger>
				</TabsList>
			</Tabs>

			<Tabs className='sm:hidden' defaultValue='account'>
				<TabsList className='grid-cols-3 items-center'>
					<TabsTrigger
						className='text-[14px] !text-black dark:!text-white !bg-white dark:!bg-black shadow px-[3px]'
						value='Platform'
					>
						<Link href='/over'>Platform</Link>
					</TabsTrigger>
					<TabsTrigger
						className='lock-btn text-[14px] data-[state=active]:bg-transparent data-[state=active]:shadow-none px-[3px]'
						value='Exchange'
					>
						<SecIcon cls='lock min-w-[20px]' />
						<ArrowBracket
							className={'-rotate-[90deg]'}
							color={theme === 'dark' ? 'white' : 'black'}
							height={20}
							width={20}
						/>
					</TabsTrigger>
					<TabsTrigger
						className='lock-btn text-[14px] data-[state=active]:bg-transparent data-[state=active]:shadow-none px-[3px]'
						value='Web'
					>
						<SecIcon cls='lock min-w-[20px]' />
						<ArrowBracket
							className={'-rotate-[90deg]'}
							color={theme === 'dark' ? 'white' : 'black'}
							height={20}
							width={20}
						/>
					</TabsTrigger>
				</TabsList>
			</Tabs>
		</>
	)
}
