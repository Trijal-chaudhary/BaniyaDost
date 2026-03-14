import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WholeShellerCards from "./components/WholeShellerCards/WholeShellerCards";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";
import Orders from "./components/Orders/Orders";
function App() {
  const [currSection, setCurrSection] = useState("Dashboard");
  return (
    <>
      <BrowserRouter>
        <Navbar setCurrSection={setCurrSection} currSection={currSection} />

        <div className="mainContent_4821">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/wholesalers" element={<WholeShellerCards />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
