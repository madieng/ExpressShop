let mongoose = require('mongoose')

let productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    date: { type: Date, default: Date.now },
    picture: String,
    categories: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category'
        }
    ]
})

let Product = mongoose.model('Product', productSchema)

module.exports = Product