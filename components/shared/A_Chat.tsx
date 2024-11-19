import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
	Divider,
	Avatar,
} from '@nextui-org/react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { socket } from '@/app/socket'
import { ChevronLeft, Images, X } from 'lucide-react'
type Message = {
	content: string
	time: string
	sender: 'me' | 'other'
}
export default function App() {
	const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
	const messagesEndRef = useRef<HTMLDivElement>(null)
	const [show, setShow] = useState(false)
	const [isConnected, setIsConnected] = useState(false)
	const [transport, setTransport] = useState('N/A')
	const [messages, setMessages] = useState<Message[]>([])
	const [newMessage, setNewMessage] = useState('')

	const scrollToBottom = () => {
		if (messagesEndRef.current) {
			messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
		}
	}
	const sendMessage = () => {
		if (newMessage.trim()) {
			const message: Message = {
				content: newMessage,
				sender: 'me',
				time: new Date().toLocaleTimeString(), // Добавляем время отправки
			}
			socket.emit('message', message) // Отправка сообщения на сервер
			setMessages(prev => [...prev, message]) // Добавляем сообщение в стейт
			setNewMessage('') // Очищаем поле ввода
		}
	}

	useEffect(() => {
		if (socket.connected) {
			onConnect()
		}

		function onConnect() {
			setIsConnected(true)
			setTransport(socket.io.engine.transport.name)
			socket.io.engine.on('upgrade', transport => {
				setTransport(transport.name)
			})
		}

		function onDisconnect() {
			setIsConnected(false)
			setTransport('N/A')
		}

		// Получаем историю сообщений
		socket.on('allMessages', messages => {
			setMessages(messages) // Устанавливаем историю сообщений
		})

		// Обработка нового сообщения
		socket.on('message', message => {
			setMessages(prev => {
				// Проверяем, если такое сообщение уже есть
				if (
					!prev.some(
						msg =>
							msg.content === message.content && msg.sender === message.sender
					)
				) {
					return [...prev, message] // Добавляем новое сообщение
				}
				return prev // Если сообщение уже есть, не добавляем
			})
		})

		socket.on('connect', onConnect)
		socket.on('disconnect', onDisconnect)

		return () => {
			socket.off('connect', onConnect)
			socket.off('disconnect', onDisconnect)
			socket.off('message')
			socket.off('allMessages')
		}
	}, [])

	useEffect(() => {
		scrollToBottom()
	}, [messages])
	const DeleteChat = () => {
		setNewMessage('')
		setMessages([])
		onClose()
	}
	return (
		<>
			<Button
				onPress={onOpen}
				className='fixed z-[80] md:bottom-[3.5rem] bottom-[2.5rem] md:right-[3.5rem] right-[2.5rem] p-0 m-0 min-w-[64px] min-h-[64px] rounded-full'
			>
				<Image
					src={'/chatIcon.svg'}
					width={37}
					height={37}
					priority
					alt='Chat icon'
				/>
			</Button>
			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				classNames={{
					base: 'z-[9999] rounded-0 m-0 xl:rounded-[50px] bg-[#0C0C0C] px-[20px] pt-[30px]',
					wrapper: '!items-end !justify-end z-[9999999]',
					closeButton: 'hidden',
				}}
			>
				<ModalContent className='!m-0 !mb-[0px] md:!mr-[40px]'>
					{onClose => (
						<>
							<ModalHeader className='flex items-center justify-between w-full'>
								<ChevronLeft onClick={onClose} />
								<h1 className='text-[24px]'>Support Chat</h1>
								<X onClick={DeleteChat} />
							</ModalHeader>
							<ModalBody className='flex flex-col items-center justify-between min-h-[522px] px-0 !m-0'>
								<div className='flex flex-col items-center gap-[26px]'>
									<Image
										src={'/footer/logo.svg'}
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
										<div className='flex flex-col w-full'>
											<div className='md:max-h-[450px] max-h-[524px] overflow-y-auto'>
												{messages.map((message, index) => (
													<div
														key={index}
														className={`flex items-center w-full gap-[10px] mb-4 ${
															message.sender === 'me'
																? 'justify-end'
																: 'justify-start'
														}`}
													>
														<div className='flex items-center gap-[10px] mb-4 '>
															{message.sender === 'me' && (
																<Image
																	src={'/chat/operator.svg'}
																	width={40}
																	height={40}
																	priority
																	alt='Operator icon'
																/>
															)}
															<span className='text-[15px] font-medium p-[7px_27px] bg-[#7676801F] rounded-[20px] break-words max-w-[256px]'>
																{!message.content ?
																	'Please select the language you prefer to continue' : message.content}
															</span>
															<span className='text-[13px] font-medium text-[#888888]'>
																{message.time}
															</span>
														</div>
														<div ref={messagesEndRef} />
													</div>
												))}
											</div>
											<form onSubmit={(e) => e.preventDefault()} className='relative flex items-center gap-[10px] w-full'>
												<Images className='bg-transparent absolute top-[11px] left-[17px] max-w-[32px] w-full' />
												<input
													type='text'
													value={newMessage}
													onChange={e => setNewMessage(e.target.value)}
													className='flex-1 border pl-[65px] py-4 rounded-[30px] bg-[#7676801F] w-full'
												/>
												<button
													type='submit'
													className='w-fit !m-0 !p-0 absolute top-[7px] right-[18px] bg-transparent hover:bg-transparent'
													onClick={sendMessage}
												>
													<Avatar
														src='/chat/send 1.svg'
														className='bg-transparent max-w-[32px] w-full'
													/>
												</button>
											</form>
										</div>
									)}
								</>
							</ModalBody>
							<ModalFooter></ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}
