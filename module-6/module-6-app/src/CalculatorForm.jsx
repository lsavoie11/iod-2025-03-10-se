import React from "react";

function CalculatorForm({
  num1,
  setNum1,
  num2,
  setNum2,
  operator,
  setOperator,
  onSubmit,
}) {
  return (
    <form
      onSubmit={onSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
    >
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="First number"
        required
      />
      <select value={operator} onChange={(e) => setOperator(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Second number"
        required
      />
      <button type="submit">Calculate</button>
    </form>
  );
}

export default CalculatorForm;
