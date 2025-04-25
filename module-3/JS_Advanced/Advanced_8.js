function orderItems(itemName) {
  return `Order placed for: ${itemName}`;
}
// create a decorated version of the original function
const validatedOrderItem = validateStringArg(orderItems);
console.log(validatedOrderItem("Apple Watch")); // should run the function
console.log(validatedOrderItem(123));

// Exercise A
function validateStringArg(fn) {
  return function (arg) {
    if (typeof arg !== "string") {
      throw new Error("Argument must be a string");
    }
    return fn(arg);
  };
}

// Exercise C
function validateStringArgs(fn) {
  return function (...args) {
    if (!args.every((arg) => typeof arg === "string")) {
      throw new Error("All arguments must be strings");
    }
    return fn(...args);
  };
}

// Exercise B
function orderItems(...itemNames) {
  return `Order placed for: ${itemNames.join(", ")}`;
}

// Exercise D
const validatedOrderItems = validateStringArgs(orderItems);

try {
  console.log(validatedOrderItems("Apple Watch", "iPhone")); // Should run the function
} catch (error) {
  console.error(error.message);
}

try {
  console.log(validatedOrderItems("MacBook", 123)); // Should throw an error
} catch (error) {
  console.error(error.message);
}
