const router = require('express').Router()
const { getAllProducts, createNewProduct } = require('../models/productModel')

router.get('/', getAllProducts)
router.post('/', createNewProduct)

module.exports = router;