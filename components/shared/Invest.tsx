import Image from 'next/image'
import { Download } from '../ui/Download'
import { Phones_img } from '../ui/Phones_img'
import { useTranslations } from 'next-intl'

export const Invest = () => {
	const t = useTranslations('landing')
	return (
		<section className='main__mobile'>
			<div className='site-holder'>
				<div
					className='mobile__content !justify-center'
					data-aos='fade-up'
					data-aos-duration='1000'
					data-aos-once='true'
				>
					<div className='mobile__column'>
						<h2 className='mobile__title'>
							{t('invstWhere')},
							<br />
							<b>{t('invstTime')}</b>
						</h2>
						<span className='mobile__description'>{t('openSite')}</span>
						<div className='mobile__qr'>
							<span className='mobile__qr-text'>{t('qr')}</span>
							<div className='mobile__qr-img'>
								<Image
									src={'/footer/qr code.svg'}
									width={137}
									height={137}
									alt='icon qr footer'
								/>
							</div>
						</div>
						<div className='mobile__more'>
							<div className='mobile__download'>
								<span className='mobile__download-title'>
									{t('downloadApp')}
									<Download />
								</span>
								<div className='mobile__download-links'>
									<a className='mobile__download-link' href=''>
										<Image
											alt={'appstore'}
											height={96}
											src={'/main/download_icons/apple-app-store.svg'}
											width={96}
										/>
									</a>
									<a className='mobile__download-link' href=''>
										<Image
											alt={'google'}
											height={96}
											src={'/main/download_icons/google-play.svg'}
											width={96}
										/>
									</a>
								</div>
							</div>
							<div className='mobile__info'>
								<p className='mobile__info-text'>{t('youAlways')}</p>
							</div>
						</div>
					</div>

					<div
						className='mobile__image-wrapper'
						data-aos='fade-up'
						data-aos-duration='1500'
						data-aos-once='true'
					>
						<Phones_img />
					</div>
				</div>
			</div>
		</section>
	)
}
