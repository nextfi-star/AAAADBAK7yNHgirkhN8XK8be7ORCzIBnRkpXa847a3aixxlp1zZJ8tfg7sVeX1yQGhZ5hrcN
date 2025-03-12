import Image from 'next/image.js'
import { Qr } from '../ui/Qr'
import { useTranslations } from 'next-intl'

export const Profile_qr = () => {
	const t = useTranslations('overview')
	return (
		<div className='profile_qr !bg-[#fff] dark:!bg-[#1e1e1e66] !shadow-medium dark:!shadow-none'>
			<div className='profile_qr-mobile flex flex-col justify-center m-auto max-w-[296px] gap-[24px] text-center h-[292px] rounded-[30px]'>
				<h2 className='text-[18px]'>
					{t('downloadApp')} <br /> {t('download2')}
				</h2>
				<div className='flex justify-center items-center  gap-[12px] w-full'>
					<div className='flex justify-center items-center shadow bg-[#3c3c3c66] w-[50px] h-[50px] rounded-[15px]'>
						<Image
							alt='Aptoide'
							className='qr__icon'
							height={48}
							src='/main/download_icons/Aptoide.svg'
							width={48}
						/>
					</div>
					<div className='flex justify-center items-center shadow bg-[#3c3c3c66] w-[50px] h-[50px] rounded-[15px]'>
						<Image
							alt='google'
							className='qr__icon'
							height={48}
							src='/main/download_icons/google-play.svg'
							width={48}
						/>
					</div>
					<div className='flex justify-center items-center shadow bg-[#3c3c3c66] w-[50px] h-[50px] rounded-[15px]'>
						<Image
							alt='Aptoide'
							className='qr__icon'
							height={48}
							src='/main/download_icons/apple-app-store.svg'
							width={48}
						/>
					</div>
				</div>
				<p className='text-[20px]'>NextFi {t('nextfiApp')}</p>
			</div>

			<div className='profile_qr-into text-center'>
				<span>{t('downLoadApp')}</span>
				<div className='profile_qr-link'>
				<Image
							src={'/footer/qr code.svg'}
							width={137}
							height={137}
							alt='icon qr footer'
						/>

					<div className='profile_qr-link-desk'>
						<h3>NextFi {t('nextfiApp')}</h3>
						<p>{t('scanDownload')}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
