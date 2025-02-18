import { InvestData, PeriodData } from '@/components/shared/Invest_steps'
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
	// Investing cards
	globalCompany: InvestData | null
	setGlboalCompany: (val: InvestData | null) => void
	globalCompanyIcon: InvestData | null
	setGlboalCompanyIcon: (val: InvestData | null) => void
	globalPeriod: PeriodData | null
	setGlobalPeriod: (val: PeriodData | null) => void
	open: boolean
	setOpen: (val: boolean) => void
	user: {
    email?: string;
    phone?: string;
    username?: string;
		uid?: string
		password?: string
  } | null;
  setUser: (userData: any) => void;
  clearUser: () => void;
	showVerifWindow: boolean
	setshowVerifWindow: (val: boolean) => void
}
export interface User {
  [key: string]: any;
}

export interface InvestHistoryPayload {
  coin: string;
  csrf: string;
}

export type Coin = {
	name: string
	type: string
	enable: number
	deposit: number
	withdraw: number
}