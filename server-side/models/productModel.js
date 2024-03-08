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
