//Exercise A
function multiply(a, b) {
  console.log(a * b);
}

multiply(2, 3);

// Exercise B
Function.prototype.delay = function (ms) {
  const func = this;
  return function (...args) {
    setTimeout(() => func.apply(this, args), ms);
  };
};

// Exercise C
function paramMultiply(a, b, c, d) {
  console.log(a * b * c * d);
}

paramMultiply.delay(500)(2, 3, 4, 5);
paramMultiply.delay(1000)(1, 2, 3, 4);
