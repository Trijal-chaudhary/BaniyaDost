import React, { useState } from "react";
import { LoginShop } from "../../services/fetching";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: "",
    username: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await LoginShop(formData);
    if (response.message === "found") {
      navigate("/");
    } else {
      alert("not match");
    }
  };

  return (
    <div className="signupContainer4821">
      <div className="signupCard4821">
        <h2 className="signupTitle4821">LogIn Business Account</h2>

        <form onSubmit={handleSubmit} className="signupForm4821">
          <input
            type="text"
            name="username"
            placeholder="username"
            value={formData.username}
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

          <button type="submit" className="signupButton4821">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
