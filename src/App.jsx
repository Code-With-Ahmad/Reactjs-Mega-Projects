import React from "react";
import "./App.css";
import Navbar from "./Components/Header/Navbar.jsx";

import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer.jsx";

const App = () => {
  {
    document.title = "Home | LahoriLounge";
  }
  return (
    <div className="container">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
