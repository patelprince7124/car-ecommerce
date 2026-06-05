// const express = require("express");

// const router = express.Router();

// let bookings = [];

// /* GET */

// router.get("/", (req, res) => {

//   res.json(bookings);

// });

// /* POST */

// router.post("/", (req, res) => {

//   const booking = {

//     id: Date.now(),

//     ...req.body,
//   };

//   bookings.push(booking);

//   res.json({
//     message:
//       "Booking Added",
//   });
// });

// /* DELETE */

// router.delete("/:id", (req, res) => {

//   bookings = bookings.filter(
//     (item) =>
//       item.id != req.params.id
//   );

//   res.json({
//     message:
//       "Booking Deleted",
//   });
// });

// /* UPDATE */

// router.put("/:id", (req, res) => {

//   bookings = bookings.map(
//     (item) => {

//       if (
//         item.id ==
//         req.params.id
//       ) {

//         return {
//           ...item,

//           name:
//             req.body.name,
//         };
//       }

//       return item;
//     }
//   );

//   res.json({
//     message:
//       "Booking Updated",
//   });
// });

// module.exports = router;

const express =
  require("express");

const router =
  express.Router();

const Booking =
  require("../models/Booking");

/* GET ALL BOOKINGS */

router.get(
  "/",
  async (req, res) => {

    try {

      const bookings =
        await Booking.find()

          .sort({
            createdAt: -1,
          });

      res.json(bookings);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }

  }
);

/* ADD BOOKING */

router.post(
  "/",
  async (req, res) => {

    try {

      const booking =
        await Booking.create({

          name:
            req.body.name,

          email:
            req.body.email,

          carName:
            req.body.carName,

          price:
            req.body.price || 5000,

          status:
            "Pending",

        });

      res.json({

        message:
          "Booking Added",

        booking,

      });

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }

  }
);

/* DELETE BOOKING */

router.delete(
  "/:id",
  async (req, res) => {

    try {

      await Booking.findByIdAndDelete(
        req.params.id
      );

      res.json({
        message:
          "Booking Deleted",
      });

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }

  }
);

/* UPDATE BOOKING */

router.put(
  "/:id",
  async (req, res) => {

    try {

      const updatedBooking =
        await Booking.findByIdAndUpdate(

          req.params.id,

          req.body,

          {
            new: true,
          }

        );

      res.json({

        message:
          "Booking Updated",

        updatedBooking,

      });

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }

  }
);

module.exports =
  router;