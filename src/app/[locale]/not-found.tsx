import React from 'react'
import Link from 'next/link'

export default function notFound() {
	return (
		<div className='flex flex-col items-center justify-center gap-[20px]'>
			<h2 className='text-[20px] 2xl:text-[28px] font-bold'>
				Страница не найдена
			</h2>
			<p className='text-[20px] 2xl:text-[28px] font-bold'>
				К сожалению, запрашиваемая вами страница не существует.
			</p>
			<Link href='/'>
				<a className='text-[20px] 2xl:text-[28px] font-bold'>
					Вернуться на главную
				</a>
			</Link>
		</div>
	)
}
