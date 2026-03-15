import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Dashboard from "./components/Dashboard/Dashboard";
import Inventory from "./components/Inventory/Inventory";
import { useState } from "react";
import SignUp from "./components/SignUp/SignUp";
import LogIn from "./components/LogIn/LogIn";
import AddProduct from "./components/Inventory/AddProduct/AddProduct";
function App() {
  const [currSection, setCurrSection] = useState("Dashboard");
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <SideBar setCurrSection={setCurrSection} currSection={currSection} />
        <div className="MainContRouter">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/AddProduct" element={<AddProduct />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
