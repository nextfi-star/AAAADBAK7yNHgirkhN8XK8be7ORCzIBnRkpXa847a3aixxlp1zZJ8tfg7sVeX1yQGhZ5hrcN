'use client'
import { DateRangePicker } from "@heroui/date-picker"
import { useThemeStore } from '@/store/index'
import { Profile_industry } from './Profile__industry'
import DataTable_verif from './DataTable_verif'
import DataTable_unverif from './DataTable_unverif'
import DataTable_unverif_mobile from './DataTable_unverif_mobile'
import DataTable_verif_mobile from './DataTable_verif_mobile'
import { useParams, usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

export const Profile_payments = () => {
	const { verifyState } = useThemeStore()
	const { locale } = useParams()
	const pathname = usePathname()
	const t = useTranslations('overview')
	return (
		<>
			{!verifyState && <Profile_industry unicClass={'hidden__when'} />}
			<div
				className={`payments !shadow-medium dark:!shadow-none !bg-[#fff] dark:!bg-[#1e1e1e66] !px-[10px] !mb-0 !my-0 sm:!mt-0 ${pathname === `/${locale}/over` ? '!mt-[68px]' : '!mt-[-19px]'}`}
			>
				<div className='flex flex-col sm:flex-row justify-between gap-[10px] sm:gap-[32px] w-full items-center py-4 !rounded-[30px] px-[25px]'>
					<h3 className='text-[20px] md:text-[32px] font-semibold'>
						{!verifyState ? t('payments') : t('assets')}
					</h3>
					<div>
						<DateRangePicker className='max-w-xs' label='Stay duration' />
					</div>
				</div>
				<div className='flex w-full'>
					{!verifyState ? (
						<div className='w-full h-full'>
							<div className='hidden lg:flex'>
								<DataTable_unverif />
							</div>
							<div className='flex lg:hidden'>
								<DataTable_unverif_mobile />
							</div>
						</div>
					) : (
						<div className='w-full h-full'>
							<div className='hidden lg:flex'>
								<DataTable_verif />
							</div>
							<div className='flex lg:hidden'>
								<DataTable_verif_mobile />
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	)
}
