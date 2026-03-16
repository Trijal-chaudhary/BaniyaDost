import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { wholeIsLogged } from "../../services/fetching";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const [firstChar, setFirstChar] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    wholeIsLogged("hello").then((ele) => {
      setFirstChar(ele.details.details.ownerName[0].toUpperCase());
    });
  }, []);
  return (
    <div className="navbar">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search customer or retailer"
          className="search-input"
        />
      </div>

      <div className="profile">
        <div
          onClick={() => navigate("/UserDetails")}
          className="profile-circle"
        >
          {firstChar}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
