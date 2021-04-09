const dbcon = require("../Databases/sqlite")
const User = dbcon.Users;
const Sequelize = require("sequelize")

function signin(req,res) {
    const {email,password}= req.body;
    if(!(email&&password))
    return res.render("signin",{
        msg:"Please Enter all credentials"
    });
    else {
        User.findOne({
            where:Sequelize.and({
                email:email,
                password:password
            })
        })
        .then(users=>{
            console.log("User found");
            req.session.email = users.email;
            req.session.user_id=users.id;
            req.session.name = users.name;
            if(users) {
                return res.redirect("home");
            }
        })
    }
}