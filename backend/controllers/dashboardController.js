const Car = require("../models/Car");
const User = require("../models/User");

const getDashboardStats =
async (req, res) => {

  try {

    const totalCars =
    await Car.countDocuments();

    const totalUsers =
    await User.countDocuments();

    res.json({

      totalCars,

      totalUsers,

      totalOrders: 85,

      revenue: 500000,

    });

  } catch (error) {

    res.status(500).json({

      message:
      error.message,

    });

  }
};

module.exports = {

  getDashboardStats,

};