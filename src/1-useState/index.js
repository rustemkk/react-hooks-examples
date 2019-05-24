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

ReactDOM.render(<App />, document.getElementById("root"));
