const express = require("express");
const app = express();
require("dotenv").config();
const sequelize = require("./dbConnect");
// parse requests of content-type - application / json;
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome to mySQL application." });
});
// set port, listen for requests
let userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);
app.use("/api/posts", require("./routes/postRoutes"));
app.use("/api/catfacts", require("./routes/catFactRoutes"));
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port
${PORT}.`);
});
