const express = require("express")
const maincontroller = require("../Controllers/MainController");
const LoginController = require("../Controllers/LoginController");
const Appointment = require("../Controllers/appointment");
const alldoctor = require("../Controllers/alldoctor")
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
// Treatment Pages
router.route("/Dentistry").get(maincontroller.dentistry);
router.route("/Cancer").get(maincontroller.cancer);
router.route("/Liver").get(maincontroller.liver);
router.route("/Cardiology").get(maincontroller.cardiology);
router.route("/Heart").get(maincontroller.heart);
router.route("/Orthopedic").get(maincontroller.orthopedic);

router.route("/Tvastra_Plus").get(maincontroller.tvastraplus);
router.route("/Contact_Us").get(maincontroller.contact);
router.route("/About_Us").get(maincontroller.aboutus);
router.route("/Book_Appointment").get(ensureAuth.ensureAuth,maincontroller.appointment);
router.route("/Submit_Query").get(maincontroller.submitquery);
router.route("/FAQs").get(maincontroller.faq);
router.route("/logout").get(LoginController.logout);
router.route("/Profile").get(ensureAuth.ensureAuth,maincontroller.profile);
router.route("/User_Apoointment").get(maincontroller.userappointment);
router.route("/Settings").get(ensureAuth.ensureAuth,maincontroller.setting);

// post routes
router.route("/SignIn").post(LoginController.signin);
router.route("/SignUp").post(LoginController.signup);
router.route("/Book_Appointment").post(ensureAuth.ensureAuth,Appointment.appointment)
// Doctor info with button
router.route("/alldoctor").post(alldoctor.doctor_check)



module.exports = router;