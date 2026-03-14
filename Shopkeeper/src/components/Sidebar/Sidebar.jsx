import React from "react";
import "./Sidebar.css";

function Sidebar({ setrenderSidebar, renderSideBar }) {
  return (
    <div
      className="sidebar_4821"
      style={{
        transform: renderSideBar ? "translateX(0%)" : "translateX(-100%)",
      }}
    >
      <h2 className="sidebarLogo_4821">RetailConnect</h2>

      <ul className="sidebarMenu_4821">
        <li className="menuItem_4821">Dashboard</li>
        <li className="menuItem_4821">Wholesalers</li>
        <li className="menuItem_4821">Place Order</li>
        <li className="menuItem_4821">Orders</li>
        <li className="menuItem_4821">Payments</li>
        <li className="menuItem_4821">Credit Score</li>
        <li className="menuItem_4821">Settings</li>
      </ul>
      <svg
        className="CLoseSidebarIcon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        onClick={() => setrenderSidebar(false)}
      >
        <path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z" />
      </svg>
    </div>
  );
}

export default Sidebar;
