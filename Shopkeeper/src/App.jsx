import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import WholeShellerCards from "./components/WholeShellerCards/WholeShellerCards";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";
import Orders from "./components/Orders/Orders";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import OrderProduct from "./components/WholeShellerCards/OrderProducts/OrderProduct";
import UserDetails from "./components/UserDetails/UserDetails";

function Layout() {
  const [currSection, setCurrSection] = useState("Dashboard");
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideNavbar && (
        <Navbar setCurrSection={setCurrSection} currSection={currSection} />
      )}

      <div className="mainContent_4821">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/wholesalers" element={<WholeShellerCards />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orderProduct/:id" element={<OrderProduct />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userdetails" element={<UserDetails />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
