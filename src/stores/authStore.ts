import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  id: string
  username: string
  name: string
  role: 'student' | 'teacher' | 'canteen'
  email?: string
  avatar?: string
}

interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  rememberMe: boolean
  login: (username: string, password: string) => Promise<void>
  loginWithBiometric: (type: 'face' | 'fingerprint') => Promise<void>
  logout: () => void
  setRememberMe: (value: boolean) => void
}

export const useAuthStore = create<AuthState>(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      rememberMe: false,

      login: async (username, password) => {
        // Mock login - replace with actual API call
        const mockUsers: Record<string, { password: string; user: User }> = {
          'student001': {
            password: 'student123',
            user: {
              id: 'std001',
              username: 'student001',
              name: 'Aarav Kumar',
              role: 'student',
              email: 'aarav.kumar@ghrce.ac.in',
              avatar: '👨‍🎓',
            },
          },
          'teacher001': {
            password: 'teacher123',
            user: {
              id: 'tch001',
              username: 'teacher001',
              name: 'Prof. Rajesh Sharma',
              role: 'teacher',
              email: 'rajesh.sharma@ghrce.ac.in',
              avatar: '👨‍🏫',
            },
          },
          'canteen001': {
            password: 'canteen123',
            user: {
              id: 'can001',
              username: 'canteen001',
              name: 'Canteen Manager',
              role: 'canteen',
              email: 'canteen@ghrce.ac.in',
              avatar: '👨‍🍳',
            },
          },
        }

        const userEntry = mockUsers[username]
        if (!userEntry || userEntry.password !== password) {
          throw new Error('Invalid credentials')
        }

        set({
          user: userEntry.user,
          token: 'mock-token-' + Date.now(),
          isAuthenticated: true,
        })
      },

      loginWithBiometric: async (type) => {
        // Mock biometric login
        const user: User = {
          id: 'std001',
          username: 'student001',
          name: 'Aarav Kumar',
          role: 'student',
          email: 'aarav.kumar@ghrce.ac.in',
          avatar: '👨‍🎓',
        }
        set({
          user,
          token: 'mock-token-' + Date.now(),
          isAuthenticated: true,
        })
      },

      logout: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
          rememberMe: false,
        })
      },

      setRememberMe: (value) => {
        set({ rememberMe: value })
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        rememberMe: state.rememberMe,
      }),
    }
  )
)
