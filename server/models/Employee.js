const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    firstName: {type:String, required: true},
    lastName: {type:String, required: true},
    position: {type: String, required: true},
    contact: {type: String, required: true},
    profileImage: {type: String} //cloudinary URL
},
{timestamps: true});

module.exports = mongoose.model("Employee",EmployeeSchema);