import React from 'react'

import { Navbar } from '../../components/Navbar'
import { Outlet } from 'react-router-dom'

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
                </ProductsContextProvider>  
            </CartContextProvider>       
        </SidebarContextProvider>
    )
}

export default PublicLayout