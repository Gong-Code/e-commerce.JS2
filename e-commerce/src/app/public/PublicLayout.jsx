import React from 'react'
import { Outlet } from 'react-router-dom'

// components
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { Toaster } from 'react-hot-toast';

// providers
import SidebarContextProvider from '../../context/SidebarContext'
import CartContextProvider from '../../context/CartContext'
import ProductsContextProvider from '../../context/ProductContext'


function PublicLayout() {

    return (
        <SidebarContextProvider>
            <CartContextProvider>
                <ProductsContextProvider>
                    <Navbar />
                    <div className='overflow-hidden'>
                        <Outlet />
                    </div>
                    <Footer />
                    <Toaster position="top-center" />
                </ProductsContextProvider>  
            </CartContextProvider>       
        </SidebarContextProvider>
    )
}

export default PublicLayout