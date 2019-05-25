import { debounce, get as g } from "lodash";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
  const [searchText, setSearchText] = useState("bobby");
  const [gifs, setGifs] = useState([]);
  const setSearchTextDebounced = debounce(setSearchText, 1000);

  // 1. works like componentDidMount - when you pass [] as second parameter
  // useEffect(() => {
  //   // any kind of operations, even async
  // }, []);

  // 2. works like componentDidUpdate - when you dont have second parameter
  // useEffect(() => {
  //   // any kind of operations, even async
  // });
  // calling effect on each component update

  // 3. works like componentDidUpdate with diff check - when you have dependencies in second parameter
  // useEffect(() => {
  //   // any kind of operations, even async
  // }, [searchText]);
  // calling effect only when searchText changed

  // 4. function returned from effect works like componentWillUnmount with [] as second parameter
  // useEffect(() => {
  //   const handleClick = () => console.log('click!');
  //   console.log("adding listener");
  //   window.addEventListener("click", handleClick);
  //   return () => {
  //     console.log("removing listener");
  //     window.removeEventListener("click", handleClick);
  //   };
  // }, []);
  // calling effect after mount and before unmount

  // 5. function returned from effect:
  // useEffect(() => {
  //   const handleClick = () => console.log('click!');
  //   console.log("adding listener");
  //   window.addEventListener("click", handleClick);
  //   return () => {
  //     console.log("removing listener");
  //     window.removeEventListener("click", handleClick);
  //   };
  // });
  // calling effect for every update (adding/removing) listener

  useEffect(() => {
    const fetchData = async () => {
      console.log("searchText2", searchText);
      const res = await fetch(
        `https://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=WYmF7i87Hc5rQ18tSnz5indWHwIKFDNr&limit=4`
      );
      const json = await res.json();
      setGifs(json.data.map(d => g(d, "images.fixed_width.url")));
    };
    fetchData();
  }, [searchText]);

  return (
    <div className="App">
      <h2>Search:</h2>
      <input
        defaultValue={searchText}
        onChange={e => setSearchTextDebounced(e.target.value)}
      />
      <h2>Gifs:</h2>
      {gifs.map(gif => <img alt={gif} src={gif} />)}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));