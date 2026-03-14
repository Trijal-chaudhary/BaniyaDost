import React from "react";
import "./SideBar.css";
import { useNavigate } from "react-router-dom";
const SideBar = ({ setCurrSection, currSection }) => {
  const navigate = useNavigate();
  const handleCurrSection = (where) => {
    setCurrSection(where);
    navigate(where);
  };
  return (
    <div className="sidebar7362">
      <ul className="sidebarMenu7362">
        <li
          onClick={() => handleCurrSection("Dashboard")}
          className={`sidebarItem7362 ${
            currSection === "Dashboard" ? "active" : ""
          }`}
        >
          Dashboard
        </li>
        <li
          onClick={() => handleCurrSection("Orders")}
          className={`sidebarItem7362 ${
            currSection === "Orders" ? "active" : ""
          }`}
        >
          Orders
        </li>
        <li
          onClick={() => handleCurrSection("Inventory")}
          className={`sidebarItem7362 ${
            currSection === "Inventory" ? "active" : ""
          }`}
        >
          Inventory
        </li>
        <li
          onClick={() => handleCurrSection("Retailers")}
          className={`sidebarItem7362 ${
            currSection === "Retailers" ? "active" : ""
          }`}
        >
          Retailers
        </li>
        <li
          onClick={() => handleCurrSection("Payments")}
          className={`sidebarItem7362 ${
            currSection === "Payments" ? "active" : ""
          }`}
        >
          Payments
        </li>
        <li
          onClick={() => handleCurrSection("Analytics")}
          className={`sidebarItem7362 ${
            currSection === "Analytics" ? "active" : ""
          }`}
        >
          Analytics
        </li>
        <li
          onClick={() => handleCurrSection("Discounts")}
          className={`sidebarItem7362 ${
            currSection === "Discounts" ? "active" : ""
          }`}
        >
          Discounts
        </li>
        <li
          onClick={() => handleCurrSection("Settings")}
          className={`sidebarItem7362 ${
            currSection === "Settings" ? "active" : ""
          }`}
        >
          Settings
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
