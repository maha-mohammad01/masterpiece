require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const contactsRoutes = require('./routes/contactsRoutes');
const stadiumRoutes = require('./routes/stadiumRoutes'); 
const adminRoutes = require('./routes/adminRoutes'); 

const cors = require('cors');

const app = express();
const port = process.env.PORT || 2000;

// Middleware
app.use(cors()); 
app.use(bodyParser.json());

// Routes
app.use('/', userRoutes);
app.use('/', contactsRoutes);
 app.use('/', adminRoutes); 


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  // console.log('SECRET_KEY:', process.env.SECRET_KEY);
});

