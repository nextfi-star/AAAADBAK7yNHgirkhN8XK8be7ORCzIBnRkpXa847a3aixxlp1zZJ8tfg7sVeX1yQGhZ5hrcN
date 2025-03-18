import Image from 'next/image'
import { Balance_img } from '../ui/Balance_img'
import { Getstarted_swiper } from './Getstarted_swiper'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export const Get_started = () => {
	const t = useTranslations('landing')
	return (
		<section className='main__getstarted'>
			<div className='site-holder'>
				<h2
					className='section-title'
					data-aos='fade-up'
					data-aos-duration='1000'
					data-aos-once='true'
				>
					{t('howTo')} <b>{t('Bstarted')}</b>
				</h2>
				<p
					className='section-description medium-margin'
					data-aos='fade-up'
					data-aos-duration='1000'
					data-aos-once='true'
				>
					{t('getDesc')}
				</p>

				<div className='getstarted__content'>
					<div
						className='getstarted__row'
						data-aos='fade-up'
						data-aos-duration='1000'
						data-aos-once='true'
					>
						<div className='getstarted__row-item'>
							<span className='getstarted__item-title'>{t('accCreate')}</span>
							<p className='getstarted__item-text'>
								{t('accDesc')}
							</p>
							<Link className='btn btn-blue' href='/signup'>
								{t('signup')}
							</Link>
							<Image
								alt='bubble'
								className='bubble big'
								height={36}
								quality={100}
								src={'/main/download_icons/Ellipse 16.svg'}
								width={36}
							/>
							<Image
								alt='bubble'
								className='bubble'
								height={20}
								quality={100}
								src={'/main/download_icons/Ellipse 15.svg'}
								width={20}
							/>
						</div>
						<div className='getstarted__row-item'>
							<span className='getstarted__item-title'>{t('tknPurch')}</span>
							<p className='getstarted__item-text'>
								{t('tokenDesc')}
							</p>
							<Link className='btn btn-blue' href='/signup'>
								{t('makeDeposit')}
							</Link>
						</div>
					</div>

					<div
						className='getstarted__big-item'
						data-aos='fade-up'
						data-aos-duration='1000'
						data-aos-once='true'
					>
						<span className='getstarted__item-title'>
							{t('invstBox')}
						</span>
						<p className='getstarted__item-text'>
							{t('boxDesc')}
						</p>

						<div className='getstarted__big-content'>
							{/* SWIPER */}
							<Getstarted_swiper />

							<Balance_img />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
