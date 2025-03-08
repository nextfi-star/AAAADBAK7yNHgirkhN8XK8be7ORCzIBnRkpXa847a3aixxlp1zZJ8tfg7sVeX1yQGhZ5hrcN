'use client'
import Image from 'next/image'

import { useThemeStore } from '../../store/useChatStore'

export const Era_phone = () => {
	const { theme } = useThemeStore()

	return (
		<>
			<Image
				key={theme}
				alt='phone'
				className={`main__era-phone ${theme === 'dark' ? 'dark' : 'light'}`}
				data-aos='fade-up'
				data-aos-duration='1200'
				data-aos-once='true'
				height={509}
				quality={100}
				src={theme === 'dark' ? '/main/phone_dark.png' : '/main/era-phone.png'}
				width={400}
			/>
		</>
	)
}
