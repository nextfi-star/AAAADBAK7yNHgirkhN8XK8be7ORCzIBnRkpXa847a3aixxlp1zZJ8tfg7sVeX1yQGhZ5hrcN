import Image from 'next/image'
import { NextPage } from 'next'
import { Alert_nickname } from './Alert_nickname'
import { Button } from '@nextui-org/button'
import { useThemeStore } from '@/store'
import { Skeleton } from '@nextui-org/skeleton'
import { Snippet } from '@nextui-org/snippet'

export const Profile_perosnalinfo: NextPage = () => {
	const { user } = useThemeStore()
	if (!user) {
		return (
			<Skeleton className='hidden sm:block profile__info profile_blocks_border !bg-[#fff] dark:!bg-[#1e1e1e66] !shadow-medium dark:!shadow-none !rounded-[30px] min-h-[180px]' />
		)
	}
	return (
		<section className='personal__content flex flex-col w-full'>
			<h1 className='personal__content-title'>
				<Image
					alt='picture'
					height={30}
					quality={100}
					src={'/main/profile_page/info_icon.svg'}
					width={30}
				/>
				Personal Info
			</h1>
			<article className='flex items-center justify-between gap-[5px]'>
				<span>Nickname</span>
				<span>username123</span>
				<div className='min-w-[181px] flex justify-end'>
					<Alert_nickname propsItem={'Change'} />
				</div>
			</article>

			<span className='devider w-full h-[1px] bg-slate-100 block my-[24px]' />

			<article className='flex items-center justify-between gap-[5px]'>
				<span>User ID</span>
				<span>{user.uid || '589511219100'}</span>

				<Snippet
					symbol='Copy'
					className='border-0 text-[16px] border-solid rounded-[50px] !bg-transparent !text-[#0c0c0c] dark:!text-[#eeeeee] p-0'
					classNames={{
						pre: 'hidden', 
						copyButton: 'p-0 border-1 !border-[#4d4d4d] dark:!border-[#4d4d4d] h-[39.98px]'
					}}
				>
					<span className='hidden'>{user.uid || '589511219100'}</span>
				</Snippet>
			</article>
		</section>
	)
}
