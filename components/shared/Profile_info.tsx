'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { NextPage } from 'next'

import Copy from '../ui/Copy'
import { useThemeStore } from '../../store'

import { Link } from '@/i18n/routing'
import { Snippet } from '@nextui-org/snippet'

interface Props {
	verify: boolean
	toggleActive: () => void
}
export const Profile_info: NextPage<Props> = ({ verify, toggleActive }) => {
	const t = useTranslations('profile')
	const { theme } = useThemeStore()

	return (
		<section className='hidden sm:block profile__info profile_blocks_border'>
			<div className='profile__info__block__left'>
				<div className='profile__info__block__left__avatar'>
					<Image
						priority
						alt={'avatar'}
						className='object-contain rounded-full min-w-[78px]'
						height={63}
						src={'/main/avatar_noface.png'}
						width={63}
					/>
				</div>
				<div className='profile__info__block__left__text'>
					<h3 className='profile__info__block__left__text_name '>User user</h3>
					<p className='profile__info__block__left__text_email'>
						user@gmail.com
					</p>
					<div className='profile__info__block__left__text__id'>
						<Snippet className='bg-transparent p-[5px]' symbol=''>888888888в8888888 </Snippet>
					</div>
				</div>
			</div>

			<div className='profile__info__block__right'>
				<div className='profile__info__block___right__block'>
					<h5 className='profile__info__block___right__main__text'>
						{t('Verification')}
					</h5>
					{!verify ? (
						<Link
							className='profile__info__block___right__verification_block__button profile__info__block___right__additional__text'
							href='/verify'
							onClick={toggleActive}
						>
							{t('GoThroughVerification')}
						</Link>
					) : (
						<button
							className={`profile__info__block___right__verification_block__button passed profile__info__block___right__additional__text border-0`}
						>
							Verification passed
						</button>
					)}
				</div>
				<div className='profile__info__block___right__block'>
					<h5 className='profile__info__block___right__main__text'>
						{t('CountryRegion')}
					</h5>
					<select
						className='profile__info__block___right__additional__text'
						id=''
						name=''
					>
						<option value=''>UAE</option>
					</select>
				</div>
				<div className='profile__info__block___right__block'>
					<h5 className='profile__info__block___right__main__text'>
						{t('CommisionLevel')}
					</h5>
					<p className='profile__info__block___right__additional__text'>
						Level 1
					</p>
				</div>
			</div>
		</section>
	)
}
