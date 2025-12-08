import React, { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      nav("/");
    } catch {
      setError("Invalid email or password ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page" style={{ maxWidth: 420, margin: "auto" }}>
      <h1>🍽️ TasteMind AI</h1>
      <p style={{ opacity: 0.7 }}>
        Intelligent food ordering & recommendations
      </p>

      <form onSubmit={submit} className="form-box">
        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email address"
          value={form.email}
          required
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          required
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        {/* ERROR */}
        {error && (
          <p style={{ color: "red", fontSize: 14 }}>{error}</p>
        )}

        <button disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      {/* EXTRA LINKS */}
      <p style={{ marginTop: 15, fontSize: 14 }}>
        New to TasteMind?{" "}
        <Link to="/register">Create an account</Link>
      </p>

      <p
        style={{
          marginTop: 30,
          fontSize: 12,
          opacity: 0.5,
          textAlign: "center",
        }}
      >
        Powered by AI-driven taste intelligence 🤖🍔
      </p>
    </div>
  );
}
