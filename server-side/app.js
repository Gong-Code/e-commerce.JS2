const express = require('express');
const cors = require('cors');
const app = express();

const productController = require('./controllers/productController')
const messageController = require('./controllers/messageController')
const userController = require('./controllers/userController')
const orderController = require('./controllers/orderController')

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors());


app.use('/api/products', productController)
app.use('/api/messages', messageController)
app.use('/api/auth', userController)
app.use('/api/orders', orderController)


module.exports = app