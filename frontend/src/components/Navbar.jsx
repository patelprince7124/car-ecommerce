import { Link } from "react-router-dom";

const Navbar = () => {

const user =
  JSON.parse(
    sessionStorage.getItem("user")
  );

  const logoutHandler =
    () => {

 sessionStorage.removeItem("token");
sessionStorage.removeItem("user");

      window.location.href =
        "/login";
    };

  return (

    <nav
      className=
      "navbar navbar-expand-lg navbar-dark"

      style={{
        background: "#0f0f0f",

        padding: "20px 0",

        borderBottom:
          "1px solid #222",
      }}
    >

      <div className="container">

        {/* LOGO */}

        <Link
          className=
          "navbar-brand fw-bold"

          to="/"

          style={{
            fontSize: "32px",
          }}
        >

          Luxury

          <span
            style={{
              color: "#ff4d00",
            }}
          >
            Cars
          </span>

        </Link>

        {/* TOGGLER */}

        <button
          className=
          "navbar-toggler"

          type="button"

          data-bs-toggle=
          "collapse"

          data-bs-target=
          "#navbarNav"
        >

          <span
            className=
            "navbar-toggler-icon"
          ></span>

        </button>

        {/* NAVBAR */}

        <div
          className=
          "collapse navbar-collapse"

          id="navbarNav"
        >

          <ul
            className=
            "navbar-nav ms-auto align-items-center"
          >

            {/* HOME */}

            <li
              className=
              "nav-item mx-3"
            >

              <Link
                className=
                "nav-link text-white"

                to="/"
              >
                Home
              </Link>

            </li>

            {/* CARS */}

            <li
              className=
              "nav-item mx-3"
            >

              <Link
                className=
                "nav-link text-white"

                to="/cars"
              >
                Cars
              </Link>

            </li>

            {/* BOOKINGS */}

            <li
              className=
              "nav-item mx-3"
            >

              <Link
                className=
                "nav-link text-white"

                to="/bookings"
              >
                Bookings
              </Link>

            </li>

            {/* CONTACT */}

            <li
              className=
              "nav-item mx-3"
            >

              <Link
                className=
                "nav-link text-white"

                to="/contact"
              >
                Contact
              </Link>

            </li>

            {/* ADMIN BUTTON */}

            {
              user?.role ===
              "admin" && (

                <li
                  className=
                  "nav-item mx-3"
                >

                  <Link
                    to=
                    "/admin/dashboard"

                    className=
                    "btn"

                    style={{
                      background:
                        "#ff4d00",

                      color: "white",

                      padding:
                        "10px 20px",

                      borderRadius:
                        "10px",

                      fontWeight:
                        "bold",
                    }}
                  >
                    Admin Panel
                  </Link>

                </li>

              )
            }

            {/* LOGIN */}

            {
              !user && (

                <li
                  className=
                  "nav-item mx-3"
                >

                  <Link
                    className=
                    "nav-link text-white"

                    to="/login"
                  >
                    Login
                  </Link>

                </li>

              )
            }

            {/* REGISTER */}

            {
              !user && (

                <li
                  className=
                  "nav-item mx-3"
                >

                  <Link
                    className=
                    "nav-link text-white"

                    to="/register"
                  >
                    Register
                  </Link>

                </li>

              )
            }

            {/* USER NAME */}

            {
              user && (

                <li
                  className=
                  "nav-item mx-3 text-white"
                >

                  👤 {user.name}

                </li>

              )
            }

            {/* LOGOUT */}

            {
              user && (

                <li
                  className=
                  "nav-item mx-3"
                >

                  <button
                    onClick={
                      logoutHandler
                    }

                    className=
                    "btn"

                    style={{
                      background:
                        "#ff4d00",

                      color: "white",

                      padding:
                        "10px 20px",

                      borderRadius:
                        "10px",

                      fontWeight:
                        "bold",
                    }}
                  >
                    Logout
                  </button>

                </li>

              )
            }

          </ul>

        </div>

      </div>

    </nav>

  );
};

export default Navbar;