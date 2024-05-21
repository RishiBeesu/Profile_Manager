const express = require("express");
const router = express.Router();
const {
  getAllProfiles,
  createProfile,
  getProfileByID,
  updateProfile,
  deleteProfile,
} = require("../controllers/profileControllers");

router.route("/").get(getAllProfiles);

router.route("/").post(createProfile);

router.route("/:id").get(getProfileByID);

router.route("/:id").put(updateProfile);

router.route("/:id").delete(deleteProfile);

module.exports = router;
