'use client'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { NextPage } from 'next'
import { Link } from '@/i18n/routing'
import { CloseBtn } from '../ui/CloseBtn'
import { useThemeStore } from '@/store'

const LayoutWithLink: NextPage = () => {
	const pathname = usePathname()
	const parts = pathname.split('/')
	const locale = parts[1]
	const isVerifyCode = pathname === `/${locale}/verifycode`
	const linkHref = isVerifyCode ? `/signup` : `/`
	const closeLink = isVerifyCode ? '/signup' : '/'
	const {setEmail, setPhone, setPassword} = useThemeStore()
	const clearStorageInputs = () => {
		setEmail('')
		setPhone('')
		setPassword('')
	}

	return (
		<div className='absolute w-full z-[10] top-0 flex items-center justify-end md:justify-between p-[30px]'>
			<div className='back_btn !hidden md:!flex'>
			<Link href={linkHref} onClick={clearStorageInputs}>
				<Image
					src={'/form/arrow_left.svg'}
					width={50}
					height={50}
					alt='arrow left'
				/>
			</Link>
			</div>
			<Link className='form__close' href={closeLink}>
				<CloseBtn />
			</Link>
		</div>
	)
}

export default LayoutWithLink
