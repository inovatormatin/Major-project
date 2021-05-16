const User = require("../Databases/Mongo");
const passport = require("passport")

const appointment = (req,res) =>{
    const {doctorname} = req.body;
    let user = req.user;
   res.render('bookappointment',{
       doctorname,
       user
   }) 
}

const updateprofile = async (req,res) =>{
    const {name,email,mobile,city,gender,state,date,country,bloodgroup} = req.body;
    let user = req.user;
    try {
        await User.updateOne({email:email},
            {   name,
                mobile,
                city,
                gender,
                state,
                date,
                country,
                blood:bloodgroup
            })
            .then((result) => {
                if(result) {
                    res.redirect('Profile')
                }
            }).catch((err) => {
                res.redirect('Profile')
            });
    } catch (error) {
        res.json({message:error.message})
    } 
}


const appointmentbooked = async (req,res) =>{
    const {appointment_date,Appointment_Status,doctorname,Experience,Hospital,Speciality} = req.body;
    let user = req.user
    try {
        await User.findOneAndUpdate({email:user.email},{$addToSet:{
                appointments:
                {
                    appointment_date:appointment_date,
                    appointment_status:Appointment_Status,
                    appointment_doctor:doctorname
                }
            }     
        })
        .then(result=>{
            if(result){
                res.redirect('/')
                req.flash('Appointment Booked');
            }
        })
    } catch (error) {
        if(error) throw err;
    }
}

const cancel_appointment = (req,res) =>{
    const {doctor,appointment_id,appointment_date,appointment_status} = req.body;
    try {
        User.updateOne({"appointments._id":appointment_id},
        {
            $pull:{ "appointments":{'_id':appointment_id} }   
        })
        .then(users=>{
        if(users){
            console.log("Appointment Cancelled");
            res.render("index",{
                user:req.user||'hello',
                msg:"Appointment Cancelled",
            })
        }
        else console.log("Not working")
         })
        .catch(err=>{
        throw err;
    })
    } catch (error) {
        throw error
    }
}


module.exports = {
    appointment:appointment,
    updateprofile:updateprofile,
    appointmentbooked:appointmentbooked,
    cancel_appointment:cancel_appointment,
}