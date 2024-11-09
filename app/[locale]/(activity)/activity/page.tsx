'use client'
import React, { useEffect } from 'react'
import { NextPage } from 'next'
import { useThemeStore } from '@/store'
import { Button } from '@nextui-org/button'
import Activity_progressLogo from '@/components/shared/Activity_progressLogo'
import Activity_personal from '@/components/shared/Activity_personal'
import Activity_awards from '@/components/shared/Activity_awards'

const Activity: NextPage = () => {
	const { initializeTheme } = useThemeStore()


	useEffect(() => {
		initializeTheme()
	}, [initializeTheme])

	return (
		<section className='activity mt-[8rem] flex flex-col min-h-screen'>
			<div className='site-holder flex flex-col items-center gap-[40px]'>
				<article className='flex flex-col items-center w-full'>
					<h1 className='text-[24px] text-center xl:text-[42px] font-bold mb-[60px] uppercase'>
						general activity
					</h1>
					<div className='flex flex-col lg:flex-row items-center md:justify-between w-full'>
						<p className='text-[16px] xl:text-[42px] font-bold text-center lg:text-left'>
							Join us on the entire journey of developing <br /> the
							<span className='text-[#205BC9]'> NexFi ecosystem.</span>
						</p>
						<Button
							className='hidden lg:flex items-center rounded-[50px] text-[20px] xl:text-[27px] font-medium px-[35px] xl:py-[35px] border border-solid dark:border-white border-black'
							variant='bordered'
						>
							Description and criteria for upgrading
						</Button>
					</div>
				</article>
				<Activity_progressLogo />
				<Activity_personal />
			</div>
		</section>
	)
}

export default Activity
