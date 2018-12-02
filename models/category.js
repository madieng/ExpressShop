let mongoose = require('mongoose')

let categorySchema = new mongoose.Schema({
    name: String,
    color: {
        type: String,
        default: 'primary'
    }
})

categorySchema.virtual('products', {
    ref: 'Product',
    localField: '_id',
    foreignField: 'categories'
})

let Category = mongoose.model('Category', categorySchema)

module.exports = Category