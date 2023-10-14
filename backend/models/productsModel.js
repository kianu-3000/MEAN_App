const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({ // this defines the structure

    ownerUsername:{
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true,
        unique: false
    },
    productDetails: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }

    

}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);