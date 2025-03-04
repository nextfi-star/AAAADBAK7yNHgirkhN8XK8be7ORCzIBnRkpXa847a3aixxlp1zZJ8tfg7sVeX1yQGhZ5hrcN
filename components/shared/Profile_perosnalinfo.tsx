'use client'
import Image from 'next/image'
import { Alert_nickname } from './Alert_nickname'
import { Snippet } from "@heroui/snippet"
import { Spinner } from "@heroui/spinner"
import { useUserStore } from '@/hooks/useUserData'
import { useTranslations } from 'next-intl'

export const Profile_perosnalinfo = () => {
	const user = useUserStore((state) => state.user)
	const t = useTranslations('profile')
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
				{t('personInfo')}
			</h1>
			<article className='flex items-center justify-between gap-[5px]'>
				<span>{t('nickname')}</span>
				<span className='flex !justify-center w-full '>{user?.username || <Spinner />}</span>
				<div className='min-w-[181px] flex justify-end'>
					<Alert_nickname propsItem={'Change'} />
				</div>
			</article>

			<span className='devider w-full h-[1px] bg-slate-100 block my-[24px]' />

			<article className='flex items-center justify-between gap-[5px]'>
				<span>{t('userID')}</span>
				<span>{user?.uid || <Spinner />}</span>

				<Snippet
					symbol='Copy'
					className='border-0 text-[16px] border-solid rounded-[50px] !bg-transparent !text-[#0c0c0c] dark:!text-[#eeeeee] p-0'
					classNames={{
						pre: 'hidden',
						copyButton:
							'p-0 border-1 !border-[#4d4d4d] dark:!border-[#4d4d4d] h-[39.98px]',
					}}
				>
					<span className='hidden'>{user?.uid || <Spinner />}</span>
				</Snippet>
			</article>
		</section>
	)
}
