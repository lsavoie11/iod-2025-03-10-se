const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

button1.addEventListener("click", () => {
  document.getElementById("heading1").textContent = "Salutations";
  document.getElementById("column1").style.background = "blue";
});

button2.addEventListener("click", () => {
  document.getElementById("heading2").textContent = "Earth";
  document.getElementById("column2").style.background = "pink";
});
