import { Avatar } from '@nextui-org/react'
import React from 'react'

const NotFoundItem = () => {
	return (
		<div className='flex flex-col items-center gap-[15px]'>
			<Avatar src='/main/nofoundItem.svg' className='h-[70px] max-w-[70px] md:h-[130px]  md:max-w-[130px] w-full'/>
			<p className='text-[32px] font-medium'>No crypto for withdrawal</p>
		</div>
	)
}

export default NotFoundItem