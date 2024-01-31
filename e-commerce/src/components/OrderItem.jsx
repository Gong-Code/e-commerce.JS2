import React from 'react'

export const OrderItem = ({ order }) => {
    const { _id: orderId, products } = order;

    return (
        <>
            <h2 className='m-2'>Order: {orderId}</h2>
            {products.map(({ quantity, product: { _id, name, price } }) => (
                <tr key={_id} className="bg-white dark:bg-gray-800 border-b-2 border-gray-200">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {_id}
                    </th>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {name}
                    </th>
                    <td className="px-6 py-4">
                        {quantity}
                    </td>
                    <td className="px-6 py-4">
                        {price} SEK
                    </td>
                </tr>
            ))}
        </>        
    )
}
