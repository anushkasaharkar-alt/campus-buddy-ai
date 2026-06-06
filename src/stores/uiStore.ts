import { create } from 'zustand'

interface UIState {
  isDark: boolean
  language: 'en' | 'hi' | 'mr'
  sidebarOpen: boolean
  toggleDarkMode: () => void
  setLanguage: (lang: 'en' | 'hi' | 'mr') => void
  toggleSidebar: () => void
  setSidebarOpen: (open: boolean) => void
}

export const useUIStore = create<UIState>((set) => ({
  isDark: localStorage.getItem('theme') === 'dark',
  language: (localStorage.getItem('language') as 'en' | 'hi' | 'mr') || 'en',
  sidebarOpen: true,

  toggleDarkMode: () => {
    set((state) => {
      const newIsDark = !state.isDark
      localStorage.setItem('theme', newIsDark ? 'dark' : 'light')
      if (newIsDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      return { isDark: newIsDark }
    })
  },

  setLanguage: (lang) => {
    localStorage.setItem('language', lang)
    set({ language: lang })
  },

  toggleSidebar: () => {
    set((state) => ({ sidebarOpen: !state.sidebarOpen }))
  },

  setSidebarOpen: (open) => {
    set({ sidebarOpen: open })
  },
}))
