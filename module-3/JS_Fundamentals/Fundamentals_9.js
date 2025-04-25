let teamSports = ["Hockey", "Cricket", "Volleyball"];
let dog1 = "Bingo";
let cat1 = { name: "Fluffy", breed: "Siberian" };

// Exercise A
let moreSports = [...teamSports];
moreSports.push("Football");
moreSports.unshift("Basketball");

// Exercise B
let dog2 = dog1;
dog2 = "Rex";

// Exercise C
let cat2 = { ...cat1 };
cat2.name = "Mittens";

// Exercise D
console.log("Original teamSports:", teamSports);
console.log("Original dog1:", dog1);
console.log("Original cat1:", cat1);

// Exercise E
console.log("New moreSports:", moreSports);
console.log("New dog2:", dog2);
console.log("New cat2:", cat2);
