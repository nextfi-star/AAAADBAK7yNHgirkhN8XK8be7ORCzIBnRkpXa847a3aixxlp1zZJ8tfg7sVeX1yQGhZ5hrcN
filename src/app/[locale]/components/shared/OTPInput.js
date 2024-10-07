'use client'
import { useState } from 'react'

export const OTPInput = ({ length = 6, onChange }) => {
	const [otpValues, setOtpValues] = useState(Array(length).fill(''))

	const handleChange = (e, index) => {
		const { value } = e.target
		if (/^[0-9]$/.test(value) || value === '') {
			const newOtpValues = [...otpValues]
			newOtpValues[index] = value
			setOtpValues(newOtpValues)
			onChange(newOtpValues.join(''))

			// Автофокус на следующий input
			if (value !== '' && index < length - 1) {
				const nextInput = document.getElementById(`otp-input-${index + 1}`)
				if (nextInput) nextInput.focus()
			}
		}
	}

	const handleBackspace = (e, index) => {
		if (e.key === 'Backspace' && otpValues[index] === '' && index > 0) {
			const prevInput = document.getElementById(`otp-input-${index - 1}`)
			if (prevInput) prevInput.focus()
		}
	}

	return (
		<>
		 {otpValues.map((value, index) => (
        <input
          key={index}
          id={`otp-input-${index}`}
          type="text"
          value={value}
          onChange={e => handleChange(e, index)}
          onKeyDown={e => handleBackspace(e, index)}
          maxLength={1}
          style={{ width: '40px', textAlign: 'center' }}
					className='otp__input'
        />
      ))}
		</>
	)
}
