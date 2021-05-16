const multer = require('multer')

// Uploading Images through Multer
var  Storage = multer.diskStorage({
    destination:"../../client/images/User_profile",
    profile_pic:(req,file,callback) =>{
        callback(null,file.fieldname+"_"+Date.now()+this.path.extname(file.originalname));
    } 
});

var upload = multer({
    storage:Storage
}).single('profile_pic');

module.exports = {
   upload:upload
};