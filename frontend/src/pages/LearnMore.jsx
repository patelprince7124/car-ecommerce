import Navbar from "../components/Navbar";

import * as bootstrap from "bootstrap";

import {
  useState,
  useEffect
} from "react";

import API from "../services/api";

const LearnMore = () => {

    /* CARS */

    const [cars, setCars] =
        useState([]);

    /* FORM */

    const [name, setName] =
        useState("");

    const [email, setEmail] =
        useState("");

    const [phone, setPhone] =
        useState("");

    const [date, setDate] =
        useState("");

    const [selectedCar,
        setSelectedCar] =
        useState("");

    /* FETCH CARS */

    useEffect(() => {

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

        fetchCars();

    }, []);

    /* TEST DRIVE */

    const handleTestDrive = () => {

        if (
            !name ||
            !email ||
            !phone ||
            !date ||
            !selectedCar
        ) {

            alert(
                "Please Fill All Fields"
            );

            return;
        }

        const newBooking = {

            name,
            email,
            phone,
            date,

            car:
                selectedCar,
        };

        const oldBookings =
            JSON.parse(
                localStorage.getItem(
                    "testBookings"
                )
            ) || [];

        oldBookings.push(
            newBooking
        );

        localStorage.setItem(
            "testBookings",

            JSON.stringify(
                oldBookings
            )
        );

        alert(
            "Test Drive Booked Successfully"
        );

        setName("");

        setEmail("");

        setPhone("");

        setDate("");

        setSelectedCar("");

        const modal =
            document.getElementById(
                "testDriveModal"
            );

        const modalInstance =
            bootstrap.Modal.getInstance(
                modal
            );

        modalInstance.hide();
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

                    {/* TITLE */}

                    <h1
                        className="fw-bold text-center mb-5"
                        style={{
                            fontSize: "60px",
                        }}
                    >
                        Premium
                        <span style={{ color: "#ff4d00" }}>
                            {" "}Features
                        </span>
                    </h1>

                    {/* AVAILABILITY */}

                    <div
                        className="p-4 mb-5"
                        style={{
                            background: "#1a1a1a",
                            borderRadius: "20px",
                        }}
                    >

                        <h3>
                            Availability Status
                        </h3>

                        <h4
                            className="mt-3"
                            style={{
                                color: "lightgreen",
                            }}
                        >
                            ✅ Cars Available In Stock
                        </h4>

                    </div>

                    {/* EMI */}

                    <div
                        className="p-4 mb-5"
                        style={{
                            background: "#1a1a1a",
                            borderRadius: "20px",
                        }}
                    >

                        <h3>
                            EMI Calculator
                        </h3>

                        <p className="mt-3">
                            Down Payment:
                            $20,000
                        </p>

                        <p>
                            Loan Period:
                            60 Months
                        </p>

                        <h4
                            style={{
                                color: "#ff4d00",
                            }}
                        >
                            EMI:
                            $1200 / month
                        </h4>

                    </div>

                    {/* FEATURED CARS */}

                    <div
                        className="container py-5"
                    >

                        <h2
                            className=
                            "text-center fw-bold mb-5"

                            style={{
                                fontSize: "50px",
                                color: "white",
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

                        </h2>

                        <div
                            id="carSlider"

                            className=
                            "carousel slide"

                            data-bs-ride=
                            "carousel"
                        >

                            <div className="carousel-inner">

                                {
                                    cars.map(
                                        (
                                            car,
                                            index
                                        ) => (

                                            <div
                                                key={car._id}

                                                className={`carousel-item ${
                                                    index === 0
                                                        ? "active"
                                                        : ""
                                                }`}
                                            >

                                                <div
                                                    className=
                                                    "row justify-content-center"
                                                >

                                                    <div className="col-md-8">

                                                        <div
                                                            style={{
                                                                background: "#1a1a1a",
                                                                borderRadius: "25px",
                                                                overflow: "hidden",
                                                            }}
                                                        >

                                                            <img
                                                                src={car.image}

                                                                alt={car.name}

                                                                className=
                                                                "img-fluid"

                                                                style={{
                                                                    width: "100%",
                                                                    height: "500px",
                                                                    objectFit: "cover",
                                                                }}
                                                            />

                                                            <div
                                                                className=
                                                                "p-4 text-center"
                                                            >

                                                                <h1
                                                                    className=
                                                                    "fw-bold text-white"
                                                                >
                                                                    {car.name}
                                                                </h1>

                                                                <p
                                                                    className=
                                                                    "text-secondary mt-3"
                                                                >
                                                                    {car.description}
                                                                </p>

                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        )
                                    )
                                }

                            </div>

                            {/* PREV */}

                            <button
                                className=
                                "carousel-control-prev"

                                type="button"

                                data-bs-target=
                                "#carSlider"

                                data-bs-slide=
                                "prev"
                            >

                                <span
                                    className=
                                    "carousel-control-prev-icon"
                                ></span>

                            </button>

                            {/* NEXT */}

                            <button
                                className=
                                "carousel-control-next"

                                type="button"

                                data-bs-target=
                                "#carSlider"

                                data-bs-slide=
                                "next"
                            >

                                <span
                                    className=
                                    "carousel-control-next-icon"
                                ></span>

                            </button>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
};

export default LearnMore;