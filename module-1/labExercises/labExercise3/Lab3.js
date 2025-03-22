const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

document.getElementById("button1").addEventListener("click", function () {
  updateHeading("heading1", "input1");
  document.getElementById("column1").style.background = "blue";
});

document.getElementById("button2").addEventListener("click", function () {
  updateHeading("heading2", "input2");
  document.getElementById("column2").style.background = "pink";
});

function updateHeading(headingId, inputId) {
  const heading = document.getElementById(headingId);
  const input = document.getElementById(inputId);
  heading.textContent = input.value;
}
