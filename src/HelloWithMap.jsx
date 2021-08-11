import React from "react";
const HelloWithMap = (props) => {
  return (
    <>
      <div className="container my-5">
        <div className="text-center p-5 border border-danger border-5 rounded bg-primary text-light fw-bold display-4">
          Hello I am {props.name} and my Salary is {props.salary} 
        </div>
      </div>
    </>
  );
};
export default HelloWithMap;
