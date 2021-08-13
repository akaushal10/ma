import React, { useState } from "react";
const RegistrationForm = () => {
  const [myName, setMyName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const handleName = (event) => {
    setMyName(event.target.value);
  };
  const handleMobile = (event) => {
    setMobile(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      name: myName,
      email: email,
      password: password,
      mobile: mobile,
    }
    var allUsers = JSON.parse(localStorage.getItem("users"));
    if(allUsers){
      allUsers.push(userData)
      localStorage.setItem("users", JSON.stringify(allUsers));
    }else{
      localStorage.setItem("users", JSON.stringify([userData]));
    }
  };
  return (
    <>
      <div className="container">
        <form
          className="border rounded bg-warning shadow p-5 m-5"
          onSubmit={handleSubmit}
        >
          <div className="text-center h3 mb-4">Registration Form</div>
          <div className="my-3 py-2">
            <label htmlFor="user-name">Name</label>
            <input
              id="user-name"
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
          <div className="my-3 py-2">
            <label htmlFor="user-email">Email</label>
            <input
              id="user-email"
              type="email"
              className="w-100 p-2 h6 mt-2 border-0 border-bottom border-dark bg-warning"
              placeholder="Enter Email Address"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className=" my-3 py-2">
            <label htmlFor="user-passsword">Password</label>
            <input
              id="user-passsword"
              className="w-100 p-2 h6 mt-2 border-0 border-bottom border-dark bg-warning"
              type="text"
              placeholder="Enter Password"
              value={password}
              onChange={handlePassword}
            />
          </div>

          <div className="text-center mt-5">
            <button type="submit" className="btn btn-success fw-bold px-5">
              Signup
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default RegistrationForm;
