import React, { useCallback, useMemo, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
  const [bubuti, setBubuti] = useState("a");
  const [numbersCount, setNumbersCount] = useState(0);

  const renderNumbersCount = () => {
    console.log("rerendering numbers count", numbersCount);
    return `${bubuti} - ${numbersCount}`;
  };

  // VALUE returned by function cached and gonna be recalculated only if dependencies change
  // notice - renderNumbersCountUseMemo doesnt change until numbersCount change
  // notice - function calculates value before render()
  const renderNumbersCountUseMemo = useMemo(() => {
    console.log("rerendering numbers count useMemo", numbersCount);
    return `${bubuti} - ${numbersCount}`;
  }, [numbersCount]);

  // FUNCTION cached and gonna be recached only if dependencies change
  // notice - bubuti variable in function is not changing
  const renderNumbersCountUseCallback = useCallback(() => {
    console.log("rerendering numbers count useCallback", numbersCount);
    return `${bubuti} - ${numbersCount}`;
  }, [numbersCount]);

  return (
    <div className="App">
      <input
        defaultValue={bubuti}
        onChange={e => {
          setBubuti(e.target.value);
          setNumbersCount(e.target.value.replace(/[^0-9]/g, "").length);
        }}
      />
      <div>{renderNumbersCount()}</div>
      <div>{renderNumbersCountUseMemo}</div>
      <div>{renderNumbersCountUseCallback()}</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
