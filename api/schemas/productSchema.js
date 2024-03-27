const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: { type: String, required: [true, 'you need a name for Product'] },
    price: { type: Number, required: [true, 'you need a price for Product'] },
    description: { type: String, required: [true, 'you need a description for Product'] },
    category: { type: String, required: [true, 'you need a category for Product'] },
    images: { type: [String], required: [true, 'you need an image for this Product'] }
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema)

module.exports = Product