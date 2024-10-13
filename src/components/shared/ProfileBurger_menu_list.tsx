import React from 'react'
import { ProfileBurger_accordeon } from './ProfileBurger_accordeon'
import { NextPage } from 'next'
import { useState } from 'react'

interface Props {
	showSection: boolean
}

export const ProfileBurger_menu_list: NextPage<Props> = ({ showSection }) => {
	const [activeTab, setActiveTab] = useState('Profile')

	const handleTabClick = (tab: any) => {
		setActiveTab(tab)
	}
	return (
		<>
			<div className='flex justify-between items-center gap-[32px] mt-[30px] overflow-x-auto w-full min-h-[36px] border-0 border-b border-solid border-b-gray-300'>
				{['Profile', 'Security', 'Verification', 'Authorized Devices'].map(tab => (
					<span
						key={tab}
						onClick={() => handleTabClick(tab)}
						className={`cursor-pointer flex-shrink-0 ${
							activeTab === tab ? 'tab__active' : ''
						}`}
					>
						{tab}
					</span>
				))}
			</div>

			<ProfileBurger_accordeon activeTab={activeTab} showSection={showSection} />
		</>
	)
}
