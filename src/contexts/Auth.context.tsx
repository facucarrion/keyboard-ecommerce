'use client'

import useGoogleAuth from '@/hooks/useGoogleAuth.hook'
import { AuthContextType } from '@/types/AuthContext.type'
import { createContext, useContext } from 'react'

interface Props {
  children: React.ReactNode
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  signInWithGoogle: async () => (await Promise.resolve()) as any,
  signOutFromGoogle: async () => await Promise.resolve()
})

const useAuthContext = () => useContext(AuthContext)

export default function AuthProvider({ children }: Props) {
  const { user, signInWithGoogle, signOutFromGoogle } = useGoogleAuth()

  const value = {
    user,
    signInWithGoogle,
    signOutFromGoogle
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { useAuthContext }
