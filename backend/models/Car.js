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

    seats: {
      type: Number,
      required: true,
    },

    mileage: {
      type: Number,
      required: true,
    },

    color: {
      type: String,
      required: true,
    },

    topSpeed: {
      type: Number,
      required: true,
    },

    driveType: {
      type: String,
      required: true,
    },

    engine: {
      type: String,
      required: true,
    },

    vin: {
      type: String,
    },

    horsepower: {
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
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

carSchema.virtual("name").get(function () {
  return this.title;
});

module.exports = mongoose.model("Car", carSchema);