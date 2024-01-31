import React from 'react'

export const OrderItem = ({ order: { products } }) => {

    return (
        <>
            {products.map(({ quantity, product: { _id, name, price } }) => (
                    <tr key={_id} className="bg-white dark:bg-gray-800 border-b border-gray-200">
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
