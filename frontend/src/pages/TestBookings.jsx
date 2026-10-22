import { useState } from "react";

import Navbar
  from "../components/Navbar";

// import cars
// from "../data/carsData";

const TestBookings = () => {

  const [bookings,
    setBookings] =
    useState(

      JSON.parse(
        localStorage.getItem(
          "testBookings"
        )
      ) || []
    );

  const [editingId,
    setEditingId] =
    useState(null);

  const [editName,
    setEditName] =
    useState("");

  const [editCar,
    setEditCar] =
    useState("");

  /* DELETE */

  const deleteBooking =
    (index) => {

      const updatedBookings =
        bookings.filter(
          (_, i) =>
            i !== index
        );

      setBookings(
        updatedBookings
      );

      localStorage.setItem(
        "testBookings",

        JSON.stringify(
          updatedBookings
        )
      );
    };

  /* UPDATE */

  const updateBooking =
    (index) => {

      const updatedBookings =
        [...bookings];

      updatedBookings[index]
        .name = editName;

      updatedBookings[index]
        .car = editCar;

      setBookings(
        updatedBookings
      );

      localStorage.setItem(
        "testBookings",

        JSON.stringify(
          updatedBookings
        )
      );

      setEditingId(
        null
      );
    };

  return (
    <>
      <Navbar />

      <div
        style={{
          background:
            "#0f0f0f",

          minHeight:
            "100vh",

          color:
            "white",

          padding:
            "80px 0",
        }}
      >

        <div className="container">


          {/* TITLE */}

          <h1
            className=
            "text-center fw-bold mb-5"

            style={{
              color:
                "#ff4d00",

              fontSize:
                "60px",
            }}
          >
            Test Drive Bookings
          </h1>

          {/* BOOKINGS */}

          <div
            className=
            "row justify-content-center"
          >

            {bookings.map(
              (
                booking,
                index
              ) => (

                <div
                  className=
                  "col-lg-4 col-md-6 mb-4 d-flex"

                  key={index}
y

                >

                  <div
                    className=
                    "p-4 w-100"

                    style={{
                      background:
                        "#1a1a1a",

                      borderRadius:
                        "20px",

                      minHeight:
                        "350px",

                      boxShadow:
                        "0 0 20px rgba(255,77,0,0.2)",
                    }}
                  >

                    {/* UPDATE */}

                    {editingId ===
                      index ? (

                      <>

                        {/* CAR DROPDOWN */}

                        <select
                          className=
                          "form-control mb-3"

                          value={editCar}

                          onChange={(e) =>
                            setEditCar(
                              e.target.value
                            )
                          }
                        >

                          {cars.map((car) => (

                            <option
                              key={car.id}

                              value={car.name}
                            >
                              {car.name}
                            </option>

                          ))}

                        </select>

                        {/* NAME */}

                        <input
                          type="text"

                          className=
                          "form-control mb-3"

                          value={
                            editName
                          }

                          onChange={(
                            e
                          ) =>
                            setEditName(
                              e.target
                                .value
                            )
                          }
                        />

                        {/* SAVE */}

                        <button
                          className=
                          "btn btn-success w-100"

                          onClick={() =>
                            updateBooking(
                              index
                            )
                          }
                        >
                          Save
                        </button>

                      </>

                    ) : (

                      <>

                        {/* NAME */}

                        <h2
                          className=
                          "fw-bold mb-3"
                        >
                          {
                            booking.name
                          }
                        </h2>

                        {/* CAR */}

                        <h4
                          style={{
                            color:
                              "#ff4d00",
                          }}
                        >
                          🚗 {booking.car}
                        </h4>

                        {/* EMAIL */}

                        <p
                          className=
                          "text-secondary"
                        >
                          {
                            booking.email
                          }
                        </p>

                        {/* PHONE */}

                        <p>
                          {
                            booking.phone
                          }
                        </p>

                        {/* DATE */}

                        <p
                          className=
                          "mb-4"
                        >
                          Test Date:
                          {" "}
                          {
                            booking.date
                          }
                        </p>

                        {/* UPDATE */}

                        <button
                          className=
                          "btn btn-warning w-100 mb-3"

                          onClick={() => {

                            setEditingId(
                              index
                            );

                            setEditName(
                              booking.name
                            );

                            setEditCar(
                              booking.car
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
                              index
                            )
                          }
                        >
                          Delete
                        </button>

                      </>

                    )}

                  </div>

                </div>
              )
            )}

          </div>

        </div>

      </div>
    </>
  );
};

export default TestBookings;