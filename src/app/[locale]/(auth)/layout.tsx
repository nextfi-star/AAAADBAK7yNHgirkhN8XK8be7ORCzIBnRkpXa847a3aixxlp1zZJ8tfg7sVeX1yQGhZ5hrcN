import Image from 'next/image'
import './auth.scss'
import LayoutWithLink from '../../../components/shared/LayoutWithLink'

export const metadata = {
	title: 'Auth',
	description: 'Auth page for NextFi',
}
export interface FormLayout {
	children: React.ReactNode
}
export default function FormLayout({ children }: FormLayout) {
	return (
		<div className='form__body'>
			<div className='form__main'>
					<LayoutWithLink />

				<div className='form__left'>
					<div className='form__img'>
						<Image
							src={'/form/illustr.svg'}
							width={400}
							height={400}
							quality={100}
							priority
							alt='Img main'
						/>
					</div>

					<div className='socials'>
						<span>join us on social networks</span>

						<div className='socials__icons'>
							<Image
								src={'/form/icons_leftside/Instagram_white.svg'}
								width={48}
								height={48}
								quality={100}
								alt='Logo'
							/>
							<Image
								src={'/form/icons_leftside/Telegram_white.svg'}
								width={48}
								height={48}
								quality={100}
								alt='Logo'
							/>
							<Image
								src={'/form/icons_leftside/Snapchat_white.svg'}
								width={48}
								height={48}
								quality={100}
								alt='Logo'
							/>
							<Image
								src={'/form/icons_leftside/Twitter_white.svg'}
								width={48}
								height={48}
								quality={100}
								alt='Logo'
							/>
						</div>
					</div>
				</div>

				<div className='form__right'>{children}</div>
			</div>
		</div>
	)
}
