import { Link } from "react-router-dom";

import {
  useEffect,
  useState
} from "react";

import Navbar
  from "../components/Navbar";

import API
  from "../services/api";

const Dashboard = () => {

  const [cars,
    setCars] =
    useState([]);

  const [orders,
    setOrders] =
    useState([]);

  /* FETCH DATA */

  useEffect(() => {

    /* FETCH CARS */

    const fetchCars =
      async () => {

        try {

          const response =
            await API.get(
              "/cars"
            );

          setCars(
            response.data
          );

        } catch (error) {

          console.log(error);

        }
      };

    /* FETCH ORDERS */

    const fetchOrders =
      async () => {

        try {

          const response =
            await API.get(
              "/orders"
            );

          setOrders(
            response.data
          );

        } catch (error) {

          console.log(error);

        }
      };

    fetchCars();

    fetchOrders();

  }, []);

  return (
    <>
      <Navbar />

      <div
        style={{
          background: "#0f0f0f",
          minHeight: "100vh",
          color: "white",
          padding: "60px 0",
        }}
      >

        <div className="container">

          {/* TITLE */}

          <h1
            className=
            "fw-bold mb-5"

            style={{
              fontSize: "70px",
            }}
          >
            Admin

            <span
              style={{
                color: "#ff4d00",
              }}
            >
              {" "}Dashboard
            </span>

          </h1>

          {/* BUTTONS */}

          <div
            className=
            "d-flex gap-3 mb-5 flex-wrap"
          >

            <Link to="/add-car">

              <button
                className="btn"

                style={{
                  background: "#ff4d00",
                  color: "white",
                  padding: "15px 30px",
                  borderRadius: "12px",
                  border: "none",
                }}
              >
                + Add Car
              </button>

            </Link>

            <Link to="/cars">

              <button
                className="btn"

                style={{
                  background: "#1a1a1a",
                  color: "white",
                  padding: "15px 30px",
                  borderRadius: "12px",
                  border: "none",
                }}
              >
                Manage Cars
              </button>

            </Link>

            <Link
              to="/admin/bookings"
            >

              <button
                className="btn"

                style={{
                  background: "#1a1a1a",
                  color: "white",
                  padding: "15px 30px",
                  borderRadius: "12px",
                  border: "none",
                }}
              >
                Manage Bookings
              </button>

            </Link>

            <Link
              to="/admin/users"
            >

              <button
                className="btn"

                style={{
                  background: "#1a1a1a",
                  color: "white",
                  padding: "15px 30px",
                  borderRadius: "12px",
                  border: "none",
                }}
              >
                Manage Users
              </button>

            </Link>

            <Link
              to="/admin/payments"
            >

              <button
                className="btn"

                style={{
                  background: "#1a1a1a",
                  color: "white",
                  padding: "15px 30px",
                  borderRadius: "12px",
                  border: "none",
                }}
              >
                Payments
              </button>

            </Link>

          </div>

          {/* TOP CARDS */}

          <div className="row">

            {/* CARS */}

            <div className="col-md-4 mb-4">

              <div
                style={{
                  background: "#1a1a1a",
                  padding: "40px",
                  borderRadius: "20px",
                  textAlign: "center",
                }}
              >

                <h1>
                  🚗
                </h1>

                <h2>
                  {cars.length}
                </h2>

                <p>
                  Total Cars
                </p>

              </div>

            </div>

            {/* ORDERS */}

            <div className="col-md-4 mb-4">

              <div
                style={{
                  background: "#1a1a1a",
                  padding: "40px",
                  borderRadius: "20px",
                  textAlign: "center",
                }}
              >

                <h1>
                  📦
                </h1>

                <h2>
                  {orders.length}
                </h2>

                <p>
                  Total Orders
                </p>

              </div>

            </div>

            {/* REVENUE */}

            <div className="col-md-4 mb-4">

              <div
                style={{
                  background: "#1a1a1a",
                  padding: "40px",
                  borderRadius: "20px",
                  textAlign: "center",
                }}
              >

                <h1>
                  💰
                </h1>

                <h2>

                  $

                  {
                    orders.reduce(
                      (
                        total,
                        item
                      ) =>

                        total +
                        item.price,

                      0
                    )
                  }

                </h2>

                <p>
                  Total Revenue
                </p>

              </div>

            </div>

          </div>

          {/* RECENT ORDERS */}

          <div
            style={{
              background: "#1a1a1a",
              padding: "30px",
              borderRadius: "20px",
              marginTop: "40px",
            }}
          >

            <h2
              className=
              "mb-4"
            >
              Recent Orders
            </h2>

            {
              orders.length === 0 ? (

                <h4>
                  No Orders Yet
                </h4>

              ) : (

                <table
                  className=
                  "table table-dark"
                >

                  <thead>

                    <tr>

                      <th>
                        User
                      </th>

                      <th>
                        Car
                      </th>

                      <th>
                        Amount
                      </th>

                    </tr>

                  </thead>

                  <tbody>

                    {
                      orders.map(
                        (
                          item,
                          index
                        ) => (

                          <tr
                            key={index}
                          >

                            <td>
                              {
                                item.userName
                              }
                            </td>

                            <td>
                              {
                                item.carName
                              }
                            </td>

                            <td>

                              $

                              {
                                item.price
                              }

                            </td>

                          </tr>
                        )
                      )
                    }

                  </tbody>

                </table>

              )
            }

          </div>

          {/* SALES ANALYTICS */}

          <div
            style={{
              background: "#1a1a1a",
              padding: "30px",
              borderRadius: "20px",
              marginTop: "40px",
            }}
          >

            <h2
              className=
              "mb-5"
            >
              Sales Analytics
            </h2>

            {/* REVENUE */}

            <div className="mb-4">

              <div
                className=
                "d-flex justify-content-between"
              >

                <h5>
                  Revenue
                </h5>

                <h5>

                  $

                  {
                    orders.reduce(
                      (
                        total,
                        item
                      ) =>

                        total +
                        item.price,

                      0
                    )
                  }

                </h5>

              </div>

              <div
                style={{
                  width: "100%",
                  height: "20px",
                  background: "#333",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >

                <div
                  style={{
                    width:
                      `${orders.length * 10}%`,

                    height: "100%",

                    background: "#ff4d00",
                  }}
                />

              </div>

            </div>

            {/* ORDERS */}

            <div className="mb-4">

              <div
                className=
                "d-flex justify-content-between"
              >

                <h5>
                  Orders
                </h5>

                <h5>
                  {orders.length}
                </h5>

              </div>

              <div
                style={{
                  width: "100%",
                  height: "20px",
                  background: "#333",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >

                <div
                  style={{
                    width:
                      `${orders.length * 15}%`,

                    height: "100%",

                    background: "#0d6efd",
                  }}
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </>
  );
};

export default Dashboard;