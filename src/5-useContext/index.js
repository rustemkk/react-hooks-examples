import React, { useState } from "react";
import ReactDOM from "react-dom";

import CurrentUserContext from "./CurrentUserContext";
import Input from "./Input";
import "./styles.css";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const currentUser = { id: 0, name: "Rustem" };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <h2>Input:</h2>
        <Input
          handleBlur={value => setSearchText(value)}
          initialValue={searchText}
        />
        <h2>Input value:</h2>
        {searchText}
      </div>
    </CurrentUserContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
