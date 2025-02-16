import { useThemeStore } from '@/store'
import { InvestHistoryPayload } from '@/types'

export const registerUser = async (data: {
	email: string
	password: string
	phone: string
	refid?: string
}) => {
	try {
		const response = await fetch('https://nextfi.io:5000/api/v1/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
		const result = await response.json()
		if (response.ok) {
			useThemeStore.getState().setshowVerifWindow(true)
			return result
		} else {
			throw new Error(result.message)
		}
	} catch (error: any) {
		throw new Error(error.message || 'An error occurred during registration')
	}
}
export const loginUser = async (payload: {
	email?: string
	phone?: string
	password?: string
	uid?: string
	vcode?: string
}) => {
	try {
		const response = await fetch('https://nextfi.io:5000/api/v1/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		})
		const result = await response.json()
		if (!response.ok) {
			throw new Error(result.message || 'Login failed')
		}
		return result
	} catch (error: any) {
		throw new Error(error.message || 'An error occurred during login')
	}
}
export const enable2FA = async (csrf: string) => {
	try {
		const response = await fetch('https://nextfi.io:5000/api/v1/enable_2fa', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ csrf }),
		})

		const result = await response.json()
		if (!response.ok) {
			throw new Error(result.message || 'Failed to enable 2FA')
		}

		console.log(result)
		return result
	} catch (error: any) {
		throw new Error(error.message || 'An error occurred while enabling 2FA')
	}
}
export const verify2FA = async (csrf: string, code: string) => {
	try {
		const response = await fetch('https://nextfi.io:5000/api/v1/verify_2fa', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ csrf, '2fa_code': code }),
		})

		const data = await response.json()

		if (data.response === 'success') {
			console.log('2FA verification successful')
		} else {
			console.error('Error verifying 2FA:', data.message)
		}

		return data
	} catch (error) {
		console.error('Network error:', error)
		return { response: 'error', message: 'Network error' }
	}
}
export const verifyCode = async (payload: {
	email?: string
	phone?: string
	password?: string
	uid?: string
	vcode?: string
}) => {
	try {
		const response = await fetch('https://nextfi.io:5000/api/v1/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		})

		const result = await response.json()
		if (!response.ok) {
			throw new Error(result.message || 'Login failed')
		}

		return result
	} catch (error: any) {
		throw new Error(error.message || 'An error occurred during login')
	}
}
export const sendPicture = async (file: File) => {
	try {
		if (!file) {
			throw new Error('File is required for upload')
		}
		if (typeof window === 'undefined') {
			throw new Error('localStorage is not available')
		}
		const userData = JSON.parse(localStorage.getItem('userData') || '{}')
		const csrf = userData.csrf
		if (!userData.uid) {
			throw new Error('Missing required user data in localStorage')
		}
		const formData = new FormData()
		formData.append('file', file)
		formData.append('csrf', csrf || '')
		const response = await fetch('https://nextfi.io:5000/api/v1/logo', {
			method: 'POST',
			body: formData,
		})

		const result = await response.json()

		if (!response.ok) {
			throw new Error(result.message || 'Upload failed')
		}
		return result
	} catch (error: any) {
		console.error('Upload error:', error.message)
		throw new Error(error.message || 'An error occurred during upload')
	}
}
export const getActiveDevices = async (csrf: string) => {
	try {
		const payload = {
			csrf: csrf,
		}
		const response = await fetch('https://nextfi.io:5000/api/v1/devices', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		})
		const result = await response.json()
		if (!response.ok) {
			console.error('Error:', result.message)
		}
	} catch (error) {
		console.error('Error fetching devices:', error)
	}
}
export const handleAccountAction = async (
	csrf: string,
	action: 'freeze' | 'close'
) => {
	try {
		const payload = {
			csrf,
			type: action,
		}

		const response = await fetch('https://nextfi.io:5000/api/v1/goodbye', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		})

		const result = await response.json()

		if (!response.ok) {
			throw new Error(result.message || 'Failed to process the request')
		}

		return result // Возвращаем результат для обработки
	} catch (error: any) {
		console.error('Error:', error.message)
		throw error // Позволяет обработать ошибку на уровне вызова функции
	}
}
export const getUserBalance = async ({
	coin,
	csrf,
}: {
	coin: string
	csrf: string
}) => {
	try {
		const response = await fetch('https://nextfi.io:5000/api/v1/user_balance', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ csrf, coin }),
		})

		const result = await response.json()

		if (response.ok) {
			localStorage.setItem('userBalance', JSON.stringify(result))
			return result.balance
		} else {
			throw new Error(result.message || 'Ошибка получения баланса')
		}
	} catch (error: any) {
		throw new Error(error.message || 'Ошибка соединения с сервером')
	}
}
export const getInvestHistory = async ({
	coin,
	csrf,
}: InvestHistoryPayload) => {
	try {
		const response = await fetch(
			'https://nextfi.io:5000/api/v1/invest_history',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ coin, csrf }),
			}
		)

		const result = await response.json()

		if (response.ok) {
			console.log(result)
			return result
		} else {
			throw new Error(result.message || 'Ошибка получения истории инвестиций')
		}
	} catch (error: any) {
		throw new Error(error.message || 'Ошибка соединения с сервером')
	}
}
