import React, { useEffect, useState } from "react";
import "./DetailsPage.css";
import { logout, wholeIsLogged } from "../../services/fetching";
import { useNavigate } from "react-router-dom";
const DetailsPage = () => {
  const navigate = useNavigate();
  const [wholesaler, setWholeSaler] = useState({});
  // const wholesaler = {
  //   ownerName: "Harsh",
  //   shopName: "HV-Traders",
  //   username: "Trijal27",
  //   phone: "8271004296",
  //   category: "heloo",
  //   city: "hello world",
  // };
  useEffect(() => {
    wholeIsLogged("hello").then((ele) => {
      // console.log(ele.details.details);
      setWholeSaler(ele.details.details);
    });
  }, []);
  const handleLogoutBtn = () => {
    logout("hello").then(() => navigate("/"));
  };
  return (
    <div className="wholesalerDetailsContainer7421">
      <div className="wholesalerDetailsCard7421">
        <h2 className="wholesalerDetailsTitle7421">Wholesaler Details</h2>

        <div className="wholesalerDetailsGrid7421">
          <div className="wholesalerDetailsItem7421">
            <span className="wholesalerDetailsLabel7421">Owner Name</span>
            <span className="wholesalerDetailsValue7421">
              {wholesaler.ownerName}
            </span>
          </div>

          <div className="wholesalerDetailsItem7421">
            <span className="wholesalerDetailsLabel7421">Shop Name</span>
            <span className="wholesalerDetailsValue7421">
              {wholesaler.shopName}
            </span>
          </div>

          <div className="wholesalerDetailsItem7421">
            <span className="wholesalerDetailsLabel7421">Username</span>
            <span className="wholesalerDetailsValue7421">
              {wholesaler.username}
            </span>
          </div>

          <div className="wholesalerDetailsItem7421">
            <span className="wholesalerDetailsLabel7421">Phone</span>
            <span className="wholesalerDetailsValue7421">
              {wholesaler.phone}
            </span>
          </div>

          <div className="wholesalerDetailsItem7421">
            <span className="wholesalerDetailsLabel7421">Category</span>
            <span className="wholesalerDetailsValue7421">
              {wholesaler.category}
            </span>
          </div>

          <div className="wholesalerDetailsItem7421">
            <span className="wholesalerDetailsLabel7421">City</span>
            <span className="wholesalerDetailsValue7421">
              {wholesaler.city}
            </span>
          </div>
        </div>
        <button onClick={() => handleLogoutBtn()} className="LoguserOutBut">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default DetailsPage;
