const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/products');

router.get('/get-all-products', productControllers.getAllProducts)
module.exports = router;