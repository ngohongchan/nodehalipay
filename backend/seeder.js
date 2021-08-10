const mongoose = require('mongoose');
const dotenv = require('dotenv')
const users =  require('./data/users');
const products =  require('./data/products');
const category = require('./data/category');
const User = require('./model/userModel');
const Product = require('./model/productModel.js');
const Order = require('./model/orderModel');
const Category = require('./model/categoryModel');
const connectDB = require('./config/db');

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()
    await Category.deleteMany();

    // await User.insertMany(users);

    

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }
    })

    await Product.insertMany(sampleProducts);
    await Category.insertMany(category);

    process.exit()
  } catch (error) {
    console.log(122);
    console.log(error);
    process.exit(1);
  }
}

const destroyData = async () => {
  try {
    // await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()
    await Category.deleteMany();

    console.log('Data Destroyed!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}