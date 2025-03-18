'use client'
import Image from 'next/image'

import { useThemeStore } from '../../store/useChatStore'

export const Phones_img = () => {
	const { theme } = useThemeStore()

	return (
		<Image
			alt='phones'
			height={861}
			quality={100}
			src={
				theme === 'dark' ? '/main/phones_dark.png' : '/main/mobile-phones.png'
			}
			width={820}
		/>
	)
}
