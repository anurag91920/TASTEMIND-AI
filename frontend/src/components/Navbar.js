import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const navStyle = {
    minimal: { background: "#e6f2ff", color: "#003366" },
    restaurant: { background: "#ffccbc", color: "#c62828" },
    dark: { background: "#1e1e1e", color: "#ffa726" },
    green: { background: "#c8e6c9", color: "#1b5e20" },
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav
      style={{
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        ...navStyle[theme],
      }}
    >
      <h2>🍽️ TASTEMIND AI</h2>

      <div>
        <Link to="/" style={{ margin: "0 10px" }}>Menu</Link>
        <Link to="/recommend" style={{ margin: "0 10px" }}>AI Recommend</Link>
        <Link to="/forecast" style={{ margin: "0 10px" }}>AI Forecast</Link>

        {token ? (
          <>
            <Link to="/orders" style={{ margin: "0 10px" }}>Orders</Link>
            <Link to="/reviews" style={{ margin: "0 10px" }}>Reviews</Link>

            <button
              onClick={logout}
              style={{
                marginLeft: 10,
                padding: "5px 10px",
                cursor: "pointer",
                borderRadius: 5,
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ margin: "0 10px" }}>Login</Link>
            <Link to="/register" style={{ margin: "0 10px" }}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
