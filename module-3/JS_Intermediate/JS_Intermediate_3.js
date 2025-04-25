const animals = ["Tiger", "Giraffe"];
console.log(animals);

// a) Add 2 new values to the end
animals.push("Elephant", "Zebra");
console.log("After adding to the end:", animals);

// b) Add 2 new values to the beginning
animals.unshift("Lion", "Panda");
console.log("After adding to the beginning:", animals);

// c) Sort the values alphabetically
animals.sort();
console.log("After sorting alphabetically:", animals);

// d) Replace the middle animal with a new value
function replaceMiddleAnimal(newValue) {
  const middleIndex = Math.floor(animals.length / 2);
  animals[middleIndex] = newValue;
}
replaceMiddleAnimal("Koala");
console.log("After replacing the middle animal:", animals);

// e) Find animals that match a specific starting string
function findMatchingAnimals(beginsWith) {
  return animals.filter((animal) =>
    animal.toLowerCase().startsWith(beginsWith.toLowerCase())
  );
}
console.log("Animals starting with 'K':", findMatchingAnimals("k"));
console.log("Animals starting with 'E':", findMatchingAnimals("e"));
