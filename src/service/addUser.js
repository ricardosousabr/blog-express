const mysql = require('mysql2/promise');

async function addUser(name, age, email) {
  const connection = await mysql.createConnection({
    host:process.env.DB_HOST,
    password:process.env.DB_PASS,
    user: process.env.DB_USER,
    database: process.env.DB_NAME
  })

  const result = await connection.execute(`INSERT INTO user (name, age, email) VALUES (?, ?, ?)`, [name, age, email] )
  return result
}

module.exports = {addUser}