import React from 'react'

import { Outlet } from 'react-router-dom'
import AuthContextProvider from '../context/AuthContext'
import { Toaster } from 'react-hot-toast';
import OrderContextProvider from '../context/OrderContext';

function RootLayout() {
  
  return (
      <AuthContextProvider>
        <OrderContextProvider>
          <Outlet />
          <Toaster position="top-center" />
        </OrderContextProvider>
      </AuthContextProvider>
  )
}

export default RootLayout