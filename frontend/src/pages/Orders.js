import React, { useEffect, useState } from "react";
import API from "../services/api";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadOrders = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setOrders(res.data || []);
    } catch (error) {
      console.error("Failed to load orders", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const handleReorder = async (order) => {
    try {
      const token = localStorage.getItem("token");

      await API.post(
        "/orders",
        {
          item_name: order.item_name,
          quantity: order.quantity,
          price: order.price,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      loadOrders(); // refresh list
    } catch (err) {
      alert("Reorder failed ");
    }
  };

  return (
    <div className="page">
      <h1>📦 Your Orders</h1>
      <p style={{ opacity: 0.7 }}>
        Track your meals powered by TasteMind AI
      </p>

      <p>
        🧾 <b>Total Orders:</b> {orders.length}
      </p>

      {loading ? (
        <p>Loading your orders…</p>
      ) : orders.length === 0 ? (
        <p>No orders yet. Start exploring our menu 🍽️</p>
      ) : (
        orders.map((o) => (
          <div key={o.id} className="card">
            {/* Status */}
            <span
              style={{
                float: "right",
                background:
                  o.status === "completed"
                    ? "#e8f5e9"
                    : o.status === "pending"
                    ? "#fff3e0"
                    : "#e3f2fd",
                color:
                  o.status === "completed"
                    ? "#2e7d32"
                    : o.status === "pending"
                    ? "#ef6c00"
                    : "#1976d2",
                padding: "4px 8px",
                borderRadius: 6,
                fontSize: 12,
              }}
            >
              {o.status?.toUpperCase()}
            </span>

            <p>
              <b>Order ID:</b> #{o.id}
            </p>

            {o.item_name && (
              <p>
                <b>Item:</b> {o.item_name}
              </p>
            )}

            <p>
              <b>Quantity:</b> {o.quantity}
            </p>

            {o.price && (
              <p>
                <b>Price:</b> ₹{o.price}
              </p>
            )}

            {o.price && (
              <p>
                <b>Total:</b> ₹{o.price * o.quantity}
              </p>
            )}

            <p>
              <b>Order Date:</b>{" "}
              {new Date(o.created_at).toLocaleDateString()}{" "}
              {new Date(o.created_at).toLocaleTimeString()}
            </p>

            {/* Actions */}
            <div style={{ marginTop: 10, display: "flex", gap: 8 }}>
              <button
                onClick={() => handleReorder(o)}
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
