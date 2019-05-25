import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
  const [searchText, setSearchText] = useState("bobby");

  return (
    <div className="App">
      <input
        defaultValue={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      <br />
      {searchText}
    </div>
  );
};

// useState implementaion
// let states = [];
// let calls = -1;
//
// const useState = defaultValue => {
//   const callId = ++calls;
//   if (states[callId]) {
//     return states[callId];
//   }
//   const setValue = newValue => {
//     states[callId][0] = newValue;
//     renderApp();
//   };
//   const tuple = [defaultValue, setValue];
//   states[callId] = tuple;
//   return tuple;
// };
//
// const renderApp = () => {
//   calls = -1;
//   ReactDOM.render(<App />, document.getElementById("root"));
// };
// renderApp();

ReactDOM.render(<App />, document.getElementById("root"));
