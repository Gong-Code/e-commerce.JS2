const Product = require('../schemas/productSchema');
const mongoose = require('mongoose');

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products)
    } catch (err) {
        res.status(500, 400).json({ message: err.message });
    }
}

exports.createNewProduct = async (req, res) => {
    const { name, price, description, category, images } = req.body;

    if (!name || !price || !description || !category || !images) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const product = await Product.create({
            name,
            price,
            description,
            category,
            images
        })
        res.status(201).json(product);
    } catch (err) {
        res.status(400, 500)
        console.error('Something went wrong when creating product:', err.message)
    }
}

exports.getProductById = async (req, res) => {
    if(!mongoose.isValidObjectId(req.params.id)){
        return res.status(400).json({ message: 'ObjectId not valid' })
    }

    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (err) {
        res.status(404)
        console.log('Product not found', err.message)
    }
}

exports.updateProductById = async (req, res) => {
    if(!mongoose.isValidObjectId(req.params.id)){
        return res.status(400).json({ message: 'ObjectId not valid' })
    }

    try {
        const product = await Product.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        )
        res.status(200).json(product)
    } catch (err) {
        res.status(404)
        console.log('Product not found', err.message)
    }
}

exports.deleteProductById = async (req, res) => {
    if(!mongoose.isValidObjectId(req.params.id)){
        return res.status(400).json({ message: 'ObjectId not valid' })
    }

    try {
        const product = await Product.findByIdAndDelete(req.params.id);

        res.status(200).json({ message: 'Product deleted successfully' })
    } catch (err) {
        res.status(404)
        console.log('Product not found', err.message)
    }
}


