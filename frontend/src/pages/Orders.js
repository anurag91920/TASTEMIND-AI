import React, { useEffect, useState } from "react";
import API from "../services/api";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await API.get("/orders", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setOrders(res.data);
    } catch (err) {
      console.error("Failed to load orders");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const totalOrders = orders.length;

  return (
    <div className="page">
      <h1>📦 Your Orders</h1>
      <p style={{ opacity: 0.7 }}>
        Track your meals powered by TasteMind AI
      </p>

      <p>
        🧾 <b>Total Orders:</b> {totalOrders}
      </p>

      {loading ? (
        <p>Loading your orders…</p>
      ) : totalOrders === 0 ? (
        <p>No orders yet. Start exploring our menu 🍽️</p>
      ) : (
        orders.map((o) => (
          <div key={o.id} className="card">
            {/* Status */}
            <span
              style={{
                float: "right",
                background: "#e3f2fd",
                color: "#1976d2",
                padding: "4px 8px",
                borderRadius: 6,
                fontSize: 12,
              }}
            >
              ✅ Placed
            </span>

            <p>
              <b>Order ID:</b> #{o.id}
            </p>

            {/* Backend joins se agar item name aa raha ho */}
            {o.item_name && (
              <p>
                <b>Item:</b> {o.item_name}
              </p>
            )}

            <p>
              <b>Quantity:</b> {o.quantity}
            </p>

            <p>
              <b>Order Date:</b>{" "}
              {new Date(o.created_at || o.order_time).toLocaleString()}
            </p>

            {/* Action buttons */}
            <div style={{ marginTop: 10, display: "flex", gap: 8 }}>
              <button
                style={{
                  padding: "6px 10px",
                  borderRadius: 6,
                  border: "none",
                  background: "#2e7d32",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                Reorder 🔁
              </button>

              <button
                style={{
                  padding: "6px 10px",
                  borderRadius: 6,
                  border: "1px solid #ccc",
                  background: "#fff",
                  cursor: "pointer",
                }}
              >
                View Details
              </button>
            </div>
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
        Eat smart. Order smarter. Powered by TasteMind AI 🍔
      </p>
    </div>
  );
}
