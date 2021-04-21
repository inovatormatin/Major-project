const express = require("express");
const User = require("../Databases/Mongo");
const bcrypt = require("bcryptjs")
const passport = require("passport")
const session = require('express-session')

const signup = (req,res) =>{
    const { name,email,password,password2,gender,mobile,date} = req.body;
    const loweremail=email.toLowerCase();
    let errors = [];
    // Check Required Fields
    if(!name|| !loweremail|| !password|| !mobile|| !gender) {
        errors.push({msg:'Please fill in all fields'});
    }
    // Check Password length
    if(password.length < 6){
        errors.push({ msg:'Passwords should be atleast 6 characters'})
    }
    // check passwords match
    if(password!= password2) {
        errors.push({ msg:'Password do not match'})
    }
    if(errors.length>0){
        res.render('signup',{
            errors,
            name,
            email,
            password,
            mobile
        })
    }

    else{
        // Validation Passed 
        User.findOne({
            email:loweremail,
        })
        .then(user=>{
            if(user) {
                // User Exists
                errors.push({msg:'Email is already registered'})
                res.render('signup',{
                    errors,
                    name,
                    email,
                    password,
                    mobile
                });
            }
            else {
                const newUser = new User({
                    name,
                    email:loweremail,
                    password,
                    date,
                    gender,
                    mobile,
                });
                // Hashing Passwords
                bcrypt.genSalt(10,(err,salt)=>
                    bcrypt.hash(newUser.password,salt,(err,hash)=>{
                        if(err) throw err;
                        // Set password to hashed
                        newUser.password = hash;
                        // Save User in database
                        newUser.save()
                        .then(user =>{
                            req.flash('success_msg','You are now registered, Please login!!');
                            res.redirect('/signin.html')
                        })
                        .catch(err=> console.log(err))
                }))
            }
        })

    }
}

// Signin 
 const signin = (req,res,next) =>{
    passport.authenticate('local',{
        successRedirect:'/',
        failureRedirect:'/signin.html',
        failureFlash:true
    })(req,res,next);
 };

// LogOut

const logout = (req,res)=>{
    req.logout();
    req.flash('success_msg','You are logged out');
    res.redirect('/signin.html');
};



module.exports = {
    signin:signin,
    signup:signup,
    logout:logout,
}