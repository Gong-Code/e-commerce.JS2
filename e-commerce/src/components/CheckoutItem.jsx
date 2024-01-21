import React from 'react'
import { CartContext, useCartContext } from '../context/CartContext';

export const CheckoutItem = ({ item }) => {

    const { _id, name, images, price, amount  } = item;

    const { itemAmount, increaseAmount, decreaseAmount, totalPrice } = useCartContext(CartContext)

    return (
        <tr>
            <td className="py-4">
                <div className="flex items-center">
                    <img className="h-16 w-16 mr-4" src={images[0]} alt="Product image"/>
                    <span className="font-semibold">{name}</span>
                </div>
            </td>
            <td className="py-4">{ price } SEK</td>
            <td className="py-4">
                <div className="flex items-center">
                    <button onClick={() => decreaseAmount(_id)}  className="border rounded-md py-2 px-4 mr-2 hover:bg-red-600">-</button>
                    <span className="text-center w-8">{amount}</span>
                    <button onClick={() => increaseAmount(_id)} className="border rounded-md py-2 px-4 ml-2 hover:bg-emerald-500">+</button>
                </div>
            </td>
            <td className="py-4">{amount * price} SEK</td>
        </tr>
    )
}
