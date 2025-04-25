let teamSports = ["Hockey", "Cricket", "Volleyball"];
let dog1 = "Bingo";
let cat1 = { name: "Fluffy", breed: "Siberian" };

let moreSports = [...teamSports];
moreSports.push("Football");
moreSports.unshift("Basketball");

let dog2 = dog1;
dog2 = "Rex";

let cat2 = { ...cat1 };
cat2.name = "Mittens";

console.log("Original teamSports:", teamSports);
console.log("Original dog1:", dog1);
console.log("Original cat1:", cat1);

console.log("New moreSports:", moreSports);
console.log("New dog2:", dog2);
console.log("New cat2:", cat2);
