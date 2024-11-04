import Image from 'next/image'
import React from 'react'
import ArrowBracket from '../ui/ArrowBracket'
import { useThemeStore } from '@/store'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Link } from '@/i18n/routing'

export const Platform_mode = () => {
	const { theme } = useThemeStore()
	return (
		<>
			<Tabs defaultValue='account' className='hidden sm:inline-flex'>
				<TabsList className='grid-cols-3'>
					<TabsTrigger
						className='text-[14px] !text-black dark:!text-white !bg-white dark:!bg-black shadow'
						value='Platform'
					>
						<Link href='/over' >Platform</Link>
					</TabsTrigger>

					<TabsTrigger className='lock-btn text-[14px] data-[state=active]:bg-transparent data-[state=active]:shadow-none' value='Exchange'>
						Exchange
						<Image
							src={'/lock.svg'}
							width={20}
							height={20}
							alt='lock icon'
							className='pl-[5px] lock'
						/>
					</TabsTrigger>
					<TabsTrigger className='lock-btn text-[14px] data-[state=active]:bg-transparent data-[state=active]:shadow-none' value='Web'>
						Web 3
						<Image
							src={'/lock.svg'}
							width={20}
							height={20}
							alt='lock icon'
							className='pl-[5px] lock'
						/>
					</TabsTrigger>
				</TabsList>
			</Tabs>

			<Tabs defaultValue='account' className='sm:hidden'>
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
						<Image
							src={'/lock.svg'}
							width={20}
							height={20}
							alt='lock icon'
							className='pl-[5px] lock'
						/>
						<ArrowBracket
							width={20}
							height={20}
							className={'-rotate-[90deg]'}
							color={theme === 'dark' ? 'white' : 'black'}
						/>
					</TabsTrigger>
					<TabsTrigger className='lock-btn text-[14px] data-[state=active]:bg-transparent data-[state=active]:shadow-none px-[3px]' value='Web'>
						<Image
							src={'/lock.svg'}
							width={20}
							height={20}
							alt='lock icon'
							className='pl-[5px] lock'
						/>
						<ArrowBracket
							width={20}
							height={20}
							className={'-rotate-[90deg]'}
							color={theme === 'dark' ? 'white' : 'black'}
						/>
					</TabsTrigger>
				</TabsList>
			</Tabs>
		</>
	)
}
