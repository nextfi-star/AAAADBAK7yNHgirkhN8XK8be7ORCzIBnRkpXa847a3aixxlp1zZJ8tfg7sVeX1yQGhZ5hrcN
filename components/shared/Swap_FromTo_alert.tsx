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
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { useThemeStore } from '@/store'
import { Divider } from '@nextui-org/divider'
import { Avatar } from '@nextui-org/react'
import { Cross2Icon } from '@radix-ui/react-icons'
import { ChevronDown } from 'lucide-react'
import { NextPage } from 'next'
import { useState } from 'react'
import NotFoundItem from './NotFoundItem'
type Status = {
	value: string
	label: string
	icon: string
	cryptoNumbers: string
	moreLess: string
}
interface Props {
	statuses?: Status[]
}
export const Swap_FromTo_alert: NextPage<Props> = ({ statuses }) => {
	const { swapPoppover_1, swapCheck, theme, replaceCurrency } = useThemeStore()
	const [open, setOpen] = useState(false)
	const [selectedStatus, setSelectedStatus] = useState<Status | null>(null)

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					className={`rounded-[50px] text-[#fff] hover:bg-transparent bg-transparent text-[24px] w-full max-w-[124px] md:max-w-[707px] px-0 !py-[8px] h-fit shadow-none outline-none`}
				>
					{selectedStatus ? (
						<div className='flex gap-[8px] items-center'>
							<Avatar src={selectedStatus.icon} />
							<DialogDescription className='text-[16px] text-[#0c0c0c] dark:text-white'>
								{swapPoppover_1}
							</DialogDescription>
							<ChevronDown
								strokeWidth={1}
								color={theme === 'dark' ? 'white' : 'black'}
							/>
						</div>
					) : (
						<div className='flex gap-[8px] items-center'>
							<Avatar src={'/'} />
							<DialogDescription className='text-[16px] text-[#0c0c0c] dark:text-white'>
								{swapPoppover_1}
							</DialogDescription>
							<ChevronDown
								strokeWidth={1}
								color={theme === 'dark' ? 'white' : 'black'}
							/>
						</div>
					)}
				</Button>
			</DialogTrigger>
			<DialogContent className='max-w-[90%] md:max-w-[38rem] w-full p-0 rounded-[20px]'>
				<DialogHeader>
					<DialogTitle className='text-[25px] md:text-[32px] p-[20px_41px_19px] flex items-center justify-between w-full'>
						Convert from
						<DialogClose asChild>
							<Cross2Icon className='h-[32px] w-[32px]' />
						</DialogClose>
					</DialogTitle>
					<Divider className='m-0' />
					<div className='flex items-center space-x-4'>
						<Command className='bg-[#eee] dark:bg-[#19191A] min-h-[650px]'>
							<CommandInput
								placeholder='Your choice'
								className='bg-[transparent] md:text-[20px] text-[16px]'
							/>
							<CommandList className='w-full h-full bg-[#eee] dark:bg-[#19191A] px-[10px] max-h-full'>
								<CommandEmpty>
									<NotFoundItem />
								</CommandEmpty>
								<CommandGroup>
									{statuses?.map(status => (
										<CommandItem
											value={status.value}
											key={status.value}
											onSelect={value => {
												setSelectedStatus(
													statuses?.find(
														priority => priority.value === value
													) || null
												)
												setOpen(false)
												swapCheck(status.label)
											}}
										>
											<DialogClose asChild>
												<div className='flex items-center justify-between w-full'>
													<div className='flex items-center gap-[3px]'>
														<Avatar src={status.icon} />
														<DialogDescription className='text-[20px] text-[#205BC9] flex flex-col items-start'>
															{status.label}
															<span className='text-[14px] md:text-[20px] text-[#BDBDBD]'>
																{status.value}
															</span>
														</DialogDescription>
													</div>
													<DialogDescription className='flex flex-col text-[20px]'>
														{status.cryptoNumbers}
														<span className='text-[14px] md:text-[20px] text-[#BDBDBD]'>
															{status.moreLess}
														</span>
													</DialogDescription>
												</div>
											</DialogClose>
										</CommandItem>
									))}
								</CommandGroup>
							</CommandList>
						</Command>
					</div>
				</DialogHeader>

				<DialogFooter className='p-0 m-0 h-0'>
					<DialogClose asChild>
						<Button
							type='button'
							variant='secondary'
							className='border-0 pointer-events-none opacity-0 w-fit rounded-[50px] bg-transparent hover:bg-transparent'
						></Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
