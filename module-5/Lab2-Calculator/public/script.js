document.getElementById("addBtn").addEventListener("click", function () {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  fetch(`/calculator/add?num1=${num1}&num2=${num2}`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("result").innerHTML = data.result;
    });
});

document.getElementById("divideBtn").addEventListener("click", function () {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  fetch(`/calculator/divide?num1=${num1}&num2=${num2}`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("result").innerHTML = data.result;
    });
});

document.getElementById("subBtn").addEventListener("click", function () {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  fetch(`/calculator/subtract?num1=${num1}&num2=${num2}`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("result").innerHTML = data.result;
    });
});

document.getElementById("multiplyBtn").addEventListener("click", function () {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  fetch(`/calculator/multiply?num1=${num1}&num2=${num2}`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("result").innerHTML = data.result;
    });
});
