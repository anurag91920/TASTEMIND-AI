import React, { useEffect, useState } from "react";
import API from "../services/api";

export default function Recommend() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/ml/recommend", {
        headers: { Authorization: `Bearer ${token}` }
      });

      setData(res.data.recommendations || []);
    } catch (err) {
      console.error("Failed to load recommendations");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="page">
      <h1>🤖 TasteMind AI Recommendations</h1>

      <p style={{ opacity: 0.7 }}>
        Personalized dishes picked just for you using your order history
      </p>

      {loading ? (
        <p>Analyzing your taste profile… 🍕</p>
      ) : data.length === 0 ? (
        <p>No recommendations yet. Order something to train the AI 🧠</p>
      ) : (
        data.map((item, i) => (
          <div key={i} className="card">
            <h3>⭐ Recommended Dish</h3>

            {/* If backend still sends only menu IDs */}
            {typeof item === "number" || typeof item === "string" ? (
              <p>
                Menu Item ID: <b>{item}</b>
              </p>
            ) : (
              <>
                <p>
                  <b>{item.name}</b>
                </p>
                <p>{item.category}</p>
                <p>₹{item.price}</p>
              </>
            )}

            <p style={{ fontSize: 12, opacity: 0.6 }}>
              Based on similar users & previous orders
            </p>

            <button
              style={{
                marginTop: 10,
                padding: "6px 12px",
                borderRadius: 6,
                border: "none",
                background: "#ff7043",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Order Now 🍽️
            </button>
          </div>
        ))
      )}

      <p
        style={{
          marginTop: 25,
          fontStyle: "italic",
          opacity: 0.6,
        }}
      >
        TasteMind learns every time you order 🤝
      </p>
    </div>
  );
}
