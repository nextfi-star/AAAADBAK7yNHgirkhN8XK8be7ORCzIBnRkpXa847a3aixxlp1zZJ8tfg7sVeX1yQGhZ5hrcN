import {create} from 'zustand';
import { getWithdrawHistory } from '../utils/api';

export interface Withdraw {
  id: number;
  coin: string;
  amount: string;
  address: string;
  uid: string;
  network: string;
  status: number;
  time: string;
  csrf: string
  type: string
}

interface WithdrawStore {
  withdrawList: Withdraw[];
  fetchWithdrawList: (csrf: string) => Promise<void>;
  addWithdraw: (withdraw: Withdraw) => void;
}

export const useWithdrawStore = create<WithdrawStore>((set) => ({
  withdrawList: [],
  fetchWithdrawList: async (csrf: string) => {
    const result = await getWithdrawHistory(csrf);
    if (!result.error) {
      set({ withdrawList: result.data || [] });
    }
  },
  addWithdraw: (withdraw: Withdraw) =>
    set((state) => ({ withdrawList: [withdraw, ...state.withdrawList] })),
}));
