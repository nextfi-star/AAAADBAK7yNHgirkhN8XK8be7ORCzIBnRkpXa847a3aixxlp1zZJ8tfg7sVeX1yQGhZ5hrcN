'use client'
import Image from 'next/image'
import { NextPage } from 'next'
import { ChangeAvatar } from '@/components/ui/ChangeAvatar'
import { Profile_perosnalinfo } from '@/components/shared/Profile_perosnalinfo'
import { Profile_accountdetails } from '@/components/shared/Profile_accountdetails'
import { Profile_personalverif } from '@/components/shared/Profile_personalverif'

const Page: NextPage = () => {
	return (
		<section className='personal'>
			<div className='personal-container'>
				<div>
					<h1 className='text-[32px] text-center md:text-center lg:text-left '>
						User center
					</h1>
				</div>

				<div className='personal-inner flex flex-row justify-between mt-[20px] gap-[40px]'>
					<div className='relative h-fit w-fit'>
						<Image
							src={'/main/avatar.png'}
							width={152}
							height={152}
							alt={'avatar'}
							className='rounded-[50%] object-contain max-w-[152px] max-h-[152px]'
						/>
						<ChangeAvatar />
					</div>

					<div className='flex flex-col w-full gap-[68px]'>
						<Profile_perosnalinfo />

						<Profile_personalverif />

						<Profile_accountdetails />
					</div>
				</div>
			</div>
		</section>
	)
}
export default Page
