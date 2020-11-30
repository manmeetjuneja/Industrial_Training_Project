const mongoose=require('mongoose')
var Profile=mongoose.model('profile',{
    fullname: {type: String},
    email: {type: String},
    phone: {type: String},
    picture: {type: String},
    qualification: {type: String},
    specialization: {type: String},
    experience:{type:String},
    prodesc:{type:String}
})
module.exports={Profile}