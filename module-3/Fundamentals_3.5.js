function getGreeting(name) {
  return "Hello " + name + "!";
}

console.log(getGreeting("John"));

const getGreeting2 = (name) => {
  return `Hello ${name}!`;
};

console.log(getGreeting2("Marie"));

const getGreeting3 = function (name) {
  return `Hello ${name}!`;
};
console.log(getGreeting3("Joan"));
