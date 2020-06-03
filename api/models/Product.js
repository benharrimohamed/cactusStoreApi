const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Product = new Schema ({

    id : Schema.Types.ObjectId,
    label : {type : String , require : true},
    description : {type : String  , require : true},
    price : {type : Number  , require : true},
    date : {type : Date  , require : true},

});


module.exports = Product;