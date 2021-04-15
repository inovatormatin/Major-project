const express = require("express")
const maincontroller = require("../Controllers/MainController");
const loginController = require("../Controllers/LoginController")
const router = express.Router();

// get routes
router.route("/").get(maincontroller.home);
router.route("/index.html").get(maincontroller.home)
router.route("/signup.html").get(maincontroller.signup);
router.route("/signin.html").get(maincontroller.signin);
router.route("/doctors.html").get(maincontroller.doctors);
router.route("/doctor_details.html").get(maincontroller.doctor_details);
router.route("/hospitals.html").get(maincontroller.hospitals);
router.route("/hospital_details.html").get(maincontroller.hospital_details);
router.route("/treatment.html").get(maincontroller.treatment);
router.route("/tvastraplus.html").get(maincontroller.tvastraplus);
router.route("/contact.html").get(maincontroller.contact);
router.route("/aboutus.html").get(maincontroller.aboutus);
router.route("/tvastraplus.html").get(maincontroller.tvastraplus);
router.route("/bookappointment.html").get(maincontroller.appointment);
router.route("/submitquery.html").get(maincontroller.submitquery);
router.route("/FAQs.html").get(maincontroller.faq);

// post routes
router.route("/signin").post()


module.exports = router;