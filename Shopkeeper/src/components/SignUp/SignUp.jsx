import React from "react";
import { useState } from "react";
import "./SignUp.css";
import { signupApi } from "../../services/fetching";
const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    shopName: "",
    businessType: "",
    city: "",
    username: "",
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
    <div className="signupContainer4821">
      <div className="signupCard4821">
        <h2 className="signupTitle4821">Create Business Account</h2>

        <form onSubmit={handleSubmit} className="signupForm4821">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="signupInput4821"
          />
          <input
            type="text"
            name="username"
            placeholder="username"
            value={formData.username}
            onChange={handleChange}
            className="signupInput4821"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="signupInput4821"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="signupInput4821"
          />

          <input
            type="text"
            name="shopName"
            placeholder="Shop / Business Name"
            value={formData.shopName}
            onChange={handleChange}
            className="signupInput4821"
          />

          <select
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            className="signupInput4821"
          >
            <option value="">Select Business Type</option>
            <option value="grocery">Grocery</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="pharmacy">Pharmacy</option>
            <option value="general">General Retail</option>
          </select>

          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="signupInput4821"
          />

          <button type="submit" className="signupButton4821">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
