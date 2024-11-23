'use client'
import { NextPage } from 'next'
import { useState } from 'react'
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from '@/components/ui/input-otp'
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp'

interface Props {
	length?: number
	onChange: (value: string) => void
}

export const OTPInput: NextPage<Props> = ({ length = 6, onChange }) => {
	const [value, setValue] = useState('')

	const callbackHandler = () => {
		onChange(value)
	}
	if (value.length === 6) callbackHandler()
	return (
		<InputOTP
			maxLength={6}
			pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
			value={value}
			onChange={value => setValue(value)}
		>
			<InputOTPGroup className=''>
				<InputOTPSlot
					className='border-1 border-solid border-gray-500 text-[16px] p-[25 px]'
					index={0}
				/>
				<InputOTPSeparator />
				<InputOTPSlot
					className='border-1 border-solid border-gray-500 text-[16px] p-[25 px]'
					index={1}
				/>
				<InputOTPSeparator />
				<InputOTPSlot
					className='border-1 border-solid border-gray-500 text-[16px] p-[25 px]'
					index={2}
				/>
				<InputOTPSeparator />
				<InputOTPSlot
					className='border-1 border-solid border-gray-500 text-[16px] p-[25 px]'
					index={3}
				/>
				<InputOTPSeparator />
				<InputOTPSlot
					className='border-1 border-solid border-gray-500 text-[16px] p-[25 px]'
					index={4}
				/>
				<InputOTPSeparator />
				<InputOTPSlot
					className='border-1 border-solid border-gray-500 text-[16px] p-[25 px]'
					index={5}
				/>
			</InputOTPGroup>
		</InputOTP>
	)
}
