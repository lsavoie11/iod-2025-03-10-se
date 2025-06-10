import React from "react";

function CalculatorResult({ result }) {
  if (result === null) return null;
  return (
    <div style={{ marginTop: "1rem", fontWeight: "bold" }}>
      Result: {result}
    </div>
  );
}

export default CalculatorResult;
