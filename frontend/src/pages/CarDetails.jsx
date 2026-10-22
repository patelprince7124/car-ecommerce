import {
  useEffect,
  useState
} from "react";

import {
  useParams,
  useNavigate,
  Link
} from "react-router-dom";

import Navbar
from "../components/Navbar";

import Invoice
from "../components/Invoice";

import API
from "../services/api";

const CarDetails = () => {

  const { id } =
    useParams();

  const navigate =
    useNavigate();

  const [car, setCar] =
    useState(null);

  const [showBooking,
    setShowBooking] =
    useState(false);

  const [showPayment,
    setShowPayment] =
    useState(false);

  const [showInvoice,
    setShowInvoice] =
    useState(false);

  const [name,
    setName] =
    useState("");

  const [email,
    setEmail] =
    useState("");

  const [phone,
    setPhone] =
    useState("");

  const [cardNumber,
    setCardNumber] =
    useState("");

  const [expiry,
    setExpiry] =
    useState("");

  const [cvv,
    setCvv] =
    useState("");

  const [cardName,
    setCardName] =
    useState("");

  const user =
    JSON.parse(
      sessionStorage.getItem(
        "user"
      ) || "null"
    );

  const isAdmin =
    user?.role === "admin";

  /* FETCH CAR */

  useEffect(() => {

    const fetchCar =
      async () => {

        try {

          const response =
            await API.get(
              `/cars/${id}`
            );

          setCar(
            response.data
          );

        } catch (error) {

          console.log(error);

        }
      };

    fetchCar();

  }, [id]);

  /* BOOKING */

  const handleBooking =
    async (e) => {

      e.preventDefault();

      /* VALIDATION */

      if (
        !name ||
        !email ||
        !phone
      ) {

        return alert(
          "All fields are required"
        );
      }

      /* EMAIL */

      const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (
        !emailRegex.test(email)
      ) {

        return alert(
          "Invalid Email"
        );
      }

      /* PHONE */

      if (
        phone.length !== 10
      ) {

        return alert(
          "Phone number must be 10 digits"
        );
      }

      try {

        const bookingData = {

          id: Date.now(),

          name,
          email,
          phone,

          carName:
            car.name,

          carImage:
            car.image,

          price:
            Number(car.price),
        };

        await API.post(

          "/bookings",

          bookingData

        );

        alert(
          "Booking Successful ✅"
        );

        setShowBooking(
          false
        );

      } catch (error) {

        console.log(error);

      }
    };

  /* PAYMENT */

  const handlePayment =
    async (e) => {

      e.preventDefault();

      /* VALIDATION */

      if (
        !cardNumber ||
        !expiry ||
        !cvv ||
        !cardName
      ) {

        return alert(
          "All fields are required"
        );
      }

      /* CARD */

      if (
        cardNumber.length !== 16
      ) {

        return alert(
          "Card Number must be 16 digits"
        );
      }

      /* CVV */

      if (
        cvv.length !== 3
      ) {

        return alert(
          "CVV must be 3 digits"
        );
      }

      try {

        await API.post(
          "/orders",

          {

            userName:
              user?.name ||
              cardName,

            email:
              user?.email ||
              email,

            carName:
              car.name,

            price:
              car.price,

          }
        );

        alert(
          "Payment Successful ✅"
        );

        setShowPayment(
          false
        );

        setShowInvoice(
          true
        );

      } catch (error) {

        console.log(error);

      }
    };

  /* DELETE */

  const handleDelete =
    async () => {

      try {

        await API.delete(

          `/cars/${car._id}`,

          {
            headers: {

              Authorization:
                `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );

        alert("Car Deleted");

        navigate("/cars");

      } catch (error) {

        console.log(error);

      }
    };

  if (!car) {

    return (
      <h1
        className=
        "text-center text-white mt-5"
      >
        Loading...
      </h1>
    );
  }

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

          <div className="row align-items-center">

            {/* IMAGE */}

            <div className="col-md-6">

              <img
                src={car.image}

                alt={car.name}

                className=
                "img-fluid"

                style={{
                  borderRadius: "25px",
                  width: "100%",
                }}
              />

            </div>

            {/* CONTENT */}

            <div className="col-md-6">

              <h1
                className=
                "fw-bold"

                style={{
                  fontSize: "70px",
                }}
              >
                {car.name || car.title || "Car Details"}
              </h1>

              <h2
                style={{
                  color: "#ff4d00",
                  marginTop: "20px",
                }}
              >
                ${car.price}
              </h2>

              <div className="row mt-4 text-white">
                <div className="col-md-6 mb-3">
                  <p><strong>Brand:</strong> {car.brand}</p>
                  <p><strong>Year:</strong> {car.year}</p>
                  <p><strong>Transmission:</strong> {car.transmission}</p>
                  <p><strong>Fuel Type:</strong> {car.fuelType}</p>
                </div>
                <div className="col-md-6 mb-3">
                  <p><strong>Seats:</strong> {car.seats || "N/A"}</p>
                  <p><strong>Mileage:</strong> {car.mileage ?? "N/A"}</p>
                  <p><strong>Color:</strong> {car.color || "N/A"}</p>
                  <p><strong>Top Speed:</strong> {car.topSpeed ? `${car.topSpeed} km/h` : "N/A"}</p>
                </div>
                <div className="col-md-6 mb-3">
                  <p><strong>Drive Type:</strong> {car.driveType || "N/A"}</p>
                  <p><strong>Engine:</strong> {car.engine || "N/A"}</p>
                </div>
                {car.vin && (
                  <div className="col-md-6 mb-3">
                    <p><strong>VIN:</strong> {car.vin}</p>
                  </div>
                )}
              </div>

              {/* BUTTONS */}

              <div className="mt-5 d-flex gap-3">

                {/* BOOK */}

                <button
                  onClick={() =>
                    setShowBooking(
                      true
                    )
                  }

                  className="btn"

                  style={{
                    background: "#ff4d00",
                    color: "white",
                    padding: "15px 40px",
                    borderRadius: "12px",
                  }}
                >
                  Book Now
                </button>

                {/* BUY */}

                <button
                  className=
                  "btn btn-light"

                  onClick={() =>
                    setShowPayment(
                      true
                    )
                  }

                  style={{
                    padding: "15px 40px",
                    borderRadius: "12px",
                    fontWeight: "bold",
                  }}
                >
                  Buy Now
                </button>

                {/* ADMIN */}

                {
                  isAdmin && (

                    <>
                      <Link
                        to={`/edit-car/${car._id}`}
                      >

                        <button
                          className="btn"

                          style={{
                            background: "orange",
                            color: "white",
                            padding: "15px 30px",
                            borderRadius: "12px",
                          }}
                        >
                          Edit Car
                        </button>

                      </Link>

                      <button
                        onClick={
                          handleDelete
                        }

                        className="btn"

                        style={{
                          background: "red",
                          color: "white",
                          padding: "15px 30px",
                          borderRadius: "12px",
                        }}
                      >
                        Delete Car
                      </button>

                    </>
                  )
                }

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* BOOKING FORM */}

      {
        showBooking && (

          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 999,
            }}
          >

            <form
              onSubmit={
                handleBooking
              }

              style={{
                background: "#1a1a1a",
                padding: "40px",
                borderRadius: "20px",
                width: "400px",
              }}
            >

              <h2
                className=
                "text-white mb-4"
              >
                Booking Form
              </h2>

              <input
                type="text"
                placeholder="Name"
                className=
                "form-control mb-3"
                value={name}
                onChange={(e) =>
                  setName(
                    e.target.value
                  )
                }
              />

              <input
                type="email"
                placeholder="Email"
                className=
                "form-control mb-3"
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
              />

              <input
                type="text"
                placeholder="Phone"
                className=
                "form-control mb-3"
                value={phone}
                onChange={(e) =>
                  setPhone(
                    e.target.value
                  )
                }
              />

              <button
                type="submit"
                className=
                "btn w-100"
                style={{
                  background: "#ff4d00",
                  color: "white",
                }}
              >
                Submit Booking
              </button>

            </form>

          </div>
        )
      }

      {/* PAYMENT FORM */}

      {
        showPayment && (

          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 999,
            }}
          >

            <form
              onSubmit={
                handlePayment
              }

              style={{
                background: "#1a1a1a",
                padding: "40px",
                borderRadius: "20px",
                width: "400px",
              }}
            >

              <h2
                className=
                "text-white mb-4"
              >
                Payment Form
              </h2>

              <input
                type="text"
                placeholder="Card Number"
                className=
                "form-control mb-3"
                value={cardNumber}
                onChange={(e) =>
                  setCardNumber(
                    e.target.value
                  )
                }
              />

              <input
                type="text"
                placeholder="Expiry"
                className=
                "form-control mb-3"
                value={expiry}
                onChange={(e) =>
                  setExpiry(
                    e.target.value
                  )
                }
              />

              <input
                type="text"
                placeholder="CVV"
                className=
                "form-control mb-3"
                value={cvv}
                onChange={(e) =>
                  setCvv(
                    e.target.value
                  )
                }
              />

              <input
                type="text"
                placeholder="Card Holder"
                className=
                "form-control mb-3"
                value={cardName}
                onChange={(e) =>
                  setCardName(
                    e.target.value
                  )
                }
              />

              <button
                type="submit"
                className=
                "btn w-100"
                style={{
                  background: "#ff4d00",
                  color: "white",
                }}
              >
                Pay Now
              </button>

            </form>

          </div>
        )
      }

      {/* INVOICE */}

      {
        showInvoice && (

          <Invoice

            car={car}

            name={
              user?.name ||
              cardName
            }

            email={
              user?.email ||
              email
            }

            setShowInvoice={
              setShowInvoice
            }

          />

        )
      }

    </>
  );
};

export default CarDetails;