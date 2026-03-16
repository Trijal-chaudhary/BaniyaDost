import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Dashboard from "./components/Dashboard/Dashboard";
import Inventory from "./components/Inventory/Inventory";
import { useState } from "react";
import SignUp from "./components/SignUp/SignUp";
import LogIn from "./components/LogIn/LogIn";
import AddProduct from "./components/Inventory/AddProduct/AddProduct";
import DetailsPage from "./components/DetailsPage/DetailsPage";

function Layout({ children }) {
  const location = useLocation();
  const hideLayout =
    location.pathname === "/login" || location.pathname === "/signup";

  const [currSection, setCurrSection] = useState("Dashboard");

  return (
    <>
      {!hideLayout && <NavBar />}
      {!hideLayout && (
        <SideBar setCurrSection={setCurrSection} currSection={currSection} />
      )}

      <div className="MainContRouter">{children}</div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/AddProduct" element={<AddProduct />} />

          {/* Auth pages */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/UserDetails" element={<DetailsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
