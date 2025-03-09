import {create} from 'zustand';
import { getWithdrawHistory } from '../utils/api';

export interface Withdraw {
  id: number;
  coin: string;
  amount: string;
  network: string;
  status: string;
  time: number;
}

interface WithdrawStore {
  withdrawList: Withdraw[];
  fetchWithdrawList: (csrf: string) => Promise<void>;
  addWithdraw: (withdraw: Withdraw) => void;
}

export const useWithdrawStore = create<WithdrawStore>((set) => ({
  withdrawList: [],
  // Функция для получения списка выводов по CSRF токену
  fetchWithdrawList: async (csrf: string) => {
    const result = await getWithdrawHistory(csrf);
    if (!result.error) {
      set({ withdrawList: result.data || [] });
    }
  },
  // Функция для добавления нового запроса на вывод в локальное состояние
  addWithdraw: (withdraw: Withdraw) =>
    set((state) => ({ withdrawList: [withdraw, ...state.withdrawList] })),
}));
