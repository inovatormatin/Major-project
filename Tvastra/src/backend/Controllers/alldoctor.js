const doctor_check = (req,res) =>{
    const {doctorname} = req.body;
   res.render("doctor_details",{
       doctorname,
       user:req.user||'hello'
   }) 
}


module.exports = {
    doctor_check:doctor_check
}



