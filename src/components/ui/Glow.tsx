import { useThemeStore } from '../../store'
import Image from 'next/image'

export const Glow = () => {
	const { theme } = useThemeStore()
	return (
		<>
			{theme === 'dark' && (
				<Image
				width={1920}
				height={1080}
				src='/main/glow.svg'
				alt='decor glow'
				className='main__intro-wrapper-glow'
			/>
			)}
		</>
	)
}
