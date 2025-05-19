import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./common/navbar";
import Home from "./home/home";
import About from "./about/about";
import HOmeProducts from "./home/home-products";
import Footer from "./common/footer";

const App = () => (
	<div>
		<Nav />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/home" element={<Home />} />
			<Route path="/home#home" element={<Home />} />
			<Route path="/home#products" element={<HOmeProducts />} />
			<Route path="/home#about" element={<Footer />} />
			<Route path="/about" element={<About />} />
		</Routes>
	</div>
);

export default App;