import React from "react";
import "./Orders.css";
import { useState } from "react";
import { useEffect } from "react";
import { shopById, wholeIsLogged } from "../../services/fetching";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  // const [orders] = useState([
  //   {
  //     id: 1,
  //     wholesaler: "Sharma Foods",
  //     status: "processing",
  //     date: "17 Mar 2026",
  //     products: [
  //       {
  //         name: "Sugar 10kg",
  //         price: "₹500",
  //         Qty: 1,
  //         img: "https://5.imimg.com/data5/ECOM/Default/2023/7/sample1.jpg",
  //       },
  //       {
  //         name: "Basmati Rice 25kg",
  //         price: "₹2100",
  //         Qty: 1,
  //         img: "https://tiimg.tistatic.com/sample2.jpg",
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     wholesaler: "Gupta Traders",
  //     status: "processing",
  //     date: "16 Mar 2026",
  //     products: [
  //       {
  //         name: "Wheat 50kg",
  //         price: "₹1800",
  //         Qty: 2,
  //         img: "https://tiimg.tistatic.com/sample3.jpg",
  //       },
  //     ],
  //   },
  // ]);
  useEffect(() => {
    const fetchOrders = async () => {
      const res = await wholeIsLogged("hello");

      const ordersData = await Promise.all(
        res.details.orderDetails.map(async (order, idx) => {
          const products = order.details;

          const shopRes = await shopById(order.userId);
          const username = shopRes.name;

          const formattedDate = new Date().toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          });

          return {
            id: idx,
            wholesaler: username,
            status: "processing",
            date: formattedDate,
            products: products,
          };
        })
      );

      setOrders(ordersData);
    };

    fetchOrders();
  }, []);
  const getTotal = (products) => {
    let total = 0;
    products.forEach((item) => {
      total += item.Qty * parseInt(item.price.replace("₹", ""));
    });
    return total;
  };

  return (
    <div className="ordersPage_4821">
      <h1 className="ordersTitle_4821">Orders</h1>

      {orders.map((order) => (
        <div className="orderCard_4821" key={order.id}>
          <div className="orderHeader_4821">
            <span>
              <strong>{order.wholesaler}</strong>
            </span>
            <span className={`status_4821 ${order.status}`}>
              {order.status}
            </span>
          </div>

          <div className="productsList_4821">
            {order.products.map((item, idx) => (
              <div className="productRow_4821" key={idx}>
                <img src={item.img} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <p>Qty: {item.Qty}</p>
                </div>
                <span>{item.price}</span>
              </div>
            ))}
          </div>

          <div className="orderFooter_4821">
            <span>
              <strong>Total: ₹{getTotal(order.products)}</strong>
            </span>
            <span>{order.date}</span>
            <button className="viewBtn_4821">View</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
