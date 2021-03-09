const express = require('express');
const router = express.Router();
const { getAllProducts, getProductById } = require('../controller/productControllers'); 

//@des GET all PRODUCTS from db
//@route GET /api/products
router.get('/', getAllProducts);


//@des GET a product by id from db
//@route GET /api/products/:id
router.get('/:id', getProductById);


module.exports = router;

