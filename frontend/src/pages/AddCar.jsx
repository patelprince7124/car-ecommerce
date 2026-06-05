import { useState } from "react";

import Navbar from "../components/Navbar";

import API from "../services/api";

const AddCar = () => {

  const [title,
    setTitle] =
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

  const [description,
    setDescription] =
    useState("");

  const [success,
    setSuccess] =
    useState("");

  const handleAddCar =
  async (e) => {

    e.preventDefault();

    /* VALIDATION */

    if (
      !title ||
      !brand ||
      !price ||
      !image ||
      !fuelType ||
      !transmission ||
      !year ||
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

      const token =
      localStorage.getItem(
        "token"
      );

      const carData = {

        title,

        brand,

        price,

        image,

        fuelType,

        transmission,

        year,

        description,
      };

      await API.post(

        "/cars",

        carData,

        {
          headers: {

            Authorization:
            `Bearer ${token}`,
          },
        }
      );

      setSuccess(
        "Car Added Successfully 🚀"
      );

      /* CLEAR FORM */

      setTitle("");

      setBrand("");

      setPrice("");

      setImage("");

      setFuelType("");

      setTransmission("");

      setYear("");

      setDescription("");

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          background:"#0f0f0f",

          minHeight:"100vh",

          color:"white",

          padding:"60px 0",
        }}
      >

        <div className="container">

          <div className="row justify-content-center">

            <div className="col-md-7">

              <div
                style={{
                  background:"#1a1a1a",

                  padding:"40px",

                  borderRadius:"20px",
                }}
              >

                <h1
                  className=
                  "text-center mb-5"
                >

                  Add New

                  <span
                    style={{
                      color:"#ff4d00",
                    }}
                  >
                    {" "}Car
                  </span>

                </h1>

                {success && (

                  <div
                    className=
                    "alert alert-success"
                  >
                    {success}
                  </div>

                )}

                <form
                  onSubmit={
                    handleAddCar
                  }
                >

                  <input
                    type="text"

                    placeholder=
                    "Car Name"

                    className=
                    "form-control mb-4"

                    value={title}

                    onChange={(e)=>
                      setTitle(
                        e.target.value
                      )
                    }
                  />

                  <input
                    type="text"

                    placeholder=
                    "Brand"

                    className=
                    "form-control mb-4"

                    value={brand}

                    onChange={(e)=>
                      setBrand(
                        e.target.value
                      )
                    }
                  />

                  <input
                    type="number"

                    placeholder=
                    "Price"

                    className=
                    "form-control mb-4"

                    value={price}

                    onChange={(e)=>
                      setPrice(
                        e.target.value
                      )
                    }
                  />

                  <input
                    type="text"

                    placeholder=
                    "Fuel Type"

                    className=
                    "form-control mb-4"

                    value={fuelType}

                    onChange={(e)=>
                      setFuelType(
                        e.target.value
                      )
                    }
                  />

                  <input
                    type="text"

                    placeholder=
                    "Transmission"

                    className=
                    "form-control mb-4"

                    value={transmission}

                    onChange={(e)=>
                      setTransmission(
                        e.target.value
                      )
                    }
                  />

                  <input
                    type="number"

                    placeholder=
                    "Year"

                    className=
                    "form-control mb-4"

                    value={year}

                    onChange={(e)=>
                      setYear(
                        e.target.value
                      )
                    }
                  />

                  <input
                    type="text"

                    placeholder=
                    "Image URL"

                    className=
                    "form-control mb-4"

                    value={image}

                    onChange={(e)=>
                      setImage(
                        e.target.value
                      )
                    }
                  />

                  <textarea
                    placeholder=
                    "Description"

                    className=
                    "form-control mb-4"

                    rows="4"

                    value={description}

                    onChange={(e)=>
                      setDescription(
                        e.target.value
                      )
                    }
                  ></textarea>

                  <button
                    className=
                    "btn w-100"

                    style={{
                      background:"#ff4d00",

                      color:"white",

                      padding:"12px",

                      fontWeight:"bold",
                    }}
                  >
                    Add Car
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

export default AddCar;