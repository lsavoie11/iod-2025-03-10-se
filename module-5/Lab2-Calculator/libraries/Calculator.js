const Logger = require("./Logger");

class Calculator {
  constructor() {
    this.id = Math.floor(Math.random() * 1_000_000_000);
    this.logger = new Logger();
  }

  #log = (value) => {
    this.logger.log(`[Calculator :${this.id}]:${value}`);
  };

  add(num1, num2) {
    const value = num1 + num2;
    this.#log(`add(${num1}, ${num2}) = ${value}`);
    return value;
  }

  subtract(num1, num2) {
    const value = num1 - num2;
    this.#log(`subtract(${num1}, ${num2}) = ${value}`);
    return value;
  }

  multiply(num1, num2) {
    const value = num1 * num2;
    this.#log(`multiply(${num1}, ${num2}) = ${value}`);
    return value;
  }

  divide(num1, num2) {
    if (num2 === 0) {
      this.#log("Error: Division by zero");
      return "Error: Division by zero";
    }
    const value = num1 / num2;
    this.#log(`divide(${num1}, ${num2}) = ${value}`);
    return value;
  }
}
module.exports = Calculator;
