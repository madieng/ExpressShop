let express = require('express')
let nunjucks = require('nunjucks')
let mongoose = require('mongoose')
let bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost:27017/ExpressShop')

require('./models/product')
require('./models/category')

let app = express()

nunjucks.configure('views', {
    autoescape: true,
    express: app
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json
app.use(bodyParser.json())

app.use('/public', express.static(__dirname + '/public/'))
app.use('/dist', express.static(__dirname + '/node_modules/bootstrap/dist/'))

app.use('/products', require('./routes/products'))

console.log('YEPPPPP !')

app.listen(3000)