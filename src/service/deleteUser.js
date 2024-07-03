const mysql = require('mysql2/promise');

async function deleteUser(id) {
  const connection = await mysql.createConnection({
    host:process.env.DB_HOST,
    password:process.env.DB_PASS,
    user: process.env.DB_USER,
    database: process.env.DB_NAME
  })

  const result = await connection.execute(`DELETE FROM user WHERE id = ?`, [id] )
  return result
}

module.exports = {deleteUser}