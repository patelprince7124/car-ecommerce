import { useState } from "react";

import emailjs
  from "@emailjs/browser";

import Navbar
  from "../components/Navbar";
import Footer
  from "../components/Footer";
import bgImage
  from "../assets/contact-bg.jpg";

const Contact = () => {

  const [name,
    setName] =
    useState("");

  const [email,
    setEmail] =
    useState("");

  const [message,
    setMessage] =
    useState("");

  const sendEmail =
    async (e) => {

      e.preventDefault();

      /* VALIDATION */

      if (
        !name ||
        !email ||
        !message
      ) {

        return alert(
          "All fields are required"
        );
      }

      const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (
        !emailRegex.test(email)
      ) {

        return alert(
          "Invalid Email"
        );
      }

      try {

        await emailjs.send(

          "service_o2b8dfa",

          "template_86o0i3w",

          {

            name: name,

            email: email,

            message: message,

          },

          "UNgsRZqSwMWXtPsK1"
        );
        alert(
          "Message Sent Successfully ✅"
        );

        setName("");

        setEmail("");

        setMessage("");

      } catch (error) {

        console.log(
          error.text
        );

        console.log(
          error
        );

        alert(
          "Failed To Send Message"
        );
      }
    };

  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "100vh",

          backgroundImage:
            `linear-gradient(
            rgba(0,0,0,0.85),
            rgba(0,0,0,0.85)
          ),
          url(${bgImage})`,

          backgroundSize: "cover",

          backgroundPosition: "center",

          padding: "80px 0",

          color: "white",
        }}
      >

        <div className="container">

          {/* TITLE */}

          <div className="text-center mb-5">

            <h1
              style={{
                fontSize: "70px",
                fontWeight: "900",
                letterSpacing: "3px",
              }}
            >
              CONTACT

              <span
                style={{
                  color: "#ff4d00",
                }}
              >
                {" "}US
              </span>
            </h1>

            <p
              style={{
                color: "#ccc",
                maxWidth: "700px",
                margin: "auto",
                lineHeight: "32px",
              }}
            >
              Contact LuxuryCars anytime for
              bookings, support, premium car
              information and luxury services.
            </p>

          </div>

          {/* CONTENT */}

          <div className="row align-items-center justify-content-center">

            {/* LEFT CARD */}

            <div className="col-md-4 mb-4">

              <div
                style={{
                  background: "#ff4d00",

                  padding: "40px",

                  borderRadius: "20px",

                  minHeight: "500px",

                  boxShadow:
                    "0 0 25px rgba(255,77,0,0.5)",
                }}
              >

                <h3
                  className="mb-4"
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Contact Info
                </h3>

                <p className="mb-4">
                  📍 Ahmedabad, India
                </p>

                <p className="mb-4">
                  📞 +91 9876543210
                </p>

                <p className="mb-4">
                  📧 princeptl4271@gmail.com
                </p>

                <p className="mb-4">
                  🕒 Mon - Sat : 10AM - 7PM
                </p>

              </div>

            </div>

            {/* RIGHT FORM */}

            <div className="col-md-6">

              <div
                style={{
                  background:
                    "rgba(0,0,0,0.65)",

                  backdropFilter:
                    "blur(10px)",

                  padding: "40px",

                  borderRadius: "20px",

                  border:
                    "1px solid rgba(255,255,255,0.1)",
                }}
              >

                <h2
                  className="mb-5"
                  style={{
                    color: "#ff4d00",
                    fontWeight: "bold",
                  }}
                >
                  Send A Message
                </h2>

                <form
                  onSubmit={
                    sendEmail
                  }
                >

                  <input
                    type="text"

                    placeholder=
                    "Your Name"

                    className=
                    "form-control mb-4"

                    value={name}

                    onChange={(e) =>
                      setName(
                        e.target.value
                      )
                    }

                    style={{
                      background: "#111",
                      color: "white",
                      border: "none",
                      padding: "15px",
                    }}
                  />

                  <input
                    type="email"

                    placeholder=
                    "Your Email"

                    className=
                    "form-control mb-4"

                    value={email}

                    onChange={(e) =>
                      setEmail(
                        e.target.value
                      )
                    }

                    style={{
                      background: "#111",
                      color: "white",
                      border: "none",
                      padding: "15px",
                    }}
                  />

                  <textarea
                    rows="6"

                    placeholder=
                    "Your Message"

                    className=
                    "form-control mb-4"

                    value={message}

                    onChange={(e) =>
                      setMessage(
                        e.target.value
                      )
                    }

                    style={{
                      background: "#111",
                      color: "white",
                      border: "none",
                      padding: "15px",
                    }}
                  ></textarea>

                  <button
                    type="submit"

                    className=
                    "btn"

                    style={{
                      background: "#ff4d00",

                      color: "white",

                      padding:
                        "15px 40px",

                      fontWeight:
                        "bold",

                      borderRadius:
                        "12px",
                    }}
                  >
                    SEND MESSAGE
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </div>
      <Footer />
    </>
  );
};

export default Contact;