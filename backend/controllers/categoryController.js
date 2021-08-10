const Category = require('../model/categoryModel');
const asyncHandler = require('express-async-handler');

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getCategory = asyncHandler(async (req, res) => {
    const categories = await Category.find({});
    res.json({ categories });    
});
  
module.exports = { getCategory };