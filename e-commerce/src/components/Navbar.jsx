import { Link, NavLink } from 'react-router-dom'
import SidebarPage from '../app/public/SidebarPage';

//icons
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";


// context
import { SidebarContext, useSidebarContext } from '../context/SidebarContext';

export const Navbar = () => {

    const { isOpen, setIsOpen } = useSidebarContext(SidebarContext)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        <nav className='bg-emerald-800 py-4'>
            <div className='max-w-[1440px] m-auto px-2 flex justify-between items-center'>                
                <Link to="/" className='text-white text-2xl font-semibold'><p>E-commerce</p></Link>
                <ul className='flex gap-x-4'>
                    <li><NavLink to="/" className="text-white [&.active]:underline">Home</NavLink></li>
                    <li><NavLink to="/contact" className="text-white [&.active]:underline">Contact</NavLink></li>
                    <li><NavLink to="/products" className="text-white [&.active]:underline">Products</NavLink></li>
                    <li><NavLink to="/login" className="text-white [&.active]:underline">Login</NavLink></li>

                </ul>
                <div onClick={handleClick} className='cursor-pointer flex relative'>
                    <SidebarPage />
                    <AiOutlineShoppingCart className='text-2xl text-white' />
                </div>
            </div>
        </nav>
    )
}
