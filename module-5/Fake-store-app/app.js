const express = require("express");
const path = require("path");
const app = express();
const fakeStoreRoutes = require("./routes/fakeStoreRoutes");

app.use(express.static(path.join(__dirname, "public")));
app.use("/api", fakeStoreRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Fake Store backend running at http://localhost:${port}`);
});
