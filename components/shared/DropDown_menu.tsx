import {
	Command,
	CommandGroup,
	CommandItem,
	CommandList,
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

interface Props {
	dropData?: DropData[]
	triggerTitle?: string
	data: DropData[]
	defaultItem?: string | JSX.Element
}

export const DropDown_menu: NextPage<Props> = ({
	triggerTitle,
	data,
	defaultItem,
}) => {
	const [selectedKeys, setSelectedKeys] = useState<DropData | null>(null)
	const [open, setOpen] = useState(false)

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild onMouseEnter={() => setOpen(true)}>
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
						<p className='text-[16px] text-[#0c0c0c] dark:text-white'>
							{defaultItem}
						</p>
					)}
				</Button>
			</PopoverTrigger>
			<PopoverContent className='p-0 w-full' side='bottom' align='start'>
				<Command>
					<CommandList className='bg-[#eee] dark:bg-[#19191A]'>
						<CommandGroup>
							{data.map(item => (
								<CommandItem
									key={item.key}
									value={item.title}
									onSelect={value => {
										setSelectedKeys(
											data.find(priority => priority.title === value) || null
										)
										setOpen(false)
									}}
								>
									<Link href={item.href} onClick={item.verify}>
										{item.title}
									</Link>
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	)
}
