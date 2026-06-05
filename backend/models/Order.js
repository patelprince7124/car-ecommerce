const mongoose =
  require("mongoose");

const orderSchema =
  new mongoose.Schema(

    {

      userName: {
        type: String,
        required: true,
      },

      email: {
        type: String,
        required: true,
      },

      carName: {
        type: String,
        required: true,
      },

      price: {
        type: Number,
        required: true,
      },

      paymentStatus: {
        type: String,
        default: "Paid",
      },

      orderStatus: {
        type: String,
        default: "Processing",
      },

    },

    {
      timestamps: true,
    }

  );

module.exports =
  mongoose.model(
    "Order",
    orderSchema
  );