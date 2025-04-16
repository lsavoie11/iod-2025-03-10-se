let three = "3";
let four = "4";
let thirty = "30";

/*This addition variable prints the wrong result because the values 
 stored in the variables are strings which results in concatenation.*/
let addition = three + four;
console.log(addition);

let multiplication = three * four;
console.log(multiplication);

let division = three / four;
console.log(division);

let subtraction = three - four;
console.log(subtraction);

let lessThan1 = three < four;
console.log(lessThan1);
/*The lessThan2 variable prints an unexpected result because the 
comparison considers only the first digit stored in the thirty variable. i.e.(3 < 4) is true.*/
let lessThan2 = thirty < four;
console.log(lessThan2);
