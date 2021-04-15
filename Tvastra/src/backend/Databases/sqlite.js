const Sequelize= require("sequelize"); 
const sequelize= new Sequelize({
    dialect: "sqlite",
    storage:  __dirname + "/database.sqlite"
});

const User = sequelize.define("user",{
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    email:{
        type:Sequelize.STRING,
        unique:true,
        allowNull:false,
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    mobile:{
        type:Sequelize.NUMBER,
        unique:true,
        allowNull:false,
    },
});

sequelize
.sync()
.then(()=>{
    conssole.log("User Table created");
})
.catch(error=>conssole.log(error));

module.exports = {
    User:User,
};