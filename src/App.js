import React from "react";
import { Routes, Route, Link } from "react-router-dom";

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
