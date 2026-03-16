import React, { useState } from "react";
import "./WholeShellerCards.css";
import Sidebar from "../Sidebar/Sidebar";
import { useEffect } from "react";
import { wholeDetails } from "../../services/fetching";
import { useNavigate } from "react-router-dom";
const WholeShellerCards = () => {
  const navigate = useNavigate();
  const [wholesalers, setWholeSalers] = useState([]);
  // const wholesalers = [
  //   {
  //     id: 1,
  //     name: "Sharma Foods",
  //     rating: 4.5,
  //     supplies: "Rice, Wheat, Oil",
  //     credit: "7 Days",
  //     delivery: "Same Day",
  //     distance: "2.1 km",
  //     minOrder: "₹1000",
  //   },
  //   {
  //     id: 2,
  //     name: "Gupta Traders",
  //     rating: 4.8,
  //     supplies: "Sugar, Tea, Spices",
  //     credit: "10 Days",
  //     delivery: "24 Hours",
  //     distance: "3.4 km",
  //     minOrder: "₹800",
  //   },
  //   {
  //     id: 3,
  //     name: "Mahesh Wholesale",
  //     rating: 4.2,
  //     supplies: "Biscuits, Snacks, Cold Drinks",
  //     credit: "5 Days",
  //     delivery: "Same Day",
  //     distance: "1.8 km",
  //     minOrder: "₹1500",
  //   },
  //   {
  //     id: 3,
  //     name: "Mahesh Wholesale",
  //     rating: 4.2,
  //     supplies: "Biscuits, Snacks, Cold Drinks",
  //     credit: "5 Days",
  //     delivery: "Same Day",
  //     distance: "1.8 km",
  //     minOrder: "₹1500",
  //   },
  // ];
  useEffect(() => {
    wholeDetails("hello").then((ele) => {
      console.log(ele.details);
      setWholeSalers(ele.details);
    });
  }, []);
  return (
    <>
      <div className="page">
        <h1 className="title">Available Wholesalers</h1>

        <div className="card-container">
          {wholesalers.map((w) => (
            <div key={w.id} className="card">
              <h2>{w?.details?.shopName}</h2>
              <p>⭐ {w.rating} Rating</p>
              <p>
                <b>Owner Name:</b> {w?.details?.ownerName}
              </p>
              <p>
                <b>Category:</b> {w?.details?.category}
              </p>
              {/* <p>
                <b>Delivery:</b> {w.delivery}
              </p> */}
              {/* <p>
                <b>Distance:</b> {w.distance}
              </p> */}
              <p>
                <b>City</b> {w?.details?.city}
              </p>

              <div className="buttons">
                <button className="view-btn">View Details</button>
                <button
                  onClick={() => navigate(`/orderProduct/${w?._id}`)}
                  className="order-btn"
                >
                  Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WholeShellerCards;
