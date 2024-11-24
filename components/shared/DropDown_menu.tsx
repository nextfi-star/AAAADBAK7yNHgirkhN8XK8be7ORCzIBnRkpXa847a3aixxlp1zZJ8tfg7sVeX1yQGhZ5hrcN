'use client'
import {
	Command,
	CommandGroup,
	CommandItem,
	CommandList,
	CommandSeparator,
} from '@/components/ui/command'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { Link } from '@/i18n/routing'
import { Button } from '@nextui-org/button'
import { NextPage } from 'next'
import { useState } from 'react'
import { DropData } from './ProfileHeader'
import { Divider } from '@nextui-org/divider'
import Image from 'next/image'

interface Props {
	dropData?: DropData[]
	triggerTitle?: string
	data: DropData[]
	defaultItem?: string | JSX.Element
	hasProfile: boolean
}

export const DropDown_menu: NextPage<Props> = ({
	triggerTitle,
	data,
	defaultItem,
	hasProfile,
}) => {
	const [selectedKeys, setSelectedKeys] = useState<DropData | null>(null)
	const [open, setOpen] = useState(false)

	return (
		<div onMouseLeave={() => setOpen(!open)}>
			<Popover
			open={open}
			onOpenChange={() => setOpen(!open)}
		>
			<PopoverTrigger asChild onMouseEnter={() => setOpen(!open)}>
				<Button
					size='sm'
					className='!w-fit !min-w-fit flex justify-end bg-transparent p-0 m-0'
					disableAnimation
				>
					{selectedKeys ? (
						<p className='text-[16px] text-[#0c0c0c] dark:text-white'>
							{defaultItem ? defaultItem : selectedKeys.title}
						</p>
					) : (
						<p className='text-[16px] flex items-center justify-center min-w-[44px] text-[#0c0c0c] dark:text-white'>
							{defaultItem}
						</p>
					)}
				</Button>
			</PopoverTrigger>
			<PopoverContent
				className='p-0 w-full -mt-[10px]'
				side='bottom'
				align='end'
			>
				<Command>
					<CommandList className='bg-[#eee] dark:bg-[#1e1e1e66] py-[10px] px-[7px]'>
						<CommandGroup>
							{hasProfile && (
								<>
									<div className={'cursor-pointer flex items-center gap-[7px]'}>
										<Image
											alt={'avatar'}
											className='object-contain rounded-full'
											height={42}
											src={'/main/avatar_noface.png'}
											width={42}
										/>
										<div className='flex flex-col items-stretch'>
											<p className='text-[13px] dark:text-[#eeeeee] text-[#0c0c0c]'>
												user***@gmail.com
											</p>
											<p className='text-[13px] text-[#0c0c0c] dark:text-[#eeeeee]'>UID: 987987</p>
										</div>
									</div>
									<CommandSeparator className='mb-[10px] h-[1px] w-full ml-0 my-[10px]' />
								</>
							)}

							{data.map(item => (
								<div key={item.key}>
									{item.key === 'out' && (
										<CommandSeparator className='my-[10px] h-[1px] w-full ml-0' />
									)}
									<CommandItem
										value={item.title}
										onSelect={value => {
											setSelectedKeys(
												data.find(priority => priority.title === value) || null
											)
											setOpen(false)
										}}
									>
										<div className='flex flex-col w-full'>
											<div className='flex items-center gap-[10px]'>
												{item.icon}
												<Link
													href={item.href}
													onClick={item.verify}
													className='text-[14px] w-full'
												>
													{item.title}
												</Link>
											</div>
										</div>
									</CommandItem>
								</div>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
		</div>
	)
}
