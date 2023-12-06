// models/userModel.js
const pool = require('../db');
require('dotenv').config();

async function getUserByEmail(email) {
  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

async function createUser(full_name, email, password, phone, user_role) {
  try {
    const result = await pool.query('INSERT INTO users (full_name, email, password, phone, user_role) VALUES ($1, $2, $3, $4, $5) RETURNING *', [full_name, email, password, phone, user_role]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

async function getUserById(user_id) {
  try {
    const result = await pool.query('SELECT * FROM users WHERE user_id = $1', [user_id]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

async function updateUser(user_id, full_name, email, phone) {
  try {
    const result = await pool.query('UPDATE users SET full_name = $1, email = $2, phone = $3 WHERE user_id = $4 RETURNING *', [full_name, email, phone, user_id]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

async function deleteUser(user_id) {
  try {
    const result = await pool.query('DELETE FROM users WHERE user_id = $1 RETURNING *', [user_id]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

async function getUserBookings(user_id) {
  try {
    const result = await pool.query('SELECT * FROM bookings WHERE user_id = $1', [user_id]);
    return result.rows;
  } catch (error) {
    throw error;
  }
}

async function uploadUserProfilePic(user_id, imageData) {
  try {
    const result = await pool.query('UPDATE users SET pic_user = $1 WHERE user_id = $2 RETURNING *', [imageData, user_id]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}



async function bookStadium(stadium_id, start_time, end_time, booking_date, note, phone, user_id, payment_method) {
    try {
      // Check for conflicts in existing bookings
      const conflictCheck = await pool.query(
        'SELECT * FROM bookings WHERE stadium_id = $1 AND booking_date = $2 AND ((start_time >= $3 AND start_time < $4) OR (end_time > $3 AND end_time <= $4))',
        [stadium_id, booking_date, start_time, end_time]
      );
  
      if (conflictCheck.rows.length > 0) {
        return null; // يمكنك تعديل هذا بما يتناسب مع ردك المفضل
      }
  
      // Insert the new booking
      const result = await pool.query(
        'INSERT INTO bookings (stadium_id, user_id, start_time, end_time, booking_date, note, phone, status, payment_method) VALUES ($1, $2, $3::time, $4::time, $5, $6, $7, $8, $9) RETURNING *',
        [stadium_id, user_id, start_time, end_time, booking_date, note, phone, 'pending', payment_method]
      );
  
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }
  
  
async function submitReview(stadium_id, user_id, rating, comment) {
    try {
      const existingReviewResult = await pool.query(
        'SELECT * FROM stadium_reviews WHERE stadium_id = $1 AND user_id = $2',
        [stadium_id, user_id]
      );
  
      if (rating >= 1 && rating <= 5) {
        if (existingReviewResult.rows.length === 0) {
          const result = await pool.query(
            'INSERT INTO stadium_reviews (stadium_id, user_id, rating, comment) VALUES ($1, $2, $3, $4) RETURNING *',
            [stadium_id, user_id, rating, comment]
          );
  
          await updateAverageRating(stadium_id);
  
          return result.rows[0];
        } else {
          const result = await pool.query(
            'UPDATE stadium_reviews SET rating = $1, comment = $2 WHERE stadium_id = $3 AND user_id = $4 RETURNING *',
            [rating, comment, stadium_id, user_id]
          );
  
          await updateAverageRating(stadium_id);
  
          return result.rows[0];
        }
      } else {
        return null; // يمكنك التعامل مع هذا الحالة بطريقة مناسبة
      }
    } catch (error) {
      throw error;
    }
  }
  
  async function getAverageRating(stadiumId) {
    try {
      const result = await pool.query(
        'SELECT average_rating FROM stadium_reviews WHERE stadium_id = $1',
        [stadiumId]
      );
  
      const averageRating = result.rows[0].average_rating || 0;
  
      return averageRating;
    } catch (error) {
      throw error;
    }
  }

module.exports = {
  getUserByEmail,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getUserBookings,
  uploadUserProfilePic,
  bookStadium,
  submitReview,
  getAverageRating,

};


