const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({ // this defines the structure

    ownerId:{
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true,
        unique: true
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