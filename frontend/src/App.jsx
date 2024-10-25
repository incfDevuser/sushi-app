import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
