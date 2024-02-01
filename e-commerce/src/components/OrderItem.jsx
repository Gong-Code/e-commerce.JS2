import React from 'react'

export const OrderItem = ({ order }) => {
    
    const { _id: orderId, products } = order;
    const totalPrice = products.reduce((total, { quantity, product: { price } }) => total + quantity * price, 0);
    const totalQuantity = products.reduce((total, { quantity }) => total + quantity, 0);

    return (
        <>
            <h2 className='text-xl mb-1 mt-4'>Order ID: {orderId}</h2>
            {products.map(({ quantity, product: { _id, name, price } }) => (
                <tr key={_id} className="bg-white dark:bg-gray-800 border-b-2 border-gray-200">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {_id}
                    </th>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {name}
                    </th>
                    <td className="px-6 py-4 dark:text-white">
                        {quantity}
                    </td>
                    <td className="px-6 py-4 dark:text-white">
                        {price} SEK
                    </td>
                </tr>
            ))}
            <div className='flex gap-5 items-center m-2 text-white font-bold'>
                <p>Total Quantity: {totalQuantity}</p>
                <p className=''>Total Price: {totalPrice} SEK</p>
            </div>
        </>        
    )
}
