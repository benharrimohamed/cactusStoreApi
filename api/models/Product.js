const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductSchema = new Schema ({

    id : Schema.Types.ObjectId,
    label : {type : String , require : true},
    description : {type : String  , require : true},
    price : {type : Number  , require : true},
    date : {type : Date  , require : true},

});

const Product = mongoose.model('Product',ProductSchema);
module.exports = Product;