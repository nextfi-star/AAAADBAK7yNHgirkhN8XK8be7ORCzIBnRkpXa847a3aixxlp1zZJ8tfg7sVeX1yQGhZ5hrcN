import { Card, Skeleton } from '@nextui-org/react'
import { NextPage } from 'next'
export const SkeletonCard_invest: NextPage = () => {
	return (
		<Card
			className='w-full block bg-[#1E1E1E66] rounded-[30px] min-h-[360px] max-w-[650px]'
			radius='lg'
		>
			<Skeleton className='rounded-lg'>
				<div className='min-h-[360px] rounded-lg'></div>
			</Skeleton>
		</Card>
	)
}
