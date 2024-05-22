const asycHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
//@desc Register new user
//@route GET /api/users/register
//@access public
const registerUser = asycHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const userPresent = await User.findOne({ email });
  if (userPresent) {
    res.status(400);
    throw new Error("User already present");
  }
  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  console.log(`User created: ${user}`);
  if (user) {
    res.status(201).json({ _id: user._id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User not created, data not valid");
  }
});

//@desc User login
//@route GET /api/users/login
//@access public
const userLogin = asycHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Please enter all required fields");
  }
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "5m" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("Invalid Credentials");
  }
});

//@desc current user info
//@route GET /api/users/current
//@access private
const currentUser = asycHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = { registerUser, userLogin, currentUser };
