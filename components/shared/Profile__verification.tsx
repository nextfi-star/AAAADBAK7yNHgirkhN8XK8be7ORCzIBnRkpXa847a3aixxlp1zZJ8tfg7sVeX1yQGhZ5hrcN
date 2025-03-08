'use client'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { useThemeStore } from '../../store/useChatStore'
import { Accept_icon } from '../ui/Accept_icon'

interface Props {
	toggleActive: () => void
	verify: boolean
}
export const Profile_verification = ({ toggleActive, verify }: Props) => {
	const { theme } = useThemeStore()
	const t = useTranslations('overview')
	return (
		<>
			<section className='profile__verification profile_blocks_border !bg-[#fff] dark:!bg-[#1e1e1e66] !shadow-medium dark:!shadow-none w-full'>
				<h3>{t('fullAcc')}</h3>
				<div className='profile__verification__blocks__list'>
					<div className='profile__verification__info__block profile_blocks_border !bg-[#F2F7FF] dark:!bg-[#1e1e1e66]'>
						<h5 className='profile__verification__info__block_step_text'>
							{t('step1')}
						</h5>
						<h4 className='profile__verification__info__block_main_text !text-[22px] whitespace-nowrap'>
							{t('step1Desc')}
						</h4>
						<Accept_icon color={theme === 'dark' ? 'white' : 'black'} />
					</div>
					<div className='profile__verification__info__block profile_blocks_border !gap-[13px] !bg-[#F2F7FF] dark:!bg-[#1e1e1e66]'>
						<h5 className='profile__verification__info__block_step_text'>
							{t('step2')}
						</h5>
						<h4 className='profile__verification__info__block_main_text'>
							{t('step2Descperson')}
						</h4>
						<p className='profile__verification__info__block_additional_text !text-[14px]'>
							{t('step2Descperson2')}
						</p>
						<Link
							className='profile__verification__info__block_button flex justify-center !py-[13px]'
							href={'#'}
							onClick={toggleActive}
						>
							{t('verify')}
						</Link>
					</div>
				</div>
			</section>

			<section className='w-full container verify_mobile !bg-transparent md:!bg-[#fff] dark:!bg-transparent md:dark:!bg-[#1e1e1e66] !shadow-none md:!shadow-medium dark:!shadow-none'>
				<h5 className='w-full text-[20px] mb-[32px] '>{t('fullAcc')}</h5>
				<div className='w-full bg-[#515151] rounded-[10px]'>
					<div className='max-w-[50%] min-h-[12px] bg-[#3F7EF3] rounded-[10px]' />
				</div>
				<div className='w-full  flex justify-between'>
					<span className='text-[12px]'>{t('signup')}</span>
					<span className='text-[12px]'>{t('verfiIden')}</span>
					<span className='text-[12px]'>{t('success')}</span>
				</div>
				<Link
					className='w-fit text-[14px] font-medium mt-[5px] py-[10px] px-[40px] bg-[#205BC9] rounded-[50px] text-white'
					href={'#'}
					onClick={toggleActive}
				>
					{t('verifyNow')}
				</Link>
			</section>
		</>
	)
}
