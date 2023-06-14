const express = require('express');
const router = express.Router();
const categoryControllers = require('../controllers/categories');



router.get('/get-all-categories', categoryControllers.getAllCategories);
module.exports = router;