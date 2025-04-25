function printMe() {
  console.log("printing debounced message");
}
printMe = debounce(printMe); //create this debounce function for a)
//fire off 3 calls to printMe within 300ms - only the LAST one should print, after
//1000ms of no calls
setTimeout(printMe, 100);
setTimeout(printMe, 200);
setTimeout(printMe, 300);

function debounce(func, ms = 1000) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), ms);
  };
}

function printMe(msg) {
  console.log(`printing debounced message: ${msg}`);
}

printMe = debounce(printMe, 1000);

setTimeout(() => printMe("Call 1"), 100);
setTimeout(() => printMe("Call 2"), 200);
setTimeout(() => printMe("Call 3"), 300);
