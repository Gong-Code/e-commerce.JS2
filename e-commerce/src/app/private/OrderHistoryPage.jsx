import { useEffect } from 'react';
import { OrderItem } from '../../components/OrderItem'
import { OrderContext, useOrderContext } from '../../context/OrderContext'
import { Link } from 'react-router-dom';

const OrderHistoryPage = () => {

    const { orders, totalPrice, totalQuantity, getAllOrders } = useOrderContext(OrderContext)

    console.log(orders)

    useEffect(() => {
        getAllOrders()
    }, [])

    return (   
        <div className="flex flex-col items-center overflow-x-auto m-12 w-full">
            <h1 className="text-2xl font-bold mb-4 text-white">Order History</h1>
            <div className="flex flex-col items-center w-full">
                {
                    orders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map(order => {
                        return <OrderItem key={order._id} order={order} />
                    })
                }
            </div>
            <Link to="/" className="mt-4 text-white bg-emerald-600 p-2 rounded-md">Back to Home</Link>
        </div>
    )
}

export default OrderHistoryPage