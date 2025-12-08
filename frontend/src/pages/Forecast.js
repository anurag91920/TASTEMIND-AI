import React, { useEffect, useState } from "react";
import API from "../services/api";

export default function Forecast() {
  const [data, setData] = useState({});

  const load = async () => {
    const token = localStorage.getItem("token");

    const res = await API.get("/ml/forecast", {
      headers: { Authorization: `Bearer ${token}` }
    });

    setData(res.data.forecast);
  };

  useEffect(() => {
    load();
  }, []);

  const totalOrders = Object.values(data).reduce((sum, val) => sum + val, 0);

    return (
    <div className="page">
      <h1>🍽️ TasteMind AI – Demand Forecast</h1>

      <p>
        📊 <b>Total Expected Orders Today:</b> {totalOrders}
      </p>

      {Object.keys(data).map((item) => (
        <div key={item} className="card">
          <p>
            <b>{item}</b>: {data[item]} orders expected
          </p>
        </div>
      ))}

      <div className="card">
        <h3>🧠 AI Recommendation</h3>
        {totalOrders > 100 ? (
          <p>
            ⚠️ High demand expected. Increase staff & prepare inventory early.
          </p>
        ) : (
          <p>
            ✅ Normal demand. Keep regular staff and avoid over-stocking.
          </p>
        )}
      </div>
    </div>
  );
}


