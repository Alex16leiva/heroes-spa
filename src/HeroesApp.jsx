import React from 'react'
import { AppRouter } from './Router/AppRouter'
import { AuthProvider } from './auth'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const HeroesApp = () => {
  return (
    <AuthProvider>
        <AppRouter />
        <ToastContainer />
    </AuthProvider>
  )
}
