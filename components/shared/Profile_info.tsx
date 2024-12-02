'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { NextPage } from 'next'
import { Link } from '@/i18n/routing'
import { Snippet } from '@nextui-org/snippet'
import { Button } from '@nextui-org/button'
import { Skeleton } from '@nextui-org/skeleton'


interface Props {
	verify: boolean
	toggleActive: () => void
}
export const Profile_info: NextPage<Props> = ({ verify, toggleActive }) => {
	const t = useTranslations('profile')
	const userData = localStorage.getItem('userData')
	const user = userData ? JSON.parse(userData) : null

	if (!user) {
		return (
			<Skeleton className='hidden sm:block profile__info profile_blocks_border !bg-[#fff] dark:!bg-[#1e1e1e66] !shadow-medium dark:!shadow-none !rounded-[30px] min-h-[180px]' />
		)
	}
	return (
		<section className='hidden sm:block profile__info profile_blocks_border !bg-[#fff] dark:!bg-[#1e1e1e66] !shadow-medium dark:!shadow-none !rounded-[30px]'>
			<div className='profile__info__block__left'>
				<div className='profile__info__block__left__avatar'>
					<Image
						priority
						alt={'avatar'}
						className='object-contain rounded-full min-w-[78px]'
						height={63}
						src={`/${user.logo}` || '/main/avatar_noface.png'}
						width={63}
					/>
				</div>
				<div className='profile__info__block__left__text'>
					<h3 className='profile__info__block__left__text_name '>User user</h3>
					<p className='profile__info__block__left__text_email'>
						{user.email || user.phone || 'user***mail.com'}
					</p>
					<div className='profile__info__block__left__text__id'>
						<Snippet className='bg-transparent py-[5px] px-0' symbol=''>
							{user.uid}
						</Snippet>
					</div>
				</div>
			</div>

			<div className='profile__info__block__right'>
				<div className='profile__info__block___right__block'>
					<h5 className='profile__info__block___right__main__text'>
						{t('Verification')}
					</h5>
					{!verify ? (
						<Link href='#' onClick={toggleActive}>
							<Button className='profile__info__block___right__additional__text border-1 border-solid !border-[#4d4d4d] dark:!border-[#4d4d4d]  rounded-[50px] px-[10px] !bg-transparent'>
								{t('GoThroughVerification')}
							</Button>
						</Link>
					) : (
						<Button
							variant='bordered'
							className={`profile__info__block___right__verification_block__button passed profile__info__block___right__additional__text border-1 border-solid !border-[#4d4d4d] dark:!border-[#4d4d4d] rounded-[50px] !px-[10px] !bg-transparent`}
						>
							Verification passed
						</Button>
					)}
				</div>
				<div className='profile__info__block___right__block'>
					<h5 className='profile__info__block___right__main__text'>
						{t('CountryRegion')}
					</h5>
					<Button className='profile__info__block___right__additional__text border-1 !border-[#4d4d4d] dark:!border-[#4d4d4d] border-solid rounded-[50px] px-[10px] !bg-transparent'>
						UAE
					</Button>
				</div>
				<div className='profile__info__block___right__block'>
					<h5 className='profile__info__block___right__main__text'>
						Levels Activity
					</h5>
					<Button className='profile__info__block___right__additional__text border-1 border-[#4d4d4d] border-solid rounded-[50px] px-[10px] !bg-transparent'>
						Level 1
					</Button>
				</div>
			</div>
		</section>
	)
}
