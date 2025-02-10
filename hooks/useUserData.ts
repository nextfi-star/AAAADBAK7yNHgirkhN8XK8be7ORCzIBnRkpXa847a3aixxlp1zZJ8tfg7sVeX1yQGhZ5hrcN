import { create } from 'zustand'

type UserState = {
  user: any
  setUser: (user: any) => void
  loadUser: () => void
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  loadUser: () => {
    const storedData = localStorage.getItem('userData') || '{}'
    set({ user: JSON.parse(storedData) })
  },
}))
