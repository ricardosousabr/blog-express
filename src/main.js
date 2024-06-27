require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const router = require("./routes.js")


app.use(bodyParser.json())
app.use('/', router);


app.listen(process.env.PORT, () => {
  console.log("Rodando na port: " + process.env.PORT);
});
