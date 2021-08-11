import React, { useState } from "react";
const RegistrationForm = () => {
  const [myName, setMyName] = useState("");
  const [mobile, setMobile] = useState("");
  const [salary, setSalary] = useState("");
  const handleName = (event) => {
    setMyName(event.target.value);
  };
  const handleMobile = (event) => {
    setMobile(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(myName);
    console.log(mobile);
    console.log(salary);
  };
  return (
    <>
      <div className="container">
        <form
          className="border rounded bg-warning shadow p-5 m-5"
          onSubmit={handleSubmit}
        >
          <div className="my-3 py-2">
            <label>Name</label>
            <input
              type="text"
              className="w-100 p-2 h6 mt-2 border-0 border-bottom border-dark bg-warning"
              placeholder="Enter Name"
              value={myName}
              onChange={handleName}
            />
          </div>
          <div className=" my-3 py-2">
            <label htmlFor="user-mobile">Mobile</label>
            <input
              id="user-mobile"
              className="w-100 p-2 h6 mt-2 border-0 border-bottom border-dark bg-warning"
              type="text"
              placeholder="Enter Mobile Number"
              value={mobile}
              onChange={handleMobile}
            />
          </div>
          <div className=" my-3">
            <label>Salary</label>
            <input
              type="text"
              className="w-100 p-2 h6 mt-2 border-0 border-bottom border-dark bg-warning"
              placeholder="Enter Salary"
              value={salary}
              onChange={(event) => {
                setSalary(event.target.value);
              }}
            />
          </div>
          <div className="text-center mt-5">
            <button type="submit" className="btn btn-success fw-bold px-5">
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default RegistrationForm;
