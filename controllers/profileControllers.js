const asycHandler = require("express-async-handler");
//@desc Getting all profiles
//@route GET /api/profiles
//@access public
const getAllProfiles = asycHandler(async (req, res) => {
  res.status(200).json({ message: "Get all profiles information" });
});

//@desc Creating a profile
//@route POST /api/profiles
//@access public
const createProfile = asycHandler(async (req, res) => {
  console.log("request body is: ", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  res.status(200).json({ message: "Create new profile" });
});

//@desc Getting profile with specific id
//@route GET /api/profiles/:id
//@access public
const getProfileByID = asycHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Get profile information of id: ${req.params.id}` });
});

//@desc Update profile with id
//@route PUT /api/profiles/:id
//@access public
const updateProfile = asycHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Update profile information for id: ${req.params.id}` });
});

//@desc Delete profile with id
//@route DELETE /api/profile/:id
//@access public
const deleteProfile = asycHandler(async (req, res) => {
  res.status(200).json({ message: `Delete profile with id: ${req.params.id}` });
});

module.exports = {
  getAllProfiles,
  createProfile,
  getProfileByID,
  updateProfile,
  deleteProfile,
};
