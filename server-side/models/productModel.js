const Product = require('../schemas/productSchema');
const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');


exports.getAllProducts = asyncHandler(async (req, res) => {
    const products = await Product.find()
    res.status(200).json(products)
})


exports.createNewProduct = asyncHandler(async(req, res) => {
    const { name, price, description, category, images } = req.body;

    if (!name || !price || !description || !category || !images) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const product = await Product.create({
        name,
        price,
        description,
        category,
        images
    })
    res.status(201).json(product)
})

exports.getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if(!product) {
        res.status(404)
        throw new Error('Product do not exist.')
    }
    return res.status(200).json(product)
})


exports.updateProductById = asyncHandler(async (req, res) => {
    const product = await Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
    )
    
    if(!product){
        res.status(404)
        throw new Error('Product do not exist.')
    }

    res.status(200).json(product)
})

exports.deleteProductById = asyncHandler(async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id)
    if(!product) {
        res.status(404)
        throw new Error('Product not found.')
    }
    res.status(200).json({ message: 'Product deleted successfully: '})
})


