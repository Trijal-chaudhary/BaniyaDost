import React, { useState } from "react";
import "./SignUp.css";
import { signupApi } from "../../services/fetching";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ownerName: "",
    shopName: "",
    username: "",
    phone: "",
    category: "",
    city: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signupApi(formData);
    console.log(formData);
  };

  return (
    <div className="signupContainer4721">
      <div className="signupCard4721">
        <h2 className="signupTitle4721">Wholesaler Sign Up</h2>

        <form onSubmit={handleSubmit} className="signupForm4721">
          <input
            type="text"
            name="ownerName"
            placeholder="Owner Name"
            className="signupInput4721"
            onChange={handleChange}
          />

          <input
            type="text"
            name="shopName"
            placeholder="Shop Name"
            className="signupInput4721"
            onChange={handleChange}
          />

          <input
            type="text"
            name="username"
            placeholder="Username"
            className="signupInput4721"
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="signupInput4721"
            onChange={handleChange}
          />

          <input
            type="text"
            name="category"
            placeholder="Business Category"
            className="signupInput4721"
            onChange={handleChange}
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            className="signupInput4721"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="signupInput4721"
            onChange={handleChange}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="signupInput4721"
            onChange={handleChange}
          />

          <button type="submit" className="signupButton4721">
            Create Account
          </button>
        </form>
        <p className="loginSignupText5834">
          Already have an Account?
          <span
            onClick={() => navigate("/login")}
            className="loginSignupLink5834"
          >
            {" "}
            Log In
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
