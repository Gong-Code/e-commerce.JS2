import { createContext, useContext, useState } from "react";

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addToCart = (id, product) => {
        setCart(prevItems => {

            const cartItem = prevItems.find(item => {
                return item._id === id
            })
                
            if(cartItem) {
                // if the item is already in the cart, increase the amount
                const newCart = [...cart].map(item => {
                    if(item._id === id){
                        return {...item, amount: cartItem.amount + 1}
                    }
                    else{
                        return item;
                    }
                })
                return newCart
            }
            else{
                // if the item is not in the cart, add it
                return [...prevItems, { ...product, amount: 1}];
            }
        })

        console.log(cart)
    }

    const removeFromCart = (id) => {
        const newItem = cart.filter(item => {
            return item._id !== id
        })
        setCart(newItem)
    }

    return(
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>{children}</CartContext.Provider>
    )
}

export default CartContextProvider

export const useCartContext = () => {
    const context = useContext(CartContext)

    if(!context) throw new Error("useCartContextProvider must be called within a CartContextProvider")

    return context
}