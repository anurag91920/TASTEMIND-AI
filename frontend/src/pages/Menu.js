import React, { useEffect, useState } from "react";
import API from "../services/api";

export default function Menu() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const res = await API.get("/menu");
    setItems(res.data);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const categories = [
    "all",
    ...new Set(items.map((i) => i.category).filter(Boolean)),
  ];

  const filteredItems = items.filter((m) => {
    const matchSearch = m.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      category === "all" || m.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <div className="page">
      <h1>🍽️ TasteMind Menu</h1>
      <p style={{ opacity: 0.7 }}>
        Discover dishes curated with TasteMind AI insights
      </p>

      {/* Search & Filter */}
      <div
        style={{
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
          margin: "20px 0",
        }}
      >
        <input
          type="text"
          placeholder="🔍 Search dishes…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: 8, flex: 1, minWidth: 220 }}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ padding: 8 }}
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c === "all" ? "All Categories" : c}
            </option>
          ))}
        </select>
      </div>

      {/* Content */}
      {loading ? (
        <p>Loading menu…</p>
      ) : filteredItems.length === 0 ? (
        <p>No items found.</p>
      ) : (
        <div className="grid">
          {filteredItems.map((m) => (
            <div key={m.id} className="card">
              {/* Badge */}
              {m.price > 300 && (
                <span
                  style={{
                    fontSize: 12,
                    color: "#fff",
                    background: "#ff5722",
                    padding: "2px 6px",
                    borderRadius: 4,
                    float: "right",
                  }}
                >
                  Chef’s Special
                </span>
              )}

              <h3>{m.name}</h3>

              <p style={{ fontSize: 13, color: "#666" }}>
                {m.category}
              </p>

              <p style={{ fontWeight: "bold", fontSize: 18 }}>
                ₹{m.price}
              </p>

              <p style={{ fontSize: 14, opacity: 0.85 }}>
                {m.description}
              </p>

              <button
                style={{
                  marginTop: 10,
                  padding: "6px 12px",
                  background: "#2e7d32",
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  cursor: "pointer",
                }}
              >
                Add to Order
              </button>
            </div>
          ))}
        </div>
      )}

      <p
        style={{
          marginTop: 25,
          fontStyle: "italic",
          opacity: 0.6,
        }}
      >
        Powered by TasteMind AI • Smart menus for modern restaurants
      </p>
    </div>
  );
}
