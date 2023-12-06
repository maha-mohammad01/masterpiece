// controllers/userController.js
require('dotenv').config();
const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secretKey = process.env.SECRET_KEY;
const { format } = require('date-fns');
const pool = require('../db'); 
const nodemailer = require('nodemailer');

async function login(req, res) {
  const { email, password } = req.body;

  try {
    const user = await userModel.getUserByEmail(email);

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

     const token = jwt.sign(
    { user_id: user.user_id, email: user.email, user_role: user.user_role },
    secretKey,
    { expiresIn: '10d' }
  );
  

    res.json({ token });
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

async function register(req, res) {
  const { full_name, email, password, phone } = req.body;
  const user_role = 3;

  try {
    const emailExists = await userModel.getUserByEmail(email);

    if (emailExists) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await userModel.createUser(full_name, email, hashedPassword, phone, user_role);

    res.json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

async function getUserProfile(req, res) {
  const { user_id } = req.user;

  try {
    const userResult = await userModel.getUserById(user_id);

    if (!userResult) {
      return res.status(404).json({ message: 'User not found' });
    }

    const userData = userResult;

    // Send user data
    res.json({ user: userData });
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

async function updateUser(req, res) {
  const { full_name, email, phone } = req.body;
  const { user_id } = req.user;

  try {
    const userExists = await userModel.getUserById(user_id);

    if (!userExists) {
      return res.status(404).json({ message: 'User not found' });
    }

    const result = await userModel.updateUser(user_id, full_name, email, phone);

    res.json({ message: 'User updated successfully', user: result });
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

async function deleteUser(req, res) {
  const { user_id } = req.user;

  try {
    const result = await userModel.deleteUser(user_id);

    if (!result) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

async function getUserBookings(req, res) {
  const { user_id } = req.user;

  try {
    const bookingsResult = await userModel.getUserBookings(user_id);

    const formattedBookings = bookingsResult.map(booking => ({
      booking_date: format(new Date(booking.booking_date), 'dd-MM-yyyy'),
      start_time: booking.start_time,
      end_time: booking.end_time,
      name: booking.name,
    }));

    res.json({ bookings: formattedBookings });
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

async function uploadUserProfilePic(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'File not uploaded.' });
    }

    const imageData = req.file.filename;

    const updateResult = await userModel.uploadUserProfilePic(req.user.user_id, imageData);

    if (!updateResult) {
      return res.status(500).json({ message: 'Failed to update user profile picture.' });
    }

    res.json({ message: 'User profile picture added successfully', user: updateResult });
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}


async function uploadUserProfilePic(req, res) {
    try {
      if (!req.file) {
        return res.status(400).json({ message: 'File not uploaded.' });
      }
  
      const imageData = req.file.filename;
  
      const updateResult = await userModel.uploadUserProfilePic(req.user.user_id, imageData);
  
      if (!updateResult) {
        return res.status(500).json({ message: 'Failed to update user profile picture.' });
      }
  
      res.json({ message: 'User profile picture added successfully', user: updateResult });
    } catch (error) {
      console.error('Error executing query', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }


  async function bookStadium(req, res) {
    const { stadium_id, start_time, end_time, booking_date, note, phone, payment_method } = req.body;
    const { user_id } = req.user;
  
    try {
      const result = await userModel.bookStadium(stadium_id, start_time, end_time, booking_date, note, phone, user_id, payment_method);
  
      if (!result) {
        return res.status(400).json({ message: 'Stadium is already booked during this period' });
      }
  
      res.json({ message: 'Booking request added successfully', booking: result });
    } catch (error) {
      console.error('Error executing query', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }     



  async function submitReview(req, res) {
    const { stadium_id, rating, comment } = req.body;
    const { user_id } = req.user;
  
    try {
      // التحقق من وجود تقييم سابق للمستخدم على هذا الملعب
      const existingReviewResult = await pool.query(
        'SELECT * FROM stadium_reviews WHERE stadium_id = $1 AND user_id = $2',
        [stadium_id, user_id]
      );
  
      if (rating >= 1 && rating <= 5) {
        if (existingReviewResult.rows.length === 0) {
          const result = await pool.query(
            'INSERT INTO stadium_reviews (stadium_id, user_id, rating, comment) VALUES ($1, $2, $3, $4) RETURNING *;',
            [stadium_id, user_id, rating, comment]
          );
  
          // حساب متوسط التقييم وتحديثه في جدول الاستعراضات
          await updateAverageRating(stadium_id);
  
          res.json({ message: 'Review added successfully', review: result.rows[0] });
        } else {
          // إذا كان هناك تقييم سابق، قم بتحديثه
          const result = await pool.query(
            'UPDATE stadium_reviews SET rating = $1, comment = $2 WHERE stadium_id = $3 AND user_id = $4 RETURNING *;',
            [rating, comment, stadium_id, user_id]
          );
  
          // حساب متوسط التقييم وتحديثه في جدول الاستعراضات
          await updateAverageRating(stadium_id);
  
          res.json({ message: 'Review updated successfully', review: result.rows[0] });
        }
      } else {
        res.status(400).json({ message: 'Invalid rating. Rating must be between 1 and 5.' });
      }
    } catch (error) {
      console.error('Error executing query', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }



  async function getAverageRating(req, res) {
    const stadiumId = req.params.stadium_id;
    const { user_id } = req.user;
  
    try {
      const result = await pool.query(
        'SELECT AVG(rating) AS average_rating FROM stadium_reviews WHERE stadium_id = $1 AND user_id = $2',
        [stadiumId, user_id]
      );
  
      const averageRating = result.rows[0].average_rating || 0;
  
      res.json({ averageRating });
    } catch (error) {
      console.error('Error executing query', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
    
  async function updateAverageRating(stadiumId) {
    try {
      const result = await pool.query(
        'UPDATE public.stadium_reviews SET average_rating = (SELECT AVG(rating) FROM public.stadium_reviews WHERE stadium_id = $1) WHERE stadium_id = $1',
        [stadiumId]
      );
  
      console.log('Average rating updated successfully');
    } catch (error) {
      console.error('Error updating average rating', error);
    }
  }





  
module.exports = {
  login,
  register,
  getUserProfile,
  updateUser,
  deleteUser,
  getUserBookings,
  uploadUserProfilePic,
  bookStadium,
  submitReview,
  getAverageRating,
  updateAverageRating,
};




