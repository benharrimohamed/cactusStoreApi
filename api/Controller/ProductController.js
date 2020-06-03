const Product = require ('../models/Product');

exports.createProduct = (req, res, next) => {

     const product = new Product ({
         label : req.body.label,
         description : req.body.description,
         price : req.body.price,
         date : new Date(),
     });

     product.save().then(() => {
         res.json(product);
     });
};

exports.getProducts = (req,res,next) => {
    
    Product.find()
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        throw err;
    });
}

exports.getProduct = (req, res, next) => {
    Product.find(req.body.id)
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        throw err;
    })
}

exports.deleteProduct =  (res, req, next) => {

}

exports.updateProduct = (res, req, next) => {

}