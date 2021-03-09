
require("dotenv").config();

const productData = require("./data/products");
const connectDB = require("./config/db");
const Product = require("./models/Product");
const chalk = require('chalk');

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({}); // Delete multiple documents into a collection.

    await Product.insertMany(productData);  //Inserts multiple documents into a collection.

    console.log(chalk.bold.green.italic ("Data Import Success"));

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();