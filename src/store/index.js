// store/themeStore.js
import { create } from 'zustand';

export const useThemeStore = create((set) => ({
  theme: 'dark', 
  setTheme: (newTheme) => {
    set(() => {
     
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
      return { theme: newTheme };
    });
  },
  initializeTheme: () => {
    
    const savedTheme = localStorage.getItem('theme') || 'dark';
    set(() => {
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
      return { theme: savedTheme };
    });
  },
}));

