// const express = require('express');
// // const { ref, uploadBytes, getDownloadURL } = require('firebase/storage');
// const path = require('path');
// const { pool } = require('../db');
// const { authenticateToken } = require('../middleware/authenticateToken');
// const multer = require('multer');

// // const storage = require('../firebase');

// const router = express.Router();
// const upload = multer();

// // // بوست لإضافة ملعب
// // router.post('/add-stadium', authenticateToken, upload.array('images_url', 5), async (req, res) => {
// //   const { name, city, location, size, hourly_rate, description, phone, start_time, end_time } = req.body;
// //   const { user_id } = req.user;

// //   try {
// //       // التحقق من عدم تكرار اسم الملعب
// //       const existingStadium = await pool.query('SELECT * FROM stadiums WHERE name = $1', [name]);

// //       if (existingStadium.rows.length > 0) {
// //           return res.status(400).json({ message: 'Stadium name already exists' });
// //       }

// //       let formattedUrls = [];

// //       if (req.files && req.files.length > 0) {
// //           const storageRef = ref(storage, 'stadium-images');

// //           // Upload each image to Firebase Storage
// //           for (const file of req.files) {
// //               try {
// //                   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
// //                   const fileExtension = path.extname(file.originalname);
// //                   const fileName = `image-${uniqueSuffix}${fileExtension}`;
// //                   const fileRef = ref(storageRef, fileName);
// //                   await uploadBytes(fileRef, file.buffer);

// //                   const downloadURL = await getDownloadURL(fileRef);
// //                   formattedUrls.push(downloadURL);
// //               } catch (error) {
// //                   console.error('Error uploading image to Firebase Storage:', error);
// //                   return res.status(500).json({ message: 'Error uploading image to Firebase Storage' });
// //               }
// //           }
// //       }

// //       const result = await pool.query(
// //         'INSERT INTO stadiums (name, city, location, size, hourly_rate, description, owner_id, approval_status, images_url, phone, start_time, end_time, deleted) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, false) RETURNING *',
// //         [name, city, location, size, hourly_rate, description, user_id, 'pending', formattedUrls, phone, start_time, end_time]
// //       );      

// //       res.json({ message: 'Stadium request added successfully', stadium: result.rows[0] });
// //   } catch (error) {
// //       console.error('Error executing query', error);
// //       res.status(500).json({ message: 'Internal server error' });
// //   }
// // });

// // // بوست لتحديث بيانات الملعب
// // router.post('/update-stadium', authenticateToken, upload.array('images_url', 5), async (req, res) => {
// //   const { name, city, location, size, hourly_rate, description, phone, start_time, end_time } = req.body;
// //   const { user_id } = req.user;

// //   try {
// //       // التحقق من أن المستخدم هو مالك الملعب
// //       const isStadiumOwner = await pool.query('SELECT * FROM stadiums WHERE owner_id = $1', [user_id]);

// //       if (isStadiumOwner.rows.length === 0) {
// //           return res.status(403).json({ message: 'Unauthorized - User is not the stadium owner' });
// //       }

// //       let formattedUrls = [];

// //       if (req.files && req.files.length > 0) {
// //           const storageRef = ref(storage, 'stadium-images');

// //           // Upload each image to Firebase Storage
// //           for (const file of req.files) {
// //               try {
// //                   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
// //                   const fileExtension = path.extname(file.originalname);
// //                   const fileName = `image-${uniqueSuffix}${fileExtension}`;
// //                   const fileRef = ref(storageRef, fileName);
// //                   await uploadBytes(fileRef, file.buffer);

// //                   const downloadURL = await getDownloadURL(fileRef);
// //                   formattedUrls.push(downloadURL);
// //               } catch (error) {
// //                   console.error('Error uploading image to Firebase Storage:', error);
// //                   return res.status(500).json({ message: 'Error uploading image to Firebase Storage' });
// //               }
// //           }
// //       }

// //       // تحديث بيانات الملعب
// //       const result = await pool.query(`
// //           UPDATE stadiums 
// //           SET 
// //               name = $1, 
// //               city = $2, 
// //               location = $3, 
// //               size = $4, 
// //               hourly_rate = $5, 
// //               description = $6, 
// //               phone = $7, 
// //               start_time = $8, 
// //               end_time = $9, 
// //               images_url = $10 
// //           WHERE owner_id = $11
// //           RETURNING *
// //       `, [name, city, location, size, hourly_rate, description, phone, start_time, end_time, formattedUrls, user_id]);

// //       res.json({ message: 'Stadium updated successfully', stadium: result.rows[0] });
// //   } catch (error) {
// //       console.error('Error executing query', error);
// //       res.status(500).json({ message: 'Internal server error' });
// //   }
// // });

// // حذف الملعب
// router.delete('/delete-my-stadium', authenticateToken, async (req, res) => {
//   const { user_id } = req.user;

//   try {
//     const stadiumResult = await pool.query('UPDATE stadiums SET deleted = true, owner_id = null WHERE owner_id = $1 RETURNING *', [user_id]);

//     if (stadiumResult.rows.length === 0) {
//       return res.status(404).json({ message: 'Stadium not found or unauthorized' });
//     }

//     const stadium_id = stadiumResult.rows[0].stadium_id;

//     // Soft Delete للملعب
//     const updateResult = await pool.query('UPDATE stadiums SET deleted = true, owner_id = null WHERE stadium_id = $1 RETURNING *', [stadium_id]);

//     res.json({ message: 'Stadium deleted successfully', stadium: updateResult.rows[0] });
//   } catch (error) {
//     console.error('Error executing query', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// // ... الكود السابق ...

// // العمليات الأخرى

// // الحصول على تفاصيل الملعب
// router.get('/details/:stadium_id', async (req, res) => {
//   const stadiumId = req.params.stadium_id;

//   try {
//       const stadiumResult = await pool.query('SELECT * FROM stadiums WHERE stadium_id = $1', [stadiumId]);

//       if (stadiumResult.rows.length === 0) return res.status(404).json({ message: 'Stadium not found' });

//       const { stadium_id, name, city, location, size, hourly_rate, description, phone, start_time, end_time, images_url } = stadiumResult.rows[0];

//       // استخدم JSON.parse لتحويل النص إلى مصفوفة إذا كانت ليست بالفعل
//       const imagesArray = Array.isArray(images_url) ? images_url : JSON.parse(images_url);

//       const stadiumData = {
//           stadium_id,
//           name,
//           city,
//           location,
//           size,
//           hourly_rate,
//           description,
//           phone,
//           start_time,
//           end_time,
//           images_url: imagesArray
//       };

//       res.json({ stadium: stadiumData });

//   } catch (error) {
//       console.error('Error executing query', error);
//       res.status(500).json({ message: 'Internal server error' });
//   }
// });

// // ... الكود السابق ...

// // العمليات الأخرى

// // حذف الملعب
// router.delete('/delete-my-stadium', authenticateToken, async (req, res) => {
//   const { user_id } = req.user;

//   try {
   
//     const stadiumResult = await pool.query('UPDATE stadiums SET deleted = true, owner_id = null WHERE stadium_id = $1 AND owner_id = $2 RETURNING *', [stadium_id, user_id]);

//     if (stadiumResult.rows.length === 0) {
//       return res.status(404).json({ message: 'Stadium not found or unauthorized' });
//     }

//     const stadium_id = stadiumResult.rows[0].stadium_id;

//     // Soft Delete للملعب
//     const updateResult = await pool.query('UPDATE stadiums SET deleted = true, owner_id = null WHERE stadium_id = $1 RETURNING *', [stadium_id]);

//     res.json({ message: 'Stadium deleted successfully', stadium: updateResult.rows[0] });
//   } catch (error) {
//     console.error('Error executing query', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// // ... الكود السابق ...

// // العمليات الأخرى

// // استرجاع الملاعب المعتمدة
// router.get('/approved-stadiums', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM stadiums WHERE approval_status = $1', ['approved']);
//     const stadiums = result.rows;

//     const stadiumsWithImageUrl = stadiums.map(stadium => {
//       if (stadium.images_url && Array.isArray(stadium.images_url)) {
//         return {
//           ...stadium,
//           images_url: stadium.images_url.map(url => {
//             const basename = path.basename(url);
//             const formattedUrl = `https://firebasestorage.googleapis.com/v0/b/football-626b1.appspot.com/o/${basename}?alt=media&token=860bf795-35f4-485e-a2d7-285a02d27bcd`;
//             return formattedUrl;
//           })
//         };
//       } else if (stadium.images_url && typeof stadium.images_url === 'object') {
//         return {
//           ...stadium,
//           images_url: stadium.images_url
//         };
//       } else {
//         return stadium;
//       }
//     });

//     res.json(stadiumsWithImageUrl);
//   } catch (error) {
//     console.error('Error fetching approved stadiums:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// // إضافة ملاحظة إلى الحجز
// router.post('/add-note/:booking_id', authenticateToken, async (req, res) => {
//   const { user_id } = req.user;
//   const { booking_id } = req.params;
//   const { note } = req.body;

//   try {
//     const bookingResult = await pool.query('SELECT * FROM bookings WHERE booking_id = $1 AND user_id = $2', [booking_id, user_id]);

//     if (bookingResult.rows.length === 0) {
//       return res.status(404).json({ message: 'Booking not found or unauthorized' });
//     }

//     const updateResult = await pool.query('UPDATE bookings SET note = $1 WHERE booking_id = $2 RETURNING *', [note, booking_id]);

//     res.json({ message: 'Note added successfully', booking: updateResult.rows[0] });
//   } catch (error) {
//     console.error('Error executing query', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// // العمليات الأخرى...

// module.exports = router;
