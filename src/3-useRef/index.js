import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
  const [text, setText] = useState("frog");
  const spanRef = useRef();
  const handleChange = e => {
    setText(e.target.value);
    const spanNode = spanRef.current;
    spanNode.textContent = e.target.value + " - " + e.target.value;
  };

  return (
    <div className="App">
      <h2>Input:</h2>
      <input value={text} onChange={handleChange} />
      <h2>Value:</h2>
      {text}
      <br />
      <span ref={spanRef} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
