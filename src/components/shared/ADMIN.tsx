'use client'
import { Link } from '@/i18n/routing'
import { useThemeStore } from '@/store'
import { NextPage } from 'next'
import React from 'react'

export const ADMIN: NextPage = () => {
	const { setVerifyState } = useThemeStore()
	return (
		<div className='fixed top-[150px] right-0 transition duration-300 hover:translate-x-[0%] translate-x-[90%] bg-[#0c0c0c] border border-solid border-teal-500 p-[20px] max-h-[250px] overflow-y-auto'>
			<div className='flex flex-col gap-[15px]'>
				<h1 className='text-[20px] font-bold text-teal-700'>ADMIN PANNEL</h1>
				<div className='flex flex-col gap-[20px] items-start outline outline-teal-700 p-[10px]'>
					<span>/overview page</span>
					<button onClick={() => setVerifyState(false)}>
						Disable Verify State
					</button>
					<button onClick={() => setVerifyState(true)}>
						Apply Verify State
					</button>
				</div>
				<div className='flex flex-col gap-[20px] items-start outline outline-teal-700 p-[10px]'>
					<span>PAGES ROUTING</span>
					<Link href='/'>LANDING PAGE</Link>
					<Link href='/signup'>SIGNUP</Link>
					<Link href='/login'>LOGIN</Link>
					<Link href='/over'>Overview</Link>
					<Link href='/verify'>Verify</Link>
					<Link href='/devices'>Devices</Link>
					<Link href='/profile'>Profile</Link>
					<Link href='/security'>Security</Link>
				</div>
			</div>
		</div>
	)
}
