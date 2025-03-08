'use client'
import { create } from 'zustand'
import { IStore } from '@/types'
import { persist } from 'zustand/middleware'
import { getChatHistory, sendMessage } from '@/utils/api'


type ChatMessage = {
	tid: string;
	text: string;
	time: number;
	status: number;
	sender: "me" | "bot";
};

type ChatState = {
	tid: string | null;
	messages: ChatMessage[];
	setTid: (tid: string | null) => void;
	setMessages: (messages: ChatMessage[]) => void;
	addMessage: (message: ChatMessage) => void;
	loadChatHistory: (csrf: string) => Promise<void>;
	sendChatMessage: (csrf: string, text: string) => Promise<void>;
};

export const useChatStore = create<ChatState>((set, get) => ({
	tid: null,
	messages: [],

	setTid: (tid) => set({ tid }),
	setMessages: (messages) => set({ messages }),
	addMessage: (message) =>
		set((state) => ({ messages: [...state.messages, message] })),

	// Загрузка истории сообщений
	loadChatHistory: async (csrf) => {
		const tid = get().tid;
		if (!tid) return;

		const result = await getChatHistory(csrf, tid);
		if (result?.response === "success") {
			console.log(result)
			set({ tid: result.tid, messages: result.data });
		}
	},

	sendChatMessage: async (csrf, text) => {
		let tid = get().tid || ' ';
		if (!tid) {
			const result = await sendMessage(csrf, "", text);
			if (result?.response === "success") {
				tid = result.tid;
				set({ tid });
			} else {
				return;
			}
		}
	
		const result = await sendMessage(csrf, tid, text);
		if (result?.response === "success") {
			get().addMessage({ tid, text, time: Date.now(), status: 0, sender: "me" });
		}
	},
}));



export const useThemeStore = create<IStore>()(
	persist(
		set => ({
			theme: 'dark',
			setTheme: newTheme => {
				set(() => {
					if (typeof document !== 'undefined') {
						localStorage.setItem('theme', newTheme)
						document.documentElement.classList.toggle(
							'dark',
							newTheme === 'dark'
						)
					}
					return { theme: newTheme }
				})
			},
			initializeTheme: () => {
				const savedTheme = localStorage.getItem('theme') || 'dark'
				set(() => {
					if (typeof document !== 'undefined') {
						document.documentElement.classList.toggle(
							'dark',
							savedTheme === 'dark'
						)
					}
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
			replaceCurrency: false,
			setReplaceCurrency: val => set({ replaceCurrency: val }),
			globalCompany: null,
			setGlboalCompany: val => set({ globalCompany: val }),
			globalCompanyIcon: null,
			setGlboalCompanyIcon: val => set({ globalCompanyIcon: val }),
			globalPeriod: null,
			setGlobalPeriod: val => set({ globalPeriod: val }),
			open: false,
			setOpen: val => set({ open: val }),
			user: null,
			setUser: userData => {
				if (typeof document !== 'undefined') {
					set({ user: userData })
					localStorage.setItem('userData', JSON.stringify(userData))
				}
			},
			clearUser: () => {
				localStorage.removeItem('userData')
				localStorage.removeItem('profile-store')
				set({ user: null })
			},
			showVerifWindow: false,
			setshowVerifWindow: val => set({ showVerifWindow: val }),
		}),
		{
			name: 'profile-store',
		}
	)
)
