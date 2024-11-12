import React from 'react'
import { NextPage } from 'next'
import { ProfileBurger_accordeon } from './ProfileBurger_accordeon'

interface Props {
	showSection: boolean
	activeTab: string
	handleTabClick: (value: string) => void
}

export const ProfileBurger_menu_list: NextPage<Props> = ({
	showSection,
	activeTab,
	handleTabClick,
}) => {
	return (
		<>
			<div className='flex justify-between items-center gap-[32px] overflow-x-auto overflow-y-hidden w-full border-0 border-b border-solid border-b-gray-300 py-[9px]'>
				{['Profile', 'Security', 'Verification', 'Authorized Devices'].map(
					tab => (
						<span
							key={tab}
							className={`cursor-pointer flex-shrink-0 ${
								activeTab === tab ? 'tab__active' : ''
							}`}
							onClick={() => handleTabClick(tab)}
						>
							{tab}
						</span>
					)
				)}
			</div>

			<ProfileBurger_accordeon
				activeTab={activeTab}
				showSection={showSection}
			/>
		</>
	)
}
