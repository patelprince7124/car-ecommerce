// const User = require("../models/User");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// // REGISTER USER
// const registerUser = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     const userExists = await User.findOne({ email });

//     if (userExists) {
//       return res.status(400).json({
//         message: "User already exists",
//       });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = await User.create({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     res.status(201).json({
//       message: "User registered successfully",
//       user,
//     });

//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };

// // LOGIN USER
// const loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({
//         message: "Invalid Email",
//       });
//     }

//     const isMatch = await bcrypt.compare(
//       password,
//       user.password
//     );

//     if (!isMatch) {
//       return res.status(400).json({
//         message: "Invalid Password",
//       });
//     }

//     const token = jwt.sign(
//       {
//         id: user._id,
//       },
//       process.env.JWT_SECRET,
//       {
//         expiresIn: "7d",
//       }
//     );

//     res.json({
//       message: "Login successful",
//       token,
//       user,
//     });

//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };

// module.exports = {
//   registerUser,
//   loginUser,
// };


//navo code 
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ================= REGISTER USER =================

const registerUser = async (req, res) => {

  try {

    console.log("REGISTER BODY:", req.body);

    const { name, email, password } = req.body;

    // CHECK ALL FIELDS

    if (!name || !email || !password) {

      return res.status(400).json({
        message: "Please fill all fields",
      });

    }

    // CHECK USER EXISTS

    const userExists = await User.findOne({
      email,
    });

    console.log("USER EXISTS:", userExists);

    if (userExists) {

      return res.status(400).json({
        message: "User already exists",
      });

    }

    // HASH PASSWORD

    const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    // CREATE USER

    const user = await User.create({

      name,
      email,
      password: hashedPassword,

    });

    // GENERATE TOKEN

    const token = jwt.sign(

      {
        id: user._id,
      },

      process.env.JWT_SECRET,

      {
        expiresIn: "7d",
      }

    );

    // SUCCESS RESPONSE

    res.status(201).json({

      message:
        "User registered successfully",

      token,

      user,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });

  }

};

// ================= LOGIN USER =================

const loginUser = async (req, res) => {

  try {

    console.log("LOGIN BODY:", req.body);

    const { email, password } = req.body;

    // CHECK EMAIL & PASSWORD

    if (!email || !password) {

      return res.status(400).json({
        message: "Please enter email and password",
      });

    }

    // FIND USER

    const user = await User.findOne({
      email,
    });

    console.log("FOUND USER:", user);

    // INVALID EMAIL

    if (!user) {

      return res.status(400).json({
        message: "Invalid Email",
      });

    }

    // CHECK PASSWORD

    const isMatch = await bcrypt.compare(

      password,

      user.password

    );

    console.log("PASSWORD MATCH:", isMatch);

    // INVALID PASSWORD

    if (!isMatch) {

      return res.status(400).json({
        message: "Invalid Password",
      });

    }

    // GENERATE TOKEN

    const token = jwt.sign(

      {
        id: user._id,
      },

      process.env.JWT_SECRET,

      {
        expiresIn: "7d",
      }

    );

    // SUCCESS RESPONSE

    res.status(200).json({

      message: "Login successful",

      token,

      user,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });

  }

};

module.exports = {

  registerUser,

  loginUser,

};