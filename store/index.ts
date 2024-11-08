import { create } from 'zustand'
import { IStore } from '@/types'
import { persist } from 'zustand/middleware'

export const useThemeStore = create<IStore>()(
	persist(
		set => ({
			theme: 'dark',
			setTheme: newTheme => {
				set(() => {
					localStorage.setItem('theme', newTheme)
					document.documentElement.classList.toggle('dark', newTheme === 'dark')

					return { theme: newTheme }
				})
			},
			initializeTheme: () => {
				const savedTheme = localStorage.getItem('theme') || 'dark'
				set(() => {
					document.documentElement.classList.toggle(
						'dark',
						savedTheme === 'dark'
					)

					return { theme: savedTheme }
				})
			},
			activeTab: 'Profile',
			modeToogle: selected => set({ mode: selected }),
			mode: 'email',
			email: '',
			phone: '',
			password: '',
			setEmail: email => set({ email }),
			setPhone: phone => set({ phone }),
			setPassword: password => set({ password }),
			verifyState: false, //! for admin
			setVerifyState: state => set({ verifyState: state }), //! for admin
		}),
		{
			name: 'verify-storage',
		}
	)
)
