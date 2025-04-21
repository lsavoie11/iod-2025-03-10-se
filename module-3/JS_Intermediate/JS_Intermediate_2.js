//Exercise A:
const Truncate = (str, max) => {
  if (str.length > max) {
    return str.slice(0, max) + "...";
  }
  return str;
};
//Exercise B:
const condTruncate = (str, max) => {
  return str.length > max ? str.slice(0, max) + "..." : str;
};
console.log(
  Truncate("Hello, this is a long string that needs to be truncated.", 20)
);

console.log(Truncate("Short string.", 20));

console.log(
  condTruncate("Hello, this is a long string that needs to be truncated.", 20)
);

console.log(condTruncate("Short string.", 20));
