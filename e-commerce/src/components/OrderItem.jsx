import React from 'react'

export const OrderItem = ({ order }) => {
    const { _id: orderId, products } = order;
    
    let totalPrice = 0;
    products.forEach(product => {
        if (product && product.productId && typeof product.productId.price === 'number' && typeof product.quantity === 'number') {
            totalPrice += product.productId.price * product.quantity;
        }
    });

    const totalQuantity = products.reduce((total, { quantity }) => total + quantity, 0);

    return (
        <div className='w-full'>
            <h2 className='text-xl mb-1 mt-4 text-orange-400'>Order ID: {orderId}</h2>
            {products.map(( product ) => (
                product && product._id && (
                    <div key={product._id} className="bg-white dark:bg-gray-800 border-b-2 border-gray-200 overflow-auto">
                        <p className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                            ID: {product._id}
                        </p>
                        <p className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                            Name: {product.productId.name}
                        </p>
                        <p className="px-6 py-4 dark:text-white">
                            Quantity: {product.quantity}
                        </p>
                        <p className="px-6 py-4 dark:text-white">
                            Price: {product.productId.price * product.quantity} SEK
                        </p>
                    </div>
                )
            ))}
            <div className='flex gap-5 items-center m-2 text-white font-bold'>
                <p>Total Quantity: {totalQuantity}</p>
                <p className=''>Total Price: {totalPrice} SEK</p>
            </div>
        </div>        
    )
}

export default OrderItem