const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    brand: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    fuelType: {
      type: String,
      required: true,
    },

    transmission: {
      type: String,
      required: true,
    },

    year: {
      type: Number,
      required: true,
    },

    horsepower: {
      type: Number,
    },

    topSpeed: {
      type: Number,
    },

    description: {
      type: String,
    },

    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Car", carSchema);