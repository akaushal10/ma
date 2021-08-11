import React, { useState } from "react";
const Login = () => {
  return (
    <>
      <h1 className="border p-4 m-4">Login Form</h1>
    </>
  );
};
const SignUp = () => {
  return (
    <>
      <h1 className="border p-4 m-4">Signup Form</h1>
    </>
  );
};

const UserForm = () => {
  const [formType, setFormType] = useState("login");
  const handleLogin = () => {
    setFormType("login");
  };
  const handleSignup = () => {
    setFormType("signup");
  };
  return (
    <>
      {formType === "login" ? (
        <>
          <Login />
          <h2>hello</h2>
        </>
      ) : (
        <SignUp />
      )}
      <div className="text-center">
        <button className="btn btn-success fw-bold" onClick={handleLogin}>
          Show Login Form
        </button>
        <button className="btn btn-primary fw-bold" onClick={handleSignup}>
          Show Signup Form
        </button>
      </div>
    </>
  );
};
export default UserForm;
