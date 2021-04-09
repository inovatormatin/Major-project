const express = require("express");
const maincontroller = require("../Controllers/MainController");
const signincontroller = require("../Controllers/SigninController")
const signupcontroller = require("../Controllers/SignupContoller")
const router = express.Router();

// Main Get request calling.
router.route("/").get(maincontroller.home);
router.route("/signin").get(maincontroller.signin);
router.route("/signup").get(maincontroller.signup);

// Post Request calling 
router.route("/sigin").post(signincontroller.signin);
router.route("/signup").post(signupcontroller.signup);




module.exports=router;