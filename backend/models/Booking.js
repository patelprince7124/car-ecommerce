const mongoose =
  require("mongoose");

const bookingSchema =
  new mongoose.Schema(

    {

      name: {
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
        default: 5000,
      },

      status: {
        type: String,
        default: "Pending",
      },

    },

    {
      timestamps: true,
    }

  );

module.exports =
  mongoose.model(
    "Booking",
    bookingSchema
  );