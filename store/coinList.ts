import { getCoinList } from '@/utils/api'
import { create } from "zustand";

type Coin = {
	name: string;
	type: string;
	enable: number;
	deposit: number;
	withdraw: number;
};

type CoinState = {
	coins: Coin[];
	loadCoins: (csrf: string) => Promise<void>;
};

export const useCoinStore = create<CoinState>((set) => ({
	coins: [],
	loadCoins: async (csrf) => {
		const result = await getCoinList(csrf);
		if (result?.response === "success" && result.data) {
			set({ coins: result.data });
		}
	},
}));
