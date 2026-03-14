import React from "react";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <div className="dashboardContainer5482">
      <div className="statsGrid5482">
        <div className="statCard5482">
          <p className="statTitle5482">Orders Today</p>
          <h2 className="statValue5482">34</h2>
        </div>

        <div className="statCard5482">
          <p className="statTitle5482">Pending Orders</p>
          <h2 className="statValue5482">12</h2>
        </div>

        <div className="statCard5482">
          <p className="statTitle5482">Revenue Today</p>
          <h2 className="statValue5482">₹24,500</h2>
        </div>

        <div className="statCard5482">
          <p className="statTitle5482">Low Stock Products</p>
          <h2 className="statValue5482">6</h2>
        </div>
      </div>

      {/* Chart Section */}
      <div className="chartSection5482">
        <h3 className="sectionTitle5482">Sales Overview</h3>
        <div className="chartPlaceholder5482">Sales Chart Here</div>
      </div>

      {/* Bottom Sections */}
      <div className="bottomGrid5482">
        {/* Recent Orders */}
        <div className="tableCard5482">
          <h3 className="sectionTitle5482">Recent Orders</h3>

          <table className="table5482">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Retailer</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>#1021</td>
                <td>Gupta Store</td>
                <td>₹3500</td>
                <td>Pending</td>
              </tr>

              <tr>
                <td>#1022</td>
                <td>Raj Traders</td>
                <td>₹1200</td>
                <td>Delivered</td>
              </tr>

              <tr>
                <td>#1023</td>
                <td>Sharma Mart</td>
                <td>₹2800</td>
                <td>Pending</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Low Stock */}
        <div className="tableCard5482">
          <h3 className="sectionTitle5482">Low Stock Products</h3>

          <table className="table5482">
            <thead>
              <tr>
                <th>Product</th>
                <th>Stock</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Sugar</td>
                <td>8</td>
              </tr>

              <tr>
                <td>Rice 25kg</td>
                <td>10</td>
              </tr>

              <tr>
                <td>Cooking Oil</td>
                <td>6</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
