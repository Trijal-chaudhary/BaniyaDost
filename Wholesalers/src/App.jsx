import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Dashboard from "./components/Dashboard/Dashboard";
import Inventory from "./components/Inventory/Inventory";
import { useState } from "react";
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
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
