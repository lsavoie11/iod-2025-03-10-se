const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const PORT = 3000;

app.use(express.static("public"));

let users = {};

io.on("connection", (socket) => {
  let nickname = "";

  socket.on("set nickname", (name) => {
    nickname = name;
    users[socket.id] = nickname;
    io.emit("user list", Object.values(users));
    socket.broadcast.emit("chat message", `${nickname} has joined the chat`);
  });

  socket.on("chat message", (msg) => {
    socket.broadcast.emit("chat message", `${nickname}: ${msg}`);
  });

  socket.on("typing", () => {
    socket.broadcast.emit("typing", `${nickname} is typing...`);
  });

  socket.on("disconnect", () => {
    if (nickname) {
      socket.broadcast.emit("chat message", `${nickname} has left the chat`);
      delete users[socket.id];
      io.emit("user list", Object.values(users));
    }
  });
});

http.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
