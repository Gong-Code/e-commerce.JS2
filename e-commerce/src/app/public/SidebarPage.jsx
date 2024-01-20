import { Link } from 'react-router-dom';
import { SidebarContext, useSidebarContext } from '../../context/SidebarContext';
import { CartContext, useCartContext } from '../../context/CartContext';

// icons
import { IoMdClose } from "react-icons/io";
import { FiTrash } from 'react-icons/fi';

// components
import { CartItem } from '../../components/CartItem';
import { useRef } from 'react';



function SidebarPage() {
    const { isOpen, handleClose } = useSidebarContext(SidebarContext)
    
    const { cart } = useCartContext(CartContext)

    return (
        <div onClick={(event) => event.stopPropagation()}
        className={`${!isOpen && 'hidden'} bg-neutral-900 w-full fixed right-0
        shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all
        duration-300 z-20 px-4 h-full`}>
            <div className='flex text-white justify-between py-6 border-b border-gray-600'>
                <div className='uppercase text-sm font-semibold'>Shopping Cart 
                    <span className='text-emerald-500 ml-2'>({cart.reduce((total, item) => total + item.amount, 0)}) </span>
                </div>
                <button 
                onClick={handleClose}               
                className='cursor-pointer w-8 h-8 justify-center items-center'>
                    <IoMdClose className='text-2xl bg-red-800 py-1 rounded-sm'  />
                </button>
            </div>
            <div className='text-white'>
            {
                cart.map(item => {
                    return <CartItem key={item._id} item={item} />
                })
            }</div>
        </div>
    )
}

export default SidebarPage