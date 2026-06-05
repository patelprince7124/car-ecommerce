import {
    useEffect,
    useState
} from "react";

import Navbar from
    "../components/Navbar";

const AdminBookings = () => {

    const [bookings,
        setBookings] =
        useState([]);

    const [search,
        setSearch] =
        useState("");

    /* GET BOOKINGS */

    useEffect(() => {

        const data =
            JSON.parse(

                localStorage.getItem(
                    "bookings"
                )

            ) || [];

        setBookings(data);

    }, []);

    /* DELETE BOOKING */

    const deleteBooking =
        (id) => {

            const updated =
                bookings.filter(

                    (item, index) =>

                        index !== id
                );

            setBookings(updated);

            localStorage.setItem(

                "bookings",

                JSON.stringify(
                    updated
                )
            );
        };

    /* APPROVE BOOKING */

    const approveBooking =
        (id) => {

            const updated =
                bookings.map(

                    (item, index) => {

                        if (
                            index === id
                        ) {

                            return {

                                ...item,

                                status:
                                    "Approved",
                            };
                        }

                        return item;
                    }
                );

            setBookings(updated);

            localStorage.setItem(

                "bookings",

                JSON.stringify(
                    updated
                )
            );
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

                    {/* TITLE */}

                    <h1
                        className=
                        "fw-bold mb-5"

                        style={{
                            fontSize: "60px",
                        }}
                    >
                        Manage

                        <span
                            style={{
                                color: "#ff4d00",
                            }}
                        >
                            {" "}Bookings
                        </span>

                    </h1>

                    {/* SEARCH */}

                    <input
                        type="text"

                        placeholder=
                        "Search Customer..."

                        className=
                        "form-control mb-4"

                        style={{
                            padding: "15px",
                            borderRadius: "12px",
                        }}

                        value={search}

                        onChange={(e) =>
                            setSearch(
                                e.target.value
                            )
                        }
                    />

                    {/* TABLE */}

                    {
                        bookings.length === 0 ? (

                            <h3
                                style={{
                                    color: "gray",
                                }}
                            >
                                No Bookings Found
                            </h3>

                        ) : (

                            <div className="table-responsive">

                                <table
                                    className=
                                    "table table-dark table-bordered"
                                >

                                    <thead>

                                        <tr>

                                            <th>
                                                No
                                            </th>

                                            <th>
                                                Customer
                                            </th>

                                            <th>
                                                Car
                                            </th>

                                            <th>
                                                Price
                                            </th>

                                            <th>
                                                Status
                                            </th>

                                            <th>
                                                Action
                                            </th>

                                        </tr>

                                    </thead>

                                    <tbody>

                                        {
                                            bookings

                                                .filter((item) =>

                                                    item.name
                                                        ?.toLowerCase()

                                                        .includes(
                                                            search.toLowerCase()
                                                        )
                                                )

                                                .map(

                                                    (
                                                        item,
                                                        index
                                                    ) => (

                                                        <tr
                                                            key={index}
                                                        >

                                                            <td>
                                                                {index + 1}
                                                            </td>

                                                            <td>
                                                                {item.name}
                                                            </td>

                                                            <td>
                                                                {item.carName}
                                                            </td>

                                                            <td>
                                                                {item.price}
                                                            </td>

                                                            {/* STATUS */}

                                                            <td>

                                                                <span
                                                                    className={
                                                                        item.status ===
                                                                            "Approved"

                                                                            ? "badge bg-success"

                                                                            : "badge bg-warning"
                                                                    }
                                                                >
                                                                    {
                                                                        item.status ||

                                                                        "Pending"
                                                                    }
                                                                </span>

                                                            </td>

                                                            {/* ACTION */}

                                                            <td>

                                                                <button
                                                                    className=
                                                                    "btn btn-success me-2"

                                                                    onClick={() =>
                                                                        approveBooking(
                                                                            index
                                                                        )
                                                                    }
                                                                >
                                                                    Approve
                                                                </button>

                                                                <button
                                                                    className=
                                                                    "btn btn-danger"

                                                                    onClick={() =>
                                                                        deleteBooking(
                                                                            index
                                                                        )
                                                                    }
                                                                >
                                                                    Delete
                                                                </button>

                                                            </td>

                                                        </tr>

                                                    )
                                                )
                                        }

                                    </tbody>

                                </table>

                            </div>

                        )
                    }

                </div>

            </div>

        </>
    );
};

export default
    AdminBookings;