const asycHandler = require("express-async-handler");
const Profile = require("../models/profileModel");
//@desc Getting all profiles
//@route GET /api/profiles
//@access public
const getAllProfiles = asycHandler(async (req, res) => {
  const profiles = await Profile.find();
  res.status(200).json(profiles);
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
  const profile = await Profile.create({
    name,
    email,
    phone,
  });
  res.status(200).json(profile);
});

//@desc Getting profile with specific id
//@route GET /api/profiles/:id
//@access public
const getProfileByID = asycHandler(async (req, res) => {
  const profile = await Profile.findById(req.params.id);
  if (!profile) {
    res.status(404);
    throw new Error("Profile not found");
  }
  res.status(200).json(profile);
});

//@desc Update profile with id
//@route PUT /api/profiles/:id
//@access public
const updateProfile = asycHandler(async (req, res) => {
  const profile = await Profile.findById(req.params.id);
  if (!profile) {
    res.status(404);
    throw new Error("Profile not found");
  }
  const updatedProfile = await Profile.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedProfile);
});

//@desc Delete profile with id
//@route DELETE /api/profile/:id
//@access public
const deleteProfile = asycHandler(async (req, res) => {
  const profile = await Profile.findById(req.params.id);
  if (!profile) {
    res.status(404);
    throw new Error("Profile not found");
  }
  await Profile.findByIdAndDelete(req.params.id);
  res.status(200).json(profile);
});

module.exports = {
  getAllProfiles,
  createProfile,
  getProfileByID,
  updateProfile,
  deleteProfile,
};
