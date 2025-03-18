'use client'
import { Link } from '@/i18n/routing'
import { Snippet } from '@heroui/snippet'
import { Button } from '@heroui/button'
import { Spinner } from '@heroui/spinner'
import { useUserStore } from '@/hooks/useUserData'
import { useTranslations } from 'next-intl'
import { Avatar } from '@/components/shared/Avatar'


interface Props {
	verify: boolean
	toggleActive?: () => void
}
export const Profile_info = ({ verify, toggleActive }: Props) => {
	const user = useUserStore(state => state.user)
	if (user?.verification) {
		console.log('verified')
	}
	const t = useTranslations('overview')
	return (
		<section className='hidden sm:block profile__info profile_blocks_border !bg-[#fff] dark:!bg-[#1e1e1e66] !shadow-medium dark:!shadow-none !rounded-[30px]'>
			<div className='profile__info__block__left'>
				<div className='profile__info__block__left__avatar'>
					<Avatar
						className="object-contain rounded-full min-w-[78px]"
						height={63}
						width={63}
					/>
				</div>
				<div className='profile__info__block__left__text'>
					<h3 className='profile__info__block__left__text_name '>
						{' '}
						{user?.username ? user?.username : <Spinner />}
					</h3>
					{user?.email ? (
						<div className='profile__info__block__left__text_email'>
							{!user?.email ? <Spinner /> : <p>{user?.email}</p>}
						</div>
					) : (
						<div className='profile__info__block__left__text_email'>
							{!user?.phone ? <Spinner /> : <p>+{user?.phone}</p>}
						</div>
					)}
					<div className='profile__info__block__left__text__id'>
						<Snippet className='bg-transparent py-[5px] px-0' symbol=''>
							{user?.uid || <Spinner />}
						</Snippet>
					</div>
				</div>
			</div>

			<div className='profile__info__block__right'>
				<div className='profile__info__block___right__block'>
					<h5 className='profile__info__block___right__main__text'>
						{t('verification')}
					</h5>
					{user && (user.verification === 0 || user.verification === 1) ? (
						<Link href='#' >
							<Button className='profile__info__block___right__additional__text border-1 border-solid !border-[#4d4d4d] dark:!border-[#4d4d4d]  rounded-[50px] px-[10px] !bg-transparent'>
							{t('goVerif')}
							</Button>
						</Link>
					) : (
						<Button
							variant='bordered'
							className={`profile__info__block___right__verification_block__button passed profile__info__block___right__additional__text border-1 border-solid !border-[#4d4d4d] dark:!border-[#4d4d4d] rounded-[50px] !px-[10px] !bg-transparent`}
						>
							{t('verifDone')}
						</Button>
					)}
				</div>
				<div className='profile__info__block___right__block'>
					<h5 className='profile__info__block___right__main__text'>
						{t('country/region')}
					</h5>
					<Button className='profile__info__block___right__additional__text border-1 !border-[#4d4d4d] dark:!border-[#4d4d4d] border-solid rounded-[50px] px-[10px] !bg-transparent'>
						{user ? user?.country : <Spinner />}
					</Button>
				</div>
				<div className='profile__info__block___right__block'>
					<h5 className='profile__info__block___right__main__text'>
						{t('status')}
					</h5>
					<Button className='profile__info__block___right__additional__text border-1 border-[#4d4d4d] border-solid rounded-[50px] px-[10px] !bg-transparent'>
						{t('lvl')} {user?.xp || 1}
					</Button>
				</div>
			</div>
		</section>
	)
}
