'use client'
import { DateRangePicker } from '@heroui/date-picker'
import { NextPage } from 'next'
import { useTranslations } from 'next-intl'

import { useThemeStore } from '../../store/useChatStore'
import DataTable_unverif from './DataTable_unverif'
import DataTable_verif from './DataTable_verif'
import { Profile_industry } from './Profile__industry'

export const Profile_payments: NextPage = () => {
	const t = useTranslations('profile')
	const { verifyState } = useThemeStore()

	return (
		<>
			{!verifyState && <Profile_industry unicClass={'hidden__when'} />}
			<div className='payments shadow-lg'>
				<div className='flex flex-col sm:flex-row justify-between gap-[10px] sm:gap-[32px] w-full items-center py-4 my-[20px]'>
					<h3 className='text-[18px] md:text-[32px] font-semibold'>
						{!verifyState ? 'Payments' : 'Assets'}
					</h3>
					<div>
						<DateRangePicker className='max-w-xs' label='Stay duration' />
					</div>
				</div>
				<div className='flex'>
					{!verifyState ? <DataTable_unverif /> : <DataTable_verif />}
				</div>
			</div>
		</>
	)
}
