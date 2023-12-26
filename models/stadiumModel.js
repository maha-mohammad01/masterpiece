// استيراد المكتبات اللازمة
const { pool } = require('../db');

// دالة لإضافة ملعب جديد
exports.addStadium = async (stadiumData) => {
  // قم بتنفيذ استعلام SQL لإضافة الملعب إلى قاعدة البيانات
  const result = await pool.query(
    'INSERT INTO stadiums (name, city, location, size, hourly_rate, description, owner_id, approval_status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
    [
      stadiumData.name,
      stadiumData.city,
      stadiumData.location,
      stadiumData.size,
      stadiumData.hourly_rate,
      stadiumData.description,
      stadiumData.owner_id,
      'pending' // حالة الموافقة
    ]
  );

  return result.rows[0];
};

// دالة للحصول على جميع الملاعب المعتمدة
exports.getApprovedStadiums = async () => {
  // قم بتنفيذ استعلام SQL لاسترجاع الملاعب المعتمدة
  const result = await pool.query('SELECT * FROM stadiums WHERE approval_status = $1', ['approved']);
  return result.rows;
};

// دالة للحصول على ملعب معين بناءً على معرف المستخدم
exports.getMyStadium = async (userId) => {
  // قم بتنفيذ استعلام SQL لاسترجاع الملعب الذي يملكه المستخدم
  const result = await pool.query('SELECT * FROM stadiums WHERE owner_id = $1', [userId]);

  if (result.rows.length === 0) {
    return null; // لا يوجد ملعب لهذا المستخدم
  }

  return result.rows[0];
};

// دالة للحصول على تفاصيل ملعب معين بناءً على معرف الملعب
exports.getStadiumDetails = async (stadiumId) => {
  // قم بتنفيذ استعلام SQL لاسترجاع تفاصيل الملعب
  const result = await pool.query('SELECT * FROM stadiums WHERE stadium_id = $1', [stadiumId]);

  if (result.rows.length === 0) {
    return null; // الملعب غير موجود
  }

  return result.rows[0];
};

// دالة لتحديث بيانات الملعب
exports.updateStadium = async (stadiumData, userId) => {
  // قم بتنفيذ استعلام SQL لتحديث بيانات الملعب
  const result = await pool.query(
    'UPDATE stadiums SET name = $1, city = $2, location = $3, size = $4, hourly_rate = $5, description = $6 WHERE owner_id = $7 RETURNING *',
    [
      stadiumData.name,
      stadiumData.city,
      stadiumData.location,
      stadiumData.size,
      stadiumData.hourly_rate,
      stadiumData.description,
      userId
    ]
  );

  return result.rows[0];
};

// دالة لحذف ملعب المستخدم
exports.deleteMyStadium = async (userId) => {
  // قم بتنفيذ استعلام SQL لحذف ملعب المستخدم
  const result = await pool.query('DELETE FROM stadiums WHERE owner_id = $1 RETURNING *', [userId]);

  if (result.rows.length === 0) {
    return null; // لا يوجد ملعب لهذا المستخدم
  }

  return result.rows[0];
};
