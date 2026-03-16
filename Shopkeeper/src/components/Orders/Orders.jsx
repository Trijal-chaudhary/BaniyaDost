import React from "react";
import "./Orders.css";
import { useEffect } from "react";
import { islogged, wholeByIdForProduct } from "../../services/fetching";
import { useState } from "react";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  // const orders = [
  //   {
  //     id: 1,
  //     wholesaler: "Sharma Foods",
  //     amount: "₹2500",
  //     status: "Delivered",
  //     date: "12 Mar 2026",
  //   },
  //   {
  //     id: 2,
  //     wholesaler: "Gupta Traders",
  //     amount: "₹1800",
  //     status: "Processing",
  //     date: "11 Mar 2026",
  //   },
  //   {
  //     id: 3,
  //     wholesaler: "Mahesh Wholesale",
  //     amount: "₹3200",
  //     status: "Shipped",
  //     date: "10 Mar 2026",
  //   },
  // ];
  useEffect(() => {
    islogged("hello").then((ele) => {
      const tempOrders = [];

      ele.details.orderDetails.forEach((ele, idx) => {
        let amount = 0;

        ele.details.forEach((item) => {
          amount += item.Qty * parseInt(item.price.replace("₹", ""));
        });

        wholeByIdForProduct(ele.userId).then((res) => {
          const name = res.details.details.shopName;

          const today = new Date();
          const formattedDate = today.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          });

          tempOrders.push({
            id: idx,
            wholesaler: name,
            amount,
            status: "Processing",
            date: formattedDate,
          });

          setOrders([...tempOrders]);
        });
      });
    });
  }, []);
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

        {orders?.map((order) => (
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
