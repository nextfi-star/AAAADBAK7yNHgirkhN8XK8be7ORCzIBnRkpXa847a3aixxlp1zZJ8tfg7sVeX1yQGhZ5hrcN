import { Avatar } from "@heroui/react"
import React from 'react'

interface Props {
	content?: string
	subContent?: string
}
const NotFoundItem = ({ content, subContent }: Props) => {
	return (
		<div className='flex flex-col items-center gap-[15px] w-full'>
			<Avatar
				src='/main/nofoundItem.svg'
				className='h-[70px] max-w-[70px] md:h-[130px]  md:max-w-[130px] w-full'
			/>
			<p className='text-[32px] font-medium'>
				{content ? content : 'No crypto for withdrawal'}
			</p>
			{subContent && <p className='text-[20px]'>{subContent}</p>}
		</div>
	)
}

export default NotFoundItem
