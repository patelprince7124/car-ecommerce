const express =
  require("express");

const mongoose =
  require("mongoose");

const cors =
  require("cors");

const dotenv =
  require("dotenv");

dotenv.config();

const app = express();

/* MIDDLEWARE */

app.use(express.json());

app.use(cors());

app.use(
  "/uploads",
  express.static("uploads")
);

/* ROUTES */

const bookingRoutes =
  require("./routes/bookingRoutes");

const authRoutes =
  require("./routes/authRoutes");

const carRoutes =
  require("./routes/carRoutes");

const userRoutes =
  require("./routes/userRoutes");

const orderRoutes =
  require("./routes/orderRoutes");

/* USE ROUTES */

app.use(
  "/api/bookings",
  bookingRoutes
);

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/cars",
  carRoutes
);

app.use(
  "/api/users",
  userRoutes
);

app.use(
  "/api/orders",
  orderRoutes
);

app.use(
  "/api/dashboard",
  require(
    "./routes/dashboardRoutes"
  )
);

/* AUTH */

const {
  protect,
} = require(
  "./middleware/authMiddleware"
);

app.get(
  "/api/profile",
  protect,

  (req, res) => {

    res.json(req.user);

  }
);

/* HOME ROUTE */

app.get("/", (req, res) => {

  res.send(
    "Luxury Cars Backend Running 🚀"
  );

});

/* PORT */

const PORT =
  process.env.PORT || 5000;

/* MONGODB */

mongoose
  .connect(
    process.env.MONGO_URI
  )

  .then(() => {

    console.log(
      "MongoDB Connected ✅"
    );

    app.listen(PORT, () => {

      console.log(
        `Server Running On Port ${PORT} 🚀`
      );

    });

  })

  .catch((error) => {

    console.log(error);

  });