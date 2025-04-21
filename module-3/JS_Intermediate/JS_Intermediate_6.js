const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "red",
  "blue",
  "yellow",
];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];

function unique(duplicatesArray) {
  return [...new Set(duplicatesArray)]; // Use a Set to remove duplicates and spread it back into an array
}

console.log(unique(colors));
console.log(unique(testScores));
