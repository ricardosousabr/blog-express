const express = require('express');
const router = express.Router();
const {getAllUsers} = require('./connection/connection');
const {getUser} = require('./service/getUser');
const {addUser} = require('./service/addUser');
const {deleteUser} = require('./service/deleteUser');
const {updateUser} = require('./service/updateUser');

const mysql = require('mysql2/promise');

router.get('/users', async (req, res) => {
  console.log("Pegar todos os usuarios")
  const user = await getAllUsers();
  res.json({body: user})
})

router.post('/users', async  (req, res) => {
  console.log("Enviar usuario")
    const name = req.body.name;
    const age = req.body.age;
    const email = req.body.email;
    const result = await addUser(name, age, email)

    return result
})

router.get('/users/:id', async (req, res) => {
  console.log("Pegar usuario especifico")
  const id = req.params.id;
  const user = await getUser(id);
  res.json({body: user})
})

router.delete('/users/:id', async (req, res) => {
  console.log("Deletar usuario")
    const id = req.params.id;
    const result = await deleteUser(id);

    return result
})

router.patch('/users/:id', async (req, res) => {
  console.log("Atualizar usuario")
    const id = req.params.id;
    const name = req.body.name;
    const age = req.body.age;
    const email = req.body.email;

    const result = await updateUser(id, name, age, email)
    return result
})

module.exports = router;
