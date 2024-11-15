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
			verifyState: false,
			setVerifyState: state => set({ verifyState: state }),
			progress: 0,
			setProgress: state => set({ progress: state }),
			step: 1,
			setStep: value => set({ step: value }),
			confirmationStep: 1,
			setConfirmStep: val => set({ confirmationStep: val }),
			swapPoppover_1: '',
			swapPoppover_2: '',
			swapCheck: val1 =>
				set({
					swapPoppover_1: val1,
				}),
			swapCheck2: val2 =>
				set({
					swapPoppover_2: val2,
				}),
			globalVeriState: false,
			setGlobalVerifState: state => set({ globalVeriState: state }),
		}),
		{
			name: 'zustand-store',
		}
	)
)
