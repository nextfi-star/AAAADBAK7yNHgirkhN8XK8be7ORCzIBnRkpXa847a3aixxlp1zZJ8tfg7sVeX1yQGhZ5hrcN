import Image from 'next/image'
import './auth.scss'
import LayoutWithLink from '@/components/shared/LayoutWithLink'
import { useTranslations } from 'next-intl'
import { Facebook, FacebookIcon, Instagram, Send, Twitter } from 'lucide-react'
import { Authicons } from '@/components/shared/Authicons'

export const metadata = {
	title: 'Auth',
	description: 'Auth page for NextFi',
}
export interface FormLayout {
	children: React.ReactNode
}
export default function FormLayout({ children }: FormLayout) {
	const t = useTranslations('auth')
	return (
		<div className='form__body'>
			<div className='form__main'>
				<LayoutWithLink />

				<div className='form__left'>
					<div className='form__img'>
						<Image
							priority
							alt='Img main'
							height={400}
							quality={100}
							src={'/form/illustr.svg'}
							width={400}
						/>
					</div>

					<div className='socials'>
						<span>{t('joinComm')}!</span>

						<div className='socials__icons'>
							{/* <Instagram
								strokeWidth={1}
								className='min-h-[38px] min-w-[38px]'
							/>
							<Facebook strokeWidth={1} className='min-h-[38px] min-w-[38px]' />
							<Twitter strokeWidth={1} className='min-h-[38px] min-w-[38px]' />
							<Send strokeWidth={1} className='min-h-[38px] min-w-[38px]' /> */}
							<Authicons />
						</div>
					</div>
				</div>

				<div className='form__right'>{children}</div>
			</div>
		</div>
	)
}
