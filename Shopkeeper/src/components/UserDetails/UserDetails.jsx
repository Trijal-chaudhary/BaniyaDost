import React from "react";
import "./UserDetails.css";
import { useNavigate } from "react-router-dom";
import { postShopLoggedout } from "../../services/fetching";
const UserDetails = () => {
  const navigate = useNavigate();
  const user = {
    name: "Harsh",
    email: "harshvardh@gmail.com",
    shopName: "Trijal-Kirana",
    businessType: "grocery",
    city: "Knowledge park -II",
    username: "Trijal05",
  };
  const handleLogoutBtn = () => {
    postShopLoggedout("hello").then(() => {
      navigate("/");
    });
  };
  return (
    <div className="userProfileContainer6193">
      <div className="userProfileCard6193">
        <div className="userProfileHeader6193">
          <div className="userProfileAvatar6193">
            {user.name[0].toUpperCase()}
          </div>

          <div>
            <h2 className="userProfileName6193">{user.name}</h2>
            <p className="userProfileUsername6193">@{user.username}</p>
          </div>
        </div>

        <div className="userProfileDetails6193">
          <div className="userProfileRow6193">
            <span className="userProfileLabel6193">Email</span>
            <span>{user.email}</span>
          </div>

          <div className="userProfileRow6193">
            <span className="userProfileLabel6193">Shop Name</span>
            <span>{user.shopName}</span>
          </div>

          <div className="userProfileRow6193">
            <span className="userProfileLabel6193">Business Type</span>
            <span>{user.businessType}</span>
          </div>

          <div className="userProfileRow6193">
            <span className="userProfileLabel6193">City</span>
            <span>{user.city}</span>
          </div>
        </div>

        <button
          onClick={() => handleLogoutBtn()}
          className="userProfileLogoutBtn6193"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
