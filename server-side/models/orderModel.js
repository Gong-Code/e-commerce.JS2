const Order = require('../schemas/orderSchema'); 

exports.createOrder = async (req, res) => {
    const { userId } = req.body;
    const { products } = req.body;

    if(!userId || !products){
        return res.status(400)
        .json({ message: 'User ID and products are required' });
    }

    try {
        const order = await Order.create({
            user: userId,
            products
        })
        res.status(201).json({ message: 'Order created successfully', order })
    } catch (err) {
        console.log('Failed to create order', err.message)
        res.status(500).json({ message: 'Failed to create order', error: err.message })
    }
} 