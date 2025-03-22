// This function accepts two numbers and returns their sum.
function sum(num1, num2) {}

//Lines 6-16 are a series of tests to check if func1 is working correctly.

if (sum(0, 3) !== 3) {
  throw new Error("sum function is not working correctly");
}

if (sum(-4, 3) !== 1) {
  throw new Error("sum function is not working correctly");
}

if (sum(2, 3) !== 5) {
  throw new Error("sum function is not working correctly");
}

function sum(num1, num2) {
  return num1 + num2;
}

// This function accepts two numbers and returns their difference.
function dif(num1, num2) {}

//Lines 27-37 are a series of tests to check if func2 is working correctly.

if (dif(0, 3) !== -3) {
  throw new Error("dif function is not working correctly");
}

if (dif(-4, 3) !== -7) {
  throw new Error("dif function is not working correctly");
}

if (dif(2, 3) !== -1) {
  throw new Error("dif function is not working correctly");
}

function dif(num1, num2) {
  return num1 - num2;
}

// This function accepts two numbers and returns their product.
function prod(num1, num2) {}

//Lines 48-58 are a series of tests to check if func3 is working correctly.

if (prod(0, 3) !== 0) {
  throw new Error("prod function is not working correctly");
}

if (prod(-4, 3) !== -12) {
  throw new Error("prod function is not working correctly");
}

if (prod(2, 3) !== 6) {
  throw new Error("prod function is not working correctly");
}

function prod(num1, num2) {
  return num1 * num2;
}

// This function accepts two numbers and returns their quotient.
function div(num1, num2) {}

//Lines 69-79 are a series of tests to check if func4 is working correctly.

if (div(0, 3) !== 0) {
  throw new Error("div function is not working correctly");
}

if (div(-4, 2) !== -2) {
  throw new Error("div function is not working correctly");
}

if (div(6, 3) !== 2) {
  throw new Error("div function is not working correctly");
}

function div(num1, num2) {
  return num1 / num2;
}

// This function accepts a string for the parameter "name" and concatenates the two to produce a Hello message.
function moniker(name) {
  return "Hello " + name;
}
console.log(moniker("Joey"));
