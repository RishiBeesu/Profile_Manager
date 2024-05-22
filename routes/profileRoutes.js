const express = require("express");
const router = express.Router();
const validateToken = require("../middleware/validateTokenHandler");
const {
  getAllProfiles,
  createProfile,
  getProfileByID,
  updateProfile,
  deleteProfile,
} = require("../controllers/profileControllers");

router.use(validateToken);

router.route("/").get(getAllProfiles).post(createProfile);

router
  .route("/:id")
  .get(getProfileByID)
  .put(updateProfile)
  .delete(deleteProfile);

module.exports = router;
