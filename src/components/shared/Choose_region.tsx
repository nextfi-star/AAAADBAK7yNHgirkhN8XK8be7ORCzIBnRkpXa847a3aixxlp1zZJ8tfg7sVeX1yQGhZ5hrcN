'use client'

import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '@/components/ui/command'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'

const frameworks = [
	{
		value: 'russia',
		label: 'Russia',
	},
	{
		value: 'uzbekistan',
		label: 'Uzbekistan',
	},
	{
		value: 'usa',
		label: 'USA',
	},
	{
		value: 'china',
		label: 'China',
	},
	{
		value: 'japan',
		label: 'Japan',
	},
]

export function Choose_region() {
	const [open, setOpen] = React.useState(false)
	const [value, setValue] = React.useState('')

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant='outline'
					role='combobox'
					aria-expanded={open}
					className='w-full max-w-[400px] justify-between z-[9999] border border-solid border-gray-400 text-[16px]'
				>
					{value
						? frameworks.find(framework => framework.value === value)?.label
						: 'Select region...'}
					<ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-[200px] p-0'>
				<Command>
					<CommandInput placeholder='Search framework...' />
					<CommandList>
						<CommandEmpty>No one was found.</CommandEmpty>
						<CommandGroup>
							{frameworks.map(framework => (
								<CommandItem
									key={framework.value}
									value={framework.value}
									onSelect={currentValue => {
										setValue(currentValue === value ? '' : currentValue)
										setOpen(false)
									}}
								>
									<Check
										className={cn(
											'mr-2 h-4 w-4',
											value === framework.value ? 'opacity-100' : 'opacity-0'
										)}
									/>
									{framework.label}
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	)
}
