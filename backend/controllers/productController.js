const Product = require('../models/productsModel');
const mongoose = require('mongoose');

// Get a product
const getProducts = async (req, res) =>{
    try{
        const { username } = req.params;

        const product = await Product.find({ownerUsername: username});

        if(!product){
            return res.status(404).json({error: "No products to display!"});
        }
        return res.status(200).json(product);

    }catch(error){
        return res.status(500).json({error: error});
    }
};

// create a new product
const addProduct = async (req, res) => {
    // get the post request params
    const {
        ownerUsername, 
        productName,
        productDetails,
        stock,
        price
    } = req.body;

    // Add to database
    try{
        const product = await Product.create({
                ownerUsername, 
                productName,
                productDetails,
                stock,
                price
            });

        res.status(200).json(product);

    }catch(error){
        res.status(400).json({error: "You suck " + error.message});
    }

}

module.exports = {
    getProducts,
    addProduct
};