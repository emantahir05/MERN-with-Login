const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).json("Hi from Controllers");
  } catch (error) {
    res.status(400).json(`An error Occurs ${error}`);
    console.log(error);
  }
};
// register
const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "Email already Exist" });
    }

    // hash password

    const userCreated = await User.create({ username, email, phone, password });

    res.status(201).json({
      msg: "Registration Successfull",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(500).json(`An error Occurs ${error}`);
    console.log(error);
  }
};

// login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    // const user = await bcrypt.compare(password, userExist.password);
    const isPasswordMatch = await userExist.comparePassword(password);

    if (isPasswordMatch) {
      res
        .status(200)
        .json({
          message: "Log in Successfull",
          token: await userExist.generateToken(),
          userId: userExist._id.toString(),
        });
    } else {
      res.status(401).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    res.status(500).json(`An error occurs ${error}`);
  }
};

// get user data
const user = async(req,res) => {

  try {
    const userData  = req.user;
    console.log(userData);
    return res.status(200).json({  userData})
  } catch (error) {
    console.log(`error from the get route ${error}`);
  }

}


module.exports = { home, register, login, user };
