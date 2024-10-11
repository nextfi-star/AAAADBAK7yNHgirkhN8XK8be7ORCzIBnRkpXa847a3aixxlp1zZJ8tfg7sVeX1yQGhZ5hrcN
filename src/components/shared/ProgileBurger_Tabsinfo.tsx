import { NextPage } from 'next'
import React from 'react'
import { ProfileBurger_shortcuts } from './ProfileBurger_shortcuts'
import { ProfileBurger_assets } from './ProfileBurger_assets'

interface Props {

}

export const ProgileBurger_Tabsinfo: NextPage<Props> = () => {
	return (
			<>
				<span className='profile__burger-devider'></span>

				<ProfileBurger_shortcuts />

				<span className='profile__burger-devider'></span>

				<ProfileBurger_assets />

				<span className='profile__burger-devider'></span>
			</>
	)
}

