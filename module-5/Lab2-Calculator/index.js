const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

// import all calculator routes (up the top)
const calculatorRoutes = require("./routes/calculatorRoutes");

app.use(express.static(path.join(__dirname, "public")));
// map the calculator routes to our app
app.use("/calculator", calculatorRoutes);

app.listen(3000, () => {
  console.log(`Server running on http://localhost:${port}`);
});
