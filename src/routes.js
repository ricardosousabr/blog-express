const express = require('express');
const router = express.Router();
const {getUser} = require('./connection/connection');
const mysql = require('mysql2/promise');

router.get('/users', async (req, res) => {
  console.log("Pegar todos os usuarios")
  const user = await getUser();
  res.json({body: user})
})

router.post('/users', async  (req, res) => {
  console.log("Enviar usuario")

  const connection = await mysql.createConnection({
    host:process.env.DB_HOST,
    password:process.env.DB_PASS,
    user: process.env.DB_USER,
    database: process.env.DB_NAME
    })

    const name = req.body.name;
    const age = req.body.age;
    const email = req.body.email;

    const result = await connection.execute(`INSERT INTO user (name, age, email) VALUES (?, ?, ?)`, [name, age, email] )

    return result
})

router.get('/users/:id', async (req, res) => {
  console.log("Pegar usuario especifico")
  const connection = await mysql.createConnection({
    host:process.env.DB_HOST,
    password:process.env.DB_PASS,
    user: process.env.DB_USER,
    database: process.env.DB_NAME
    })

    const id = req.params.id;

    const result = await connection.execute(`SELECT * FROM user where id = ?`, [id] )
    res.json({body: result})
})

router.delete('/users/:id', async (req, res) => {
  console.log("Deletar usuario")

  const connection = await mysql.createConnection({
    host:process.env.DB_HOST,
    password:process.env.DB_PASS,
    user: process.env.DB_USER,
    database: process.env.DB_NAME
    })

    const id = req.params.id;

    const result = await connection.execute(`DELETE FROM user WHERE id = ?`, [id] )

    return result

})

router.patch('/users/:id', async (req, res) => {
  console.log("Atualizar usuario")

  const connection = await mysql.createConnection({
    host:process.env.DB_HOST,
    password:process.env.DB_PASS,
    user: process.env.DB_USER,
    database: process.env.DB_NAME
    })

    const id = req.params.id;
    const name = req.body.name;
    const age = req.body.age;
    const email = req.body.email;

    const result = await connection.execute(`UPDATE user SET name = ?, age = ?, email = ? WHERE id = ?`, [name, age, email, id] )

    return result
})

module.exports = router;
