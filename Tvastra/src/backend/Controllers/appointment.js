const appointment = (req,res) =>{
    const {doctorname} = req.body;
    let user = req.user;
    console.log(doctorname)
   res.render('bookappointment',{
       doctorname,
       user
   }) 
}

const appointmentbooked = (req,res) =>{

}

module.exports = {
    appointment:appointment,
    appointmentbooked:appointmentbooked
}