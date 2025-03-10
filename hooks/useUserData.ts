import { create } from 'zustand'

interface UserData {
  "2fa": number;
  country: string;
  csrf: string;
  email: string;
  logo: string;
  overview: Record<string, any>;
  phone: string;
  refcode: string;
  refid: string;
  status: number;
  uid: string | null;
  username: string;
  verification: number;
  verified: number;
  xp: number;
}

// Тип состояния стора
type UserState = {
  user: UserData | null;
  csrf: string | null;
  setUser: (user: UserData | null) => void;
  setCsrf: (csrf: string | null) => void;
  loadUser: () => void;
  updateUser: (updates: Partial<UserData>) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  csrf: null,
  setUser: (user) => set({ user }),
  setCsrf: (csrf) => set({ csrf }),
  updateUser: (updates) => {
    set((state) => {
      if (!state.user) return {}; // Если пользователь ещё не загружен, ничего не делаем
      const updatedUser: UserData = { ...state.user, ...updates };
      localStorage.setItem("userData", JSON.stringify(updatedUser));
      return { user: updatedUser };
    });
  },
  loadUser: () => {
    try {
      const storedData = localStorage.getItem('userData');
  
      if (storedData) {
        const parsedData = JSON.parse(storedData);
  
        // Проверяем, что полученные данные содержат необходимые поля
        if (parsedData && parsedData.uid && parsedData.csrf) {
          set({ user: parsedData as UserData });
        } else {
          console.warn('⚠️ Данные некорректны, очищаем userData');
          localStorage.removeItem('userData');
          localStorage.removeItem('profile-store');
          set({ user: null });
        }
      } else {
        console.log('🔴 Нет данных в localStorage, user = null');
        set({ user: null });
      }
    } catch (error) {
      console.error('❌ Ошибка при загрузке userData:', error);
      localStorage.removeItem('userData');
      localStorage.removeItem('profile-store');
      set({ user: null });
    }
  },
}));
