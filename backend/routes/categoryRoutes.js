const express =  require('express');
const { getCategory } = require('../controllers/categoryController');
const router = express.Router();

router.route('/').get(getCategory);

// .post(protect, admin, createProduct)

module.exports = router;