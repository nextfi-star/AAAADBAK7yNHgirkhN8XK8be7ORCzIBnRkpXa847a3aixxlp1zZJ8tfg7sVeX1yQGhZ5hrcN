'use client'
import Image from 'next/image'
import { Alert_auntef } from '@/components/shared/Alert_auntef'
import { Alert_email } from '@/components/shared/Alert_email'
import { Alert_logpass } from '@/components/shared/Alert_logpass'
import { Alert_phone } from '@/components/shared/Alert_phone'
import { CloseAccount } from '@/components/shared/CloseAccount'
import { FreezeAccount } from '@/components/shared/FreezeAccount'
import { useMemo} from 'react'
import { useUserStore } from '@/hooks/useUserData'
import { useTranslations } from 'next-intl'

const Security = () => {
	const user = useUserStore((state) => state.user)
	const t = useTranslations('security')
	const data = useMemo(
		() => [
			{
				src: '/main/profile_security/auth_app.svg',
				title: t('authApp'),
				desc: t('authDesc'),
				btn: <Alert_auntef propsItem={t('changeAuthApp')} />,
			},
			{
				src: '/main/profile_security/phone.svg',
				title: t('phoneAuth'),
				desc: t('phoneDesc'),
				btn: <Alert_phone propsItem={t('changephone')} />,
				contain: '********140',
			},
			{
				src: '/main/profile_security/email.svg',
				title: t('emailAuth'),
				desc: t('emailDesc'),
				btn: <Alert_email propsItem={t('changeemail')} />,
				contain: user?.email || '******@gmail.com',
			},
			{
				src: '/main/profile_security/login_pass.svg',
				title: t('logPass'),
				desc: t('logPassDesc'),
				btn: <Alert_logpass propsItem={t('changeLogPass')} />,
				contain: '********',
			},
		],
		[]
	)
	const data2 = useMemo(
		() => [
			{
				src: '/main/profile_security/account_freeze.svg',
				title: t('freezeAcc'),
				desc: t('freezeDesc'),
				unic: '2',
				btn: <FreezeAccount propsItem={t('freezeAcc')} />,
			},
			{
				src: '/main/profile_security/account_close.svg',
				title: t('closeAcc'),
				desc: t('closeDesc'),
				btn: <CloseAccount propsItem={t('closeAcc')} />,
				unic: '3',
			},
		],
		[]
	)
	return (
		<section
			className='security !shadow-medium dark:!shadow-none'
		>
			<div className='security-container '>
				<div className='security__content mb-[20px]'>
					<h1 className='!text-[28px] mb-[15px]'>{t('authMethods')}</h1>
					{data &&
						data.map(item => (
							<div key={item.title}>
								<article className='security__content__item'>
									<div className='flex flex-col sm:flex-row items-center gap-[15px] justify-between'>
										<div className='flex flex-col items-center sm:items-start md:flex-row'>
											<Image
												alt='icon'
												height={30}
												quality={100}
												src={item.src}
												width={30}
												className='min-w-[55px]'
											/>
											<div className='flex flex-col items-center sm:items-start gap-[8px]'>
												<p className='flex gap-[11px] text-[18px] sm:text-[20px] md:text-[22px] 2xl:text-[25px]'>
													{item.title}
												</p>
												<span className='text-[#888888] dark:text-[#FFFFFF66] text-center md:text-left !text-[14px] md:!text-[17px] 2xl:!text-[20px]'>
													{item.desc}
												</span>
											</div>
										</div>
										<div className='flex gap-[12px] flex-col md:flex-row items-center'>
											{item.contain && <p>{item.contain}</p>}
											{item.btn}
										</div>
									</div>
								</article>
								<span className='block w-full bg-gray-200 min-h-[1px] my-[24px]' />
							</div>
						))}
				</div>
				<div className='security__content'>
					<h1 className='!text-[28px]'>{t('authMethods')}</h1>
					{data2 &&
						data2.map(item => (
							<div key={item.title}>
								<article className='security__content__item'>
									<div className='flex flex-col sm:flex-row items-center gap-[15px] justify-between'>
										<div className='flex flex-col items-center sm:items-start md:flex-row'>
											<Image
												alt='icon'
												height={30}
												quality={100}
												src={item.src}
												width={30}
												className='min-w-[55px]'
											/>
											<div className='flex flex-col items-center sm:items-start gap-[8px]'>
												<p className='flex gap-[11px] text-[18px] sm:text-[20px] md:text-[22px] 2xl:text-[25px]'>
													{item.title}
												</p>
												<span className='text-[#888888] dark:text-[#FFFFFF66] text-center md:text-left !text-[14px] md:!text-[17px] 2xl:!text-[20px]'>
													{item.desc}
												</span>
											</div>
										</div>
										<div className='flex gap-[12px] flex-col md:flex-row items-center'>
											{item.btn}
										</div>
									</div>
								</article>
								<span className='block w-full bg-gray-200 min-h-[1px] my-[24px]' />
							</div>
						))}
				</div>
			</div>
		</section>
	)
}

export default Security
