import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WholeShellerCards from "./components/WholeShellerCards/WholeShellerCards";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";
import Orders from "./components/Orders/Orders";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import OrderProduct from "./components/WholeShellerCards/OrderProducts/OrderProduct";
function App() {
  const [currSection, setCurrSection] = useState("Dashboard");
  return (
    <>
      <BrowserRouter>
        <Navbar setCurrSection={setCurrSection} currSection={currSection} />

        <div className="mainContent_4821">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/wholesalers" element={<WholeShellerCards />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/orders" element={<Orders />} />
            <Route path="/orderProduct/:id" element={<OrderProduct />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
