import { useUserStore } from '@/hooks/useUserData'
import { useThemeStore } from '@/store'
import { Coin, InvestHistoryPayload } from '@/types'

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
	tfa?: string
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
			console.log('2FA verification successful', data)
			useUserStore.getState().loadUser();
			
		} else {
			console.log(data)
			console.error('Error verifying 2FA:', data)
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

		if (response.ok) {
			localStorage.removeItem('userData')
			localStorage.removeItem('profile-store')
			window.location.reload()
		}

		if (!response.ok) {
			throw new Error(result.message || 'Failed to process the request')
		}

		return result // Возвращаем результат для обработки
	} catch (error: any) {
		console.error('Error:', error.message)
		throw error // Позволяет обработать ошибку на уровне вызова функции
	}
}
export const getUserHistory = async (
	csrf: string,
	type: string = 'all',
	coin?: string
) => {
	try {
		const payload: Record<string, string> = {
			csrf,
			type,
		}
		if (coin) {
			payload.coin = coin
		}

		const response = await fetch('https://nextfi.io:5000/api/v1/history', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		})

		const result = await response.json()
		console.log(result)
		if (!response.ok || result.response === 'error') {
			console.error('Error:', result.message || 'Unknown error')
			return null
		}

		return result.data
	} catch (error) {
		console.error('Error fetching user history:', error)
		return null
	}
}
export const getUserBalance = async (csrf: string, coin: string) => {
	try {
		const payload = { csrf, coin }
		const response = await fetch('https://nextfi.io:5000/api/v1/user_balance', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		})

		const result = await response.json()
		if (result.response === 'error') {
			console.error('Ошибка получения баланса:', result.message)
			return null
		}

		return result.balance ?? 1
	} catch (error) {
		console.error('Ошибка запроса:', error)
		return null
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
export const changeUserData = async (
	csrf: string,
	type: string,
	value: string,
	vcode: string,
	tfa_code = ''
) => {
	try {
		type ChangeUserDataPayload = {
			csrf: string
			type: string
			vcode: string
			'2fa_code'?: string
			phone?: string
			email?: string
			password?: string
		}

		const payload: ChangeUserDataPayload = {
			csrf,
			type,
			vcode,
			'2fa_code': tfa_code,
			phone: type === 'change_phone' ? value : undefined,
			email: type === 'change_email' ? value : undefined,
			password: type === 'change_password' ? value : undefined,
		}

		const response = await fetch('https://nextfi.io:5000/api/v1/change', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		})

		const result = await response.json()
		if (response.ok && result.response === 'success') {
			console.log(result)
			return result
		} else {
			throw new Error(result.message || 'Failed to change user data')
		}
	} catch (error) {
		console.error('Change user data error:', error)
		throw error
	}
}
export const fetchCoinList = async (): Promise<Coin[]> => {
	try {
		const response = await fetch('https://nextfi.io:5000/api/v1/coin_list', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({}),
		})

		const result = await response.json()

		if (result.response === 'success') {
			return result.data || []
		} else {
			console.error('Error fetching coin list:', result.message)
			return []
		}
	} catch (error) {
		console.error('Server error fetching coin list:', error)
		return []
	}
}
export const getDepositAddress = async (csrf: string, coin: string, network: string) => {
	try {
		const response = await fetch("https://nextfi.io:5000/api/v1/deposit", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ csrf, coin, net: network }),
		});

		const result = await response.json();

		if (result.response === "success") {
			return { success: true, address: result.address };
		} else {
			console.error("❌ Ошибка получения адреса депозита:", result.message);
			return { success: false, message: result.message };
		}
	} catch (error) {
		console.error("❌ Сетевая ошибка:", error);
		return { success: false, message: "Ошибка сети" };
	}
};
