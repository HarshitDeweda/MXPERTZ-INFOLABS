// filename -App.js

import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import "./App.css";
import Navbar from "./Components/Navbar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contant from "./pages/Contant";
import Landing from "./pages/Landing";
import Shop from "./pages/Shop";
import Team from "./pages/Team";
import Gallery from "./pages/Gallery"

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/About" element={<About />} />
				<Route
					path="/Blogs"
					element={<Blogs />}
				/>
				<Route
					path="/Contant"
					element={<Contant />}
				/>
				<Route path="/Team" element={<Team />} />
				<Route path="/Gallery" element={<Gallery />} />
        <Route path="/Landing" element={<Landing />} />
        <Route path="/Shop" element={<Shop />} />

				<Route
					path="/sign-up"
					element={<AiOutlineShopping />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
