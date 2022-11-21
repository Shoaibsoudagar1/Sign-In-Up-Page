import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Login from "./Login";

function Regsitration() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password));

      console.log("Saved in Local Storage");
      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }
  return (
    <div>
      {login ? (
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Full Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Mobile No</label>
            <input
              type="phone"
              className="form-control"
              placeholder="Enter Mobile No"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Register
          </button>
          <p className="forgot-password" onClick={handleClick}>
            Already register <b>Login</b>
          </p>

          {flag && (
            <Alert color="primary" variant="danger">
              Please Fill All Field
            </Alert>
          )}
        </form>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default Regsitration;
