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
    
    Product.find().exec()
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        throw err;
    });
}

exports.getProduct = (req, res, next) => {
    
    Product.findById(req.params.id).exec()
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        throw err;
    })
}

exports.deleteProduct =  (req, res, next) => {
  console.log(req.params.id);
  Product.deleteOne({_id : req.params.id}).exec()
 .then(result => {
     console.log(result);
     res.json(result);
 })
 .catch(err => {
     throw err;
 })
}

exports.updateProduct = (res, req, next) => {

}