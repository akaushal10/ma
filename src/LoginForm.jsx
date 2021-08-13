import React, { useState } from "react";
const LoginForm = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var allUsers = JSON.parse(localStorage.getItem("users"));
    if(allUsers){
      var result = allUsers.filter((value)=>{
        return value.email===email && value.password===password
      })
    }
    if(result.length){
      alert("User Found")
    }else{
      alert("User Not Found")
    }
  };
    return (
    <>
      <div className="container">
        <form
          className="border rounded bg-info shadow p-5 m-5"
          onSubmit={handleSubmit}
        >
          <div className="text-center h3 mb-4">Login Form</div>
          <div className="my-3 py-2">
            <label>Email</label>
            <input
              type="text"
              className="w-100 p-2 h6 mt-2 border-0 border-bottom border-dark bg-warning"
              placeholder="Enter Name"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className=" my-3 py-2">
            <label htmlFor="user-password">Password</label>
            <input
              id="user-password"
              className="w-100 p-2 h6 mt-2 border-0 border-bottom border-dark bg-warning"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={handlePassword}
            />
          </div>
          <div className="text-center mt-5">
            <button type="submit" className="btn btn-success fw-bold px-5">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default LoginForm;
