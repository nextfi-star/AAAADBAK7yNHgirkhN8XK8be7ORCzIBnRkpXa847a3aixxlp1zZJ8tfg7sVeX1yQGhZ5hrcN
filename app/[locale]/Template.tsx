'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const variants = {
	hidden: { opacity: 0, y: 200 },
	enter: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: 200 },
}

interface Props {
	children: React.ReactNode
}

export default function Template({ children }: Props) {
	const pathname = usePathname()
	const [isAnimating, setIsAnimating] = useState(false)

	useEffect(() => {
		if (isAnimating) {
			const timeout = setTimeout(() => {
				setIsAnimating(false)
			}, 500)

			return () => clearTimeout(timeout)
		}
	}, [pathname, isAnimating])

	const handleRouteChange = () => {
		setIsAnimating(true)
	}

	useEffect(() => {
		handleRouteChange()
	}, [pathname])

	return (
		<motion.div
			key={pathname}
			animate={isAnimating ? 'exit' : 'enter'}
			className='transition-opacity duration-500 ease-in-out'
			initial='hidden'
			transition={{ type: 'easeInOut', duration: 0.5 }}
			variants={variants}
		>
			{children}
		</motion.div>
	)
}
