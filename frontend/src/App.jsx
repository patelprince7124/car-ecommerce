import { useState, useEffect } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddCar from "./pages/AddCar";
import EditCar from "./pages/EditCar";
import Bookings from "./pages/Bookings";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import LearnMore from "./pages/LearnMore";
import TestBookings from "./pages/TestBookings";
import Checkout
  from "./pages/Checkout";

import AdminBookings
  from "./admin/AdminBookings";

import ManageUsers
  from "./admin/ManageUsers";

import ProtectedRoute
  from "./components/ProtectedRoute";

import AdminPayments
  from "./admin/AdminPayments";

function App() {

  /* LOADING */

  const [loading,
    setLoading] =
    useState(true);

  useEffect(() => {

    setTimeout(() => {

      setLoading(false);

    }, 1000);

  }, []);

  /* LOADER */

  if (loading) {

    return (

      <div
        style={{
          height: "100vh",
          background: "#0f0f0f",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "white",
        }}
      >

        <div
          className=
          "spinner-border"

          style={{
            width: "80px",
            height: "80px",
            color: "#ff4d00",
          }}
        ></div>

        <h1 className="mt-4">
          Luxury Cars
        </h1>

      </div>
    );
  }

  return (

    <BrowserRouter>

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={<Home />}
        />

        {/* LOGIN */}

        <Route
          path="/login"
          element={<Login />}
        />

        {/* REGISTER */}

        <Route
          path="/register"
          element={<Register />}
        />

        {/* CARS */}

        <Route
          path="/cars"
          element={
            <ProtectedRoute>
              <Cars />
            </ProtectedRoute>
          }
        />

        {/* CAR DETAILS */}

        <Route
          path="/car/:id"
          element={
            <ProtectedRoute>
              <CarDetails />
            </ProtectedRoute>
          }
        />

        {/* LEARN MORE */}

        <Route
          path="/learn-more"
          element={
            <ProtectedRoute>
              <LearnMore />
            </ProtectedRoute>
          }
        />

        {/* BOOKINGS */}

        <Route
          path="/bookings"
          element={
            <ProtectedRoute>
              <Bookings />
            </ProtectedRoute>
          }
        />

        {/* PROFILE */}

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* CONTACT */}

        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />

        {/* ADMIN DASHBOARD */}

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* ADD CAR */}

        <Route
          path="/add-car"
          element={
            <ProtectedRoute>
              <AddCar />
            </ProtectedRoute>
          }
        />

        {/* EDIT CAR */}

        <Route
          path="/edit-car/:id"
          element={
            <ProtectedRoute>
              <EditCar />
            </ProtectedRoute>
          }
        />

        {/* ADMIN BOOKINGS */}

        <Route
          path="/admin/bookings"
          element={
            <ProtectedRoute>
              <AdminBookings />
            </ProtectedRoute>
          }
        />

        {/* MANAGE USERS */}

        <Route
          path="/admin/users"
          element={
            <ProtectedRoute>
              <ManageUsers />
            </ProtectedRoute>
          }
        />

        {/* TEST BOOKINGS */}

        <Route
          path="/test-bookings"
          element={
            <ProtectedRoute>
              <TestBookings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/payments"
          element={
            <ProtectedRoute>
              <AdminPayments />
            </ProtectedRoute>
          }
        />
      </Routes>

    </BrowserRouter>

  );
}

export default App;