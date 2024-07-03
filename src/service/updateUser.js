const mysql = require('mysql2/promise');

async function updateUser(id, name, age, email) {
  const connection = await mysql.createConnection({
    host:process.env.DB_HOST,
    password:process.env.DB_PASS,
    user: process.env.DB_USER,
    database: process.env.DB_NAME
  })

  const result = await connection.execute(`UPDATE user SET name = ?, age = ?, email = ? WHERE id = ?`, [name, age, email, id] )
  return result
}

module.exports = {updateUser}