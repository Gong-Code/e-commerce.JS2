import { OrderItem } from '../../components/OrderItem'
import { OrderContext, useOrderContext } from '../../context/OrderContext'
import { Link } from 'react-router-dom';

const OrderHistoryPage = () => {

    const { orders, totalPrice, totalQuantity, clearOrders } = useOrderContext(OrderContext)

    console.log(orders)

    return (   
        <div className="flex flex-col items-center overflow-x-auto m-12">
            <h1 className="text-2xl font-bold mb-4 text-white">Order History</h1>
            <div className="flex justify-center w-full">
                <table className="w-3/4 text-sm text-left rtl:text-right text-gray-500 dark:text-orange-400">
                    <thead className="text-xs text-white uppercase bg-emerald-800">
                        <tr>
                            <th scope="col" className="px-6 py-3 rounded-s-lg">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Qty
                            </th>
                            <th scope="col" className="px-6 py-3 rounded-e-lg">
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => {
                                return <OrderItem key={order._id} order={order} />
                            })
                        }           
                    </tbody>
                    <tfoot className="text-xs text-white uppercase bg-emerald-800 mt-4 rounded-md">
                    <tr>
                        <th scope="row" className="px-6 py-3 rounded-s-lg">Total</th>
                        <td className="px-6 py-3">{totalQuantity} Quantity</td>
                        <td className="px-6 py-3">{totalPrice} SEK</td>
                        <td className="px-6 py-3 rounded-e-lg"></td>
                    </tr>
                </tfoot>
                </table>
            </div>
            <Link to="/" className="mt-4 px-4 py-2 bg-orange-700 text-white rounded 
            hover:bg-emerald-800">Back to Home
            </Link>
            
        </div>
)
}

export default OrderHistoryPage