const mongoose=require('mongoose')
var Message=mongoose.model('message',{
    sender: {type: String},
    receiver: {type: String},
    message: {type: String},
})
module.exports={Message}