// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');
const authenticateToken = require('../middleware/authenticateToken'); 
const userController = require('../controllers/userController');  
const multer = require('multer');
const contactsController = require('../controllers/contactsController');

// تكوين Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images/'); // تحديد مجلد الوجهة لتخزين الصور
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.').pop());
  },
});
const upload = multer({ storage: storage });
router.post('/contact', contactsController.sendPublicEmail);

router.post('/login', userController.login);
router.post('/register', userController.register);

router.use(authenticateToken);

router.get('/user-profile', userController.getUserProfile);
router.get('/user-bookings', userController.getUserBookings);
router.put('/update-user', userController.updateUser);
router.delete('/delete', userController.deleteUser);
router.post('/upload-upic', upload.single('image'), userController.uploadUserProfilePic);
// router.post('/book-stadium', userController.bookStadium); 
router.get('/average-rating/:stadium_id', userController.getAverageRating);
router.post('/add-review', authenticateToken, userController.submitReview);

module.exports = router;
