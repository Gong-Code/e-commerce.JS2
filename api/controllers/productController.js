const router = require('express').Router()
const { getAllProducts, createNewProduct, getProductById, updateProductById, deleteProductById } = require('../models/productModel')

router.get('/', getAllProducts)
router.post('/', createNewProduct)
router.get('/:id', getProductById)
router.put('/:id', updateProductById)
router.delete('/:id', deleteProductById)

module.exports = router;