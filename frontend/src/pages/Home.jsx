
import {
  useState,
  useEffect
} from "react";

import {
  Link
} from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import API from "../services/api";

const Home = () => {

  const [cars, setCars] =
    useState([]);

  const [currentIndex,
    setCurrentIndex] =
    useState(0);

  const user =
    JSON.parse(
      sessionStorage.getItem(
        "user"
      ) || "null"
    );

  const isAdmin =
    user?.role === "admin";

  /* FETCH CARS */

  useEffect(() => {

    const fetchCars =
      async () => {

        try {

          const response =
            await API.get("/cars");

          setCars(
            response.data
          );

        } catch (error) {

          console.log(error);

        }
      };

    fetchCars();

  }, []);

  /* AUTO SLIDER */

  useEffect(() => {

    if (
      cars.length > 0
    ) {

      const interval =
        setInterval(() => {

          setCurrentIndex(
            (prevIndex) =>

              prevIndex ===
                cars.length - 1

                ? 0

                : prevIndex + 1
          );

        }, 3000);

      return () =>
        clearInterval(interval);
    }

  }, [cars]);

  return (
    <>
      <Navbar />

      <div
        style={{
          background: "#0f0f0f",
          minHeight: "100vh",
          color: "white",
        }}
      >

        {/* HERO SECTION */}

        <div className="container py-5">

          <div className="row align-items-center">

            {/* LEFT */}

            <div className="col-md-6">

              <h1
                style={{
                  fontSize: "80px",
                  fontWeight: "bold",
                  lineHeight: "100px",
                }}
              >
                Find Your

                <span
                  style={{
                    color: "#ff4d00",
                  }}
                >
                  {" "}Dream Car
                </span>

              </h1>

              <p
                style={{
                  color: "gray",
                  fontSize: "22px",
                  marginTop: "30px",
                }}
              >
                Luxury cars with
                premium quality and
                powerful performance.
              </p>

              <div className="d-flex gap-3 mt-5">

                <Link to="/cars">

                  <button
                    className="btn"
                    style={{
                      background: "#ff4d00",
                      color: "white",
                      padding: "15px 35px",
                      borderRadius: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    Explore Cars
                  </button>

                </Link>

                <Link to="/learn-more">

                  <button
                    className="btn"
                    style={{
                      background: "#ff4d00",
                      color: "white",
                      padding: "15px 35px",
                      borderRadius: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    Learn More
                  </button>

                </Link>

              </div>

            </div>

            {/* RIGHT */}

            <div className="col-md-6 text-center">

              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"

                alt="car"

                className="img-fluid"

                style={{
                  borderRadius: "30px",
                  boxShadow:
                    "0px 0px 40px rgba(255,77,0,0.4)",
                }}
              />

            </div>

          </div>

        </div>

        {/* FEATURED CARS */}

        <div
          className="container"
          style={{
            marginTop: "120px",
          }}
        >

          <h1
            className=
            "text-center fw-bold mb-5"

            style={{
              fontSize: "70px",
            }}
          >
            Featured

            <span
              style={{
                color: "#ff4d00",
              }}
            >
              {" "}Cars
            </span>

          </h1>

          {
            cars.length > 0 && (

              <div
                style={{
                  maxWidth: "700px",
                  margin: "auto",
                  background: "#1a1a1a",
                  borderRadius: "25px",
                  overflow: "hidden",
                }}
              >

                <img
                  src={
                    cars[currentIndex]
                      ?.image
                  }

                  alt={
                    cars[currentIndex]
                      ?.name
                  }

                  className="img-fluid"

                  style={{
                    width: "100%",
                    height: "500px",
                    objectFit: "cover",
                  }}
                />

                <div className="p-4 text-center">

                  <h1>
                    {
                      cars[currentIndex]
                        ?.name
                    }
                  </h1>

                  <p
                    style={{
                      color: "gray",
                    }}
                  >
                    {
                      cars[currentIndex]
                        ?.description
                    }
                  </p>

                </div>

              </div>

            )
          }

        </div>

        {/* WHY CHOOSE US */}

        <div
          className="container"
          style={{
            marginTop: "120px",
            marginBottom: "100px",
          }}
        >

          <h1
            className=
            "text-center fw-bold mb-5"
            style={{
              fontSize: "60px",
              color: "white",
            }}
          >
            Why Choose

            <span
              style={{
                color: "#ff4d00",
              }}
            >
              {" "}Us
            </span>

          </h1>

          <div className="row">

            {/* CARD 1 */}

            <div className="col-md-4 mb-4">

              <div
                style={{
                  background: "#1a1a1a",
                  padding: "40px",
                  borderRadius: "20px",
                  textAlign: "center",
                  height: "100%",
                  boxShadow:
                    "0px 0px 20px rgba(255,77,0,0.2)",
                }}
              >

                <h1
                  style={{
                    fontSize: "60px",
                  }}
                >
                  🚗
                </h1>

                <h2
                  style={{
                    color: "white",
                  }}
                >
                  Premium Cars
                </h2>

                <p
                  style={{
                    color: "gray",
                    marginTop: "15px",
                  }}
                >
                  Luxury cars with
                  premium quality
                  and performance.
                </p>

              </div>

            </div>

            {/* CARD 2 */}

            <div className="col-md-4 mb-4">

              <div
                style={{
                  background: "#1a1a1a",
                  padding: "40px",
                  borderRadius: "20px",
                  textAlign: "center",
                  height: "100%",
                  boxShadow:
                    "0px 0px 20px rgba(255,77,0,0.2)",
                }}
              >

                <h1
                  style={{
                    fontSize: "60px",
                  }}
                >
                  🔥
                </h1>

                <h2
                  style={{
                    color: "white",
                  }}
                >
                  Best Prices
                </h2>

                <p
                  style={{
                    color: "gray",
                    marginTop: "15px",
                  }}
                >
                  Affordable prices
                  with luxury
                  experience.
                </p>

              </div>

            </div>

            {/* CARD 3 */}

            <div className="col-md-4 mb-4">

              <div
                style={{
                  background: "#1a1a1a",
                  padding: "40px",
                  borderRadius: "20px",
                  textAlign: "center",
                  height: "100%",
                  boxShadow:
                    "0px 0px 20px rgba(255,77,0,0.2)",
                }}
              >

                <h1
                  style={{
                    fontSize: "60px",
                  }}
                >
                  ⭐
                </h1>

                <h2
                  style={{
                    color: "white",
                  }}
                >
                  Trusted Service
                </h2>

                <p
                  style={{
                    color: "gray",
                    marginTop: "15px",
                  }}
                >
                  Thousands of happy
                  customers trust us.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* <Footer /> */}
        <Footer />

      </div>

    </>
  );
};

export default Home;  