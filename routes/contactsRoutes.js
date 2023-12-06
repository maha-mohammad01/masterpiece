// routes/publicContactsRoutes.js
const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contactsController');

// نقطة نهاية لإرسال الرسائل بدون توكن
router.post('/contact', contactsController.sendPublicEmail);

module.exports = router;
