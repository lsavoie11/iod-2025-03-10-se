const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};
// Exercise B
const melbourne = {
  name: "Melbourne",
  population: 5_078_193,
  state: "VIC",
  founded: "30 August 1835",
  timezone: "Australia/Melbourne",
};
// Exercise A
const printObjectProperties = (obj) => {
  for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
};

printObjectProperties(sydney);
console.log("-".repeat(20));
printObjectProperties(melbourne);
