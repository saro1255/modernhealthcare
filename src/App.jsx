import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./common/navbar";
import Home from "./home/home";
import About from "./about/about";

const App = () => (
  <div>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </div>
);

export default App;