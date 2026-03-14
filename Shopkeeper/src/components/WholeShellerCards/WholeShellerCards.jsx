import React, { useState } from "react";
import "./WholeShellerCards.css";
import Sidebar from "../Sidebar/Sidebar";
const WholeShellerCards = () => {
  const wholesalers = [
    {
      id: 1,
      name: "Sharma Foods",
      rating: 4.5,
      supplies: "Rice, Wheat, Oil",
      credit: "7 Days",
      delivery: "Same Day",
      distance: "2.1 km",
      minOrder: "₹1000",
    },
    {
      id: 2,
      name: "Gupta Traders",
      rating: 4.8,
      supplies: "Sugar, Tea, Spices",
      credit: "10 Days",
      delivery: "24 Hours",
      distance: "3.4 km",
      minOrder: "₹800",
    },
    {
      id: 3,
      name: "Mahesh Wholesale",
      rating: 4.2,
      supplies: "Biscuits, Snacks, Cold Drinks",
      credit: "5 Days",
      delivery: "Same Day",
      distance: "1.8 km",
      minOrder: "₹1500",
    },
    {
      id: 3,
      name: "Mahesh Wholesale",
      rating: 4.2,
      supplies: "Biscuits, Snacks, Cold Drinks",
      credit: "5 Days",
      delivery: "Same Day",
      distance: "1.8 km",
      minOrder: "₹1500",
    },
  ];
  return (
    <>
      <div className="page">
        <h1 className="title">Available Wholesalers</h1>

        <div className="card-container">
          {wholesalers.map((w) => (
            <div key={w.id} className="card">
              <h2>{w.name}</h2>
              <p>⭐ {w.rating} Rating</p>
              <p>
                <b>Supplies:</b> {w.supplies}
              </p>
              <p>
                <b>Credit:</b> {w.credit}
              </p>
              <p>
                <b>Delivery:</b> {w.delivery}
              </p>
              <p>
                <b>Distance:</b> {w.distance}
              </p>
              <p>
                <b>Min Order:</b> {w.minOrder}
              </p>

              <div className="buttons">
                <button className="view-btn">View Details</button>
                <button className="order-btn">Order</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WholeShellerCards;
