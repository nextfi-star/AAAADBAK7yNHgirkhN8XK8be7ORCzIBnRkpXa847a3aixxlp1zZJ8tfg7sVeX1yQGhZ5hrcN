'use client'
import { useEffect, useRef, useState } from 'react'
import { DotLottie, DotLottieReact } from '@lottiefiles/dotlottie-react'
import { useThemeStore } from '../../store'
import { Link } from '@/i18n/routing'
import { NextPage } from 'next'

const data = [
	{
		animation_dark: '/tapbar/white/home.json',
		animation_white: '/tapbar/home.json',
		title: 'Home',
		speed: 1.5,
		href: '/over',
	},
	{
		animation_dark: '/tapbar/white/activity.json',
		animation_white: '/tapbar/activity.json',
		title: 'Activity',
		speed: 2.5,
		href: '/over',
	},
	{
		animation_dark: '/tapbar/Blue_logo.json',
		animation_white: '/tapbar/Blue_logo.json',
		title: 'Investing',
		class: 'round',
		class2: 'round2',
		speed: 1.5,
		href: '/over',
	},
	{
		animation_dark: '/tapbar/white/Token(1).json',
		animation_white: '/tapbar/Token copy.json',
		title: 'Token',
		speed: 1.5,
		href: '/over',
	},
	{
		animation_dark: '/tapbar/white/assets.json',
		animation_white: '/tapbar/assets.json',
		title: 'Assets',
		speed: 1.5,
		href: '/over',
	},
]

export const TapBar: NextPage = () => {
	const { theme, initializeTheme } = useThemeStore()
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		initializeTheme()
	}, [initializeTheme])

	const dotLottieRefs = useRef<(DotLottie | null)[]>([])
	const [activeIndex, setActiveIndex] = useState<null | number>(null)

	const play = (index: number) => {
		const currentLottie = dotLottieRefs.current[index]
		if (currentLottie) {
			currentLottie.play()
			setActiveIndex(index === activeIndex ? null : index)
		}
	}

	const dotLottieRefCallback = (ref: any, index: number) => {
		dotLottieRefs.current[index] = ref
	}

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 430) {
				setIsMobile(true)
			} else {
				setIsMobile(false)
			}
		}

		handleResize()

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<>
			{isMobile && (
				<div
					className={`Tapbar w-full flex justify-evenly items-center sm:hidden ${
						theme === 'dark' ? 'bg-[#3a3939e8]' : 'bg-[#efefefef]'
					}`}
				>
					{data &&
						data.map((item, index) => (
							<div
								key={item.title}
								className={`Tapbar__item `}
								onClick={() => play(index)}
							>
								<div className={`Tapbar__item`}>
									<div
										className={
											item.class &&
											`flex justify-center items-center bg-[#3F7EF3] rounded-full w-16 h-16 shadow-custom-shadow backdrop-blur-custom-blur ${item.class && '-mt-[20px] shadow'} `
										}
									>
										<Link href={"/over"}>
										<DotLottieReact
											src={
												theme === 'dark'
													? item.animation_dark
													: item.animation_white
											}
											className={`lottie ${
												activeIndex === index ? 'active' : ''
											} ${item.class && '!filter-none big'}  `}
											autoplay
											speed={item.speed}
											dotLottieRefCallback={ref =>
												dotLottieRefCallback(ref, index)
											}
											mode='forward'
											backgroundColor='transparent'
											style={{
												filter:
													'invert(38%) sepia(78%) saturate(542%) hue-rotate(189deg) brightness(94%) contrast(89%)',
											}}
										/>
										</Link>
									</div>
								</div>

								<p
									className={`Tapbar__item-text -mt-[15px]  `}
								>
									{item.title}
								</p>
							</div>
						))}
				</div>
			)}
		</>
	)
}
