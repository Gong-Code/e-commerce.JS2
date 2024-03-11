import { createContext, useContext, useState } from "react";

export const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {
    
    const [orders, setOrders] = useState([]);
    const [url, setUrl] = useState('http://localhost:9999/api/orders');
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const calculateTotalQuantity = (data) => {
        return data.reduce((total, order) => total + order.products.reduce((total, product) => 
        total + product.quantity, 0), 0);
    }

    const calculateTotalPrice = (data) => {
        return data.reduce((total, order) => total + order.products.reduce((total, product) => 
        total + product.product.price * product.quantity, 0), 0);
    }

    const getAllOrders = async () => {
        const token = localStorage.getItem('access_token')
        try{
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
    
            if(!response.ok){
                throw new Error("status: " + response.status)
            }
    
            const data = await response.json()
            console.log(data)
    
            if (Array.isArray(data.orders)) {
                setOrders(data.orders);
    
                const totalQuantity = calculateTotalQuantity(data.orders);
                const totalPrice = calculateTotalPrice(data.orders);
    
                setTotalQuantity(totalQuantity);
                setTotalPrice(totalPrice);
            } else {
                console.error('Orders is not an array:', data.orders);
            }
    
            return data.orders
        }
        catch(error){
            console.log("Something went wrong", error)
        }
    };

    const value = {
        orders,
        getAllOrders,
        totalPrice,
        totalQuantity,
    }

    return(
        <OrderContext.Provider value={value}>{ children }</OrderContext.Provider>
    )
}

export default OrderContextProvider

export const useOrderContext = () => {
    const context = useContext(OrderContext)

    if(!context) throw new Error('useOrderContext must be inside an OrderContextProvider')

    return context
}