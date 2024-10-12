'use client'
import Image from 'next/image'
import { useThemeStore } from '../../../../store'
import { NextPage } from 'next'
import { Change_logpass } from '@/components/shared/Change_logpass'
import { FreezeAccount } from '@/components/shared/FreezeAccount'

const data = [
	{
		src: '/main/profile_security/auth_app.svg',
		title: 'Authenticator app',
		desc: 'Use authentication codes when managing assets and other functions',
		btn: <Change_logpass propsItem={'Change authenticator app'} />,
	},
	{
		src: '/main/profile_security/phone.svg',
		title: 'Phone authentication',
		desc: 'Get authentication codes via SMS, WhatsApp, or calls when managing assets and other functions',
		btn: <Change_logpass propsItem={'Change phone number'} />,
		contain: '****140',
	},
	{
		src: '/main/profile_security/email.svg',
		title: 'Email authentication',
		desc: 'Get authentication codes via email for login and other functions',
		btn: <Change_logpass propsItem={'Change email'} />,
		contain: 'zya***@rambler.ru',
	},
	{
		src: '/main/profile_security/login_pass.svg',
		title: 'Login password',
		desc: 'Use this password for account login',
		btn: <Change_logpass propsItem={'Change password'} />,
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
		btn: <FreezeAccount propsItem={'Close account'} />,
	},
]
const Page: NextPage = () => {
	const { theme } = useThemeStore()
	return (
		<section className='security'>
			<div className='security-container'>
				<h1>Security center</h1>
				<span className='block w-full bg-gray-200 min-h-[1px] my-[24px]'></span>
				<div className='security__content'>
					<h1>Authentication methods</h1>
					{data &&
						data.map(item => (
							<>
								<article key={item.title} className='security__content__item'>
									<div className='security__content__item__list'>
										<div className='flex flex-col items-center md:items-start md:flex-row'>
											<Image
												src={item.src}
												width={30}
												height={30}
												quality={100}
												alt='icon'
											/>
											<div className='flex flex-col items-center md:items-start gap-[8px]'>
												<p className='flex items-center gap-[11px]'>
													{item.title}
												</p>
												<span className='text-[#888888] dark:text-[#FFFFFF66] text-center md:text-left'>
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
								<span className='block w-full bg-gray-200 min-h-[1px] my-[24px]'></span>
							</>
						))}
				</div>
				<div className='security__content'>
					<h1>Authentication methods</h1>
					{data2 &&
						data2.map(item => (
							<article key={item.title} className='security__content__item'>
								<div className='security__content__item__list'>
									<div className='flex flex-col md:flex-row items-center md:items-start'>
										<Image
											src={item.src}
											width={30}
											height={30}
											quality={100}
											alt='icon'
										/>
										<div className='flex flex-col items-center md:items-start gap-[8px]'>
											<p className='flex items-center gap-[11px]'>
												{item.title}
											</p>
											<span className='text-[#888888] dark:text-[#FFFFFF66] text-center md:text-left'>
												{item.desc}
											</span>
										</div>
									</div>
									<div className='flex gap-[12px] items-center'>
										{item.btn}
									</div>
								</div>
								{item.unic && (
									<span className='block w-full bg-gray-200 min-h-[1px] my-[24px]'></span>
								)}
							</article>
						))}
				</div>
			</div>
		</section>
	)
}
export default Page
