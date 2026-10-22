import {
  useState,
  useEffect
} from "react";

import {
  useNavigate,
  useParams
} from "react-router-dom";

import Navbar
from "../components/Navbar";

import API
from "../services/api";

const EditCar = () => {

  const { id } =
    useParams();

  const navigate =
    useNavigate();

  /* STATES */

  const [name,
    setName] =
    useState("");

  const [brand,
    setBrand] =
    useState("");

  const [price,
    setPrice] =
    useState("");

  const [image,
    setImage] =
    useState("");

  const [fuelType,
    setFuelType] =
    useState("");

  const [transmission,
    setTransmission] =
    useState("");

  const [year,
    setYear] =
    useState("");

  const [seats,
    setSeats] =
    useState("");

  const [mileage,
    setMileage] =
    useState("");

  const [color,
    setColor] =
    useState("");

  const [topSpeed,
    setTopSpeed] =
    useState("");

  const [driveType,
    setDriveType] =
    useState("");

  const [engine,
    setEngine] =
    useState("");

  const [vin,
    setVin] =
    useState("");

  const [description,
    setDescription] =
    useState("");

  /* FETCH CAR */

  useEffect(() => {

    const fetchCar =
      async () => {

        try {

          const response =
            await API.get(
              `/cars/${id}`
            );

          const car =
            response.data;

          setName(
            car.name || ""
          );

          setBrand(
            car.brand || ""
          );

          setPrice(
            car.price || ""
          );

          setImage(
            car.image || ""
          );

          setFuelType(
            car.fuelType || ""
          );

          setTransmission(
            car.transmission || ""
          );

          setYear(
            car.year || ""
          );

          setSeats(
            car.seats || ""
          );

          setMileage(
            car.mileage || ""
          );

          setColor(
            car.color || ""
          );

          setTopSpeed(
            car.topSpeed || ""
          );

          setDriveType(
            car.driveType || ""
          );

          setEngine(
            car.engine || ""
          );

          setVin(
            car.vin || ""
          );

          setDescription(
            car.description || ""
          );

        } catch (error) {

          console.log(error);

        }
      };

    fetchCar();

  }, [id]);

  /* UPDATE CAR */

  const handleUpdate =
    async (e) => {

      e.preventDefault();

      /* VALIDATION */

      if (
        !name ||
        !brand ||
        !price ||
        !image ||
        !fuelType ||
        !transmission ||
        !year ||
        !seats ||
        !mileage ||
        !color ||
        !topSpeed ||
        !driveType ||
        !engine ||
        !description
      ) {

        return alert(
          "All fields are required"
        );
      }

      /* PRICE */

      if (
        Number(price) <= 0
      ) {

        return alert(
          "Price must be greater than 0"
        );
      }

      /* YEAR */

      if (
        year.length !== 4
      ) {

        return alert(
          "Enter valid year"
        );
      }

      try {

        const updatedCar = {

          name,
          brand,
          price: Number(price),
          image,
          fuelType,
          transmission,
          year: Number(year),
          seats: Number(seats),
          mileage: Number(mileage),
          color,
          topSpeed: Number(topSpeed),
          driveType,
          engine,
          vin,
          description,

        };

        await API.put(

          `/cars/${id}`,

          updatedCar,

          {
            headers: {
              Authorization:
                `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );

        alert(
          "Car Updated Successfully"
        );

        navigate("/cars");

      } catch (error) {

        console.log(error);

        alert(
          "Update Failed"
        );
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
          padding: "60px 0",
        }}
      >

        <div className="container">

          <div className="row justify-content-center">

            <div className="col-md-6">

              <div
                style={{
                  background: "#1a1a1a",
                  padding: "40px",
                  borderRadius: "20px",
                }}
              >

                <h1
                  className=
                  "text-center mb-5"
                >
                  Edit Car
                </h1>

                <form
                  onSubmit={
                    handleUpdate
                  }
                >

                  {/* NAME */}

                  <input
                    type="text"

                    placeholder=
                    "Car Name"

                    className=
                    "form-control mb-4"

                    value={name}

                    onChange={(e) =>
                      setName(
                        e.target.value
                      )
                    }
                  />

                  {/* BRAND */}

                  <input
                    type="text"

                    placeholder=
                    "Brand"

                    className=
                    "form-control mb-4"

                    value={brand}

                    onChange={(e) =>
                      setBrand(
                        e.target.value
                      )
                    }
                  />

                  {/* PRICE */}

                  <input
                    type="number"

                    placeholder=
                    "Price"

                    className=
                    "form-control mb-4"

                    value={price}

                    onChange={(e) =>
                      setPrice(
                        e.target.value
                      )
                    }
                  />

                  {/* IMAGE */}

                  <input
                    type="text"

                    placeholder=
                    "Image URL"

                    className=
                    "form-control mb-4"

                    value={image}

                    onChange={(e) =>
                      setImage(
                        e.target.value
                      )
                    }
                  />

                  {/* FUEL */}

                  <input
                    type="text"

                    placeholder=
                    "Fuel Type"

                    className=
                    "form-control mb-4"

                    value={fuelType}

                    onChange={(e) =>
                      setFuelType(
                        e.target.value
                      )
                    }
                  />

                  <input
                    type="number"

                    placeholder=
                    "Seats"

                    className=
                    "form-control mb-4"

                    value={seats}

                    onChange={(e) =>
                      setSeats(
                        e.target.value
                      )
                    }
                  />

                  <input
                    type="number"

                    placeholder=
                    "Mileage"

                    className=
                    "form-control mb-4"

                    value={mileage}

                    onChange={(e) =>
                      setMileage(
                        e.target.value
                      )
                    }
                  />

                  <input
                    type="text"

                    placeholder=
                    "Color"

                    className=
                    "form-control mb-4"

                    value={color}

                    onChange={(e) =>
                      setColor(
                        e.target.value
                      )
                    }
                  />

                  <input
                    type="number"

                    placeholder=
                    "Top Speed"

                    className=
                    "form-control mb-4"

                    value={topSpeed}

                    onChange={(e) =>
                      setTopSpeed(
                        e.target.value
                      )
                    }
                  />

                  <input
                    type="text"

                    placeholder=
                    "Drive Type"

                    className=
                    "form-control mb-4"

                    value={driveType}

                    onChange={(e) =>
                      setDriveType(
                        e.target.value
                      )
                    }
                  />

                  <input
                    type="text"

                    placeholder=
                    "Engine"

                    className=
                    "form-control mb-4"

                    value={engine}

                    onChange={(e) =>
                      setEngine(
                        e.target.value
                      )
                    }
                  />

                  <input
                    type="text"

                    placeholder=
                    "VIN (Optional)"

                    className=
                    "form-control mb-4"

                    value={vin}

                    onChange={(e) =>
                      setVin(
                        e.target.value
                      )
                    }
                  />

                  {/* TRANSMISSION */}

                  <input
                    type="text"

                    placeholder=
                    "Transmission"

                    className=
                    "form-control mb-4"

                    value={transmission}

                    onChange={(e) =>
                      setTransmission(
                        e.target.value
                      )
                    }
                  />

                  {/* YEAR */}

                  <input
                    type="number"

                    placeholder=
                    "Year"

                    className=
                    "form-control mb-4"

                    value={year}

                    onChange={(e) =>
                      setYear(
                        e.target.value
                      )
                    }
                  />

                  {/* DESCRIPTION */}

                  <textarea
                    rows="4"

                    placeholder=
                    "Description"

                    className=
                    "form-control mb-4"

                    value={description}

                    onChange={(e) =>
                      setDescription(
                        e.target.value
                      )
                    }
                  ></textarea>

                  {/* BUTTON */}

                  <button
                    type="submit"

                    className=
                    "btn w-100"

                    style={{
                      background: "#ff4d00",
                      color: "white",
                      padding: "12px",
                    }}
                  >
                    Save Changes
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default EditCar;