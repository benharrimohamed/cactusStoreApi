const express = require('express');
const route = express.Router();
const ProductController = require('../Controller/ProductController');


route.get('/products',ProductController.getProducts);
route.get('/product',ProductController.getProduct);
route.post('/product',ProductController.createProduct);
route.put('/product',ProductController.updateProduct);
route.delete('/product',ProductController.deleteProduct);


module.exports = route;