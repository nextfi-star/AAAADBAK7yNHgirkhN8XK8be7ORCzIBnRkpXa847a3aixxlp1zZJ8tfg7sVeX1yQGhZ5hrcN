'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { useUserStore } from '@/hooks/useUserData'
import {
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
	useDisclosure,
} from '@heroui/modal'
import { Button } from '@heroui/button'
import { ChevronLeft, SendHorizontal, X } from 'lucide-react'
import A_ChatUploader from './A_ChatUploader'
import { useChatStore, useThemeStore } from '@/store/useChatStore'
import { Divider } from '@heroui/divider'

export const A_Chat = () => {
	const user = useUserStore(state => state.user)
	const {
		tid,
		messages,
		setTid,
		loadChatHistory,
		sendChatMessage,
		addMessage,
	} = useChatStore()
	const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
	const { theme } = useThemeStore()
	const [show, setShow] = useState(false)
	const [showCancel, setShowCancel] = useState(false)
	const [newMessage, setNewMessage] = useState('')
	const messagesEndRef = useRef<HTMLDivElement>(null)
	const [fileName, setFileName] = useState('')

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
	}

	useEffect(() => {
		scrollToBottom()
	}, [messages])

	useEffect(() => {
		if (isOpen && user?.csrf) {
			setTid(user.uid)
			loadChatHistory(user.csrf)
			const intervalId = setInterval(() => {
				loadChatHistory(user.csrf)
			}, 3000)
			return () => clearInterval(intervalId)
		}
	}, [isOpen, user?.csrf, setTid, loadChatHistory])

	const handleSendMessage = async () => {
		if (!newMessage.trim() || !user?.csrf) return
		await sendChatMessage(user.csrf, newMessage)
		addMessage({
			tid: tid || '',
			text: '@' + newMessage,
			time: Date.now(),
			status: 0,
			sender: 'me',
		})
		setNewMessage('')
	}
	const DeleteChat = () => {
		setNewMessage('')
		setShow(!show)
		setShowCancel(!showCancel)
		onClose()
	}
	return (
		<>
			<Button
				onPress={onOpen}
				className='fixed z-[80] md:bottom-[3.5rem] bottom-[2.5rem] md:right-[3.5rem] right-[2.5rem] p-0 m-0 min-w-[64px] min-h-[64px] rounded-full hidden sm:flex'
			>
				<Image
					src='/chatIcon.svg'
					width={37}
					height={37}
					priority
					alt='Chat icon'
				/>
			</Button>
			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				className='!max-w-[428px]'
				classNames={{
					base: 'z-[9999] rounded-0 m-0 xl:rounded-[50px] dark:bg-[#0C0C0C] px-[20px] pt-[30px] !max-w-[428px] min-h-[650px]',
					wrapper: '!items-end !justify-end z-[9999999]',
					closeButton: 'hidden',
				}}
			>
				<ModalContent className='!m-[0_40px_0px]'>
					{onClose => (
						<>
							<ModalHeader className='flex items-center justify-between w-full'>
								<ChevronLeft onClick={onClose} className='cursor-pointer' />
								<h1 className='text-[24px]'>Support Chat</h1>
								<X
									onClick={() => setShowCancel(!showCancel)}
									className='cursor-pointer'
								/>
							</ModalHeader>
							<ModalBody className='flex flex-col items-center justify-between min-h-[522px] px-0'>
								<div className='flex flex-col items-center gap-[26px]'>
									<Image
										src={
											theme === 'dark'
												? '/footer/logo.svg'
												: '/footer/logo_for_light.svg'
										}
										width={124}
										height={52}
										priority
										alt='Chat icon'
									/>
									<span className='text-[18px] font-medium text-[#FFFFFF66]'>
										Your assistant in any questions{' '}
									</span>
								</div>

								<>
									{!show ? (
										<div className='flex flex-col items-center w-full rounded-[30px] bg-[#7676801F] px-[24px] py-[25px]'>
											<span
												onClick={() => setShow(prev => !prev)}
												className='text-[15px] font-medium cursor-pointer'
											>
												English
											</span>
											<Divider className='mt-[16px] mb-[12px]' />
											<span
												onClick={() => setShow(prev => !prev)}
												className='text-[15px] font-medium cursor-pointer'
											>
												Russian
											</span>
											<Divider className='mt-[16px] mb-[12px]' />
											<span
												onClick={() => setShow(prev => !prev)}
												className='text-[15px] font-medium cursor-pointer'
											>
												العربية
											</span>
											<Divider className='mt-[16px] mb-[12px]' />
											<span
												onClick={() => setShow(prev => !prev)}
												className='text-[15px] font-medium cursor-pointer'
											>
												中文
											</span>
										</div>
									) : (
										<>
											{!showCancel ? (
												<div className='md:max-h-[450px] max-h-[524px] overflow-y-auto w-full'>
													{messages.map((msg, index) => {
														const decoded = msg.text
														const isAdmin = decoded.startsWith('#')
														const isUser = decoded.startsWith('@')
														const displayText = decoded.substring(1)
														return (
															<div
																key={index}
																className={`flex items-center w-full gap-2 mb-4 ${
																	isUser ? 'justify-end' : 'justify-start'
																}`}
															>
																{isAdmin && (
																	<Image
																		src='/chat/operator.svg'
																		width={40}
																		height={40}
																		priority
																		alt='Operator icon'
																	/>
																)}
																<div className='flex items-center gap-[5px]'>
																	<span className='text-base font-medium p-2 bg-[#7676801F] rounded-[35px] max-w-[256px] break-words'>
																		{displayText}
																	</span>
																	<span className='text-xs text-[#888888]'>
																		{new Date(msg.time).toLocaleTimeString()}
																	</span>
																</div>
															</div>
														)
													})}
													<div ref={messagesEndRef} />
													<div className='BOT flex flex-wrap gap-[7px] items-center mb-[20px]'>
														<button className='bg-transparent border-1 border-solid dark:border-white border-[#0c0c0c] text-[16px] text-[#0c0c0c] dark:text-white rounded-[18px] px-[11px] py-[4px]'>
															Account security
														</button>
														<button className='bg-transparent border-1 border-solid dark:border-white border-[#0c0c0c] text-[16px] text-[#0c0c0c] dark:text-white rounded-[18px] px-[11px] py-[4px]'>
															Swap
														</button>
														<button className='bg-transparent border-1 border-solid dark:border-white border-[#0c0c0c] text-[16px] text-[#0c0c0c] dark:text-white rounded-[18px] px-[11px] py-[4px]'>
															Account security
														</button>
														<button className='bg-transparent border-1 border-solid dark:border-white border-[#0c0c0c] text-[16px] text-[#0c0c0c] dark:text-white rounded-[18px] px-[11px] py-[4px]'>
															Swap
														</button>
														<button className='bg-transparent border-1 border-solid dark:border-white border-[#0c0c0c] text-[16px] text-[#0c0c0c] dark:text-white rounded-[18px] px-[11px] py-[4px]'>
															Account security
														</button>
														<button className='bg-transparent border-1 border-solid dark:border-white border-[#0c0c0c] text-[16px] text-[#0c0c0c] dark:text-white rounded-[18px] px-[11px] py-[4px]'>
															Swap
														</button>
														<button className='bg-transparent border-1 border-solid dark:border-white border-[#0c0c0c] text-[16px] text-[#0c0c0c] dark:text-white rounded-[18px] px-[11px] py-[4px]'>
															Account security
														</button>
														<button className='bg-transparent border-1 border-solid dark:border-white border-[#0c0c0c] text-[16px] text-[#0c0c0c] dark:text-white rounded-[18px] px-[11px] py-[4px]'>
															Swap
														</button>
													</div>
													<div className='flex items-center gap-[10px] w-full pb-[.5rem]'>
														{/* <A_ChatUploader
															setFileName={setFileName}
															onFileUploaded={(filename: string) => {
																addMessage({
																	tid: tid || '',
																	text: '@' + filename,
																	time: Date.now(),
																	status: 0,
																	sender: 'me',
																})
															}}
														/> */}
														<form
															onSubmit={e => {
																e.preventDefault()
																handleSendMessage()
															}}
															className='relative flex items-center gap-[10px] w-full pb-[.5rem]'
														>
															<input
																type='text'
																value={newMessage}
																autoFocus
																onChange={e => setNewMessage(e.target.value)}
																className='flex-1 border px-[25px] pr-[59px] py-4 rounded-[30px] bg-[#7676801F] w-full overflow-hidden'
															/>
															<button
																type='submit'
																className='w-fit !m-0 !p-0 absolute top-[11px] right-[18px] bg-transparent'
															>
																<SendHorizontal
																	strokeWidth={1}
																	className='w-[32px] h-[32px]'
																/>
															</button>
														</form>
													</div>
												</div>
											) : (
												<div className='flex flex-col items-center justify-center w-full rounded-[30px] gap-[10px] bg-[#7676801F] py-[10px] px-[14px]'>
													<span className='text-[15px] dark:text-[#EFEFEF] text-[#3A3939] font-medium'>
														Are you sure you want to end chat?
													</span>
													<Button
														className='dark:text-[#EFEFEF] text-[#3A3939] text-[18px] font-semibold bg-[#EEEEEE] dark:bg-[#000] w-full rounded-[20px] py-[8px]'
														onPress={DeleteChat}
													>
														End Chat
													</Button>
													<Button
														className='dark:text-[#FFFFFF66] text-[#3A3939] text-[18px] font-semibold bg-transparent dark:bg-transparent w-full py-[8px]'
														disableAnimation
														onPress={() => setShowCancel(!showCancel)}
													>
														Cancel
													</Button>
												</div>
											)}
										</>
									)}
								</>
							</ModalBody>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}
