'use client'
import { useTranslations } from 'next-intl'
import { NextPage } from 'next'

import { Accept_icon } from '../ui/Accept_icon'
import { useThemeStore } from '../../store'

import { Link } from '@/i18n/routing'

interface Props {
	toggleActive: () => void
}
export const Profile_verification: NextPage<Props> = ({ toggleActive }) => {
	const t = useTranslations('profile')
	const { theme } = useThemeStore()

	return (
		<>
			<section className='profile__verification profile_blocks_border !bg-[#fff] dark:!bg-[#1e1e1e66] !mb-[20px] !shadow-medium dark:!shadow-none'>
				<h3>{t('GetFullAccess')}</h3>
				<div className='profile__verification__blocks__list'>
					<div className='profile__verification__info__block profile_blocks_border'>
						<h5 className='profile__verification__info__block_step_text'>
							{t('StepOne')}
						</h5>
						<h4 className='profile__verification__info__block_main_text !text-[22px] whitespace-nowrap'>
							{t('CreateAccount')}
						</h4>
						<Accept_icon color={theme === 'dark' ? 'white' : 'black'} />
					</div>
					<div className='profile__verification__info__block profile_blocks_border !gap-[13px]'>
						<h5 className='profile__verification__info__block_step_text'>
							{t('StepTwo')}
						</h5>
						<h4 className='profile__verification__info__block_main_text'>
							{t('VerificationPersonality')}
						</h4>
						<p className='profile__verification__info__block_additional_text !text-[14px]'>
							{t('AdditionalTextInVerification')}
						</p>
						<Link
							className='profile__verification__info__block_button flex justify-center !py-[13px]'
							href={'#'}
							onClick={toggleActive}
						>
							{t('VerificationButton')}
						</Link>
					</div>
				</div>
			</section>

			<section className='w-full container mb-[40px] verify_mobile !bg-transparent md:!bg-[#fff] dark:!bg-transparent md:dark:!bg-[#1e1e1e66] !shadow-none md:!shadow-medium dark:!shadow-none'>
				<h5 className='w-full text-[20px] mb-[32px] '>
					Get full access to the platform
				</h5>
				<div className='w-full bg-[#515151] rounded-[10px]'>
					<div className='max-w-[50%] min-h-[12px] bg-[#3F7EF3] rounded-[10px]' />
				</div>
				<div className='w-full  flex justify-between'>
					<span className='text-[12px]'>Sign Up</span>
					<span className='text-[12px]'>Verify identity</span>
					<span className='text-[12px]'>Success</span>
				</div>
				<Link
					className='w-fit text-[14px] font-medium mt-[5px] py-[10px] px-[40px] bg-[#205BC9] rounded-[50px] text-white'
					href={'#'}
					onClick={toggleActive}
				>
					Verify now
				</Link>
			</section>
		</>
	)
}
