const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

const calculatorRoutes = require("./routes/calculatorRoutes.js");
app.use("/calculator", calculatorRoutes);

module.exports = app;
