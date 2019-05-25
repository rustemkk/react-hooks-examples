import React, { useReducer } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_COUNTER":
          return { ...state, counter: action.value || 0 };
        case "INCREMENT_COUNTER":
          return { ...state, counter: state.counter + 1 };
        case "DECREMENT_COUNTER":
          return { ...state, counter: state.counter - 1 };
        case "RESET_COUNTER":
          return { ...state, counter: 0 };
        default:
          return state;
      }
    },
    { counter: 0 }
  );

  return (
    <div className="App">
      <h2>Input:</h2>
      <input
        value={state.counter}
        onChange={e => dispatch({ type: "SET_COUNTER", value: +e.target.value })}
      />
      <h2>Value:</h2>
      {state.counter}
      <br />
      <button onClick={() => dispatch({ type: "INCREMENT_COUNTER" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT_COUNTER" })}>-</button>
      <br />
      <button onClick={() => dispatch({ type: "RESET_COUNTER" })}>RESET</button>
    </div>
  );
};

// useReducer implementation
// const useReducer = (reducer, initialState) => {
//   const [state, setState] = useState(initialState);
//   const dispatch = (action) => {
//     const newState = reducer(state, action);
//     setState(newState);
//   }
//
//   return [state, dispatch];
// };

ReactDOM.render(<App />, document.getElementById("root"));
