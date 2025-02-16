import { create } from 'zustand'

// задать строгую типизпцию для объекта USER (сервер)

type UserState = {
	user: any | null
	csrf: string | null
	setUser: (user: any | null) => void
	setCsrf: (csrf: string | null) => void
	loadUser: () => void
}

export const useUserStore = create<UserState>(set => ({
	user: null,
	csrf: null,
	setUser: user => set({ user }),
	setCsrf: csrf => set({ csrf }),
  loadUser: () => {
    try {
      const storedData = localStorage.getItem('userData')
      console.log('loadUser вызван. Данные в localStorage:', storedData)
  
      if (storedData) {
        const parsedData = JSON.parse(storedData)
        console.log('Парсим данные:', parsedData)
  
        if (parsedData && parsedData.uid && parsedData.csrf) {
          console.log('✅ Данные корректны, обновляем user')
          set({ user: { ...parsedData } }) // 🔥 Обновляем состояние через новый объект
        } else {
          console.warn('⚠️ Данные некорректны, очищаем userData')
          localStorage.removeItem('userData')
          localStorage.removeItem('profile-store')
          set({ user: { uid: null, csrf: null } }) // 🔥 Меняем объект, а не просто null
        }
      } else {
        console.log('🔴 Нет данных в localStorage, user = null')
        set({ user: { uid: null, csrf: null } }) // 🔥 Заменяем объект, а не null
      }
    } catch (error) {
      console.error('❌ Ошибка при загрузке userData:', error)
      localStorage.removeItem('userData')
      localStorage.removeItem('profile-store')
      set({ user: { uid: null, csrf: null } }) // 🔥 Меняем объект
    }
  },
  
}))
