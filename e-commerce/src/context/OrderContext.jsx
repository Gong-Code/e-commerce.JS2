import { createContext, useContext, useState } from "react";

export const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {
    
    const [orders, setOrders] = useState([]);
    const [url, setUrl] = useState('http://localhost:9999/api/orders');

    const getAllOrders = async () => {
        const token = localStorage.getItem('access_token')
        try{
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${token}`
                }
            });

            if(!response.ok){
                throw new Error("status: " + response.status)
            }

            const data = await response.json()
            console.log(data)
            console.log(Array.isArray(data));
            setOrders(data);

            return data
        }
        catch(error){
            console.log("Something went wrong", error.message)
        }
    }

    const value = {
        orders,
        getAllOrders,
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