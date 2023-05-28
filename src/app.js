const express = require("express");
const router = require("./routes");

const app = express();

// Utilizar body em json como padrão
app.use(express.json());

app.use(router);

module.exports = app;
