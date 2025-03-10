import { create } from 'zustand'

// задать строгую типизпцию для объекта USER (сервер)

type UserState = {
	user: any | null
	csrf: string | null
	setUser: (user: any | null) => void
	setCsrf: (csrf: string | null) => void
	loadUser: () => void
  updateUser: (updates: Partial<any>) => void;
}

export const useUserStore = create<UserState>(set => ({
	user: null,
	csrf: null,
	setUser: user => set({ user }),
	setCsrf: csrf => set({ csrf }),
  updateUser: updates => {
		set(state => {
			const updatedUser = { ...state.user, ...updates };
			localStorage.setItem("userData", JSON.stringify(updatedUser));
			return { user: updatedUser };
		});
	},
  loadUser: () => {
    try {
      const storedData = localStorage.getItem('userData')
  
      if (storedData) {
        const parsedData = JSON.parse(storedData)
  
        if (parsedData && parsedData.uid && parsedData.csrf) {
          set({ user: { ...parsedData } }) 
        } else {
          console.warn('⚠️ Данные некорректны, очищаем userData')
          localStorage.removeItem('userData')
          localStorage.removeItem('profile-store')
          set({ user: { uid: null, csrf: null } })
        }
      } else {
        console.log('🔴 Нет данных в localStorage, user = null')
        set({ user: { uid: null, csrf: null } }) 
      }
    } catch (error) {
      console.error('❌ Ошибка при загрузке userData:', error)
      localStorage.removeItem('userData')
      localStorage.removeItem('profile-store')
      set({ user: { uid: null, csrf: null } }) 
    }
  },
  
}))
