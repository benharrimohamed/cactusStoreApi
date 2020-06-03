const Product = require ('../DOA/Product');

exports.createProduct = (req, res, next) => {

     const product = {
         label : req.body.label,
         description : req.body.description,
         price : req.body.price,
         date : new Date(),
     }

     Product.create (product, (err, product) => {
     err ? res.json({
         success : false,
         msg : "There is an error when addin this product !"
     }) : res.json({
        success : true,
        product : product
     })
     });
};

exports.getProducts = (req,res,next) => {
   Product.get({}, (err, products) => {
       err ? res.json({ success : false , msg : "error when getting products !"}) : res.json ({success : true , products : products});
   })
}

exports.getProduct = (req, res, next) => {


}

exports.deleteProduct =  (res, req, next) => {

}

exports.updateProduct = (res, req, next) => {

}