import { getUserBalance } from '@/utils/api'
import { create } from "zustand";

type BalanceState = {
	loadBalanceByCoin: (csrf: string, coin: string) => Promise<number | null>;
};

export const useBalanceStore = create<BalanceState>(() => ({
	// Загружаем баланс по одной монете
	loadBalanceByCoin: async (csrf, coin) => {
		const result = await getUserBalance(csrf, coin);
		if (result?.response === "success") {
			return result.balance; 
		}
		return null;
	},
}));
