let twentyCents = 0.2;
let tenCents = 0.1;

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen); //The toFixed method converts a number into a string, hence why this results in a string concatenation.

function currencyAddition(float1, float2) {
  const int1 = Math.round(float1 * 100);
  const int2 = Math.round(float2 * 100);

  const sum = int1 + int2;
  return sum / 100;
}

console.log(currencyAddition(0.2, 0.1));
console.log(currencyAddition(0.15, 0.25));

function currencyOperation(float1, float2, operation) {
  const int1 = Math.round(float1 * 100);
  const int2 = Math.round(float2 * 100);

  let result;

  switch (operation) {
    case "+":
      result = int1 + int2;
      break;
    case "-":
      result = int1 - int2;
      break;
    case "*":
      result = int1 * int2;
      break;
    case "/":
      result = int1 / int2;
      break;
    default:
      throw new Error("Invalid operation. Use +, -, *, or /.");
  }

  return result / 100;
}
console.log(currencyOperation(0.2, 0.1, "*"));

function currencyOperation(float1, float2, operation, numDecimals = 2) {
  if (numDecimals < 1 || numDecimals > 10) {
    throw new Error("numDecimals must be between 1 and 10.");
  }

  const factor = Math.pow(10, numDecimals);
  const int1 = Math.round(float1 * factor);
  const int2 = Math.round(float2 * factor);

  let result;

  switch (operation) {
    case "+":
      result = int1 + int2;
      break;
    case "-":
      result = int1 - int2;
      break;
    case "*":
      result = (int1 * int2) / factor;
      break;
    case "/":
      result = int1 / int2;
      break;
    default:
      throw new Error("Invalid operation. Use +, -, *, or /.");
  }

  return result / factor;
}
