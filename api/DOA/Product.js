const mongoose = require ('mongoose');
const ProductSchema = require ('../models/Product');

ProductSchema.statics = {

    create : function (data, callback) {
        let product = new this(data);
        product.save(callback);
    },
    get : function (query, callback) {
        let product = new this(query);
        product.find(query, callback);
    },
    update : function (query , newData , callback) {
        this.findOneAndUpdate (query,{$set : newData}, {new : true}, callback);
    },
    delete : function (query,callback) {
        this.findOneAndDelete(query,callback);
    }
}

const Product = mongoose.model('Product',ProductSchema);
module.exports = Product;