import { useState } from "react";

import { useNavigate, useSearchParams } from "react-router-dom";

import Navbar from "../components/Navbar";

import API from "../services/api";

const Register = () => {

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect") || "/cars";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (!name.trim()) {
      setError("Name is required");
      return false;
    }
    if (!email.trim()) {
      setError("Email is required");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Invalid email format");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return false;
    }
    return true;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateForm()) return;

    setLoading(true);

    try {
      const userData = { name, email, password };
      await API.post("/auth/register", userData);
      setSuccess("Registration Successful! 🔥 Redirecting to login...");
      setTimeout(() => {
        navigate(`/login?redirect=${encodeURIComponent(redirect)}`);
      }, 1500);
    } catch (err) {
      const message =
        err.response?.data?.message || err.message || "Registration failed";
      setError(message);
      console.error("Register error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          background: "#0f0f0f",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >

        <div
          style={{
            width: "400px",
            background: "#1a1a1a",
            padding: "40px",
            borderRadius: "20px",
          }}
        >

          <h1
            className="text-center mb-4"
            style={{
              color: "#ff4d00",
            }}
          >
            Register
          </h1>

          {error && (
            <div
              className="alert alert-danger mb-3"
              style={{ color: "#ff6b6b", background: "#2d2d2d", border: "1px solid #ff6b6b" }}
            >
              {error}
            </div>
          )}

          {success && (
            <div
              className="alert alert-success mb-3"
              style={{ color: "#51cf66", background: "#2d2d2d", border: "1px solid #51cf66" }}
            >
              {success}
            </div>
          )}

          <form onSubmit={handleRegister}>

            <input
              type="text"
              placeholder="Full Name"
              className="form-control mb-3"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError("");
              }}
              disabled={loading}
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              className="form-control mb-3"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              disabled={loading}
              required
            />

            <input
              type="password"
              placeholder="Password (min 6 chars)"
              className="form-control mb-3"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              disabled={loading}
              required
            />

            <button
              className="btn w-100"
              style={{
                background: loading ? "#999" : "#ff4d00",
                color: "white",
                padding: "12px",
                cursor: loading ? "not-allowed" : "pointer",
              }}
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>

          </form>

          <p className="text-center text-secondary mt-4">
            Already have an account?{" "}
            <a href="/login" style={{ color: "#ff4d00", textDecoration: "none" }}>
              Login here
            </a>
          </p>

        </div>

      </div>
    </>
  );
};

export default Register;