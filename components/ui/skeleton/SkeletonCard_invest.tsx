import { Card, Skeleton, Spinner } from '@nextui-org/react'
import { NextPage } from 'next'

export const SkeletonCard_invest: NextPage = () => {
	return (
		<Card
			className='w-full  bg-[#1E1E1E66] rounded-[30px] min-h-[360px] max-w-[650px] flex items-center justify-center'
			radius='lg'
		>
			<Spinner className='' />
			<Skeleton className='rounded-lg' disableAnimation>
				{/* <div className='min-h-[360px] rounded-lg relative'></div> */}
			</Skeleton>
		</Card>
	)
}
