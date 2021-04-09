const Sequelize = require("sequelize");
const sequelize = new Sequelize ({
    dialect:"sqlite",
    storage: __dirname + "/database.sqlite"
});

const users = sequelize.define("users",{
    name: {
        type:Sequelize.STRING,
        allowNull:false
    },
    email: {
        type:Sequelize.STRING,
        unique:true,
        allowNull:false
    },
    password: {
        type:Sequelize.STRING,
        allowNull:false
    }
});

users
 .sync()
 .then(()=>{
     console.log("User table has been created")
 })
 .catch(error=>{
     console.log(error);
 });

 module.exports = {
     Users:users
 };