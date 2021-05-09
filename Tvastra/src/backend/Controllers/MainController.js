function signin(req,res) {
    res.render("signin")
}
function signup (req,res) {
    res.render("signup")
}
function home (req,res) {
    res.render("index",{
        user:req.user||'hello'
    });
}
function doctors (req,res) {
    res.render("doctors",{
        user:req.user||'hello'
    })
}
function doctor_details (req,res) {
    res.render("doctor_details")
}
function hospitals (req,res) {
    res.render("hospitals",{
        user:req.user||'hello'
    })
}
function hospital_details (req,res) {
    res.render("hospital_details",{
        user:req.user||'hello'
    })
}

function contact (req,res) {
    res.render("contactus",{
        user:req.user||'hello'
    })
}
// Treatment Page Rendering 
function dentistry (req,res) {
    res.render("dentistry",{
        user:req.user||'hello'
    })
}
function cancer (req,res) {
    res.render("cancer",{
        user:req.user||'hello'
    })
}
function orthopedic (req,res) {
    res.render("orthopedic",{
        user:req.user||'hello'
    })
}
function cardiology (req,res) {
    res.render("cardiology",{
        user:req.user||'hello'
    })
}
function heart (req,res) {
    res.render("heart",{
        user:req.user||'hello'
    })
}
function liver (req,res) {
    res.render("liver",{
        user:req.user||'hello'
    })
}
// Tvastra Plus Page render
function tvastraplus (req,res) {
    res.render("tvastraplus",{
        user:req.user||'hello'
    })
}
function submitquery (req,res) {
    res.render("submitquery",{
        user:req.user||'hello'
    })
}
function faq (req,res) {
    res.render("FAQs",{
        user:req.user||'hello'
    })
}
function appointment (req,res) {
    res.render("bookappointment",{
        user:req.user||'hello'     
    })
}
function aboutus (req,res) {
    res.render("aboutus",{
        user:req.user||'hello'
    })
}
function profile (req,res) {
    res.render('profile',{
        user:req.user ||'hello'
    })
}
function userappointment (req,res) {
    res.render('userappointment',{
        user:req.user ||'hello'
    })
}
function setting (req,res) {
    res.render('setting',{
        user:req.user ||'hello'
    })
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
    dentistry:dentistry,
    cancer:cancer,
    orthopedic:orthopedic,
    liver:liver,
    cardiology:cardiology,
    heart:heart,
    doctor_details:doctor_details,
    hospital_details:hospital_details,
    hospitals:hospitals,
    doctors:doctors,
    aboutus:aboutus,
    profile:profile,
    userappointment:userappointment,
    setting:setting,
}