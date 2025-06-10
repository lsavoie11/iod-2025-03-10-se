import React, { useState } from "react";
import CalculatorForm from "./CalculatorForm";
import CalculatorResult from "./CalculatorResult";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    let res = "";
    if (isNaN(a) || isNaN(b)) {
      res = "Please enter valid numbers";
    } else {
      switch (operator) {
        case "+":
          res = a + b;
          break;
        case "-":
          res = a - b;
          break;
        case "*":
          res = a * b;
          break;
        case "/":
          res = b !== 0 ? a / b : "Cannot divide by zero";
          break;
        default:
          res = "Invalid operator";
      }
    }
    setResult(res);
  };

  return (
    <div
      style={{
        maxWidth: 350,
        margin: "2rem auto",
        padding: 20,
        border: "1px solid #ccc",
        borderRadius: 8,
      }}
    >
      <h2>Calculator</h2>
      <CalculatorForm
        num1={num1}
        setNum1={setNum1}
        num2={num2}
        setNum2={setNum2}
        operator={operator}
        setOperator={setOperator}
        onSubmit={calculate}
      />
      <CalculatorResult result={result} />
    </div>
  );
}

export default Calculator;
