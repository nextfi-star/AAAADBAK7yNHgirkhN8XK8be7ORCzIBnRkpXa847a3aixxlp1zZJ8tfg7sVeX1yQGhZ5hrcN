import React from 'react'
import { useThemeStore } from '../../store'
import Image from 'next/image'
import { NextPage } from 'next'

const images = [
	{
		alt: 'balance',
		dark: '/main/Card_finance.png',
		light: '/main/getstarted-balance.png',
	},
	{
		alt: 'another-image',
		dark: '/main/Card_finance-1.png',
		light: '/main/getstarted-income.png',
	},
]

export const Getstarted_theme_img: NextPage = () => {
	const { theme } = useThemeStore()
	return (
		<>
			{images.map(image => (
				<Image
					key={image.alt}
					width={280}
					height={280}
					src={theme === 'dark' ? image.dark : image.light}
					alt={image.alt}
				/>
			))}
		</>
	)
}
