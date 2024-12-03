'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { NextPage } from 'next'
import { DateRangePicker } from '@nextui-org/date-picker'
import { useThemeStore } from '@/store/index'
import { Profile_industry } from './Profile__industry'
import DataTable_verif from './DataTable_verif'
import DataTable_unverif from './DataTable_unverif'
import DataTable_unverif_mobile from './DataTable_unverif_mobile'
import DataTable_verif_mobile from './DataTable_verif_mobile'
import { useParams, usePathname } from 'next/navigation'

export const Profile_payments: NextPage = () => {
	const t = useTranslations('profile')
	const { verifyState } = useThemeStore()
	const { locale } = useParams()
	const pathname = usePathname()
	return (
		<>
			{!verifyState && <Profile_industry unicClass={'hidden__when'} />}
			<div
				className={`payments !shadow-medium dark:!shadow-none !bg-[#fff] dark:!bg-[#1e1e1e66] !px-[10px] !mb-0 !my-0 sm:!mt-0 ${pathname === `/${locale}/over` ? '!mt-[68px]' : '!mt-[-19px]'}`}
				
			>
				<div className='flex flex-col sm:flex-row justify-between gap-[10px] sm:gap-[32px] w-full items-center py-4 !rounded-[30px] px-[25px]'>
					<h3 className='text-[20px] md:text-[32px] font-semibold'>
						{!verifyState ? 'Payments' : 'Assets'}
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
