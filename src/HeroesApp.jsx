import React from 'react'
import { AppRouter } from './Router/AppRouter'
import { AuthProvider } from './auth'

export const HeroesApp = () => {
  return (
    <AuthProvider>
        <AppRouter />
    </AuthProvider>
  )
}
