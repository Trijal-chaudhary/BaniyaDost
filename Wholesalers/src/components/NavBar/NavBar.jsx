import React from "react";
import "./NavBar.css";
const NavBar = () => {
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
        <div className="profile-circle">H</div>
      </div>
    </div>
  );
};

export default NavBar;
