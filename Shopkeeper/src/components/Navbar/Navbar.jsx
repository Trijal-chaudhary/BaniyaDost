import React, { useState } from "react";
import "./Navbar.css";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
const Navbar = ({ setCurrSection, currSection }) => {
  const [renderSideBar, setrenderSidebar] = useState(false);
  const navigate = useNavigate();
  const handelSectionChange = (where) => {
    setCurrSection(where);
    navigate(where);
  };
  return (
    <nav className="navbar">
      <Sidebar
        setrenderSidebar={setrenderSidebar}
        renderSideBar={renderSideBar}
      />

      <svg
        className="hamburgerSvgSideBar"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        onClick={() => setrenderSidebar(true)}
      >
        <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
      </svg>
      <div className="logo">RetailConnect</div>

      <ul className="nav-links">
        <li
          onClick={() => handelSectionChange("Dashboard")}
          className={currSection === "Dashboard" ? "active" : ""}
        >
          Dashboard
        </li>
        <li
          onClick={() => handelSectionChange("Wholesalers")}
          className={currSection === "Wholesalers" ? "active" : ""}
        >
          Wholesalers
        </li>

        <li
          onClick={() => handelSectionChange("Orders")}
          className={currSection === "Orders" ? "active" : ""}
        >
          Orders
        </li>
      </ul>

      <div className="nav-right">
        <div className="notification">🔔</div>

        <div className="profile">
          <img src="https://i.pravatar.cc/40" alt="profile" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
