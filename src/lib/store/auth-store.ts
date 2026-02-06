'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { User } from '@/types'
import { DEMO_CREDENTIALS } from '@/lib/constants'

interface AuthState {
  user: User | null
  users: User[] // Store registered users
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<boolean>
  signup: (userData: Partial<User> & { password: string }) => Promise<boolean>
  logout: () => void
  setLoading: (loading: boolean) => void
}

const demoUser: User = {
  id: 'usr-001',
  email: DEMO_CREDENTIALS.email,
  name: 'John Anderson',
  company: 'GreenTech Manufacturing Co.',
  role: 'admin',
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      users: [],
      isAuthenticated: false,
      isLoading: false,

      login: async (email: string, password: string) => {
        set({ isLoading: true })

        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Check demo credentials
        if (email === DEMO_CREDENTIALS.email && password === DEMO_CREDENTIALS.password) {
          set({
            user: demoUser,
            isAuthenticated: true,
            isLoading: false,
          })
          return true
        }

        // Check registered users
        const registeredUser = get().users.find(u => u.email === email && (u as any).password === password)
        if (registeredUser) {
           // Remove password from state user object for security implementation (conceptually)
           const { password: _, ...safeUser } = registeredUser as any
           set({
             user: safeUser,
             isAuthenticated: true,
             isLoading: false
           })
           return true
        }

        set({ isLoading: false })
        return false
      },

      signup: async (userData: Partial<User> & { password: string }) => {
        set({ isLoading: true })
        await new Promise((resolve) => setTimeout(resolve, 1500))

        const newUser: User = {
          id: `usr-${Date.now()}`,
          email: userData.email!,
          name: userData.company || 'New User', // Defaulting name to company for now as signup form doesn't have name
          company: userData.company || '',
          role: 'admin',
          avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(userData.company || 'U')}&background=random`
        }
        
        // Store password with user for this local-only demo (not secure for real apps)
        const userWithPassword = { ...newUser, password: userData.password }

        set(state => ({
          users: [...state.users, userWithPassword],
          isLoading: false
        }))
        
        return true
      },

      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
        })
      },

      setLoading: (loading: boolean) => {
        set({ isLoading: loading })
      },
    }),
    {
      name: 'sustainiq-auth',
      partialize: (state) => ({
        user: state.user,
        users: state.users, // Persist users array
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
)
