import React, { useState } from "react";
import "./LogIn.css";
import { loginWhole } from "../../services/fetching";
import { useNavigate } from "react-router-dom";
const LogIn = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginWhole(loginData);
    if (response.message === "found") {
      navigate("/");
    } else {
      alert("not matched");
    }
  };

  return (
    <div className="loginContainer5834">
      <div className="loginCard5834">
        <h2 className="loginTitle5834">Wholesaler Login</h2>

        <form onSubmit={handleSubmit} className="loginForm5834">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="loginInput5834"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="loginInput5834"
            onChange={handleChange}
          />

          <button type="submit" className="loginButton5834">
            Login
          </button>
        </form>

        <p className="loginSignupText5834">
          Don't have an account?
          <span className="loginSignupLink5834"> Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
