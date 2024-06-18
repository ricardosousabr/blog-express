require('dotenv').config()
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log("Rodando")
})

app.listen(process.env.PORT, () => {
  console.log("Rodando")
})