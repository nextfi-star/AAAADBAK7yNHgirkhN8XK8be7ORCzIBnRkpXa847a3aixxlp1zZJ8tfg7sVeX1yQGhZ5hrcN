import { create } from 'zustand';
import { getDepositHistory } from '../utils/api';

export interface User {
	id: number
	time: string
	address: string
	subaddress: string
	coin: string
	amount: string
	status: string
	percent: string
	adata: string
	sid: string
}

interface DepositStore {
  depositList: User[];
  fetchDepositList: (csrf: string) => Promise<void>;
  addDeposit: (deposit: User) => void;
}

export const useDepositStore = create<DepositStore>((set) => ({
  depositList: [],
  fetchDepositList: async (csrf: string) => {
    const result = await getDepositHistory(csrf);
    if (!result.error) {
      set({ depositList: result.data || [] });
    }
  },
  addDeposit: (deposit: User) =>
    set((state) => ({ depositList: [deposit, ...state.depositList] })),
}));
