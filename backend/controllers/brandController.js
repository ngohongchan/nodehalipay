const Brand = require('../model/brandModal');
const asyncHandler = require('express-async-handler');

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getBrand = asyncHandler(async (req, res) => {
    const brand = await Brand.find({});
    res.json({ brand });    
});
  
module.exports = { getBrand };