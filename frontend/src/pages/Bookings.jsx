import {
  useState,
  useEffect,
} from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import API from "../services/api";

const Bookings = () => {

  const [bookings, setBookings] =
    useState([]);

  const [editingId, setEditingId] =
    useState("");

  const [editName, setEditName] =
    useState("");

  const [editCar, setEditCar] =
    useState("");

  /* FETCH BOOKINGS */

  useEffect(() => {

    fetchBookings();

  }, []);

  const fetchBookings =
    async () => {

      try {

        const response =
          await API.get(
            "/bookings"
          );

        setBookings(
          response.data
        );

      } catch (error) {

        console.log(error);

      }
    };

  /* DELETE */

  const deleteBooking =
    async (id) => {

      try {

        await API.delete(
          `/bookings/${id}`
        );

        fetchBookings();

      } catch (error) {

        console.log(error);

      }
    };

  /* UPDATE */

  const updateBooking =
    async (id) => {

      try {

        await API.put(
          `/bookings/${id}`,

          {

            name: editName,

            carName: editCar,

          }
        );

        setEditingId("");

        fetchBookings();

      } catch (error) {

        console.log(error);

      }
    };

  return (
    <>
      <Navbar />

      <div
        style={{
          background: "#0f0f0f",
          minHeight: "100vh",
          color: "white",
          padding: "80px 0",
        }}
      >

        <div className="container">

          <h1
            className=
            "text-center fw-bold mb-5"

            style={{
              color: "#ff4d00",
              fontSize: "60px",
            }}
          >
            My Bookings
          </h1>

          <div className="row">

            {
              bookings.map(
                (booking) => (

                  <div
                    className=
                    "col-lg-4 col-md-6 mb-4"

                    key={
                      booking._id
                    }
                  >

                    <div
                      className=
                      "p-4"

                      style={{
                        background:
                          "#1a1a1a",

                        borderRadius:
                          "20px",

                        boxShadow:
                          "0 0 20px rgba(255,77,0,0.2)",
                      }}
                    >

                      {
                        editingId ===
                          String(
                            booking._id
                          ) ? (

                          <>
                            {/* EDIT */}

                            <input
                              type="text"

                              className=
                              "form-control mb-3"

                              value={
                                editCar
                              }

                              onChange={(e) =>
                                setEditCar(
                                  e.target
                                    .value
                                )
                              }
                            />

                            <input
                              type="text"

                              className=
                              "form-control mb-3"

                              value={
                                editName
                              }

                              onChange={(e) =>
                                setEditName(
                                  e.target
                                    .value
                                )
                              }
                            />

                            <button
                              className=
                              "btn btn-success w-100"

                              onClick={() =>
                                updateBooking(
                                  booking._id
                                )
                              }
                            >
                              Save
                            </button>
                          </>

                        ) : (

                          <>
                        

                            {/* CAR NAME */}

                            <h2
                              className=
                              "fw-bold mb-3"
                            >
                              🚗 {
                                booking.carName
                              }
                            </h2>

                            {/* NAME */}

                            <p>
                              Name:
                              {" "}
                              {
                                booking.name
                              }
                            </p>

                            {/* EMAIL */}

                            <p>
                              Email:
                              {" "}
                              {
                                booking.email
                              }
                            </p>

                            {/* PHONE */}

                            <p>
                              Phone:
                              {" "}
                              {
                                booking.phone
                              }
                            </p>

                            {/* PRICE */}

                            <h4
                              className=
                              "mt-4 mb-4"

                              style={{
                                color:
                                  "#ff4d00",
                              }}
                            >

                              $

                              {
                                Number(
                                  booking.price
                                ).toLocaleString()
                              }

                            </h4>

                            {/* UPDATE */}

                            <button
                              className=
                              "btn btn-warning w-100 mb-3"

                              onClick={() => {

                                setEditingId(
                                  String(
                                    booking._id
                                  )
                                );

                                setEditName(
                                  booking.name
                                );

                                setEditCar(
                                  booking.carName
                                );
                              }}
                            >
                              Update
                            </button>

                            {/* DELETE */}

                            <button
                              className=
                              "btn btn-danger w-100"

                              onClick={() =>
                                deleteBooking(
                                  booking._id
                                )
                              }
                            >
                              Delete
                            </button>
                          </>
                        )
                      }

                    </div>

                  </div>
                )
              )
            }

          </div>

        </div>

        <Footer />

      </div>
    </>
  );
};

export default Bookings;