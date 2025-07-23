const socket = io();
const form = document.getElementById("form");
const input = document.getElementById("input");
const chat = document.getElementById("chat");
const nicknameInput = document.getElementById("nickname");
const typingDiv = document.getElementById("typing");
const usersDiv = document.getElementById("users");

let nickname = "";

function setNickname() {
  nickname = nicknameInput.value.trim();
  if (nickname) {
    socket.emit("set nickname", nickname);
    nicknameInput.disabled = true;
    form.style.display = "block";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = input.value;
  if (msg) {
    appendMessage(`You: ${msg}`);
    socket.emit("chat message", msg);
    input.value = "";
  }
});

input.addEventListener("input", () => {
  socket.emit("typing");
});

socket.on("chat message", (msg) => {
  appendMessage(msg);
});

socket.on("typing", (msg) => {
  typingDiv.textContent = msg;
  setTimeout(() => (typingDiv.textContent = ""), 1000);
});

socket.on("user list", (users) => {
  usersDiv.textContent = `Online: ${users.join(", ")}`;
});

function appendMessage(msg) {
  const item = document.createElement("div");
  item.textContent = msg;
  chat.appendChild(item);
  chat.scrollTop = chat.scrollHeight;
}
