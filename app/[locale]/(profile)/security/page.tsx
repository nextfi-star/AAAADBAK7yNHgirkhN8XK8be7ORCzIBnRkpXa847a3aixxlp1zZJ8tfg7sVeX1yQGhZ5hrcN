'use client'
import { NextPage } from 'next'
import Image from 'next/image'

import { Alert_auntef } from '@/components/shared/Alert_auntef'
import { Alert_email } from '@/components/shared/Alert_email'
import { Alert_logpass } from '@/components/shared/Alert_logpass'
import { Alert_phone } from '@/components/shared/Alert_phone'
import { CloseAccount } from '@/components/shared/CloseAccount'
import { FreezeAccount } from '@/components/shared/FreezeAccount'
import { useThemeStore } from '@/store'

const data = [
	{
		src: '/main/profile_security/auth_app.svg',
		title: 'Authenticator app',
		desc: 'Use authentication codes when managing assets and other functions',
		btn: <Alert_auntef propsItem={'Change authenticator app'} />,
	},
	{
		src: '/main/profile_security/phone.svg',
		title: 'Phone authentication',
		desc: 'Get authentication codes via SMS, WhatsApp, or calls when managing assets and other functions',
		btn: <Alert_phone propsItem={'Change phone number'} />,
		contain: '****140',
	},
	{
		src: '/main/profile_security/email.svg',
		title: 'Email authentication',
		desc: 'Get authentication codes via email for login and other functions',
		btn: <Alert_email propsItem={'Change email'} />,
		contain: 'zya***@rambler.ru',
	},
	{
		src: '/main/profile_security/login_pass.svg',
		title: 'Login password',
		desc: 'Use this password for account login',
		btn: <Alert_logpass propsItem={'Change password'} />,
		contain: '********',
	},
]
const data2 = [
	{
		src: '/main/profile_security/account_freeze.svg',
		title: 'Freeze account',
		desc: 'Your account will be frozen temporarily. To unfreeze it, start by logging in again.',
		unic: '2',
		btn: <FreezeAccount propsItem={'Freeze account'} />,
	},
	{
		src: '/main/profile_security/account_close.svg',
		title: 'Close account',
		desc: "Once you close your account, it is permanent and can't be restored",
		btn: <CloseAccount propsItem={'Close account'} />,
		unic: '3',
	},
]
const Security: NextPage = () => {
	const { theme } = useThemeStore()

	return (
		<section className='security'>
			<div className='security-container '>
				<div className='security__content mb-[20px]'>
					<h1 className='!text-[28px] mb-[15px]'>Authentication methods</h1>
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
					<h1 className='!text-[28px]'>Authentication methods</h1>
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
