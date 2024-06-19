require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3001;
const router = require("./routes.js")

app.use('/get', router)

app.use(bodyParser.json())

app.listen(port, () => {
  console.log("Rodando na port: " + process.env.PORT);
});
