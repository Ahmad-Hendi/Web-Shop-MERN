const mongoose = require("mongoose");
const chalk = require('chalk');

const productSchema = new mongoose.Schema ({ // create the schema for the model 
    name: {
        type: String,
        required: [true, chalk.red.italic.bold("name is required")]
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    countInStock: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
})

const Product = mongoose.model('product', productSchema); // create the model 

module.exports = Product; // export it 