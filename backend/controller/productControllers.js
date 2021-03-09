// Here i will fetch the products
const chalk = require('chalk');
const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
        


    } catch (error) {
        console.error(error);
        res.status(5000).json({message: "Server Error"});
    }
    
}



const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id); // .params.id because it will be inside params

        res.json(product);
        console.log(product);
        

    } catch (error) {
        console.error(error);
        res.status(5000).json({message: "Server Error"});
    }
}



module.exports = {
    getAllProducts,
    getProductById,
}