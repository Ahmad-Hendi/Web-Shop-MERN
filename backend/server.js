require('dotenv').config();
const express = require('express');
const chalk = require('chalk');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes.js')

connectDB(); // function that i imported to connect to DB

const app = express();

app.use(express.json());

app.use('/api/products', productRoutes) // any https requast going to the port 5000/api/products will have access to the route productRoutes 

const PORT = process.env.PORT || 5000; // if process.env.PORT does not exist so (or ||) will take any statment that is true 

app.listen(PORT, () => console.log(chalk.bold.italic.yellow(`Server running on ${PORT}`)));