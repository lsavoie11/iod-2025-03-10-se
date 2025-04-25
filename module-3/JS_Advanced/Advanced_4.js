//Exercise A
const printFibonacci = () => {
  let a = 0,
    b = 1;
  console.log(a);
  const intervalId = setInterval(() => {
    console.log(b);
    [a, b] = [b, a + b];
  }, 1000);
};

//printFibonacci();

//Exercise B
const printFibonacciTimeouts = () => {
  let a = 0,
    b = 1;
  console.log(a);
  const printNext = () => {
    console.log(b);
    [a, b] = [b, a + b];
    setTimeout(printNext, 1000);
  };
  setTimeout(printNext, 1000);
};

//Exercise C
const printFibonacciWithLimit = (limit) => {
  let a = 0,
    b = 1,
    count = 1;
  console.log(a);
  const intervalId = setInterval(() => {
    if (count >= limit) {
      clearInterval(intervalId);
      return;
    }
    console.log(b);
    [a, b] = [b, a + b];
    count++;
  }, 1000);
};

printFibonacciWithLimit(25); // Print the first 25 Fibonacci numbers
