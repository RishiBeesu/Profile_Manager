//@desc Getting all profiles
//@route GET /api/profiles
//@access public
const getAllProfiles = (req, res) => {
  res.status(200).json({ message: "Get all profiles information" });
};

//@desc Creating a profile
//@route POST /api/profiles
//@access public
const createProfile = (req, res) => {
  res.status(200).json({ message: "Create new profile" });
};

//@desc Getting profile with specific id
//@route GET /api/profiles/:id
//@access public
const getProfileByID = (req, res) => {
  res
    .status(200)
    .json({ message: `Get profile information of id: ${req.params.id}` });
};

//@desc Update profile with id
//@route PUT /api/profiles/:id
//@access public
const updateProfile = (req, res) => {
  res
    .status(200)
    .json({ message: `Update profile information for id: ${req.params.id}` });
};

//@desc Delete profile with id
//@route DELETE /api/profile/:id
//@access public
const deleteProfile = (req, res) => {
  res.status(200).json({ message: `Delete profile with id: ${req.params.id}` });
};

module.exports = {
  getAllProfiles,
  createProfile,
  getProfileByID,
  updateProfile,
  deleteProfile,
};
