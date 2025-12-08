import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeSwitcher from "./components/ThemeSwitcher";

import Menu from "./pages/Menu";
import Orders from "./pages/Orders";
import Reviews from "./pages/Reviews";
import Recommend from "./pages/Recommend";
import Forecast from "./pages/Forecast";
import Login from "./pages/Login";
import Register from "./pages/Register";

import "./styles/common.css";
import minimal from "./themes/minimal.module.css";
import restaurant from "./themes/restaurant.module.css";
import dark from "./themes/dark.module.css";
import green from "./themes/green.module.css";

export default function App() {
  const { theme } = useContext(ThemeContext);

  const themes = {
    minimal,
    restaurant,
    dark,
    green
  };

  return (
    <div className={themes[theme].app}>
      <BrowserRouter>
        <Navbar />
        <ThemeSwitcher />

        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/recommend" element={<Recommend />} />
          <Route path="/forecast" element={<Forecast />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
