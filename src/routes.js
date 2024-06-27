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

router.get('/users/:id', (req, res) => {
  console.log("Pegar usuario especifico")
})

router.delete('/users/:id', (req, res) => {
  console.log("Deletar usuario")
})

router.patch('/users/:id', (req, res) => {
  console.log("Atualizar usuario")
})

module.exports = router;
