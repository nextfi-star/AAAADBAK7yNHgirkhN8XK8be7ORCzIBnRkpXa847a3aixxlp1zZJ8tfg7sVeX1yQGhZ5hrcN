import React from 'react'
import Image from 'next/image'
import { NextPage } from 'next'

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/AccordionBurger'
import { Button } from '@nextui-org/button'
import { ProfilePage_guard } from '../ui/ProfilePage_guard'
import { useThemeStore } from '@/store'
import { Link } from '@/i18n/routing'

interface AccordionItemType {
	value: string
	trigger: string
	content: React.ReactNode
}
interface AccordionSectionType {
	items: AccordionItemType[]
}
interface Props {
	data: AccordionSectionType[]
}

export const ProfileBurger_verification_accor: NextPage<Props> = ({ data }) => {
	const { theme } = useThemeStore()
	return (
		<div className='flex flex-col items-center gap-[60px] mt-[5rem]'>
			<div className='w-fit relative'>
				<Image
					priority
					alt='protection icon'
					className='h-auto w-auto max-w-[80px] sm:max-w-[100%]'
					height={181}
					quality={100}
					src={'/main/profile_verify/Protection.svg'}
					width={181}
				/>
				<Image
					priority
					alt='file icon'
					className='h-auto w-auto absolute -right-[24px] -top-[40px] sm:-top-[68px] sm:-right-[68px] max-w-[65px] sm:max-w-[100%] z-[1]'
					height={158}
					quality={100}
					src={'/main/profile_verify/File.svg'}
					width={118}
				/>
				<Image
					priority
					alt='decor icon'
					className='h-auto w-auto absolute -left-[48px] -bottom-[23px] sm:-left-[86px] sm:-bottom-[44px]'
					height={189}
					quality={100}
					src={'/main/profile_verify/decor.svg'}
					width={139}
				/>
				<Image
					priority
					alt='decor icon'
					className='h-auto w-auto absolute -right-[74px] -top-[64px] sm:-right-[151px] sm:-top-[114px]'
					height={200}
					quality={100}
					src={'/main/profile_verify/decor2.svg'}
					width={208}
				/>
			</div>
			<article className='flex flex-col items-center gap-[24px]'>
				<p className='text-[14px] sm:text-[18px] text-[#BDBDBD] flex items-center text-center gap-[2px] sm:gap-[7px]'>
					<ProfilePage_guard color={theme === 'dark' ? '#fff' : '#000'} />
					Your information is only used for identity verification.
				</p>
				<Link href='/verify'>
					<Button className='text-[14px] sm:text-[20px] text-white rounded-[50px] bg-[#205BC9] px-[50px] py-[4px] xl:py-[20px] hover:opacity-[.9] hover:bg-[#205BC9]'>
						Verify now
					</Button>
				</Link>
			</article>
		</div>
	)
}
