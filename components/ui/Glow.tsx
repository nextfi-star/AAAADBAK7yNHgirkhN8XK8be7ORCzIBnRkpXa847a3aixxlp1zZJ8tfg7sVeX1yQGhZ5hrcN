import Image from 'next/image'

import { useThemeStore } from '../../store/useChatStore'

export const Glow = () => {
	const { theme } = useThemeStore()

	return (
		<>
			{theme === 'dark' && (
				<Image
					alt='decor glow'
					className='main__intro-wrapper-glow'
					height={1080}
					src='/main/glow.svg'
					width={1920}
				/>
			)}
		</>
	)
}
