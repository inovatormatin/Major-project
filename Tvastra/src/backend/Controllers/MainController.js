function signin(req,res) {
    res.render("Signin")
}
function signup (req,res) {
    res.render("signup")
}
function home (req,res) {
    res.render ("index.html")
}
module.exports = {
    signin:signin,
    signup:signup,
    home:home,
}