import { SVGProps } from 'react'

export type IconSvgProps = SVGProps<SVGSVGElement> & {
	size?: number
}

export interface IStore {
	activeTab: string
	theme: string
	setTheme: (newTheme: string) => void
	initializeTheme: () => void
	modeToogle: (selected: string) => void
	mode: string
	email: string
	phone: string
	password: string
	setEmail: (email: string) => void
	setPhone: (phone: string) => void
	setPassword: (password: string) => void
	verifyState: boolean
	setVerifyState: (state: boolean) => void
	progress: number
	setProgress: (state: number) => void
	step: number
	setStep: (value: number) => void
	confirmationStep: number
	setConfirmStep: (val: number) => void
	swapPoppover_1: string | null
	swapPoppover_2: string | null
	swapCheck: (val1: string | null) => void
	swapCheck2: (val2: string | null) => void
	globalVeriState: boolean
	setGlobalVerifState: (state: boolean) => void
	replaceCurrency: boolean
	setReplaceCurrency: (val: boolean) => void
}
