const express = require("express")
const maincontroller = require("../Controllers/MainController");
const LoginController = require("../Controllers/LoginController");
const ensureAuth = require('../config/auth');
const router = express.Router();

// get routes
router.route("/").get(maincontroller.home);
router.route("/Home").get(maincontroller.home)
router.route("/SignUp").get(maincontroller.signup);
router.route("/SignIn").get(maincontroller.signin);
router.route("/Doctors").get(maincontroller.doctors);
router.route("/Doctor_Details").get(maincontroller.doctor_details);
router.route("/Hospitals").get(maincontroller.hospitals);
router.route("/Hospital_Details").get(maincontroller.hospital_details);
router.route("/Treatment").get(maincontroller.treatment);
router.route("/Tvastra_Plus").get(maincontroller.tvastraplus);
router.route("/Contact_Us").get(maincontroller.contact);
router.route("/About_Us").get(maincontroller.aboutus);
router.route("/Book_Appointment").get(ensureAuth.ensureAuth,maincontroller.appointment);
router.route("/Submit_Query").get(maincontroller.submitquery);
router.route("/FAQs").get(maincontroller.faq);
router.route("/logout").get(LoginController.logout);
router.route("/Profile").get(ensureAuth.ensureAuth,maincontroller.profile);
router.route("/User_Apoointment").get(ensureAuth.ensureAuth,maincontroller.userappointment);
router.route("/Settings").get(ensureAuth.ensureAuth,maincontroller.setting);

// post routes
router.route("/SignIn").post(LoginController.signin);
router.route("/SignUp").post(LoginController.signup);

module.exports = router;