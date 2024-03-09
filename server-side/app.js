const express = require('express');
const app = express();

const productController = require('./controllers/productController')
const messageController = require('./controllers/messageController')
const userController = require('./controllers/userController')

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


app.use('/api/products', productController)
app.use('/api/messages', messageController)
app.use('/api/auth', userController)


module.exports = app