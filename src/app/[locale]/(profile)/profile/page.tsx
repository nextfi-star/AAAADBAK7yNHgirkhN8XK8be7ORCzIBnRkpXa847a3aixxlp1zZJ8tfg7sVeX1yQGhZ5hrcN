'use client'
import { Alert_auntef } from '@/components/shared/Alert_auntef'
import { Alert_nickname } from '@/components/shared/Alert_nickname'
import { Profile_accountdetails } from '@/components/shared/Profile_accountdetails'
import { Profile_perosnalinfo } from '@/components/shared/Profile_perosnalinfo'
import { Profile_personalverif } from '@/components/shared/Profile_personalverif'
import { ChangeAvatar } from '@/components/ui/ChangeAvatar'
import { NextPage } from 'next'
import Image from 'next/image'

const Page: NextPage = () => {
	return (
		<section className='personal'>
			<div className='personal-container'>
				<div className='personal-inner flex flex-row justify-between mt-[20px] gap-[40px]'>
					<div className='relative h-fit w-fit'>
						<Image
							src={'/main/avatar_noface.png'}
							width={152}
							height={152}
							alt={'avatar'}
							className='rounded-[50%] object-contain max-w-[152px] max-h-[152px]'
							priority
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
