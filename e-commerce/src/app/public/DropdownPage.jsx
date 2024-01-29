import React, { useState } from 'react'
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

export const DropdownPage = ({ products, onCategoryChange }) => {
    const [isOpen, setIsOpen] = useState(false)
        
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    const uniqueCategories = [...new Set(products.map(product => product.category))];

    return (
        <div onClick={handleOpen} className='relative flex justify-start items-center mt-6 w-full md:w-[300px] 
        ml-4 md:ml-[180px]'>
        <button className=' px-2 text-white bg-emerald-800 rounded-lg shadow-md 
            hover:bg-blue-700 w-full flex items-center justify-between font-bold text-lg
            tracking wider border-4 border-transparent active:border-emerald-600
            duration-300 active:text-black'>
                Category
                {
                    !isOpen ? 
                    <MdArrowDropDown className='h-8 text-xl' /> 
                    : 
                    <MdArrowDropUp className='h-8 text-xl' />
                }
            </button>
            {isOpen && (
            <div className='absolute top-full mt-2 w-full bg-emerald-800 rounded-lg shadow-lg z-20'>
                <button onClick={() => onCategoryChange()} 
                className='block px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600
                text-center uppercase w-full' role='menuitem'>
                    Show All
                </button>
                {uniqueCategories.map(category => (
                <button key={category} onClick={() => onCategoryChange(category)} 
                className='block px-4 py-2 text-sm font-semibold text-white w-full hover:bg-emerald-600
                text-center uppercase' role='menuitem'>
                    {category}
                </button>
            ))}
            </div>
            )}
        </div>       
    )
}   
