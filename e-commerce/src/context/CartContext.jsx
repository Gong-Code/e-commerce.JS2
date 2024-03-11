import { createContext, useContext, useEffect, useState } from "react";
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
    
    const [cart, setCart] = useState([])

    const [itemAmount, setItemAmount] = useState(0)

    const [totalPrice, setTotalPrice] = useState(0)

    const navigate = useNavigate()

    const handlePay = async () => {
        if(itemAmount === 0) {
            toast.error('Your cart is empty. Please add products before making a payment.')
        }
        else{
            const token = localStorage.getItem('access_token');

            const products = cart.map(item => ({
                productId: item._id,
                quantity: item.amount
            }))

            const response = await fetch('http://localhost:9999/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({products})
            })

            if(!response.ok){
                toast.error("Payment failed", {autoclose: 5000})
                console.log("status: " + response.status)
            }

            const data = await response.json();
            console.log(data)

            toast.success("Payment successful!", {autoclose: 5000})
            
            setCart([])
            setItemAmount(0)
            setTotalPrice(0)

            navigate('/')
        }
    }

    useEffect(() => {
        const total = cart.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.price * currentItem.amount
        }, 0)

        setTotalPrice(total)
    }, [cart]) 

    useEffect(() => {
        if(cart){
            const amount = cart.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.amount;
            }, 0);

            setItemAmount(amount)
        }
    }, [cart])

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

    const clearCart = () => {
        setCart([]);
    }

    const increaseAmount = (id) => {
        const cartItem = cart.find(item => item._id === id);
        addToCart(id, cartItem);
    }

    const decreaseAmount = (id) => {
        const cartItem = cart.find(item => {
            return item._id === id;
        });
        
        if(cartItem){
            const newCart = cart.map(item => {
                if(item._id === id){
                    return {...item, amount: item.amount - 1 }
                }
                else{
                    return item;
                }
            })
            setCart(newCart)
        }

        if(cartItem.amount < 2){
            removeFromCart(id)
        }
    }

    return(
        <CartContext.Provider value={{ 
            cart, 
            addToCart, 
            removeFromCart, 
            clearCart, 
            increaseAmount, 
            decreaseAmount, 
            itemAmount,
            totalPrice,
            handlePay
        }}>{children}</CartContext.Provider>
    )
}

export default CartContextProvider

export const useCartContext = () => {
    const context = useContext(CartContext)

    if(!context) throw new Error("useCartContextProvider must be called within a CartContextProvider")

    return context
}