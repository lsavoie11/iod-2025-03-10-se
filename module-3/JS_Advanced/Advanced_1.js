function makeCounter() {
  let currentCount = 0;
  return function () {
    currentCount++;
    console.log(currentCount);
    return currentCount;
  };
}
let counter1 = makeCounter();
counter1();
counter1();

//Exercise A
let counter2 = makeCounter();
counter2();
counter2();
counter2();

//Exercise B
function makeCounter(startFrom = 0) {
  let currentCount = startFrom;
  return function () {
    currentCount++;
    console.log(currentCount);
    return currentCount;
  };
}

let counter3 = makeCounter(10);

counter3();

//Exercise C
function makeCounter(startFrom = 0, incrementBy = 1) {
  let currentCount = startFrom;
  return function () {
    currentCount += incrementBy;
    console.log(currentCount);
    return currentCount;
  };
}

let counter4 = makeCounter(10, 4);
counter4();
