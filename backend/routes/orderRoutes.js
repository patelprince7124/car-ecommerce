const express =
  require("express");

const router =
  express.Router();

const Order =
  require("../models/Order");

/* GET ORDERS */

router.get(
  "/",
  async (req, res) => {

    try {

      const orders =
        await Order.find()

          .sort({
            createdAt: -1,
          });

      res.json(orders);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }

  }
);

/* ADD ORDER */

router.post(
  "/",
  async (req, res) => {

    try {

      const order =
        await Order.create({

          userName:
            req.body.userName,

          email:
            req.body.email,

          carName:
            req.body.carName,

          price:
            req.body.price,

        });

      res.json({

        message:
          "Order Placed",

        order,

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