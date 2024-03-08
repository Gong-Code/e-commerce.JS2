const express = require('express');
const app = express();

const productController = require('./controllers/productController')

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


app.use('/api/products', productController)

module.exports = app