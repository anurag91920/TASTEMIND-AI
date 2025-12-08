import React, { useState } from "react";
import API from "../services/api";

export default function Reviews() {
  const [form, setForm] = useState({
    menu_id: "",
    review_text: "",
    rating: 5,
  });

  const [loading, setLoading] = useState(false);
  const [sentiment, setSentiment] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      const res = await API.post("/reviews", form, {
        headers: { Authorization: `Bearer ${token}` }
      });

      setSentiment(res.data);
      setForm({ menu_id: "", review_text: "", rating: 5 });
    } catch (err) {
      alert("Failed to submit review ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <h1>📝 Rate & Review</h1>
      <p style={{ opacity: 0.7 }}>
        Your feedback helps TasteMind AI improve recommendations
      </p>

      <form className="form-box" onSubmit={submit}>
        {/* MENU ID */}
        <input
          type="number"
          placeholder="Menu Item ID"
          value={form.menu_id}
          required
          onChange={(e) =>
            setForm({ ...form, menu_id: e.target.value })
          }
        />

        {/* REVIEW TEXT */}
        <textarea
          placeholder="How was the taste, quality, delivery?"
          value={form.review_text}
          required
          onChange={(e) =>
            setForm({ ...form, review_text: e.target.value })
          }
        />

        {/* STAR RATING */}
        <label>
          ⭐ Rating: {form.rating}/5
        </label>
        <input
          type="range"
          min="1"
          max="5"
          value={form.rating}
          onChange={(e) =>
            setForm({ ...form, rating: e.target.value })
          }
        />

        <button disabled={loading}>
          {loading ? "Analyzing sentiment..." : "Submit Review"}
        </button>
      </form>

      {/* AI SENTIMENT RESULT */}
      {sentiment && (
        <div className="card" style={{ marginTop: 20 }}>
          <h3>🤖 AI Sentiment Analysis</h3>

          <p>
            <b>Score:</b> {sentiment.score}
          </p>

          <p>
            <b>Type:</b>{" "}
            {sentiment.score > 0 ? "Positive 😊" : "Negative 😕"}
          </p>

          <p style={{ fontSize: 13, opacity: 0.6 }}>
            TasteMind uses your feedback to personalize future dishes
          </p>
        </div>
      )}
    </div>
  );
}
