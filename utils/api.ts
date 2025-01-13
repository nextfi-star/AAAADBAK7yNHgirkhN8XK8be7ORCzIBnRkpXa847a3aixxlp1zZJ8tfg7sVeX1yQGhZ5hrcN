import { useThemeStore } from '@/store'

export const registerUser = async (data: {
	email: string
	password: string
	phone: string
	refid?: string
}) => {
	try {
		const response = await fetch('https://nextfit.site:5000/api/v1/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
		const result = await response.json()
		if (response.ok) {
			useThemeStore.getState().setshowVerifWindow(true)
			console.log(result)
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
		const response = await fetch('https://nextfit.site:5000/api/v1/login', {
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
		console.log(result)
		return result
	} catch (error: any) {
		throw new Error(error.message || 'An error occurred during login')
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
		const response = await fetch('https://nextfit.site:5000/api/v1/login', {
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
		const { csrf } = userData
		console.log(userData)
		if (!userData.uid) {
			throw new Error('Missing required user data in localStorage')
		}
		const formData = new FormData()
		formData.append('file', file)
		formData.append('csrf', csrf || '')
		const response = await fetch('https://nextfit.site:5000/api/v1/logo', {
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
		const response = await fetch('https://nextfit.site:5000/api/v1/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		})
		const result = await response.json()
		console.log(result)
		if (response.ok) {
			console.log('Active sessions:', result.data)
		} else {
			console.error('Error:', result.message)
		}
	} catch (error) {
		console.error('Error fetching devices:', error)
	}
}
export const handleAccountAction = async (csrf: string, action: 'freeze' | 'close') => {
  try {
    const payload = {
      csrf,
      type: action,
    };

    const response = await fetch('https://nextfit.site:5000/api/v1/goodbye', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Failed to process the request');
    }

    return result; // Возвращаем результат для обработки
  } catch (error: any) {
    console.error('Error:', error.message);
    throw error; // Позволяет обработать ошибку на уровне вызова функции
  }
};
