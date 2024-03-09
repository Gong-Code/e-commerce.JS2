const express = require('express');
const app = express();

const productController = require('./controllers/productController')
const messageController = require('./controllers/messageController')

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


app.use('/api/products', productController)
app.use('/api/messages', messageController)


module.exports = app