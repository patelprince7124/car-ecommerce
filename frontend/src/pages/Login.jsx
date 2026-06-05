import { useState } from "react";

import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import Navbar from "../components/Navbar";

import API from "../services/api";

const Login = () => {

  const navigate =
    useNavigate();

  const [searchParams] =
    useSearchParams();

  const redirectTo =
    searchParams.get("redirect")
    || "/";

  const [email,
    setEmail] =
    useState("");

  const [password,
    setPassword] =
    useState("");

  const [error,
    setError] =
    useState("");

  const [success,
    setSuccess] =
    useState("");

  const [loading,
    setLoading] =
    useState(false);

  const validateForm =
    () => {

      if (!email.trim()) {

        setError(
          "Email is required"
        );

        return false;
      }

      if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/
          .test(email)
      ) {

        setError(
          "Invalid email format"
        );

        return false;
      }

      if (!password.trim()) {

        setError(
          "Password is required"
        );

        return false;
      }

      return true;
    };

  const handleLogin =
    async (e) => {

      e.preventDefault();

      setError("");

      setSuccess("");

      if (!validateForm())
        return;

      setLoading(true);

      try {

        const userData = {

          email,

          password,
        };

        const response = await API.post(
          "/auth/login",
          userData
        );
        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem("user", JSON.stringify(response.data.user));

        setSuccess(
          "Login Successful 🔥"
        );

        // setTimeout(() => {

        //   if (

        //     response.data.user
        //       .role === "admin"

        //   ) {

        //     navigate(
        //       "/admin/dashboard"
        //     );

        //   } else {

        //     navigate(
        //       redirectTo
        //     );

        //   }

        // }, 1500);

        if (

          response.data.user.email ===
          "prince@gmail.com"

        ) {

          navigate(
            "/admin/dashboard"
          );

        } else {

          navigate(
            redirectTo
          );

        }
      } catch (err) {

        const message =

          err.response?.data
            ?.message ||

          err.message ||

          "Login failed";

        setError(message);

        console.error(
          "Login error:",
          err
        );

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

          justifyContent:
            "center",

          alignItems:
            "center",
        }}
      >

        <div
          style={{
            width: "400px",

            background: "#1a1a1a",

            padding: "40px",

            borderRadius: "20px",

            boxShadow:
              "0 0 20px rgba(0,0,0,0.5)",
          }}
        >

          <h1
            className=
            "text-center mb-4"

            style={{
              color: "#ff4d00",

              fontWeight:
                "bold",
            }}
          >
            Login
          </h1>
          <p
            className="text-center mt-3"
            style={{
              color: "#999",
            }}
          >
            Login as User or Admin
          </p>

          {error && (

            <div
              className=
              "alert alert-danger mb-3"
            >
              {error}
            </div>

          )}

          {success && (

            <div
              className=
              "alert alert-success mb-3"
            >
              {success}
            </div>

          )}

          <form
            onSubmit={
              handleLogin
            }
          >

            <input
              type="email"

              placeholder=
              "Email Address"

              className=
              "form-control mb-3"

              value={email}

              onChange={(e) => {

                setEmail(
                  e.target.value
                );

                setError("");

              }}

              disabled={
                loading
              }

              required
            />

            <input
              type="password"

              placeholder=
              "Password"

              className=
              "form-control mb-3"

              value={password}

              onChange={(e) => {

                setPassword(
                  e.target.value
                );

                setError("");

              }}

              disabled={
                loading
              }

              required
            />

            <button
              className=
              "btn w-100"

              style={{
                background:
                  loading
                    ? "#999"
                    : "#ff4d00",

                color: "white",

                padding: "12px",

                fontWeight:
                  "bold",

                borderRadius:
                  "12px",
              }}

              disabled={
                loading
              }
            >

              {
                loading
                  ? "Logging in..."
                  : "Login"
              }

            </button>

          </form>

          <p
            className=
            "text-center text-secondary mt-4"
          >

            Don't have an account?

            {" "}

            <a
              href="/register"

              style={{
                color: "#ff4d00",

                textDecoration:
                  "none",
              }}
            >
              Register here
            </a>

          </p>

        </div>

      </div>

    </>
  );
};

export default Login;


