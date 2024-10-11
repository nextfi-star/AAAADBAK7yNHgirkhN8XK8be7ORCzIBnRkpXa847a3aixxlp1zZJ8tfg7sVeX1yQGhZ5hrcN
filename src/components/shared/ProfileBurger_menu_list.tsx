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
			<div className='flex justify-between items-center gap-[5px] mt-[30px]'>
				{['Profile', 'Security', 'Verification', 'Authorized Devices'].map(tab => (
					<span
						key={tab}
						onClick={() => handleTabClick(tab)}
						className={`cursor-pointer ${
							activeTab === tab ? 'tab__active' : ''
						}`}
					>
						{tab}
					</span>
				))}
			</div>
			<span className='w-full min-h-[1px] bg-gray-700 mb-[19px]'></span>

			<ProfileBurger_accordeon activeTab={activeTab} showSection={showSection} />
		</>
	)
}
