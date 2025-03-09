import { useUserStore } from '@/hooks/useUserData'
import { useThemeStore } from '@/store/useChatStore'
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
			useUserStore.getState().loadUser()
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
export const uploadFile = async (
	csrf: string,
	file: File,
	type: 'upload_verif' | 'upload_logo',
	region: string = ''
): Promise<any> => {
	try {
		const formData = new FormData()
		formData.append('csrf', csrf)
		formData.append('type', type)
		formData.append('file', file)

		if (type === 'upload_verif') {
			formData.append('region', region)
		}
		const endpoint = `https://nextfi.io:5000/api/v1/${type === 'upload_logo' ? 'logo' : 'verification'}`
		const response = await fetch(endpoint, {
			method: 'POST',
			body: formData,
		})
		const result = await response.json()
		console.log(result)
		return result
	} catch (error) {
		console.error('❌ Ошибка загрузки файла:', error)
		return { response: 'error', message: 'Network error' }
	}
}
export const sendPicture = async (file: File) => {
	try {
		if (!file) {
			throw new Error('File is required for upload')
		}
		const csrf = useUserStore.getState().user?.csrf
		if (!csrf) {
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

		console.log('Upload result:', result)
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

		if (response.ok) {
			if (typeof window !== 'undefined') {
				console.log(action === 'freeze' ? 'Freeze' : 'Close')
				localStorage.removeItem('userData')
				localStorage.removeItem('profile-store')
				window.location.reload()
			}
		}

		if (!response.ok) {
			throw new Error(result.message || 'Failed to process the request')
		}

		return result
	} catch (error: any) {
		console.error('Error:', error.message)
		throw error
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
export const getDepositHistory = async (csrf: string) => {
  try {
    const payload = { csrf, type: 'balance_deposit' };
    const response = await fetch('https://nextfi.io:5000/api/v1/history', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    console.log(result);
    if (!response.ok || result.response === 'error') {
      console.error('Error:', result.message || 'Unknown error');
      return { error: true, message: result.message };
    }
    return { error: false, data: result.data };
  } catch (error) {
    console.error('Error fetching deposit history:', error);
    return { error: true, message: 'Network error' };
  }
};

export const getUserBalance = async (csrf: string, coin?: string) => {
	try {
		const payload: Record<string, any> = { csrf }
		if (coin) payload['coin'] = coin
		else payload['type'] = 'all' // Если coin не указан, получаем баланс всех монет

		const response = await fetch('https://nextfi.io:5000/api/v1/user_balance', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		})

		const result = await response.json()
		if (response.ok) {
			console.log(result)
		}
		return result
	} catch (error) {
		console.error('Ошибка получения баланса:', error)
		return null
	}
}
export const createWithdraw = async (
	csrf: string,
	coin: string,
	amount: string,
	address: string,
	net: string,
	twoFaCode?: string
) => {
	try {
		const payload: Record<string, string> = {
			csrf,
			coin,
			amount,
			address,
			net,
		}
		if (twoFaCode) {
			payload['2fa_code'] = twoFaCode
		}
		const response = await fetch('https://nextfi.io:5000/api/v1/withdraw', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		})
		const result = await response.json()
		console.log(result)
		if (!response.ok || result.response === 'error') {
			return { error: true, message: result.message || 'Unknown error' }
		}
		return { error: false, data: result, message: result.message };
	} catch (error) {
		console.error('Error creating withdraw:', error)
		return { error: true, message: 'Network error' };
	}
}
export const getWithdrawHistory = async (csrf: string) => {
  try {
    const payload = { csrf };
    const response = await fetch('https://nextfi.io:5000/api/v1/withdraw_list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    console.log(result);
    if (!response.ok || result.response === 'error') {
      console.error('Error:', result.message || 'Unknown error');
      return { error: true, message: result.message };
    }
    return { error: false, data: result.data };
  } catch (error) {
    console.error('Error fetching withdraw history:', error);
    return { error: true, message: 'Network error' };
  }
};
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
export const getCoins = async (csrf: string) => {
	try {
		const response = await fetch('https://nextfi.io:5000/api/v1/coin_list', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ csrf }),
		})

		const result = await response.json()
		if (result.response === 'success') {
			console.log(result.data)
			return result.data.map((coin: any) => ({
				id: coin.id,
				name: coin.name,
				network: coin.network.split(':'),
			}))
		} else {
			console.error('Ошибка загрузки списка монет:', result)
			return []
		}
	} catch (error) {
		console.error('Ошибка сети при получении списка монет:', error)
		return []
	}
}
export const uploadChatFile = async (csrf: string, file: File) => {
	try {
		const formData = new FormData()
		formData.append('file', file)

		const response = await fetch('https://nextfi.io:5000/api/v1/chat_file', {
			method: 'POST',
			headers: {
				'X-CSRF-Token': csrf,
			},
			body: formData,
		})

		const result = await response.json()
		return result
	} catch (error) {
		console.error('Ошибка загрузки файла:', error)
		return null
	}
}
export const getDepositAddress = async (
	csrf: string,
	coin: string,
	network: string
) => {
	try {
		const response = await fetch('https://nextfi.io:5000/api/v1/deposit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ csrf, coin, net: network }),
		})

		const result = await response.json()

		if (result.response === 'success') {
			return { success: true, address: result.address }
		} else {
			console.error('❌ Ошибка получения адреса депозита:', result.message)
			return { success: false, message: result.message }
		}
	} catch (error) {
		console.error('❌ Сетевая ошибка:', error)
		return { success: false, message: 'Ошибка сети' }
	}
}
export const changeUserData = async (
	csrf: string,
	type: 'change_email' | 'change_phone' | 'change_passw',
	value: string,
	vcode: string,
	tfaCode?: string
) => {
	try {
		const payload: Record<string, any> = { csrf, type, vcode }
		if (type === 'change_email') payload['email'] = value
		if (type === 'change_phone') payload['phone'] = value
		if (type === 'change_passw') payload['password'] = value
		if (tfaCode) payload['2fa_code'] = tfaCode

		const response = await fetch('https://nextfi.io:5000/api/v1/change', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		})

		const result = await response.json()

		if (result.response === 'success') {
			console.log(result)
			return { success: true, message: result.message }
		} else {
			return { success: false, message: result.message }
		}
	} catch (error) {
		console.error('Change user data error:', error)
		return { success: false, message: 'Network error' }
	}
}
export const getChatHistory = async (csrf: string, tid: string) => {
	try {
		const response = await fetch('https://nextfi.io:5000/api/v1/support_chat', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ csrf, type: 'history', tid, text: 'dummy' }),
		})
		const result = await response.json()
		return result
	} catch (error) {
		console.error('Ошибка загрузки чата:', error)
		return null
	}
}
export const sendMessage = async (csrf: string, tid: string, text: string) => {
	try {
		const response = await fetch('https://nextfi.io:5000/api/v1/support_chat', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ csrf, type: 'send', tid, text }),
		})

		const result = await response.json()
		return result
	} catch (error) {
		console.error('Ошибка отправки сообщения:', error)
		return null
	}
}
