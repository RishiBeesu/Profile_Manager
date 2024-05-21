const express = require("express");
const router = express.Router();
const {
  getAllProfiles,
  createProfile,
  getProfileByID,
  updateProfile,
  deleteProfile,
} = require("../controllers/profileControllers");

router.route("/").get(getAllProfiles).post(createProfile);

router
  .route("/:id")
  .get(getProfileByID)
  .put(updateProfile)
  .delete(deleteProfile);

module.exports = router;
