import { NextPage } from 'next'
import React from 'react'
import { CloseBtn } from '../ui/CloseBtn'
import ArrowBracket from '../ui/ArrowBracket'
import { useThemeStore } from '@/store'

interface Props {
	setShowFaq: (showFaq: boolean) => void
	showFaq: boolean
}
export const FAQ_howVerify: NextPage<Props> = ({ setShowFaq, showFaq }) => {
	const { theme } = useThemeStore()

	return (
		<div className='fixed inset-x-0 bottom-0 top-[97px] dark:bg-[#0C0C0C] bg-white overflow-y-auto'>
			<div className='!py-[40px] site-holder gap-[15px] flex items-center justify-between'>
				<div className=' flex flex-col gap-[48px] max-w-[1100px]'>
					<article className='flex items-center gap-[10px]'>
						<button onClick={() => setShowFaq(!showFaq)}>
							<CloseBtn />
						</button>
						<span className='text-[18px] flex items-center gap-[5px]'>
							<ArrowBracket
								color={theme === 'dark' ? 'white' : 'black'}
								width={25}
								height={25}
								className={'rotate-90'}
							/>
							FAQ
							<ArrowBracket
								color={theme === 'dark' ? 'white' : 'black'}
								width={25}
								height={25}
								className={'-rotate-90'}
							/>
						</span>
						<span className='text-[18px] flex items-center gap-[5px]'>
							Account, security, and verification
							<ArrowBracket
								color={theme === 'dark' ? 'white' : 'black'}
								width={25}
								height={25}
								className={'-rotate-90'}
							/>
						</span>
						<span className='text-[18px] flex items-center gap-[5px]'>
							Individual verification
							<ArrowBracket
								color={theme === 'dark' ? 'white' : 'black'}
								width={25}
								height={25}
								className={'-rotate-90'}
							/>
						</span>
						<span className='text-[18px] flex items-center gap-[5px]'>
							Article
							<ArrowBracket
								color={theme === 'dark' ? 'white' : 'black'}
								width={25}
								height={25}
								className={'-rotate-90'}
							/>
						</span>
					</article>
					<div className='flex flex-col gap-[60px]'>
						<article className='flex flex-col gap-[24px]'>
							<h1 className='text-[42px] font-bold'>
								How do I verify an individual account?
							</h1>
							<span className='flex items-center text-[18px] text-[#BDBDBD]'>
								<span>Published on Sep 25, 2023</span>
								<span className='px-[8px]'>|</span>
								<span>Updated on Sep 26, 2024</span>
								<span className='px-[8px]'>|</span>
								<span>3 min read</span>
								<span className='px-[8px]'>|</span>
								<span> {'{ICON}'} 1234</span>
							</span>
						</article>
						<article className='flex flex-col gap-[24px]'>
							<p className='text-[20px] '>
								To use your individual account, you need to complete advanced
								identity verification to meet Know Your Customer (KYC)
								requirements. We require this to keep your account and assets
								secure.
							</p>
							<p className='text-[20px] '>
								The verification process ensures our exchange is safe and
								prevents fraud alongside other illegal activities. You can
								trade, deposit and make withdrawals after completing your
								identity verification.
							</p>
						</article>
						<article className='flex flex-col gap-[24px]'>
							<h1 className='text-[24px] font-medium'>
								Getting started on the web
							</h1>
							<p className='text-[20px]'>
								Log in to your account at{' '}
								<span className='text-[#205BC9]'>NextFi.com </span>and go to the{' '}
								<span className='text-[#205BC9]'>confirmation page.</span> You
								can find it under the profile icon{' '}
								<strong> {'> '}Verification.</strong> On this page, find{' '}
								<strong>Individual account</strong> and select{' '}
								<strong>Continue</strong>
							</p>
							<div className='w-full min-h-[164px] bg-[#515151] rounded-[30px] flex items-center justify-center'>
								<span className='text-[24px]'>Image</span>
							</div>
						</article>
					</div>
				</div>
				<div className='sticky top-[70px] min-w-[424px] max-h-[484px] min-h-[484px] border border-solid border-[#515151]'></div>
			</div>
		</div>
	)
}
