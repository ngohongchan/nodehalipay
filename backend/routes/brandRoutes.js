const express =  require('express');
const { getBrand } = require('../controllers/brandController');
const router = express.Router();

router.route('/').get(getBrand);

// .post(protect, admin, createProduct)

module.exports = router;