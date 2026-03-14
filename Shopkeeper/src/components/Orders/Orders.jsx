import React from "react";
import "./Orders.css";
const Orders = () => {
  const orders = [
    {
      id: 1,
      wholesaler: "Sharma Foods",
      amount: "₹2500",
      status: "Delivered",
      date: "12 Mar 2026",
    },
    {
      id: 2,
      wholesaler: "Gupta Traders",
      amount: "₹1800",
      status: "Processing",
      date: "11 Mar 2026",
    },
    {
      id: 3,
      wholesaler: "Mahesh Wholesale",
      amount: "₹3200",
      status: "Shipped",
      date: "10 Mar 2026",
    },
  ];

  return (
    <div className="ordersPage_4821">
      <h1 className="ordersTitle_4821">Orders</h1>

      <div className="ordersTable_4821">
        <div className="ordersHeader_4821">
          <span>Wholesaler</span>
          <span>Amount</span>
          <span>Status</span>
          <span>Date</span>
          <span>Action</span>
        </div>

        {orders.map((order) => (
          <div className="ordersRow_4821" key={order.id}>
            <span>{order.wholesaler}</span>
            <span>{order.amount}</span>
            <span className={`status_4821 ${order.status.toLowerCase()}`}>
              {order.status}
            </span>
            <span>{order.date}</span>
            <button className="viewBtn_4821">View</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
