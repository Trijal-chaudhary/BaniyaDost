import React from "react";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <div className="dashboard_9281">
      <h1 className="dashboardTitle_9281">Shopkeeper Dashboard</h1>

      <div className="statsGrid_9281">
        <div className="statCard_9281">
          <h3>Total Orders</h3>
          <p>24</p>
        </div>

        <div className="statCard_9281">
          <h3>Pending Orders</h3>
          <p>5</p>
        </div>

        <div className="statCard_9281">
          <h3>Credit Score</h3>
          <p>82</p>
        </div>

        <div className="statCard_9281">
          <h3>Pending Payments</h3>
          <p>₹12,000</p>
        </div>
      </div>

      <div className="section_9281">
        <h2>Recent Orders</h2>

        <div className="orderList_9281">
          <div className="orderItem_9281">Sharma Foods — ₹2500 — Delivered</div>

          <div className="orderItem_9281">
            Gupta Traders — ₹1800 — Processing
          </div>

          <div className="orderItem_9281">
            Mahesh Wholesale — ₹3200 — Shipped
          </div>
        </div>
      </div>

      <div className="section_9281">
        <h2>Recommended Wholesalers</h2>

        <div className="wholesalerGrid_9281">
          <div className="wholesalerCard_9281">
            <h3>Sharma Foods</h3>
            <p>Rice, Wheat, Oil</p>
            <button>View</button>
          </div>

          <div className="wholesalerCard_9281">
            <h3>Gupta Traders</h3>
            <p>Sugar, Tea, Spices</p>
            <button>View</button>
          </div>
        </div>
      </div>

      <div className="section_9281">
        <h2>Payment Alerts</h2>

        <div className="alert_9281">
          Payment of ₹4000 due to Sharma Foods in 2 days
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
