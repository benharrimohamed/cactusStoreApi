const express = require('express');
const route = express.Router();
const ProductController = require('../Controller/ProductController');


route.get('/products',ProductController.getProducts);
route.get('/product/:id',ProductController.getProduct);
route.post('/product',ProductController.createProduct);
route.put('/product/:id',ProductController.updateProduct);
route.delete('/product/:id',ProductController.deleteProduct);


module.exports = route;