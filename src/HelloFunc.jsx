import React, { useState,useEffect } from "react";

const HelloFunc = (props) => {
  const [counter, setCounter] = useState(props.counter);
  const increment = () => {
    setCounter(counter + 1);
  };
  const a =()=>{
    console.log("In function componentDidMount")
  } 
  const b =()=>{
    console.log("In function componentDidUpdate")
  } 

  useEffect(a,[]) //componentDidMount
  useEffect(b,[counter]) //componentDidUpdate

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
