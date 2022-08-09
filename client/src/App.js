import React from "react";
import { Routes, Route } from "react-router-dom";
import './style/App.css';

// pages
import Home from "./pages/Home/Home";
import Testt from "./pages/Testt";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Testt />} />
      </Routes>
    </div>
  );
}

export default App;
