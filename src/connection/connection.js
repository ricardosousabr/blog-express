const mysql = require('mysql2/promise');

async function getUser() {
  const connection = await mysql.createConnection({
    host:process.env.DB_HOST,
    password:process.env.DB_PASS,
    user: process.env.DB_USER,
    database: process.env.DB_NAME
  })

  const [result, fields] = await connection.execute('SELECT * FROM user');
  console.log(result)
  return result;
}

module.exports = {getUser}
