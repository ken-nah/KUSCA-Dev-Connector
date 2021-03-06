const express = require("express");
const { body } = require("express-validator/check");

const router = express.Router();

const isAuth = require("../../middlewares/is-auth");

//import profile route controller
const {
  getCurrentUserProfile,
  createOrUpdateUserProfile,
  getProfileByHandle,
  getProfileByUserId,
  getAllProfiles,
  addExperience,
  addUserEducation,
  deleteUserEducation,
  deleteUserExperience,
  deleteUserProfile
} = require("../../controllers/profile");

//@route GET api/profile
//@desc  Get current user profile
//@access private
router.get("/", isAuth, getCurrentUserProfile);

//@route POST api/profile
//@desc  Create or update user profile
//@access private
router.post(
  "/",
  [
    body("handle")
      .exists()
      .withMessage("Handle Field is required"),
    body("skills")
      .exists()
      .withMessage("Skills Field is required"),
    body("status")
      .exists()
      .withMessage("Status Field is required"),
    body("location")
      .exists()
      .withMessage("Where are you located")
  ],
  isAuth,
  createOrUpdateUserProfile
);

//@route GET api/profile/handle/:handle
//@desc  Get  user by handle
//@access public

router.get("/handle/:handle", getProfileByHandle);

//@route GET api/profile/user/:user_id
//@desc  Get  user by id
//@access public

router.get("/user/:user_id", getProfileByUserId);

//@route GET api/profile/all
//@desc  Get  all user profiles
//@access public

router.get("/all", getAllProfiles);

//@route POST api/profile/experience
//@desc  add user experience
//@access private

router.post(
  "/experience",
  [
    body("title")
      .exists()
      .withMessage("Title Field is required"),
    body("company")
      .exists()
      .withMessage("Company Field is required"),
    body("from")
      .exists()
      .withMessage("From Field is required")
  ],
  isAuth,
  addExperience
);

//@route POST api/profile/education
//@desc  add user education
//@access private
router.post(
  "/education",
  [
    body("school")
      .exists()
      .withMessage("School Field is required"),
    body("fieldOfStudy")
      .exists()
      .withMessage("Study Field is required"),
    body("degree")
      .exists()
      .withMessage("Degree Field is required"),
    body("from")
      .exists()
      .withMessage("From Field is required")
  ],
  isAuth,
  addUserEducation
);

//@route DELETE api/profile/education/education_id
//@desc  delete user education
//@access private

router.delete(
  "/education/:education_id",
  isAuth,
  deleteUserEducation
);

//@route DELETE api/profile/experience/experience_id
//@desc  delete user experience
//@access private

router.delete(
  "/experience/:experience_id",
  isAuth,
  deleteUserExperience
);

//@route DELETE api/profile/
//@desc  delete user profile and account
//@access private

router.delete(
  "/",
  isAuth,
  deleteUserProfile
);

module.exports = router;
