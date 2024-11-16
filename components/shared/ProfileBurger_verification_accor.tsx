import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { NextPage } from 'next'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import animationData2 from '@/public/animation/verify_anim_mini.json'
import { Button } from '@nextui-org/button'
import { useThemeStore } from '@/store'
import { Link } from '@/i18n/routing'
import { ProfilePage_guard } from '@/components/ui/ProfilePage_guard'

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
	const { theme, globalVeriState } = useThemeStore()
	const lottieRef = useRef<LottieRefCurrentProps>(null)
	const stopAtFrame = () => {
		const duration = lottieRef.current?.getDuration(true) || 0
		lottieRef.current?.goToAndStop(duration * 0.9, true)
	}
	useEffect(() => {
		const timer = setTimeout(() => {
			stopAtFrame()
		}, 500)
		return () => clearTimeout(timer)
	}, [])
	return (
		<div className='flex flex-col items-center gap-[60px] mt-[30%]'>
			{!globalVeriState ? (
				<>
					<div className='w-fit relative'>
						<Image
							priority
							alt='protection icon'
							className='h-auto w-auto max-w-[80px] md:max-w-[100%]'
							height={181}
							quality={100}
							src={'/main/profile_verify/Protection.svg'}
							width={181}
						/>
						<Image
							priority
							alt='file icon'
							className='h-auto w-auto absolute -right-[24px] -top-[40px] md:-top-[68px] md:-right-[68px] max-w-[65px] md:max-w-[100%] z-[1]'
							height={158}
							quality={100}
							src={'/main/profile_verify/File.svg'}
							width={118}
						/>
						<Image
							priority
							alt='decor icon'
							className='h-auto w-auto absolute -left-[48px] -bottom-[23px] md:-left-[86px] md:-bottom-[44px]'
							height={189}
							quality={100}
							src={'/main/profile_verify/decor.svg'}
							width={139}
						/>
						<Image
							priority
							alt='decor icon'
							className='h-auto w-auto absolute -right-[74px] -top-[64px] md:-right-[151px] md:-top-[114px]'
							height={200}
							quality={100}
							src={'/main/profile_verify/decor2.svg'}
							width={208}
						/>
					</div>
					<article className='flex flex-col items-center gap-[24px]'>
						<p className='text-[14px] sm:text-[18px] text-[#BDBDBD] flex items-start text-center gap-[7px] sm:gap-[9px]'>
							<ProfilePage_guard color={theme === 'dark' ? '#fff' : '#000'} />
							Your information is only used for identity verification.
						</p>
						<Link href='/verify'>
							<Button className='text-[14px] sm:text-[20px] text-white rounded-[50px] bg-[#205BC9] px-[50px] py-[4px] xl:py-[20px] hover:opacity-[.9] hover:bg-[#205BC9]'>
								Verify now
							</Button>
						</Link>
					</article>
				</>
			) : (
				<div className='mt-[-10rem] flex flex-col items-center '>
					<Lottie
						lottieRef={lottieRef}
						autoPlay={true}
						animationData={animationData2}
						className='max-w-[281px] w-full max-h-[281px]'
						loop={false}
					/>
					<div className='flex flex-col items-center gap-[15px] -mt-[2rem]'>
					<h3 className='text-[20px] md:text-[32px] font-bold'>
						Basic verification completed
					</h3>
					<p className='text-[20px] text-center'>
						You have passed identity verification. Start your journey into the
						world of cryptocurrencies now!
					</p>
					</div>
				</div>
			)}
		</div>
	)
}
