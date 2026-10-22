const express =
  require("express");

const mongoose =
  require("mongoose");

const cors =
  require("cors");

const dotenv =
  require("dotenv");

const bcrypt =
  require("bcryptjs");

const User =
  require("./models/User");

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

const ensureDefaultAdmin = async () => {
  try {
    const adminEmail =
      process.env.ADMIN_EMAIL ||
      "admin@luxurycars.com";

    const adminPassword =
      process.env.ADMIN_PASSWORD ||
      "Admin@123";

    const existingAdmin =
      await User.findOne({
        email: adminEmail,
      });

    if (existingAdmin) {
      console.log(
        "Admin user already exists"
      );
      return;
    }

    const hashedPassword =
      await bcrypt.hash(
        adminPassword,
        10
      );

    await User.create({
      name: "Admin",
      email: adminEmail,
      password: hashedPassword,
      role: "admin",
    });

    console.log(
      `Default admin created: ${adminEmail}`
    );
  } catch (error) {
    console.log(
      "Admin seed error:",
      error
    );
  }
};

/* MONGODB */

mongoose
  .connect(
    process.env.MONGO_URI
  )

  .then(() => {

    console.log(
      "MongoDB Connected ✅"
    );

    ensureDefaultAdmin();

    app.listen(PORT, () => {

      console.log(
        `Server Running On Port ${PORT} 🚀`
      );

    });

  })

  .catch((error) => {

    console.log(error);

  });