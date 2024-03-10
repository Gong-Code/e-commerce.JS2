const Order = require('../schemas/orderSchema'); 
const jwt = require('jsonwebtoken');

exports.createOrder = async (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, 'your_jwt_secret', async (err, user) => {
        if (err) {
            console.log(err.message);
            return res.sendStatus(400);
        }

        const { products } = req.body;

        try {
            const order = await Order.create({
                user: user._id,
                products
            });

            res.status(201).json({ message: 'Order created successfully', order });
        } catch (err) {
            console.log('Failed to create order', err.message);
            res.status(500).json({ message: 'Failed to create order', error: err.message });
        }
    });
};

exports.getOrders = async (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, 'your_jwt_secret', async (err, user) => {
        if(err){
            console.log(err.message)
            return res.sendStatus(400)
        }

        try {
            const orders = await Order.find({
                user: user._id
            })
            res.status(200).json({ message: 'Orders fetched successfully', orders });
        } catch (err) {
            console.log('Failed to fetch orders', err.message);
            res.status(500).json({ message: 'Failed to fetch orders', error: err.message });
        }
    })
}