const express = require("express");
const app = express();
require("dotenv").config();
let dbConnect = require("./dbConnect");
// parse requests of content-type - application / json;
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my SocialAppDB API." });
});
// set port, listen for requests
let userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);
app.use("/api/posts", require("./routes/postRoutes"));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port
${PORT}.`);
});
