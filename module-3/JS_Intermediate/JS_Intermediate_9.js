let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};
// Exercise A
function sumSalaries(salaries) {
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  return sum;
}
console.log(sumSalaries(salaries));
// Exercise B
function topEarner(salaries) {
  let highestSalary = -Infinity;
  let topEarnerName = "";

  for (let key in salaries) {
    if (salaries[key] > highestSalary) {
      highestSalary = salaries[key];
      topEarnerName = key;
    }
  }

  return topEarnerName;
}
console.log(topEarner(salaries));
