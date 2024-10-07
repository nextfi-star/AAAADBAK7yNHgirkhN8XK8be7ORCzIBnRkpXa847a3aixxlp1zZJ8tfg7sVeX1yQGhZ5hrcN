'use client'
import { useEffect, useState } from 'react'
import { OTPInput } from '../../components/shared/OTPInput'
import { Link } from '../../../../i18n/routing'
import { useThemeStore } from '../../../../store'


export default function VerifyCode() {
	const [otp, setOtp] = useState('')

	const handleOtpChange = newOtp => {
		setOtp(newOtp)
		console.log('Entered OTP:', newOtp)
	}

	const handleSubmit = () => {
		console.log(`verify code - ${otp}`)
	}
	const { initializeTheme } = useThemeStore();

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

	return (
		<div className='form__verify'>
			<h2>Confirm your email address</h2>
			<p>
				A 6-digit code has been sent to your email address. email alex@log.com.
				The verification code must be entered within 30 minutes.
			</p>
			<span>Enter code: </span>
			<div className='form__verify-input'>
				<OTPInput length={6} onChange={handleOtpChange} />
			</div>

			<Link href='/over' className='next__btn'>
				Next
			</Link>
			<span className='form__verify-resend'>Didn't receive the code?</span>
		</div>
	)
}
