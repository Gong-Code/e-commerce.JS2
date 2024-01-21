import React from 'react'
import { Link } from 'react-router-dom';

// icons
import { IoMdClose } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { CartContext, useCartContext } from '../context/CartContext';

export const CartItem = ({ item }) => {
    
    const { _id, name, images, price, amount  } = item;
    
    const { removeFromCart, increaseAmount, decreaseAmount } = useCartContext(CartContext)

    return (
        <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-600
        w-full font-light'>
            <div className='w-full min-h-[150px] flex items-center gap-x-4'>
                {/* image */}
                <Link to={`/product/${_id}`}>
                    <img className='max-w-[80px]' src={images[0]} alt='image of electronic device' />
                </Link>
                <div className='w-full flex flex-col'>
                    {/* name */}
                    <div className='flex justify-between mb-2'>
                        <Link to={`/product/${_id}`} className='text-sm uppercase
                        font-medium max-w-[240px] hover:underline'>
                            {name}
                        </Link>
                        {/* remove icon */}
                        <div onClick={() => removeFromCart(_id)} className='text-xl'>
                            <IoMdClose className='text-gray-200 hover:text-red-700
                            transition' />
                        </div>
                    </div>
                    <div className=' flex gap-x-2 h-[36px] text-sm'>
                        {/* quantity */}
                        <div className='flex flex-1 max-w-[100px] 
                        items-center h-full font-medium border'>
                            {/* minus icon */}
                            <div onClick={() => decreaseAmount(_id)} className='flex-1 h-full flex justify-center
                            items-center cursor-pointer'>
                                <FaMinus  />
                            </div>
                            {/* amount */}
                            <div className='h-full flex justify-center items-center px-2'>{amount}</div>                    
                            {/* plus icon */}
                            <div onClick={() => increaseAmount(_id)} className='flex-1 h-full flex justify-center
                            items-center cursor-pointer'>
                                <FaPlus />
                            </div>
                        </div>
                        {/* price */}
                        <div className='flex-1 flex justify-around items-center text-gray-400'>{price} SEK </div>
                         {/* total price */}
                        <div className='flex-1 flex justify-end items-center font-medium'>
                            {`${(price * amount).toFixed(2)}`} SEK
                        </div>
                    </div>
                </div>
            </div>           
        </div>
    )
}
