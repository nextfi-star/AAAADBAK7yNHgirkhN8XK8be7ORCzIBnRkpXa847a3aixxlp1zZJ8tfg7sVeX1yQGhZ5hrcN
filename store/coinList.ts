import { getCoins } from '@/utils/api'
import { create } from "zustand";

export type Coin = {
	id: number;
	name: string | '';
	avatar?: string;
	type: string;
	network: string[];
	fee: number;
	deposit: number;
	withdraw: number;
	enable: number;
};

type CoinStore = {
	coins: Coin[];
	selectedCoin: Coin | null;
	loadCoins: (csrf: string) => Promise<void>;
	setSelectedCoin: (coin: Coin) => void;
	setSelectedNetwork: (network: string) => void;
	selectedNetwork: string | null;
};

export const useCoinStore = create<CoinStore>((set) => ({
	coins: [],
	setSelectedNetwork: (network) => set({ selectedNetwork: network }),
	selectedCoin: null,
	selectedNetwork: null,
	loadCoins: async (csrf) => {
		const result = await getCoins(csrf);
		set({ coins: result });
	},

	setSelectedCoin: (coin) => set({ selectedCoin: coin }),
}));
