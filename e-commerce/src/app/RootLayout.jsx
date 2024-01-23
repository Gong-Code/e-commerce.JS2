import React from 'react'

import { Outlet } from 'react-router-dom'
import AuthContextProvider from '../context/AuthContext'
import { Toaster } from 'react-hot-toast';

function RootLayout() {
  
  return (
      <AuthContextProvider>
        <Outlet />
        <Toaster position="top-center" />
      </AuthContextProvider>
  )
}

export default RootLayout