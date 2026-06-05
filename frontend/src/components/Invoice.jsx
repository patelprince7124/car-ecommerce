import React from "react";

const Invoice = ({
  car,
  name,
  email,
  setShowInvoice,
}) => {

  const invoiceNo =
    Math.floor(
      100000 +
      Math.random() * 900000
    );

  const tax =
    car.price * 0.1;

  const total =
    car.price + tax;

  return (

    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        background:
          "rgba(0,0,0,0.8)",

        display: "flex",
        justifyContent:
          "center",

        alignItems:
          "center",

        zIndex: 9999,
        padding: "20px",
        overflowY: "auto",
      }}
    >

      {/* INVOICE BOX */}

      <div
        style={{
          width: "1000px",
          background: "#fff",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow:
            "0px 0px 40px rgba(0,0,0,0.4)",

          fontFamily:
            "sans-serif",
        }}
      >

        {/* HEADER */}

        <div
          style={{
            background:
              "linear-gradient(90deg,#111,#ff0000)",

            padding: "40px",

            color: "white",
          }}
        >

          <div
            className=
            "d-flex justify-content-between align-items-center"
          >

            <div>

              <h1
                style={{
                  fontSize: "50px",
                  fontWeight: "bold",
                }}
              >
                LuxuryCars
              </h1>

              <p
                style={{
                  marginTop: "10px",
                  opacity: 0.8,
                }}
              >
                Premium Car Invoice
              </p>

            </div>

            <img
              src={car.image}
              alt=""
              style={{
                width: "250px",
                objectFit:
                  "contain",
              }}
            />

          </div>

        </div>

        {/* BODY */}

        <div
          style={{
            padding: "40px",
          }}
        >

          {/* TOP DETAILS */}

          <div
            className=
            "d-flex justify-content-between mb-5"
          >

            {/* FROM */}

            <div>

              <h3
                style={{
                  color: "#ff0000",
                  fontWeight: "bold",
                }}
              >
                FROM:
              </h3>

              <h2
                style={{
                  marginTop: "10px",
                }}
              >
                LuxuryCars Showroom
              </h2>

              <p>
                Ahmedabad,
                Gujarat
              </p>

              <p>
                +91 9876543210
              </p>

            </div>

            {/* TO */}

            <div>

              <h3
                style={{
                  color: "#ff0000",
                  fontWeight: "bold",
                }}
              >
                TO:
              </h3>

              <h2
                style={{
                  marginTop: "10px",
                }}
              >
                {name}
              </h2>

              <p>
                {email}
              </p>

              <p>
                Invoice No:
                #{invoiceNo}
              </p>

              <p>
                Date:
                {
                  new Date()

                    .toLocaleDateString()
                }
              </p>

            </div>

          </div>

          {/* TABLE */}

          <table
            className=
            "table"
          >

            <thead>

              <tr
                style={{
                  background:
                    "#111",

                  color:
                    "white",
                }}
              >

                <th>
                  Car
                </th>

                <th>
                  Qty
                </th>

                <th>
                  Price
                </th>

                <th>
                  Total
                </th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td>
                  {car.name}
                </td>

                <td>
                  1
                </td>

                <td>
                  $
                  {car.price}
                </td>

                <td>
                  $
                  {car.price}
                </td>

              </tr>

            </tbody>

          </table>

          {/* TOTAL */}

          <div
            className=
            "d-flex justify-content-end mt-5"
          >

            <div
              style={{
                width: "300px",
              }}
            >

              <div
                className=
                "d-flex justify-content-between mb-3"
              >

                <h5>
                  Subtotal
                </h5>

                <h5>
                  $
                  {car.price}
                </h5>

              </div>

              <div
                className=
                "d-flex justify-content-between mb-3"
              >

                <h5>
                  Tax (10%)
                </h5>

                <h5>
                  $
                  {tax}
                </h5>

              </div>

              <hr />

              <div
                className=
                "d-flex justify-content-between"
              >

                <h3>
                  Total
                </h3>

                <h3
                  style={{
                    color:
                      "#ff0000",
                  }}
                >
                  $
                  {total}
                </h3>

              </div>

            </div>

          </div>

          {/* PAYMENT STATUS */}

          <div
            className=
            "mt-5 text-center"
          >

            <h2
              style={{
                color:
                  "green",

                fontWeight:
                  "bold",
              }}
            >
              Payment Successful ✅
            </h2>

            <p
              style={{
                color:
                  "gray",
              }}
            >
              Thank you for
              purchasing from
              LuxuryCars 🚀
            </p>

          </div>

          {/* BUTTONS */}

          <div
            className=
            "d-flex justify-content-center gap-3 mt-5"
          >

            {/* PRINT */}

            <button
              className=
              "btn btn-dark"

              onClick={() =>
                window.print()
              }
            >
              Print Invoice
            </button>

            {/* CLOSE */}

            <button
              className=
              "btn btn-danger"

              onClick={() =>
                setShowInvoice(
                  false
                )
              }
            >
              Close
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Invoice;