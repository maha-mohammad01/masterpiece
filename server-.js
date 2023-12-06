// server.js or app.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const contactsRoutes = require('./routes/contactsRoutes'); // استيراد ملف الاتصال

require('dotenv').config();
const app = express();
const port = process.env.PORT || 2000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/', userRoutes);
app.use('/', contactsRoutes); // استخدام مسار الاتصال

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  // console.log('SECRET_KEY:', process.env.SECRET_KEY);

});
