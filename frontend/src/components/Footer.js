import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

export default function Footer() {
  const { theme } = useContext(ThemeContext);
  const [email, setEmail] = useState("");

  const style = {
    minimal: { background: "#e6f2ff", color: "#003366" },
    restaurant: { background: "#ffccbc", color: "#c62828" },
    dark: { background: "#1e1e1e", color: "#ffa726" },
    green: { background: "#c8e6c9", color: "#1b5e20" },
  };

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with ${email}!`);
      setEmail("");
    } else {
      alert("Please enter a valid email.");
    }
  };

  return (
    <footer
      style={{
        padding: "20px",
        textAlign: "center",
        fontSize: "14px",
        lineHeight: "1.6",
        ...style[theme],
      }}
    >
      <p>&copy; 2025 TASTEMIND AI. All rights reserved.</p>

      <p>
        Contact:{" "}
        <a href="mailto:support@tastemind.ai" style={{ color: style[theme].color }}>
          support@tastemind.ai
        </a>{" "}
        |{" "}
        <a href="tel:+911234567890" style={{ color: style[theme].color }}>
          +91 12345 67890
        </a>
      </p>

      <p>
        Follow us:{" "}
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 5px", color: style[theme].color }}>Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 5px", color: style[theme].color }}>Instagram</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 5px", color: style[theme].color }}>Twitter</a>
      </p>

      <div style={{ marginTop: "10px" }}>
        
        <Link to="/" style={{ margin: "0 10px", color: style[theme].color }}>Home</Link>
        <Link to="/orders" style={{ margin: "0 10px", color: style[theme].color }}>Orders</Link>
        <Link to="/reviews" style={{ margin: "0 10px", color: style[theme].color }}>Reviews</Link>
      </div>

      <div style={{ marginTop: "15px" }}>
        <input
          type="email"
          placeholder="Subscribe for updates"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "5px", borderRadius: "5px", marginRight: "5px" }}
        />
        <button
          onClick={handleSubscribe}
          style={{
            padding: "5px 10px",
            borderRadius: "5px",
            cursor: "pointer",
            background: style[theme].color,
            color: theme === "dark" ? "#1e1e1e" : "#fff",
            border: "none",
          }}
        >
          Subscribe
        </button>
      </div>
    </footer>
  );
}
