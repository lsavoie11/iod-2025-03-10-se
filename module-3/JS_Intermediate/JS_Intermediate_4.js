const camelCase = (cssProp) => {
  let words = cssProp.split("-");
  for (let i = 1; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  let newString = words.join("");
  return newString;
};

console.log(camelCase("margin-left"));
console.log(camelCase("background-image"));

const camelCaseForOf = (cssProp) => {
  let words = cssProp.split("-");
  let result = words[0];
  for (let word of words.slice(1)) {
    result += word[0].toUpperCase() + word.slice(1);
  }
  return result;
};

console.log(camelCaseForOf("margin-left"));
console.log(camelCaseForOf("background-color"));

const camelCaseConditional = (cssProp) => {
  let words = cssProp.split("-");
  for (let i = 1; i < words.length; i++) {
    words[i] = words[i] ? words[i][0].toUpperCase() + words[i].slice(1) : "";
  }
  return words.join("");
};

console.log(camelCaseConditional("padding-top"));
console.log(camelCaseConditional("border-radius"));

const camelCaseReduce = (cssProp) => {
  return cssProp
    .split("-")
    .reduce(
      (result, word, index) =>
        index === 0 ? word : result + word[0].toUpperCase() + word.slice(1),
      ""
    );
};

console.log(camelCaseReduce("margin-left"));
console.log(camelCaseReduce("padding-top"));
