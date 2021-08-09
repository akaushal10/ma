import React, { useState } from "react";

const HelloFunc = (props) => {
  const [counter, setCounter] = useState(props.counter);
  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <div className="border shadow text-center p-5 m-5">
        <h4>Fucntional Component</h4>
        <h1>Counter : {counter}</h1>
        <button onClick={increment}>Increment</button>
      </div>
    </>
  );
};
export default HelloFunc;
