'use client'
import { ChevronDown } from 'lucide-react'
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
import { Avatar } from '@nextui-org/react'
import { NextPage } from 'next'
import { useState } from 'react'
import { useThemeStore } from '@/store'
import NotFoundItem from './NotFoundItem'
type Status = {
	value: string
	label: string
	icon: string
	cryptoNumbers: string
	moreLess: string
}
interface Props {
	statusesFromTo?: Status[]
}
export const Swap_ToFrom: NextPage<Props> = ({ statusesFromTo }) => {
	const [open, setOpen] = useState(false)
	const [selectedStatus, setSelectedStatus] = useState<Status | null>(null)
	const { swapCheck2, swapPoppover_2 } = useThemeStore()
	// open={open} onOpenChange={setOpen} defaultOpen={true}
	return (
		<div className='flex items-center space-x-4'>
			<Popover modal={true} open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						variant='secondary'
						size='sm'
						className='min-w-[134px] max-w-[150px] justify-start shadow-none py-[25px] px-0 bg-transparent'
					>
						{selectedStatus ? (
							<div className='flex items-center gap-[8px]'>
								<Avatar src={selectedStatus.icon} />
								<span className='text-[20px] text-[#0c0c0c] dark:text-white'>
									{selectedStatus.label}
								</span>
								<ChevronDown strokeWidth={1} />
							</div>
						) : (
							<div className='flex items-center gap-[8px]'>
								<Avatar src={'payment_table/zro.svg'} />
								<span className='text-[20px] text-[#0c0c0c] dark:text-white'>
									{swapPoppover_2}
								</span>
								<ChevronDown strokeWidth={1} />
							</div>
						)}
					</Button>
				</PopoverTrigger>
				<PopoverContent
					className='p-0 bg-[#3c3c3c]'
					side='left'
					align='end'
					sideOffset={250}
					alignOffset={250}
				>
					<Command className='bg-[#3c3c3c]'>
						<CommandInput
							placeholder='Your choice'
							className='bg-[transparent] md:text-[20px] text-[16px]'
						/>
						<CommandList className='w-full md:w-[679px] !bg-[#3c3c3c]'>
							<CommandEmpty>
								<NotFoundItem />
							</CommandEmpty>
							<CommandGroup>
								{statusesFromTo?.map(status => (
									<CommandItem
										key={status.value}
										value={status.value}
										onSelect={value => {
											setSelectedStatus(
												statusesFromTo?.find(
													priority => priority.value === value
												) || null
											)
											setOpen(false)
											swapCheck2(status.label)
										}}
									>
										<div className='flex items-center justify-between w-full'>
											<div className='flex items-center gap-[3px]'>
												<Avatar src={status.icon} />
												<span className='text-[20px] text-[#205BC9] flex flex-col items-start'>
													{status.label}
													<span className='text-[14px] md:text-[20px] text-[#BDBDBD]'>
														{status.value}
													</span>
												</span>
											</div>
											<span className='flex flex-col text-[20px]'>
												{status.cryptoNumbers}
												<span className='text-[14px] md:text-[20px] text-[#BDBDBD]'>
													{status.moreLess}
												</span>
											</span>
										</div>
									</CommandItem>
								))}
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
		</div>
	)
}
