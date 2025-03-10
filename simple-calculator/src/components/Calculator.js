import React, { useState } from "react";
import "../App.css"; // Import styles

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleOperation = (operation) => {
    const num = parseFloat(input);
    if (isNaN(num)) return;

    switch (operation) {
      case "add":
        setResult(result + num);
        break;
      case "subtract":
        setResult(result - num);
        break;
      case "multiply":
        setResult(result * num);
        break;
      case "divide":
        if (num !== 0) setResult(result / num);
        break;
      default:
        break;
    }
    setInput("");
  };

  return (
    <div className="calculator">
      <h2>Simplest Working Calculator</h2>
      <h3>{result}</h3>
      <input type="text" value={input} onChange={handleChange} placeholder="Enter number" />
      <div className="buttons">
        <button onClick={() => handleOperation("add")}>add</button>
        <button onClick={() => handleOperation("subtract")}>subtract</button>
        <button onClick={() => handleOperation("multiply")}>multiply</button>
        <button onClick={() => handleOperation("divide")}>divide</button>
        <button className="reset" onClick={() => setInput("")}>reset input</button>
        <button className="reset" onClick={() => setResult(0)}>reset result</button>
      </div>
    </div>
  );
}

export default Calculator;
