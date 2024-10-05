import Image from 'next/image'
import './auth.scss'
import Link from 'next/link'
import LayoutWithLink from '../components/shared/LayoutWithLink'

export const metadata = {
	title: 'Auth',
	description: 'Auth page for NextFi',
}

export default function FormLayout({ children }) {
	return (
		<div className='form__body'>
			<div className='form__main'>
				<div className='form__left'>
					<div className='back_btn'>
						<LayoutWithLink />
					</div>

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
								src={'/form/icons_white/Instagram.svg'}
								width={48}
								height={48}
								quality={100}
								alt='Logo'
							/>
							<Image
								src={'/form/icons_white/Telegram_white.svg'}
								width={48}
								height={48}
								quality={100}
								alt='Logo'
							/>
							<Image
								src={'/form/icons_white/Snapchat_white.svg'}
								width={48}
								height={48}
								quality={100}
								alt='Logo'
							/>
							<Image
								src={'/form/icons_white/Twitter_white.svg'}
								width={48}
								height={48}
								quality={100}
								alt='Logo'
							/>
						</div>
					</div>
				</div>

				<div className='form__right'>
					{children}{' '}
					<Link className='form__close' href={'/'}>
						<Image
							width={30}
							height={30}
							quality={100}
							priority
							src={'/form/x.svg'}
							alt='X'
						/>
					</Link>
				</div>
			</div>
		</div>
	)
}
