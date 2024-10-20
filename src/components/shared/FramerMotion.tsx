'use client'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const variants = {
	hidden: { opacity: 0, y: 200 },
	enter: { opacity: 1, y: 0 },    
  exit: { opacity: 0, y: 50 },
}

interface Props {
	children: React.ReactNode
}

export default function FramerMotion({ children }: Props) {
	const pathname = usePathname()

	return (
		<motion.div
			key={pathname}
			initial='hidden'
			animate='enter'
			exit='exit'
			variants={variants}
			transition={{ type: 'easeInOut', duration: .5 }}
			className="transition-opacity duration-500 ease-in-out"
		>
			{children}
		</motion.div>
	)
}
