
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

const Cars = () => {

  const [cars, setCars] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const user =
    JSON.parse(
      sessionStorage.getItem(
        "user"
      ) || "null"
    );

  const isAdmin =
    user?.role === "admin";

  /* PAGINATION */

  const [currentPage,
    setCurrentPage] =
    useState(1);

  const carsPerPage = 6;

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

  /* SEARCH */

  const filteredCars =
    cars.filter((car) =>

      car.name
        ?.toLowerCase()

        .includes(
          search.toLowerCase()
        )
    );

  /* PAGINATION LOGIC */

  const indexOfLastCar =
    currentPage *
    carsPerPage;

  const indexOfFirstCar =
    indexOfLastCar -
    carsPerPage;

  const currentCars =
    filteredCars.slice(

      indexOfFirstCar,

      indexOfLastCar
    );

  const totalPages =
    Math.ceil(

      filteredCars.length /
      carsPerPage
    );

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
            "text-center fw-bold mb-5"

            style={{
              fontSize: "70px",
            }}
          >
            Our

            <span
              style={{
                color: "#ff4d00",
              }}
            >
              {" "}Cars
            </span>

          </h1>

          {/* SEARCH */}

          <input
            type="text"

            placeholder=
            "Search cars..."

            className=
            "form-control mb-5"

            style={{
              padding: "18px",
              borderRadius: "15px",
            }}

            value={search}

            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
          />

          {/* CARS */}

          <div className="row">

            {
              currentCars.map((car) => (

                <div
                  className=
                  "col-md-4 mb-5"

                  key={car._id}
                >

                  <div
                    style={{
                      background: "#1a1a1a",
                      borderRadius: "20px",
                      overflow: "hidden",
                      height: "100%",
                    }}
                  >

                    {/* IMAGE */}

                    <img
                      src={car.image}

                      alt={car.name}

                      className=
                      "img-fluid"

                      style={{
                        width: "100%",
                        height: "250px",
                        objectFit: "cover",
                      }}
                    />

                    {/* CONTENT */}

                    <div className="p-4">

                      <h2>
                        {car.name}
                      </h2>

                      <h3
                        style={{
                          color: "#ff4d00",
                        }}
                      >
                        ${car.price}
                      </h3>

                      {/* VIEW DETAILS */}

                      <Link
                        to={`/car/${car._id}`}
                      >

                        <button
                          className=
                          "btn w-100 mt-3"

                          style={{
                            background: "#ff4d00",
                            color: "white",
                            padding: "12px",
                            borderRadius: "12px",
                          }}
                        >
                          View Details
                        </button>

                      </Link>

                    </div>

                  </div>

                </div>

              ))
            }

          </div>

          {/* PAGINATION */}

          <div
            className=
            "d-flex justify-content-center mt-5 gap-3"
          >

            <button

              className=
              "btn btn-light"

              disabled={
                currentPage === 1
              }

              onClick={() =>
                setCurrentPage(
                  currentPage - 1
                )
              }
            >
              Previous
            </button>

            <button
              className=
              "btn btn-warning"
            >
              {currentPage}
            </button>

            <button

              className=
              "btn btn-light"

              disabled={
                currentPage ===
                totalPages
              }

              onClick={() =>
                setCurrentPage(
                  currentPage + 1
                )
              }
            >
              Next
            </button>

          </div>

        </div>

        {/* <Footer /> */}
        <Footer />


      </div>
    </>
  );
};

export default Cars;