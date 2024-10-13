'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

const LayoutWithLink = () => {
	const pathname  = usePathname()

	const linkHref = pathname === '/auth/verifycode' ? '/auth/signup' : '/'

	return (
		<Link href={linkHref}>
			<Image
				src={'/form/arrow_left.svg'}
				width={50}
				height={50}
				alt='arrow left'
			/>
		</Link>
	)
}

export default LayoutWithLink
