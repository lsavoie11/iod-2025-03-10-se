const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World! 👋");
});

app.listen(port, () => {
  console.log(`Example app listening
at http://localhost:${port}`);
});

const app2 = express();
const port2 = 3001;

app2.get("/", (req, res) => {
  res.send("Greetings from the second server running on port 3001! 🤓");
});

app2.listen(port2, () => {
  console.log(`Server 2 listening at http://localhost:${port2}`);
});

const app3 = express();
const port3 = 3002;

app3.get("/", (req, res) => {
  res.send("Greetings from the third server running on port 3002! 🫡");
});

app3.listen(port3, () => {
  console.log(`Server 3 listening at http://localhost:${port3}`);
});
