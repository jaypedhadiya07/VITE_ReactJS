import React, { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  let increment = () => {
    setCount(count + 1);
  };
  let decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  let reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={decrement} style={{ marginLeft: "10px" }}>
          Decrement
        </button>
        <button onClick={increment} style={{ marginLeft: "10px" }}>
          Increment
        </button>
        <button onClick={reset} style={{ marginLeft: "10px" }}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Home;