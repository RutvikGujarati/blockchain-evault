import { ConnectWallet } from "@thirdweb-dev/react";
import React, { useState } from "react";
import "./styles/Home.css";
import Navbar from "./Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {


  return (
    <main className="main">
      <div className="container">
        <Navbar />
      
          <BrowserRouter>
            <Routes>
              <Route path= "/Home" element={<Home />} />
              <Route path= "/About" element={<About />} />
            </Routes>
          </BrowserRouter>
      
      </div>
    </main>
  );
}
