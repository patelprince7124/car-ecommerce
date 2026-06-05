const express = require("express");

const {
  addCar,
  getCars,
  getSingleCar,
  updateCar,
  deleteCar,
} = require("../controllers/carController");

const {
  protect,
  admin,
} = require("../middleware/authMiddleware");

const router = express.Router();

/* GET ALL CARS */

router.get(
  "/",
  getCars
);

/* GET SINGLE CAR */

router.get(
  "/:id",
  getSingleCar
);

/* ADD CAR - ADMIN ONLY */

router.post(
  "/",
  protect,
  admin,
  addCar
);

/* UPDATE CAR - ADMIN ONLY */

router.put(
  "/:id",
  protect,
  admin,
  updateCar
);

/* DELETE CAR - ADMIN ONLY */

router.delete(
  "/:id",
  protect,
  admin,
  deleteCar
);

module.exports = router;