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

// e) Explanation of why the originals remain unchanged
console.log("New moreSports:", moreSports); // ["Basketball", "Hockey", "Cricket", "Volleyball", "Football"]
console.log("New dog2:", dog2); // "Rex"
console.log("New cat2:", cat2); // { name: "Mittens", breed: "Siberian" }
