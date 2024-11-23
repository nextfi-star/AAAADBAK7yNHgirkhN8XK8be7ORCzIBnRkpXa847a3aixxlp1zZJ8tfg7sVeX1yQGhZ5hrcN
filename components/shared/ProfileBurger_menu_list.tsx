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
			<div className='flex justify-between items-center pb-[9px] border-0 border-b border-solid border-[#fff] w-full'>
				{['Profile', 'Security', 'Verification', 'Devices'].map(
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
