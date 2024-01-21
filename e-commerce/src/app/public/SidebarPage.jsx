import { Link } from 'react-router-dom';
import { SidebarContext, useSidebarContext } from '../../context/SidebarContext';
import { CartContext, useCartContext } from '../../context/CartContext';

// icons
import { IoMdClose } from "react-icons/io";
import { FiTrash2 } from 'react-icons/fi';

// components
import { CartItem } from '../../components/CartItem';
import { useRef } from 'react';



function SidebarPage() {
    const { isOpen, handleClose } = useSidebarContext(SidebarContext)
    
    const { cart, clearCart } = useCartContext(CartContext)

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
                }
            </div>
            <div className='text-white flex flex-col gap-y-3 py-4
            mt-4'>
                <div className='flex w-full justify-between items-center'>
                    {/* total price */}
                    <div className='uppercase font-semibold'>
                        <span className='mr-2'>Total:</span>100 SEK
                    </div>
                    {/* clear cart */}
                    <div onClick={clearCart} className='cursor-pointer py-4 bg-red-500 w-12 
                    h-12 flex justify-center items-center text-xl rounded-sm'>
                        <FiTrash2 />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarPage