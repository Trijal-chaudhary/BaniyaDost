import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
function App() {
  return (
    <>
      <NavBar />
      <SideBar />
    </>
  );
}

export default App;
