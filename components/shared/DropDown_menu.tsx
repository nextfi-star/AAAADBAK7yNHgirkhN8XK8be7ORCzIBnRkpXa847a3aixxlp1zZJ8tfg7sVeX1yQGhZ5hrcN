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
import { Button } from '@heroui/button'
import { NextPage } from 'next'
import { useState } from 'react'
import { DropData } from './ProfileHeader'
import Image from 'next/image'
import { Spinner } from '@heroui/spinner'
import { useUserStore } from '@/hooks/useUserData'
import { Lock, Power } from 'lucide-react'
import { Logout_confirmation } from './Logout_confirmation'
import { useTranslations } from 'next-intl'
import { SecIcon } from '../ui/SecIcon'

interface Props {
	dropData?: DropData[]
	triggerTitle?: string
	data: DropData[]
	defaultItem?: string | JSX.Element
	hasProfile: boolean
}

export const DropDown_menu: NextPage<Props> = ({
	data,
	defaultItem,
	hasProfile,
}) => {
	const [selectedKeys, setSelectedKeys] = useState<DropData | null>(null)
	const [open, setOpen] = useState(false)
	const user = useUserStore(state => state.user)
	const t = useTranslations('burger')
	return (
		<div onMouseLeave={() => setOpen(!open)}>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild onMouseEnter={() => setOpen(true)}>
					<Button
						size='sm'
						className='!w-fit !min-w-fit flex justify-end !bg-transparent p-0 m-0'
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
					<Command className='!bg-[#eee] dark:!bg-[#1e1e1e] rounded-md'>
						<CommandList className='bg-[#eee] dark:bg-[#1e1e1e66]  px-[7px]'>
							<CommandGroup>
								{hasProfile && (
									<>
										<div
											className={'cursor-pointer flex items-center gap-[7px]'}
										>
											<Image
												alt={'avatar'}
												className='object-contain rounded-full'
												height={42}
												src={'/main/avatar_noface.png'}
												width={42}
											/>
											<div className='flex flex-col items-stretch'>
												<div className='text-[13px] dark:text-[#eeeeee] text-[#0c0c0c]'>
													{user?.email ? (
														<div className='profile__info__block__left__text_email'>
															{!user?.email ? (
																<Spinner />
															) : (
																<p>{user?.email}</p>
															)}
														</div>
													) : (
														<div className='profile__info__block__left__text_email'>
															{!user?.phone ? (
																<Spinner />
															) : (
																<p>+{user?.phone}</p>
															)}
														</div>
													)}
												</div>
												<div className='text-[13px] text-[#0c0c0c] dark:text-[#eeeeee] flex items-center gap-[5px]'>
													UID:
													{!user?.uid ? (
														<Spinner
															size='sm'
															classNames={{
																base: 'max-w-[5px]',
															}}
														/>
													) : (
														<p>{user?.uid}</p>
													)}
												</div>
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
													data.find(priority => priority.title === value) ||
														null
												)
												setOpen(false)
											}}
											className='data-[selected=true]:!bg-[#7676801F]'
										>
											<div className='flex flex-col w-full'>
												<div className='flex items-center gap-[10px]'>
													{item.icon}
													{item.key === 'out' ? (
														<div
															// onClick={item.logout}
															className='text-[14px] w-full flex justify-center'
														>
															{item.key === 'out' ? (
																<Logout_confirmation
																	title={t('sure')}
																	content={t('unDone')}
																	titleTriger={
																		<div className='flex items-center gap-[10px] w-fit !text-[14px]'>
																			<Power
																				className='min-w-[20px] min-h-[20px]'
																				strokeWidth={1}
																			/>
																			Log out
																		</div>
																	}
																/>
															) : (
																item.title
															)}
														</div>
													) : (
														<Link
															href={item.href}
															onClick={item.verify}
															className='text-[14px] w-full flex items-center lock-btn'
														>
															{item.title}{' '}
															{item.key === 'swap' ? (
																<SecIcon cls='lock min-w-[20px]' />
															) : (
																''
															)}
														</Link>
													)}
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
