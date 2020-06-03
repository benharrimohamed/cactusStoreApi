const Product = require ('../models/Product');

exports.createProduct = (req, res, next) => {

     const product = new Product ({
         label : req.body.label,
         description : req.body.description,
         price : req.body.price,
         created_at : new Date(),
         updated_at : new Date(),
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
  
  Product.findByIdAndRemove({_id : req.params.id}).exec()
 .then(result => {
     console.log(result);
     res.json(result);
 })
 .catch(err => {
     throw err;
 })
}

exports.updateProduct = (req, res, next) => {
 const newProduct = {
    label : req.body.label,
    description : req.body.description,
    price : req.body.price,
    updated_at : new Date(),
 }  
 Product.findByIdAndUpdate({_id : req.params.id},newProduct).exec()
 .then(result => {
    res.json(result);
 })
 .catch(err => {throw err})
}