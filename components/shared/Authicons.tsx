'use client'
import { useThemeStore } from '@/store/useChatStore'
import Image from 'next/image'

export const Authicons = () => {
	const theme = useThemeStore(state => state.theme)

	return (
		<>
			<Image
				width={40}
				height={40}
				alt='social icon'
				src={`/form/soc/inst.svg`}
			/>
			<Image
				width={40}
				height={40}
				alt='social icon'
				src={`/form/soc/face.svg`}
			/>
			<Image
				width={40}
				height={40}
				alt='social icon'
				src={`/form/soc/twitt.svg`}
			/>
			<Image
				width={40}
				height={40}
				alt='social icon'
				src={`/form/soc/teleg.svg`}
			/>
		</>
	)
}
