const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};
const melbourne = {
  name: "Melbourne",
  population: 5_078_193,
  state: "VIC",
  founded: "30 August 1835",
  timezone: "Australia/Melbourne",
};

const printObject = ({ name, population, state, founded, timezone }) => {
  console.log(`Name: ${name}`);
  console.log(`Population: ${population}`);
  console.log(`State: ${state}`);
  console.log(`Founded: ${founded}`);
  console.log(`Timezone: ${timezone}`);
};
printObject(sydney);
console.log("-".repeat(20));
printObject(melbourne);
