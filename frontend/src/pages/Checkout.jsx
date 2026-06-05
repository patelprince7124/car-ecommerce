import { useState }
from "react";

import {
  useLocation,
  useNavigate
} from "react-router-dom";

import API
from "../services/api";

const Checkout = () => {

  const location =
    useLocation();

  const navigate =
    useNavigate();

  const car =
    location.state;

  const [form,
    setForm] =
    useState({

      userName: "",
      email: "",

    });

  const handleChange =
    (e) => {

      setForm({

        ...form,

        [e.target.name]:
          e.target.value,

      });

    };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      if (
        !form.userName ||

        !form.email
      ) {

        alert(
          "Fill all fields"
        );

        return;
      }

      try {

        await API.post(
          "/orders",

          {

            userName:
              form.userName,

            email:
              form.email,

            carName:
              car.name,

            price:
              car.price,

          }
        );

        alert(
          "Payment Successful 🚀"
        );

        navigate(
          "/admin/dashboard"
        );

      } catch (error) {

        console.log(error);

      }

    };

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#0f0f0f",
        color: "white",
        padding: "50px",
      }}
    >

      <h1>
        Checkout
      </h1>

      <form
        onSubmit={
          handleSubmit
        }
        style={{
          maxWidth: "500px",
        }}
      >

        <input
          type="text"
          name="userName"
          placeholder="Name"
          className=
          "form-control mb-3"

          onChange={
            handleChange
          }
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className=
          "form-control mb-3"

          onChange={
            handleChange
          }
        />

        <h3>
          {car.name}
        </h3>

        <h2>
          ${car.price}
        </h2>

        <button
          className=
          "btn btn-warning"
        >
          Pay Now
        </button>

      </form>

    </div>
  );
};

export default Checkout;