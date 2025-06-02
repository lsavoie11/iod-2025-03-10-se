const addNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let answer = number1 + number2;
  console.log(answer);
  res.status(200);
  res.json({ result: answer });
};

const subtractNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let answer = number1 - number2;
  console.log(answer);
  res.status(200);
  res.json({ result: answer });
};

const multiplyNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let answer = number1 * number2;
  console.log(answer);
  res.status(200);
  res.json({ result: answer });
};

const divideNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let answer = number1 / number2;
  console.log(answer);
  res.status(200);
  res.json({ result: answer });
};

module.exports = {
  addNumbers,
  subtractNumbers,
  multiplyNumbers,
  divideNumbers,
};
