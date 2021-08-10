const express =  require('express');
const { createProductReview } = require('../controllers/productController');
const router = express.Router();
const { authUser, getUserProfile, registerUser, updateUserProfile, getUsers, deleteUsers, getUserByIds, updateUsers } = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');

router.post('/login', authUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

router.route('/').post(registerUser).get(protect, admin, getUsers);
router.route('/:id').delete(protect, admin, deleteUsers).get(protect, admin, getUserByIds).put(protect, admin, updateUsers);

module.exports = router;