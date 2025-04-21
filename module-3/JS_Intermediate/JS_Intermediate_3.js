const animals = ["Tiger", "Giraffe"];
console.log(animals);

// a) Add 2 new values to the end
animals.push("Elephant", "Zebra");
console.log("After adding to the end:", animals); // ["Tiger", "Giraffe", "Elephant", "Zebra"]

// b) Add 2 new values to the beginning
animals.unshift("Lion", "Panda");
console.log("After adding to the beginning:", animals); // ["Lion", "Panda", "Tiger", "Giraffe", "Elephant", "Zebra"]

// c) Sort the values alphabetically
animals.sort();
console.log("After sorting alphabetically:", animals); // ["Elephant", "Giraffe", "Lion", "Panda", "Tiger", "Zebra"]

// d) Replace the middle animal with a new value
function replaceMiddleAnimal(newValue) {
  const middleIndex = Math.floor(animals.length / 2); // Find the middle index
  animals[middleIndex] = newValue; // Replace the middle value
}
replaceMiddleAnimal("Koala");
console.log("After replacing the middle animal:", animals); // ["Elephant", "Giraffe", "Koala", "Panda", "Tiger", "Zebra"]

// e) Find animals that match a specific starting string
function findMatchingAnimals(beginsWith) {
  return animals.filter((animal) =>
    animal.toLowerCase().startsWith(beginsWith.toLowerCase())
  );
}
console.log("Animals starting with 'K':", findMatchingAnimals("k")); // ["Koala"]
console.log("Animals starting with 'E':", findMatchingAnimals("e")); // ["Elephant"]
