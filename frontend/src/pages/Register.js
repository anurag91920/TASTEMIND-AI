import React, { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const nav = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await API.post("/auth/register", form);
      nav("/login", { state: { success: true } });
    } catch {
      setError("User already exists or invalid data ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page" style={{ maxWidth: 420, margin: "auto" }}>
      <h1> Join TasteMind AI</h1>

      <p style={{ opacity: 0.7 }}>
        Create your account to unlock AI-powered food insights
      </p>

      <form onSubmit={submit} className="form-box">
        {/* NAME */}
        <input
          type="text"
          placeholder="Full Name"
          required
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email address"
          required
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password (min 6 chars)"
          required
          minLength={6}
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        {/* ERROR */}
        {error && (
          <p style={{ color: "red", fontSize: 14 }}>{error}</p>
        )}

        <button disabled={loading}>
          {loading ? "Creating account..." : "Register"}
        </button>
      </form>

      <p style={{ marginTop: 15, fontSize: 14 }}>
        Already have an account?{" "}
        <Link to="/login">Login here</Link>
      </p>

      <p
        style={{
          marginTop: 30,
          fontSize: 12,
          opacity: 0.5,
          textAlign: "center",
        }}
      >
        TasteMind AI • Smart food decisions start here 🤖🍽️
      </p>
    </div>
  );
}
