function signin(req,res) {
    res.render("signin")
}
function signup (req,res) {
    res.render("signup")
}
function home (req,res) {
    res.render("index")
}
function doctors (req,res) {
    res.render("doctors")
}
function hospitals (req,res) {
    res.render("hospitals")
}
function hospital_details (req,res) {
    res.render("hospital_details")
}
function doctor_details (req,res) {
    res.render("doctor_details")
}
function treatment (req,res) {
    res.render("treatment")
}
function contact (req,res) {
    res.render("contactus")
}
function tvastraplus (req,res) {
    res.render("tvastraplus")
}
function submitquery (req,res) {
    res.render("submitquery")
}
function faq (req,res) {
    res.render("FAQs")
}
function appointment (req,res) {
    res.render("bookappointment")
}
function aboutus (req,res) {
    res.render("aboutus")
}
module.exports = {
    signin:signin,
    signup:signup,
    home:home,
    appointment:appointment,
    faq:faq,
    submitquery:submitquery,
    tvastraplus:tvastraplus,
    contact:contact,
    treatment:treatment,
    doctor_details:doctor_details,
    hospital_details:hospital_details,
    hospitals:hospitals,
    doctors:doctors,
    aboutus:aboutus,
}