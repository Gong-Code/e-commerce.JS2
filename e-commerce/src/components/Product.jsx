import { Link } from "react-router-dom";
import {BsPlus, BsEyeFill} from 'react-icons/bs'
import { CartContext, useCartContext } from "../context/CartContext";

export const Product = ({ product }) => {

    const {_id, name, price, description, category, images} = product

    const { addToCart, removeFromCart  } = useCartContext(CartContext)

    return (
        <div>
            <div className="border border-[#e4e4e4] h-[300px]
            text-white mb-4 relative overflow-hidden group transition">
                <div className="w-full h-full flex justify-center items-center bg-white">
                    {/* images */}
                    <div className="w-[200px] mx-auto flex justify-center items-center">
                        <img className="max-h-[160px] group-hover:scale-110
                        transition duration-300 " 
                        src={images[0]} alt="images of komplett products"/>
                    </div>
                    <div className="absolute top-6 -right-11 group-hover:right-5 p-2
                    flex flex-col items-center gap-y-2 opacity-0 group-hover:opacity-100
                    transition-all duration-300">
                        {/* add to cart button */}
                        <button onClick={() => addToCart(_id, product)}>
                            <div className="flex justify-center items-center text-white
                            w-12 h-12 bg-green-700">
                                <BsPlus className="text-3xl  " />
                            </div>
                        </button>
                        <Link to={`/product/${_id}`} className="w-12 h-12 bg-white flex
                        justify-center items-center text-black drop-shadow-xl">
                            <BsEyeFill />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="text-white">
                <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
                <Link to={`/product/${_id}`}>
                    <h2 className="font-semibold text-emerald-600 mb-1">{name}</h2>
                </Link>
                <div className="text-orange-500 font-semibold">{price} SEK</div>
            </div>
        </div>
    )
}
