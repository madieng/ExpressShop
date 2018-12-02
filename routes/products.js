let route = require('express').Router();

let Product = require('../models/product')
let Category = require('../models/category')

route.get('/', (request, response) => {
    Product.find({}).populate('categories').then(products => {
        response.render('products/index.html', { products: products })
    })
})

route.get('/new', (request, response) => {
    let product = new Product()
    Category.find({}).then(categories => {
        response.render('products/edit.html', { product: product, categories: categories })
    },
    error => {
        response.render('error/index.html', { model: 'Category'})
    })
})

route.get('/edit/:id', (request, response) => {
    Category.find({}).then(categories => {
        Product.findById(request.params.id).then(product => {
            response.render('products/edit.html', { product: product, categories: categories })
        },
        error => {
            response.render('error/index.html', { model: 'Product'})
        })
    },
    error => {
        response.render('error/index.html', { model: 'Category'})
    })
})

route.post('/save', (request, response) => {
    console.log(request.body)
})

route.get('/show/:id', (request, response) => {
    Product.findById(request.params.id).populate('categories').then( product => {
        response.render('products/show.html', { product: product })
    },
    error => {
        response.render('error/index.html', { model: 'Product'})
    })
})

module.exports = route