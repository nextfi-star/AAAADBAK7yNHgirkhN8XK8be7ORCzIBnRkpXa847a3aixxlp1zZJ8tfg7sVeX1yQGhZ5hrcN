'use client'
import { Button } from '@nextui-org/react'
import { useEffect } from 'react'

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
	useEffect(() => {
		console.error(error)
	}, [error])

	return (
		<div className='flex flex-col items-center justify-center gap-[40px] bg-white dark:bg-[#0c0c0c]'>
			<h2 className='text-[20px] 2xl:text-[28px] font-bold text-blue-700'>
				Something went wrong!
			</h2>
			<p className='text-blue-700 text-[20px] 2xl:text-[28px] font-bold'>{error.message}</p>
			<Button
				className='bg-[#0c0c0c] dark:bg-white text-blue-700 max-w-[250px]'
				onClick={() => reset()}
			>
				Try again
			</Button>
		</div>
	)
}
