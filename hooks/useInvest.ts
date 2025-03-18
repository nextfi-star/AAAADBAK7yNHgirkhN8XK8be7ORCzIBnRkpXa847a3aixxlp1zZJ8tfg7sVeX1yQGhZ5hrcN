// import { create } from 'zustand'
// import { getInvestHistory } from '@/utils/api'

// type InvestHistoryState = {
// 	invests: any | null
// 	isLoading: boolean
// 	error: string | null
// 	fetchInvestHistory: (csrf: string, coin: string) => Promise<void>
// }

// export const useInvestStore = create<InvestHistoryState>(set => ({
// 	invests: null,
// 	isLoading: false,
// 	error: null,
// 	fetchInvestHistory: async (csrf: string, coin: string) => {
// 		set({ isLoading: true, error: null })
// 		try {
// 			const result = await getInvestHistory({ coin, csrf })
// 			if (result.response === 'success') {
// 				set({ invests: result.data })
// 			} else {
// 				set({ error: result.message })
// 			}
// 		} catch (error: any) {
// 			set({ error: error.message })
// 		} finally {
// 			set({ isLoading: false })
// 		}
// 	},
// }))
