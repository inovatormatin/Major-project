const LocalStrategy = require("passport-local").Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Loading Databases Schema
const User = require('../Databases/Mongo');


module.exports = function (passport) {
    passport.use(
        new LocalStrategy({usernameField:'email'},(email,password,done)=>{
            // Match User
            User.findOne({email:email})
            .then(user=>{
                // If user not registered
                if(!user){
                    return done(null, false,{message:'Email not registered'});
                }
                // If User Found , match the password
                bcrypt.compare(password,user.password,(err, isMatch)=>{
                    if(err)
                    throw err;
                    if(isMatch){
                        return done(null,user);
                    }
                    else{
                        return done(null,false,{message:'Incorrect Password'});
                    }
                })
            })
            .catch(err=>console.log(err))
        })
    );

    passport.serializeUser((user,done)=>{
        done(null,user.id);
    })

    passport.deserializeUser((id,done)=>{
        User.findById(id,(err,user)=>{
            done(err,user);
        });
    });

}